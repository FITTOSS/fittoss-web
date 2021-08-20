import React from 'react';
import css from "styled-jsx/css";
import JoinInput from '../../components/Join/joinInput';
import JoinCompleted from '../../components/Join/joinCompleted';
import Logo from "../../components/common/Logo";

export default function Join() {
    return (
        <form className='container'>
            <Logo/>
            <div className="joinBox">
                <div style={{marginBottom: '30px'}}>회원가입</div>
                <div className='inputDiv'>
                    <JoinInput/>
                </div>
                
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
.inputDiv {
    height: 321px;
}
.joinBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 10px #00000029;
    border-radius: 10px;
    opacity: 1;
    width: 325px;
    max-width: 90%;
    height: 404px;
    margin-top: 20px;
    font-family: 'GodoB';
 }
 
 font-size: 20px;
`