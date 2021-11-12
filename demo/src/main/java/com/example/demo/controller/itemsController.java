package com.example.demo.controller;
import java.util.List;  
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.models.item;
import com.example.demo.dao.ItemDao; 
@RestController

public class itemsController {

    @Autowired
    ItemDao itemService;

    @RequestMapping("/item")
        List<item>  getAllItems(){
            return itemService.getAllitems();
        }       
    @RequestMapping("/item/{id}")
    item getItemById(@PathVariable int id){
        return itemService.getItem(id);
    }
}
