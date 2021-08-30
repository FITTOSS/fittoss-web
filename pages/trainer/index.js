import React from 'react';
import css from "styled-jsx/css";
import Header from "../../components/common/Header";

export default function TrainerMain() {
    return(
        <div className='container'>
            <Header />
            <div className="board">
                <div className="memberProfileBtn" style={{backgroundColor: '#FFEAEA'}}></div>
                <div className="memberProfileBtn" style={{backgroundColor: '#F0EDFF'}}></div>
                <div className="memberProfileBtn" style={{backgroundColor: '#EDF3FF'}}></div>
                <div className="memberProfileBtn" style={{backgroundColor: '#FFEDF9'}}></div>
                <div className="seeMoreBtn"></div>
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 680px;
    height: 334px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 10px #00000029;
    border-radius: 10px;
  }
  .memberProfileBtn {
    width: 302px;
    height: 50px;
    box-shadow: 0px 3px 10px #00000029;
    border-radius: 10px;
    opacity: 1;
    margin-bottom: 20px;
  }
  .seeMoreBtn {
  }
  
  // 모바일
  @media all and (max-width:479px){
    ;
  }
`;