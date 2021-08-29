import React from 'react';
import Image from 'next/image';
import css from 'styled-jsx/css';
import axios from 'axios';
import Router from "next/router";

const StartWithKakao = (props) => {
    const onClickKakaoStart = () => {
        axios.get('http://localhost:4000/api/kakao/start').then((response) => {
            if(response.data.success){
                const user = response.data.data;
                alert(user.email + ' 로그인에 성공하였습니다');
            } else{
                alert('로그인에 실패하였습니다');
            }
        })
    }

    return (
        <div className='kakaoLogin' onClick={onClickKakaoStart}>
            <Image src="/images/kakaotalk.png"
                   width={40} height={40} />
            <div className='kakaoTalkText'>카카오톡으로 시작하기</div>
            <style jsx>{style}</style>
        </div>
    );
}

const style = css`
  .kakaoLogin{
    cursor: pointer;
    border: none;
    background: #FAE100;
    border-radius: 5px;
    width: 303px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    box-shadow: 0px 3px 6px #00000029;
  } 
  .kakaoTalkText{
    font: normal normal normal 18px/20px GodoB;
    color: #3C1E1E;
    font-size: 18px;
  }
`;

export default StartWithKakao;