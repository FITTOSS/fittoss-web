import React, {useEffect, useState} from 'react';
import css from "styled-jsx/css";
import Header from "../../components/Main/Header";
import {useRouter} from "next/router";
import Diet from "../../components/Main/member/Diet";
import Workout from "../../components/Main/member/Workout";
import Post from "../../components/Main/member/Post";

export default function MemberMain(props) {
    const [memberName, setMemberName] = useState();
    const [trainer, setTrainer] = useState();
    const router = useRouter();

    // ssr: 데이터 미리 받아오기
    // getInitialProps

    //임시
    useEffect(() => {
        console.log(router.query);

        setMemberName(decodeURIComponent(router.query.name));
        setTrainer('김땡땡');
    }, []);

    return(
        <div className='container'>
            <Header />
            <div className="board">
                <div className="title">{trainer} 선생님과 함께하는 {memberName}의 운동로그</div>
                <div className="contents">
                    <div className="left">
                        <Diet /> <Diet />
                        <Workout /> <Workout />
                    </div>
                    <div className="right">
                        <div className="p1"><Post background={{background: '#F7F7F7'}} text={"000 회원님 오늘은 식단 성공합시다!"} /></div>
                        <div className="p2"><Post background={{background: '#FFEAEA'}} text={"다음 수업은 00월 00일 오후 00시 입니다."} /></div>
                        <div className="p3"><Post background={{background: '#FFEDF9'}} text={"오늘은 '운동제목을 입력하세요' 하는 날!"} /></div>
                    </div>
                </div>
            </div>


            <style jsx>{style}</style>
        </div>
        

    );
}

const style = css`
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .title {
    text-align: center;
    font: normal normal normal 14px/16px GodoB;
  }
  .left {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 144px 144px;
  }
  .right {
    display: grid;
    grid-template-columns: 302px;
    grid-gap: 10px;
   }
  
  @media all and (min-width:480px) {
    .board {
      width: 680px;
      height: 334px;
      background: #FFFFFF 0% 0% no-repeat padding-box;
      box-shadow: 0px 3px 10px #00000029;
      border-radius: 10px;
    }
    .title{
      width: 680px;
      margin:20px 0;
    }
    .contents {
      display: flex;
      justify-content: space-between;
      margin: 0 25px;
    }
    .left {
      grid-gap: 10px;
    }
    
  }
  // 모바일
  @media all and (max-width:479px){
    .title {
      position: absolute;
      top: 117px;
      width: 302px;
    }
    .p1{
      position: absolute;
      top: 170px;
    }
    .p2{
      position: absolute;
      top: 257px;
    }
    .left{
      position: absolute;
      top: 344px;
      grid-gap: 14px;
    }
    .p3{
      position: absolute;
      top: 589px;
    }
  }
`;