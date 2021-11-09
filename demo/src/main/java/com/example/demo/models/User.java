package com.example.demo.models;

import java.util.Objects;

import javax.persistence.criteria.Order;


public class User {
    private String name;
    private String userName;
    private int id;
    private Roles role; 
    
    User(){

    }
    User(String name, String userName, int id, Roles role){
        this.name = name;
        this.userName = userName;
        this.id = id;
        this.role = role;
    }
    //Function which get
    public String getName() {
        return this.name;
    }
    public String getUserName(){
        return this.userName;
    }
    public int getId(){
        return this.id;
    }
    public Roles getRole(){
        return this.role;
    }

    //Function which set
    public void setName(String name) {
        this.name = name;
    }
    public void setId(int id){
        this.id = id;
    }
    public void setRole(Roles role){
        this.role = role;
    }
    public String toString(){ 
        StringBuilder sb = new StringBuilder();
        sb.append("Name: " + name + "/n")
            .append("Username: " + userName + "/n")
            .append("ID: " + id + "/n")
            .append("Role: " + role + "/n");
        return sb.toString();
            
    }


    @Override
    public int hashCode(){
        return Objects.hash(this.id);
    }
    @Override
    public boolean equals(Object o){
        if (this == o){
            return true;
        }
        if(!(o instanceof User)){
            return false;
        }
        User order = (User) o;
        return Objects.equals(this.id, order.id) && Objects.equals(this.userName, order.userName);
        
        
    }
}
