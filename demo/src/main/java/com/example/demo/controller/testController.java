package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class testController {
   @GetMapping("/marco")
    String testFunc(){
       return "Marco sucks";
   }
   
}
