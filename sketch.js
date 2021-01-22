
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
lightning1 = loadImage("1.png");
lightning2 = loadImage("2.png");
lightning3 = loadImage("3.png");
lightning4 = loadImage("4.png");
walk1 = loadImage("walking_1.png");
walk2 = loadImage("walking_1.png");
walk3 = loadImage("walking_3.png");
walk4= loadImage("walking_4.png");
walk5 = loadImage("walking_5.png");
walk6 = loadImage("walking_6.png");
walk7 = loadImage("walking_7.png");
walk8 = loadImage("walking_8.png");
}

function setup(){
canvas=createCanvas(400,700)
boy1 = new boy(350,50,20,50);
    
}

function draw(){
    boy1.display;
}   

