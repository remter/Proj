package com.example.demo.dao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.example.demo.models.User;
import java.util.List;  

@Service
public class userDao {

    @Autowired
    private JdbcTemplate jdbcTemp;
    public List<User> getAllUsers(){
        String sql = "SELECT * FROM users";
        return jdbcTemp.query(sql, new BeanPropertyRowMapper<>(User.class));
    }
    public User getUser(int id){
        String sql = "SELECT * FROM users WHERE id = ?";

        return jdbcTemp.queryForObject(sql, new BeanPropertyRowMapper<>(User.class), id );
    }
}
