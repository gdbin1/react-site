import React, { Children, createContext, useState } from 'react';
import { Public_1 } from '../js/public_1';
import { zustand } from '../js/zustand';
// context 생성
const GlabalContext = createContext()

const Work4 = () => {
    const [count, setCount] = useState()
    // 글로벌 커스텀 훅
    // const [count1, setCount1] = useState(0)

    const click = () => {
        Public_1.increment()
        setCount(Public_1.count)
    }
    const{count2, increment2, decrement2, double2, slush2, reset2} = zustand()
    return (
        <>
            <p>전역변수 이용 카운트:{count}</p>
            <p>전역변수</p>
            <button onClick={click}>++1증가</button>
            {/* 글로벌 커스텀 훅 */}
            {/* const {count1, setCount1} = useGlabal(0)
                return (
                    <>
                        <p>커스텀훅 글로벌 이용 카운트:{count1}</p>
                        <button onClick={() => setCount1(count1 + 1)}>
                            1증가
                        </button> */}
            {/* <GlabalContext.Provider value={{ count1, setCount1 }}>
                {Children}
            </GlabalContext.Provider> */}
            <p>zustand 이용 카운트:{count2}</p>
            <button onClick={increment2}>1증가</button><br />
            <button onClick={decrement2}>1감소</button><br />
            <button onClick={double2}>곱하기 2</button><br />
            <button onClick={slush2}>나누기2</button><br />
            <button onClick={reset2}>리셋</button>

        </>
    );
};

export default Work4;