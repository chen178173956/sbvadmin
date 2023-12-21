package com.sbvadmin.convert;


import cn.hutool.core.bean.BeanUtil;
import com.sbvadmin.model.User;
import com.sbvadmin.model.vo.UserVO;

public class SystemConvert {
    public static UserVO userConvert(User user) {
        if (user == null) {
            return null;
        }
        UserVO vo = new UserVO();
        BeanUtil.copyProperties(user, vo);
        vo.setUserId(user.getId());
        vo.setUsername(user.getNickname());
        vo.setRealName(user.getNickname());
        return vo;
    }
}
