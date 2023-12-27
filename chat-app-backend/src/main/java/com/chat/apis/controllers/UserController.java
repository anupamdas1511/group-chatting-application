package com.chat.apis.controllers;

import com.chat.apis.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.user.SimpUser;
import org.springframework.messaging.simp.user.SimpUserRegistry;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Set;

@RestController
public class UserController {
    @Autowired
    private SimpUserRegistry simpUserRegistry;

    @PostMapping("/user")
    public ResponseEntity<User> addUser(User user) {
        return ResponseEntity.ok(user);
    }

    @GetMapping("/all-users")
    public ResponseEntity<List<String>> getAllUsers() {
        List<String> listOfUsers = simpUserRegistry.getUsers().stream().map(SimpUser::getName).toList();
        System.out.println(listOfUsers);
        return ResponseEntity.ok(listOfUsers);
    }
}
