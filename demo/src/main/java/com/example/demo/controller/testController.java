package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;



@CrossOrigin(origins = {"http://localhost:3000", "http://192.168.1.210:3000"})

@RestController
public class testController {
   @GetMapping("/marco")
    String testFunc(){
       return "Marco sucks";
   }
   
}
