package com.example.demo.models;

import java.util.Objects;

import javax.persistence.criteria.Order;

public class item {
    private String name;
    private String serialNum;
    private itemType type;
    private String model;
    private String maker;
    private String description; 
    private int ownerid;
    private int id;


    item(){

    }
    item(String name, String serialNum, itemType type, String model, String maker, String description, int ownerid, int id ){
        this.name = name;
        this.serialNum = serialNum;
        this.type = type;
        this.model = model;
        this.maker = maker;
        this.description = description;
        this.ownerid = ownerid;
        this.id = id;
        
    }
    //Function which get
    public String getName(){
        return this.name;
    }
    public String getSerialNum(){
        return this.serialNum;
    }
    public itemType getType(){
        return this.type;
    }
    public String getModel(){
        return this.model;
    }
    public String getMaker(){
        return this.maker;
    }
    public String getDescription(){
        return this.description;
    }
    public int getOwnerId(){
        return this.ownerid;
    }
    public int getId(){
        return this.id;
    }
    //Function which change


    public void setName(String nam){
        this.name = nam;
    }
    public void setId(int id){
        this.id = id;
    }
    public void setSerialNum(String serialNum){
        this.serialNum = serialNum;
    }
    public void setType(itemType type){
        this.type = type;
    }
    public void setModel (String model){
        this.model = model;
    }
    public void setMaker (String maker){
        this.maker = maker;
    }
    public void setDescription(String desc){
        this.description = desc;
    }
    public void setOwnerId(int id){
        this.ownerid = id;
    }
    //To string
    public String toString(){ 
        StringBuilder sb = new StringBuilder();
        sb.append("Name: " + name + "/n")
            .append("SN: " + serialNum + "/n")
            .append("Type: " + type + "/n")
            .append("Model: " + model + "/n")
            .append("Maker: " + maker + "/n")
            .append("Description: " + description + "/n")
            .append("Owner: " + ownerid + "/n")
            .append("ID: " + id + "/n");
        return sb.toString();
            
    }

    @Override
    public int hashCode(){
        return Objects.hash(this.id, this.serialNum, this.description  );
    }
    @Override
    public boolean equals(Object o){
        if (this == o){
            return true;
        }
        if(!(o instanceof item)){
            return false;
        }
        item order = (item) o;
        return Objects.equals(this.id, order.id) && Objects.equals(this.serialNum, order.serialNum);
        
        
    }
}
