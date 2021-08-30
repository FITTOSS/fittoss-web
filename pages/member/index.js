import React, {useEffect, useState} from 'react';
import css from "styled-jsx/css";
import Header from "../../components/common/Header";
import {useRouter} from "next/router";
import MemberTabBar from "../../components/common/MemberTabBar";
import MenuItem from "../../components/Main/MenuItem";
import Logo from "../../components/common/Logo";
import AddMenuItem from "../../components/Main/AddMenuItem";

export default function MemberMain(props) {
    const [memberName, setMemberName] = useState();
    const router = useRouter();
    let menus = [
        {name: "인증찰칵", backgroundColor: "#EDF3FF"},
        {name: "체중기록", backgroundColor: "#FFEAEA"},
        {name: "오늘의운동", backgroundColor: "#F0EDFF"},
        {name: "오늘의식단", backgroundColor: "#FFEDF5"},
        {name: "운동기록", backgroundColor: "#FFEDF5"},
        {name: "수업로그", backgroundColor: "#EDF3FF"},
    ];
    // ssr: 데이터 미리 받아오기
    // getInitialProps

    //임시
    useEffect(() => {
        console.log(router.query);
        setMemberName(decodeURIComponent(router.query.name));
    }, []);

    return(
        <div className='container'>
            <Header />
            <div className="logo"><Logo /></div>
            <div className="board">
                <div className="title">{memberName}의 핏로그</div>
                <div className="contents">
                    {menus.map((value, i) => {
                        return <MenuItem key={value.name} name={value.name} backgroundColor={value.backgroundColor} />
                    })}
                    <AddMenuItem />
                </div>
            </div>

            {/* 모바일 화면 - TabBar와 겹침 방지 */}
            <div className="hidden">hidden</div>

            <div className="tab_bar">
                <MemberTabBar />
            </div>
            <style jsx>{style}</style>
        </div>
    );
}

const style = css`
  .container{
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .logo{
    margin: 24px auto;
  }
  .board {
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 10px #00000029;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 23px 12px 28px 12px;
  }
  .title {
    text-align: center;
    font: normal normal normal 14px/16px GodoB;
    width:100%;
    margin-bottom: 26px;
  }
  .contents{
    display: grid;
    grid-template-columns: 144px 144px;
    grid-gap: 12px;
  }
  .hidden{
    height: 48px;
    visibility: hidden;
  }
  .tab_bar{
    background-color: white;
    width: 100%;
    position: fixed;
    bottom: 0px;
  }
  @media all and (max-width:350px){
    .contents{
      display: grid;
      grid-template-columns: 136px 136px;
    }
  }
`;