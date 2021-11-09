package com.example.demo.controller;
import java.util.List;  
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.models.User;
import com.example.demo.dao.userDao; 
@RestController

public class usersController {

    @Autowired
    userDao userService;

    @RequestMapping("/user")
        List<User>  getAllUsers(){
            return userService.getAllUsers();
        }       
    @RequestMapping("/user/{id}")
    User getUserById(@PathVariable int id){
        return userService.getUser(id);
    }
}
