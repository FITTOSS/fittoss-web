import React from 'react';
import css from "styled-jsx/css";
import Logo from "../../components/common/Logo";
import MyPageInput1 from '../../components/MyPageInput/MyPageInput1';


export default function MyPage() {
    return (
        <form className='container'>
            <Logo/>
            <div className="inputBox">
                <div style={{marginTop:"30px",
            marginBottom:"30px"}}>내 정보</div>
                <MyPageInput1/>
            </div>
            <style jsx>{style}</style>
        </form>     
    )
}

const style = css`
.container {
    margin-top:30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.inputBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 10px #00000029;
    border-radius: 10px;
    opacity: 1;
    width: 325px;
    height: 495px;
    margin-top: 20px;
    font-family: 'GodoB';
}
 
 font-size: 20px;
`