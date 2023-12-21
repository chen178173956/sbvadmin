package com.sbvadmin.model.vo;

import lombok.Data;

import java.util.List;


@Data
public class UserVO {
    private Long userId;

    private String username;

    private String realName;

    private String avatar;

    private String desc;

    private String password;

    private String token;

    private String homePath;

    private List<UserRoleVO> roles;
}
