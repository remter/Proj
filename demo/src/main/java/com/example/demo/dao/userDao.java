package com.example.demo.dao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.dao.DataIntegrityViolationException;
import com.example.demo.insert.UserInput;
import org.springframework.http.converter.HttpMessageNotReadableException;
import java.lang.NullPointerException;
import com.example.demo.models.User;
import java.util.List;  
import com.example.demo.error.ApiErrors;


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
        try {
            return jdbcTemp.queryForObject(sql, new BeanPropertyRowMapper<>(User.class), id );
        } catch (EmptyResultDataAccessException e) {
            //TODO: handle exception
            throw new ApiErrors ("No user found at id: " + id);
        }
    }
    public void addUser(UserInput newUser){
        
        try {
            String sql = "Insert INTO users (name,username,role)" + "Values(?,?,?)";
            jdbcTemp.update(sql, new Object[]{newUser.getName(), newUser.getUserName(), newUser.getRole().toString() } );
    } catch (DataIntegrityViolationException e){
        throw new ApiErrors ("User: "+ newUser.getName() + " cannot be added" );

    } catch (NullPointerException e){
        throw new ApiErrors ("No role Assigned" );
    }
    }
    public void deleteUser (int id){
        String sql = "DELETE FROM users WHERE id = ?";
        var a = jdbcTemp.update(sql, id );
        if(a == 0){
            throw new ApiErrors ("No user found at id:" + id);
        }
    }
}
