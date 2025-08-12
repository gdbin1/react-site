import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Work1 = () => {
    const [width, setWidth] = useState(window.innerWidth)
    // --------------------
    const[count,setCount] = useState(0)

    useEffect(() => {
        const WResize = () => setWidth(window.innerWidth)

        window.addEventListener("resize", WResize)

        return () => {
            window.removeEventListener("resize", WResize)
        }

    }
    )
    // ---------------
    return (
        <div className='gaegu-korean'>
            <h1>8월12일 과제</h1>
            <h3>현재 창의 너비 표시: {width}</h3>
            <hr />
            <h3>카운트 {count}</h3>
            <button onClick={() => setCount(count + 1)} >1씩 증가</button>
            <button onClick={() => setCount(count -1)}>1씩 감소</button>
            <button onClick={() => setCount(count * 2)}>곱하기 2</button>
            <button onClick={() => setCount(count / 2)}>나누기 2</button>
        </div>
    );
};

export default Work1; <h1>8월12일 과제</h1>