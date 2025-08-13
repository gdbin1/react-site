import React, { useEffect, useMemo, useState } from 'react';

function heavyCalculation(num) {
    let total = 0;
    for (let i = 0; i < 1e7; i++) {
        total = total + num
    }
    return total
}

const users = [
    { id: 1, name: "짱구", active: true },
    { id: 2, name: "맹구", active: true },
    { id: 3, name: "유리", active: true },
    { id: 4, name: "철수", active: true },
    { id: 5, name: "훈이", active: true },
    { id: 6, name: "치타", active: false },
    { id: 7, name: "채성아선생님", active: true },
    { id: 8, name: "나미리선생님", active: false },
    { id: 9, name: "두목님", active: false }
]

const Work2 = () => {
    // 얘는 창 높이
    const [height, setHeight] = useState(window.innerHeight)
    // 얘는 예약자 확인
    const [showActive, setShowActive] = useState(true)
    // 얘는 카운트 교재
    const [count, setCount] = useState(0);
    // 얘는 테마 변경
    const [num, setNum] = useState(1)
    const [theme, setTheme] = useState(false)

    const total = useMemo(() => {
        heavyCalculation(num)
    }, [num])

    useEffect(() => {
        const HResize = () => setHeight(window.innerHeight)
        window.addEventListener("resize", HResize)
        return () => {
            window.removeEventListener("resize", HResize)
        }
    }, []);

    const filterusers = useMemo(() => {
        return users.filter((user) => user.active === showActive)
    }, [showActive])

    useEffect(() => {
        document.body.style.background = theme ? "linear-gradient(to right, #ffffff 0%, #ccffff 100%)" :  "linear-gradient(to right, #ffffff 0%, #ffccff 100%)";;
        document.body.style.color = theme ? "#000000ff" : "#d6701c";
    }, [theme])


    return (
        <div className='gaegu-korean'>
            <h3>현재 창의 높이:{height}</h3> <hr />
            <h2>교재 useState</h2>
            <p>총 {count}번 클릭함</p>
            <button onClick={() => setCount(count + 1)}>클릭</button>
            <hr />


            <h3>예약자 확인</h3>
            <button onClick={() => setShowActive((a) => !a)}>
                {showActive ? "예약한 취소한" : "예약한"} 사람 하려면 클릭
            </button>
            <ul>
                {filterusers.map
                    ((u) => (
                        <li key={u.id}> {u.name}</li>))}
            </ul>

            {/* <h3>테마 변경</h3>

            <input type="number"
                value={num}
                onChange={(e) => setNum(Number(e.target.value))} />
            <p>결과 {total}</p> */}
            <button onClick={() => setTheme((t) => !t)}>
                테마 변경</button>
        </div>
    );
}

export default Work2;