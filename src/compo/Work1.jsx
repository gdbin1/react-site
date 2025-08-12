import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Work1 = () => {
    const[width,setWidth] = useState(window.innerWidth)

    useEffect(() =>{
        const WResize = () => setWidth(window.innerWidth)

        window.addEventListener("resize", WResize)
        
        return() => {
            window.removeEventListener("resize", WResize)
        }

    }
    )
    return (
        <div>
           <h1>8월12일 과제</h1>
           <h3>현재 창의 너비: {width}</h3> 
        </div>
    );
};

export default Work1;<h1>8월12일 과제</h1>