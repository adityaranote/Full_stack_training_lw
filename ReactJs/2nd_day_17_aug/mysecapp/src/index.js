// import "./Index.css";

import React from "react";
//  import myname, { lw, myvimal } from "./my.js"; 
import   ReactDOM  from 'react-dom';

import * as myf from './my.js';

console.log(myf)

// var React = require("react")
// var ReactDOM = require("react-dom")

let fname = "vimal";
let lname = "daga";

let myDate = new Date(); 
let year = myDate.getFullYear();

let myImage = "https://picsum.photos/200"; 

// let mys = {
//     color: 'pink'
// }

function Myheader(){
    return "<div><h1>this is LW , welcome by {fname} {lname }</h1><h2>this is lw </h2></div>"
     
}

// myheader()

 ReactDOM.render(

<Myheader ></Myheader>
,   

document.getElementById("root")

)