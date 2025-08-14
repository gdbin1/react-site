import React, { useCallback, useEffect, useState } from 'react';

const Work3 = () => {
    const [count, setCount] = useState(0)
    const scallback = useCallback(() => {
        setCount((prev) => prev + 1)
    }, [])
    // ---
    const [message, setMessage] = useState("")
    const [count1, setCount1] = useState(0)
    const keypress = useCallback((e) => {
        if (e.key === "ArrowUp") {
            setMessage("위쪽 키 눌렀죠!?")
        }
        else if (e.key === "ArrowDown") {
            setMessage("아래쪽 키 눌렀죠!?")
        }
        else if (e.key === "ArrowLeft") {
            setMessage("왼쪽 키 눌렀죠!?")
        }
        else if (e.key === "ArrowRight") {
            setMessage("오른쪽 키 눌렀죠!?")
        }
        if (e.key === "ArrowUp") {
            setCount1((prev) => prev + 1)
        }
        else if (e.key === "ArrowDown") {
            setCount1((prev) => prev - 1)
        }
        else if (e.key === "ArrowLeft") {
            setCount1((prev) => prev * 2)
        }
        else if (e.key === "ArrowRight") {
            setCount1((prev) => prev / 2)
        }
    }, [])

    useEffect(() => {
        window.addEventListener("keydown", keypress)
        return () => {
            window.removeEventListener("keydown", keypress)
            console.log
        }
    }, [keypress])
    return (
        <>
            <p className='gaegu-korean'>react 훅 usecallback = 함수를 기억하는 훅(memo)와 비슷</p>
            <p className='gaegu-korean'>카운트 :{count}</p>
            <button onClick={scallback}>+1 증가</button>
            <hr />
            <div className='conanstyle'>
                <p className='gaegu-korean'>방향키 <span style={{color:'white'}}>누른거 다</span> 맞춥니다</p>
                <p className='gaegu-korean'>정답은: {message}</p>
            </div>
            <hr />
            <p className='gaegu-korean'>위쪽 방향키 눌러서 1증가</p>
            <p className='gaegu-korean'>아래쪽 방향키 눌러서 1감소</p>
            <p className='gaegu-korean'>왼쪽 방향키는 *2</p>
            <p className='gaegu-korean'>오른쪽은 / 2</p>
            <p className='gaegu-korean'>결과: {count1}</p>

        </>
    );
};

export default Work3;