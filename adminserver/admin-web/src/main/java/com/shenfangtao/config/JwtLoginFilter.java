package com.shenfangtao.config;

import com.alibaba.druid.support.json.JSONUtils;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.shenfangtao.mapper.UserMapper;
import com.shenfangtao.model.Log;
import com.shenfangtao.model.ResultFormat;
import com.shenfangtao.model.User;
import com.shenfangtao.service.impl.LogServiceImpl;
import com.shenfangtao.utils.IpUtil;
import com.shenfangtao.utils.SbvLog;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.Method;
import java.math.BigInteger;
import java.time.LocalDateTime;
import java.util.*;

/**
 * Notes:
 * Author: 涛声依旧 likeboat@163.com
 * Time: 2022/7/20 20:28
 */
public class JwtLoginFilter extends AbstractAuthenticationProcessingFilter {

    @Autowired
    UserMapper userMapper;

    @Autowired
    LogServiceImpl logService;

    @Value("${application.version}")
    private String version;

    protected JwtLoginFilter(String defaultFilterProcessesUrl, AuthenticationManager authenticationManager) {
        super(new AntPathRequestMatcher(defaultFilterProcessesUrl));
        setAuthenticationManager(authenticationManager);
    }
    @Override
    public Authentication attemptAuthentication(HttpServletRequest req, HttpServletResponse resp) throws AuthenticationException, IOException, ServletException, IOException {
        User user = null;
        try {
            user = new ObjectMapper().readValue(req.getInputStream(), User.class);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return getAuthenticationManager().authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
    }
    @Override
    protected void successfulAuthentication(HttpServletRequest req, HttpServletResponse resp, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        Collection<? extends GrantedAuthority> authorities = authResult.getAuthorities();
        StringBuffer as = new StringBuffer();
        for (GrantedAuthority authority : authorities) {
            as.append(authority.getAuthority())
                    .append(",");
        }

        User user = (User) authResult.getPrincipal();
        Date expired = new Date(System.currentTimeMillis() + 100 * 60 * 1000);
        Map<String, Object> map = new HashMap<>();
        map.put("authorities", as);
        map.put("uid",user.getId());
        String jwt = Jwts.builder()
                .setClaims(map)//配置用户角色
                .setSubject(authResult.getName())
                .setExpiration(new Date(System.currentTimeMillis() + 100 * 60 * 1000))
                .signWith(SignatureAlgorithm.HS512,"sang@123")
                .compact();
        resp.setContentType("application/json;charset=utf-8");
        PrintWriter out = resp.getWriter();
        Map<String, Object> tokenMap = new HashMap<>();  // map自定义输出结构
        tokenMap.put("token", jwt);
        tokenMap.put("expired", expired);
        tokenMap.put("roles",authorities);
        tokenMap.put("username", authResult.getName());
        tokenMap.put("name", user.getNickname()); // 获得登录用户的其他信息
        out.write(new ObjectMapper().writeValueAsString(ResultFormat.success(tokenMap)));
        out.flush();
        out.close();

        //更新登录信息
        user.setLastLoginAt(LocalDateTime.now());
        // 获取RequestAttributes
        RequestAttributes requestAttributes = RequestContextHolder.getRequestAttributes();
        // 从获取RequestAttributes中获取HttpServletRequest的信息
        HttpServletRequest request = (HttpServletRequest) requestAttributes.resolveReference(RequestAttributes.REFERENCE_REQUEST);
        user.setLastLoginIp(IpUtil.getIpRequest(request));
        userMapper.updateById(user);

        // 加入登录日志
//        Log log = Log.builder().build();
        Log log = new Log();
        log.setDescription("用户成功登录");
        // 请求信息
        log.setMethod("JwtLoginFilter");
        log.setReqParam("");
        log.setUri(request.getRequestURI());
        log.setIp(IpUtil.getIpRequest(request));
        // 用户信息
        log.setUid(user.getId());
        log.setUsername(authResult.getName());
        // 时间信息
        log.setCreatedAt(LocalDateTime.now());
        log.setUpdatedAt(LocalDateTime.now());
        log.setVersion(version);
        log.setTakeUpTime(0);
        log.setLevel(Log.ACTION_LEVEL);
        logService.save(log);
    }
    protected void unsuccessfulAuthentication(HttpServletRequest req, HttpServletResponse resp, AuthenticationException failed) throws IOException, ServletException {
        resp.setContentType("application/json;charset=utf-8");
        PrintWriter out = resp.getWriter();
        out.write("登录失败!");
        out.flush();
        out.close();
    }
}

