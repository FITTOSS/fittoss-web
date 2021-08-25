import css from "styled-jsx/css";
import React, {useState} from 'react';
import {useSelector} from "react-redux";



export default function JoinInput(props) {
    const role = useSelector((state) => state.role);
    const [Email, setEmail] = useState();
    const [ConfirmEmail, setConfirmEmail] = useState();
    const [Password, setPassword] = useState();
    const [ConfirmPassword, setConfirmPassword] = useState();

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }
    const onConfirmEmailHandler = (event) => {
        setConfirmEmail(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(Password !== ConfirmPassword) {
            return alert('비밀번호가 같지 않습니다.')
        }
        if(Email !== ConfirmEmail) {
            return alert('이메일이 같지 않습니다.')
        }
    }


    return (
        <div className="joinBox">
            <span style={{
                marginTop:"30px",
                marginBottom: '20px'}}>회원가입</span>
            <form className="inputDiv">
                <div>
                    <div className="joinText">이메일</div>
                    <input type="email" value={Email} onChange={onEmailHandler} className="joinInput"></input>
                </div>

                <div>
                    <div className="joinText">이메일 확인</div>
                    <input type="email" value={ConfirmEmail} onChange={onConfirmEmailHandler} className="joinInput"></input>
                </div>
                                    
                <div>
                    <div className="joinText">비밀번호</div>
                    <input type="password" value={Password} onChange={onPasswordHandler} className="joinInput"></input>
                </div>

                <div>
                    <div className="joinText">비밀번호 확인</div>
                    <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} className="joinInput"></input>
                </div>

                <button onSubmit={onSubmitHandler} className="joinButton">
                    <div>가입하기 &gt;</div>
                </button>
            </form>
            <style jsx>{style}</style>
        </div>
    )
}


const style = css`
.joinBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 10px #00000029;
    border-radius: 10px;
    opacity: 1;
    width: 325px;
    height: 580px;
    margin-top: 20px;
    font-family: 'GodoB';
 }
.inputDiv {
    height: 507px;
    display: flex;
    flex-direction: column;
    align-items: center;

}
.joinText {
    font-family: 'IBMPlexSansKR-Regular';
    font-size: 14px;
    margin-bottom: 10px;
    height: 20px;
  }
.joinInput {
    border: solid 1px #EDEDED;
    outline: none;
    border-radius: 20px;
    background-color: #0000000B;
    width: 303px;
    height: 60px;
    font-size: 18px;
    box-shadow: 0px -1px 10px 1px #0000000B;
    margin-bottom: 10px;
}
.joinButton {
    display:flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 10px #0000000D;
    border: 1px solid #EDEDED;
    border-radius: 20px;
    opacity: 1;
    width: 303px;
    height: 60px;
    font-family: 'GodoB';
    margin-top: 23px;
    margin-bottom: 20px;
    font-size: 20px;
}
  
`