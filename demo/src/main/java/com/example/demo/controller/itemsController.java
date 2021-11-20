package com.example.demo.controller;
import java.util.List;

import org.hibernate.cache.spi.support.AbstractReadWriteAccess.Item;
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
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.*;
import com.example.demo.error.ApiErrors;
import com.example.demo.models.item;
import com.example.demo.dao.ItemDao;
import com.example.demo.insert.ItemInput; 
@RestController


@CrossOrigin(origins = {"http://localhost:3000", "http://192.168.1.210:3000"})


public class itemsController {

    @Autowired
    ItemDao itemService;
    @RequestMapping("/item")
        List<item>  getAllItems(){
            return itemService.getAllitems();
        }       
    @RequestMapping("/item/{id}")
    ResponseEntity <?> getItemById(@PathVariable int id){
        try{
            item itm = itemService.getItem(id);
            return new ResponseEntity <item> (itm, HttpStatus.OK);
            }
            catch(ApiErrors e){
                return  ResponseEntity.status( HttpStatus.BAD_REQUEST).body(e.getMessage());
            }
    }

    @RequestMapping("/item/sn/{SN}")
    ResponseEntity <?>  getItemById(@PathVariable String SN){
        try{
            item itm = itemService.getItemBySn(SN);
            return new ResponseEntity <item> (itm, HttpStatus.OK);
            }
            catch(ApiErrors e){
                return  ResponseEntity.status( HttpStatus.BAD_REQUEST).body(e.getMessage());
            }
    }


    @PostMapping("/item")
    ResponseEntity <?> addNewItem(@RequestBody ItemInput nItem) {
        try{itemService.addItem(nItem);
        return ResponseEntity.ok().build();
        }
        catch(ApiErrors e){
            return  ResponseEntity.status( HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
    @DeleteMapping("/item/{id}")
    ResponseEntity <?> deleteItem(@PathVariable int id){
        try{
            itemService.deleteItem(id);
            return ResponseEntity.ok().build();
        }
        catch(ApiErrors e){
            return ResponseEntity.status( HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @PutMapping("/item/{id}")
    ResponseEntity <?> updateItem(@RequestBody ItemInput nItem, @PathVariable int id) {
        try{
            itemService.updateItem(id, nItem);
        return ResponseEntity.ok().build();
        }
        catch(ApiErrors e){
            return  ResponseEntity.status( HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
}
