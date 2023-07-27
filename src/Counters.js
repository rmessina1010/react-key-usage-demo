import { useState } from "react";
import useLocalStorageState from "./useLocalStorageState";

export default function Counter({name, min=0, max=500}){
    // const [count,setCount] = useLocalStorageState (`count[${name}]`,0);
    const [count,setCount] =  useState(0)
    return(
        <div className="counter">
            <h3>I am {name}</h3>
            <div>
                <button onClick={()=>setCount((c)=> c>min ? c-1 : c)}>-</button>
                {count}
                <button onClick={()=>setCount((c)=>c<max ? c+1 : c)}>+</button>
            </div>
        </div>
    )
}