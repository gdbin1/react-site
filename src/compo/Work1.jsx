import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Work1 = () => {
    const [width, setWidth] = useState(window.innerWidth)
    // --------------------
    const[count,setCount] = useState(0)
    // ----------------------------
    const[second, setSecond]= useState(0)

    useEffect(() => {
        const WResize = () => setWidth(window.innerWidth)

        window.addEventListener("resize", WResize)

        return () => {
            window.removeEventListener("resize", WResize)
        }

    }
    )
    // ---------------
    useEffect(() => {
        const timer = setInterval(() => {
            setSecond(second + 1);
        }, 1000);

        return() => {
            clearInterval(timer)
        }
    }, [])
    const[color, setColor] = useState("navy")
    return (
        <div className='gaegu-korean'>
            <h1>8월12일 과제</h1>
            <h3>현재 창의 너비 표시: {width}</h3>
            <hr />
            <h3 style={{color}}>카운트 및 색상 {count}</h3>
            <button onClick={() => {setCount(count + 1); setColor("red");}} >1씩 증가(빨강)</button>
            <button onClick={() => {setCount(count -1); setColor("purple");}}>1씩 감소(보라)</button>
            <button onClick={() => {setCount(count * 2); setColor("yellow");}}>곱하기 2(노랑)</button>
            <button onClick={() => {setCount(count / 2); setColor("lightgreen");}}>나누기 2(초록)</button>
            <hr />
            <h3>{second} 초 경과 </h3>
            <p>setInterval과 clearInterval은 셋트로 사용, 초를 계속 세고싶으면 []를 지우기</p>
        </div>
    );
};

export default Work1; <h1>8월12일 과제</h1>