package com.example.demo.dao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.example.demo.models.item;
import java.util.List;  

@Service
public class ItemDao {

    @Autowired
    private JdbcTemplate jdbcTemp;
    public List<item> getAllitems(){
        String sql = "SELECT * FROM inventory";
        return jdbcTemp.query(sql, new BeanPropertyRowMapper<>(item.class));
    }
    public item getItem(int id){
        String sql = "SELECT * FROM inventory WHERE id = ?";

        return jdbcTemp.queryForObject(sql, new BeanPropertyRowMapper<>(item.class), id );
    }
}
