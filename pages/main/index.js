import React from 'react';
import css from "styled-jsx/css";
import Logo from "../../components/common/Logo";
import Image from "next/image";

export default function main() {
    return(
        <div className='container'>
            <div className='header-container'>
                <Image src="/icons/fi-rr-menu-burger.svg" width={30} height={30} />
                <Logo />
                <Image src="/icons/fi-rr-portrait.svg" width={30} height={30} />
            </div>
            <div className="board">
                <div className="title">선생님과 함께하는 운동로그</div>
            </div>
            <style jsx>{style}</style>
        </div>

    );
}

const style = css`
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .header-container {
    display: flex;
    width: 680px;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  .board{
    width: 680px;
    height: 334px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 10px #00000029;
    border-radius: 10px;
  }
  .title{
    text-align: center;
    font: normal normal normal 14px/16px GodoB;
    margin: 20px auto;
  }
  // 모바일
  @media all and (max-width:479px){
    ;
  }
`;