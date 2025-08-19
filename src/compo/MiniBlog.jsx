import styled from 'styled-components'
import { Outlet } from 'react-router-dom';


const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;`;


function Miniblog(props) {
    return (
        <>
            <MainTitleText>소플의 미니 블로그</MainTitleText>
            <Outlet />
        </>
    )
}
export default Miniblog

