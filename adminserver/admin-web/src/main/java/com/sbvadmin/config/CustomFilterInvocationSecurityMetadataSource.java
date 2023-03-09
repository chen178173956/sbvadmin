package com.sbvadmin.config;

import com.sbvadmin.model.Permission;
import com.sbvadmin.model.Role;
import com.sbvadmin.service.impl.PermissionServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.ConfigAttribute;
import org.springframework.security.access.SecurityConfig;
import org.springframework.security.web.FilterInvocation;
import org.springframework.security.web.access.intercept.FilterInvocationSecurityMetadataSource;
import org.springframework.stereotype.Component;
import org.springframework.util.AntPathMatcher;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * Notes:
 * Author: 涛声依旧 likeboat@163.com
 * Time: 2022/6/16 10:44
 */
@Component
public class CustomFilterInvocationSecurityMetadataSource implements FilterInvocationSecurityMetadataSource {
    AntPathMatcher antPathMatcher = new AntPathMatcher();
    @Autowired
    PermissionServiceImpl permissionService;

    @Override
    public Collection<ConfigAttribute> getAttributes(Object object) throws IllegalArgumentException {
        FilterInvocation filterInvocation = (FilterInvocation) object;
        String requestUrl =filterInvocation.getRequestUrl(); // 请求url
        if (requestUrl.indexOf("?") != -1){
            requestUrl =requestUrl.substring(0, requestUrl.indexOf("?")); // 去除问号及其后面的内容
        }
        System.out.println(requestUrl);
        boolean test = requestUrl.equals("/api/configs/getConfigBySymbol");
        System.out.println(test);
        // 过滤掉一些所有人都需要的权限点
        if (requestUrl.equals("/api/getUserInfo")
                || requestUrl.equals("/api/getMenuList")
                || requestUrl.equals("/api/getPermCode")
                || requestUrl.equals("/api/configs/getConfigBySymbol")) {
            return SecurityConfig.createList("ROLE_LOGIN");
        }
        String method = filterInvocation.getHttpRequest().getMethod(); // 请求的方法
        List<Permission> allPermission = permissionService.getAllPermissions();
        List<String> roleArr = new ArrayList<String>();
        for (Permission permission : allPermission) {
            if(antPathMatcher.match(permission.getRequestUrl(),requestUrl)){ // 先判断URL路径是否符合
                if ("ANY".equals(permission.getRequestMethod())
                        || method.equals(permission.getRequestMethod())){  // 再判断方法是否符合
                    List<Role> roles = permission.getRoles();
                    for (int i = 0; i < roles.size(); i++) {
                        roleArr.add(roles.get(i).getName());
                    }
                }
            }
        }
        if (roleArr.size() > 0){ // 找到匹配的角色
            String[] roleNames = new String[roleArr.size()];
            roleArr.toArray(roleNames);
            return SecurityConfig.createList(roleNames);
        }
        return SecurityConfig.createList("ROLE_LOGIN");
    }

    @Override
    public Collection<ConfigAttribute> getAllConfigAttributes() {
        return null;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return FilterInvocation.class.isAssignableFrom(clazz);
    }
}