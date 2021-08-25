import css from "styled-jsx/css";
import React, {Component} from 'react';
import Link from 'next/link'
import Image from 'next/image';



export default class JoinCompleted extends Component {
    render() {
        return (
            <div className="joinBox">
                <div style={{
                    marginTop:"30px",
                    marginBottom:"47px"
            }}>가입완료</div>
                <div className="emailText">인증 메일을 보내드렸어요!</div>
                <div className="emailText" style={{marginBottom: "40px"}}>계정이용을 위해 인증을 완료해주세요:)</div>
                <div className="emailText" style={{marginBottom: "14px"}}>이메일 인증 바로가기</div>
                <div className="imageBox">
                    <Image src="/images/joinPageImages/naver_icon.png" width="50" height="50" />
                    <Image src="/images/joinPageImages/399b9686017800001.png" width="50" height="50" />
                    <Image src="/images/joinPageImages/Group 7.png" width="50" height="50" />
                </div>
                <button><div>&lt; 돌아가기</div></button>
                
                <style jsx>{style}</style>
            </div>
        )
    }
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
    height: 404px;
    margin-top: 20px;
    font-family: 'GodoB';
 }
 .emailText {
    font-family: 'IBMPlexSansKR-Regular';
    font-size: 14px;
 }
 .imageBox {
     width: 170px;
     display: flex;
     flex-direction: row;
     justify-content: space-around;
     margin-bottom: 47px;
 }
button {
    background-color: #FFFFFF;
    border-radius: 20px;
    border: solid 1px #EDEDED;
    box-shadow: 0px 3px 10px 3px #0000000D;
    width: 303px;
    height: 60px;
    font-family: 'GodoB';
    font-size: 20px;
    margin_bottom: 30px;
}
`