package com.example.demo.models;

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
    
    public String setName(String name) {
        this.name = name;
    }
    public int setId(int id){
        this.id = id;
    }
    public Roles setRole(Role role){
        this.role = role;
    }


}
