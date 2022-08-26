import React from "react";
import ReactDOM from "react-dom";

import { MyDocker } from "./components/card";

import mydata from "./db.js";

function createCard(data){
 return (
    <MyDocker  
    status={data.status}
    terminal={data.terminal}
    logoimage={data.logoimage}
    />
 )
}

ReactDOM.render( 
<div>

    <h1>Container Manager</h1>
    {mydata.map(createCard)}
    {/* <MyDocker  
    status={mydata[0].status}
    terminal={mydata[0].terminal}
    logoimage= {mydata[0].logoimage}

    />,
    <MyDocker  
   status={mydata[1].status}
   terminal={mydata[1].terminal}
   logoimage= {mydata[1].logoimage}
     />,
     <MyDocker  
   status={mydata[2].status}
   terminal={mydata[2].terminal}
   logoimage= {mydata[2].logoimage}
     />,
     */}
   
    </div>,

document.getElementById('root')
)