package com.shenfangtao.controller;

import com.shenfangtao.model.User;
import com.shenfangtao.service.UserService;
import com.shenfangtao.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.math.BigInteger;
import java.util.List;

/**
 * Notes:
 * Author: 涛声依旧 likeboat@163.com
 * Time: 2022/7/13 11:22
 */
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    UserServiceImpl userService;

    @GetMapping("")
    public List<User> getUsers(){
        return userService.list();
    }

    @PostMapping("")
    public boolean addUser(@RequestBody User user){
        return userService.save(user);
    }

    @PutMapping("/{id}")
    public boolean editUser(@RequestBody User user, @PathVariable BigInteger id) {
        user.setId(id);
        return userService.updateById(user);
    }
    @DeleteMapping("/{id}")
    public boolean delUser(@PathVariable BigInteger id) {
        return userService.removeById(id);
    }
}
