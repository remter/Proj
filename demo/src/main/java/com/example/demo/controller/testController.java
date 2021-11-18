package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
public class testController {
   @GetMapping("/marco")
    String testFunc(){
       return "Marco sucks";
   }
   
}
