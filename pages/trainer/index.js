import React from 'react';
import css from "styled-jsx/css";
import Header from "../../components/Main/Header";

export default function TrainerMain() {
    return(
        <div className='container'>
            <Header />
            <div className="board">
                <div className="title">트레이너 화면</div>
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