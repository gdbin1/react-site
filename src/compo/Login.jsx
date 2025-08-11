import { useState } from "react"
function Login() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2>로그인 페이지 LOGIN</h2>
            {/* 로그인 폼 컴포넌트 추가 */}



            <h3>useState 이용 숫자 카운터</h3>
            <h2>카운터: {count}</h2>
            {/* setCount(count + 1 ) >>> count = count + 1 */}
            <button onClick={() => setCount(count + 1)}>1씩 ++ 증가</button>
            <button onClick={() => setCount(count - 1)}>1씩 -- 감소</button>
        </div>
    )
}
export default Login