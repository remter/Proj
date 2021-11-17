package com.example.demo.controller;
import java.util.List;  
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.models.User;
import com.example.demo.dao.userDao;
import com.example.demo.insert.UserInput; 
import java.io.*;
import com.example.demo.error.ApiErrors;
@RestController

public class usersController {

    @Autowired
    userDao userService;

    @RequestMapping("/user")
    List<User>  getAllUsers(){
        return userService.getAllUsers();
    }       
    @RequestMapping("/user/{id}")
    ResponseEntity <?> getUserById(@PathVariable int id){
        
        try{
        User usr = userService.getUser(id);
        return new ResponseEntity <User> (usr, HttpStatus.OK);
        }
        catch(ApiErrors e){
            return  ResponseEntity.status( HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
        
    }
    @RequestMapping("/user/un/{UN}")
    ResponseEntity <?> getUserByUN(@PathVariable String UN){
        
        try{
        User usr = userService.getUserByUn(UN);
        return new ResponseEntity <User> (usr, HttpStatus.OK);
        }
        catch(ApiErrors e){
            return  ResponseEntity.status( HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
        
    }
    @PostMapping("/user")
    ResponseEntity <?> addNewUser(@RequestBody UserInput nUser) {
        try{userService.addUser(nUser);
        return ResponseEntity.ok().build();
        }
        catch(ApiErrors e){
            return  ResponseEntity.status( HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
    
    @DeleteMapping("/user/{id}")
    ResponseEntity <?> deleteUser(@PathVariable int id){
        try{
            userService.deleteUser(id);
            return ResponseEntity.ok().build();
        }
        catch(ApiErrors e){
            return ResponseEntity.status( HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @PutMapping("/user/{id}")
    ResponseEntity <?> addNewUser(@RequestBody UserInput nUser, @PathVariable int id) {
        try{
            userService.updateUser(id, nUser);
        return ResponseEntity.ok().build();
        }
        catch(ApiErrors e){
            return  ResponseEntity.status( HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
}
