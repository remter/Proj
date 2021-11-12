package com.example.demo.insert;
import  com.example.demo.models.Roles;


public class UserInput {
    private String name;
    private String userName;
    private Roles role; 
    
    UserInput(){

    }
    UserInput(String name, String userName, Roles role){
        this.name = name;
        this.userName = userName;
        this.role = role;
    }
    //Function which get
    public String getName() {
        return this.name;
    }
    public String getUserName(){
        return this.userName;
    }

    public Roles getRole(){
        return this.role;
    }

    //Function which set
    public void setName(String name) {
        this.name = name;
    }
    public void setRole(Roles role){
        this.role = role;
    }
    public void setUserName(String userName){
        this.userName = userName;
    }
    public String toString(){ 
        StringBuilder sb = new StringBuilder();
        sb.append("Name: " + name + "/n")
            .append("Username: " + userName + "/n")
            .append("Role: " + role + "/n");
        return sb.toString();
            
    }    
}
