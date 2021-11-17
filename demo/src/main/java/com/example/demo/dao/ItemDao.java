package com.example.demo.dao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import com.example.demo.error.ApiErrors;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.converter.HttpMessageNotReadableException;
import java.lang.NullPointerException;
import com.example.demo.insert.ItemInput;
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
        try{
        return jdbcTemp.queryForObject(sql, new BeanPropertyRowMapper<>(item.class), id );
        }
        catch (EmptyResultDataAccessException e){ 
            throw new ApiErrors ("No Item found at id: " + id);
        }
    }


    public item getItemBySn(String SN){
        String sql = "SELECT * FROM inventory WHERE serialNum = ?";
        try{
        return jdbcTemp.queryForObject(sql, new BeanPropertyRowMapper<>(item.class), SN );
        }
        catch (EmptyResultDataAccessException e){ 
            throw new ApiErrors ("No item found with serial number: " + SN);
        }
    }

    public void addItem (ItemInput newItem){
        try {
            String sql = "Insert INTO inventory (name,serialNum,type,model,maker,description,ownerId) " + "Values(?,?,?,?,?,?,?)";
            jdbcTemp.update(sql, new Object[]{newItem.getName(), newItem.getSerialNum(), newItem.getType().toString(), newItem.getModel(), newItem.getMaker(), newItem.getDescription(), newItem.getOwnerId() } );

        } catch (DataIntegrityViolationException e){
            throw new ApiErrors ("Item: "+ newItem.getName() + " cannot be added" );
    
        } catch (NullPointerException e){
            throw new ApiErrors ("Some values are not assigned" );
        }
        }
    public void deleteItem (int id){
        String sql = "DELETE FROM inventory WHERE id = ?";
        var a = jdbcTemp.update(sql, id );
        if(a == 0){
            throw new ApiErrors ("No item found at id:" + id);
        }
    }
    public void updateItem (int id, ItemInput a){
        String sql = "UPDATE inventory SET name = ?, serialNum = ?, type = ?, model = ?, maker = ?, description = ?, ownerid = ? where id = ?";
        
        try {
            var u =jdbcTemp.update(sql, a.getName(), a.getSerialNum(), a.getType().toString(), a.getModel(), a.getMaker(), a.getDescription(), a.getOwnerId(), id);
            if(u == 0){
                throw new ApiErrors("Id not found/updated");
            }
        }catch (NullPointerException e){
            throw new ApiErrors ("Some values are not assigned" );
        }catch (DataIntegrityViolationException e){
            throw new ApiErrors ("Please check inputs" );
        }
    }




}
