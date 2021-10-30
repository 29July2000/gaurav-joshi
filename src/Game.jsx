import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import './index.css';

const Game=()=>{
    const state=useState();
    const[count,setCount]=useState(0);

    // CURRENT DATA,UPDATE DATA = INETIAL VALUE
    const IncNum=()=>{
        setCount(count+1);

    }
    const DecNum=()=>{
        setCount(count-1); 

    }
    return(
        <div className="Container">
            <center>
                <h1>{count}</h1>
            <button onClick={IncNum}>increase</button>
            <button onClick={DecNum}>decrease</button>
            </center>
            </div>
            

    )
}
export default Game;

