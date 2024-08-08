package com.LOL.LOL.controllers;

import com.LOL.LOL.models.Usuario;
import com.LOL.LOL.utils.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public Usuario register(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        return userService.registerUser(email);
    }
}