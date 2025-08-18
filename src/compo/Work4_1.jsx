import React from 'react';
import Work4, {useGlabal} from './Work4.jsx'
const Work4_1 = () => {

    const {count1, setCount1} = useGlabal(0)
    return (
        <>
            <p>커스텀훅 글로벌 이용 카운트:{count1}</p>
            <button onClick={() => setCount1(count1 + 1)}>
                1증가
            </button>
        </>
    );
};

export default Work4_1;