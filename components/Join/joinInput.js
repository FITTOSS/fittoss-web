import { useRouter } from 'next/router';
import css from "styled-jsx/css";
import React, {Component} from 'react';

class JoinInput extends Component {
    render() {
        return (
            <div className="inputDiv">
                <div>
                    <div className="joinText">이메일</div>
                    <input className="joinInput"></input>
                </div>
                    
                
                <div>
                    <div className="joinText">비밀번호</div>
                    <input className="joinInput"></input>
                </div>
                <button className="joinButton">
                    <div>가입하기 &gt;</div>
                </button>
                <style jsx>{style}</style>
            </div>
        )
    }
}

export default JoinInput;

const style = css`

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
    background-color: #FFFFFF;
    border-radius: 20px;
    border: solid 1px #EDEDED;
    box-shadow: 0px 3px 10px 3px #0000000D;
    width: 303px;
    height: 60px;
    font-family: 'GodoB';
    margin-top: 30px;
    font-size: 20px;
  }
  
`