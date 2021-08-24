import React, {PureComponent} from "react";
import Image from "next/image";
import css from "styled-jsx/css";
import Router from "next/router";

export default class TabBar extends PureComponent {
    render() {
        return(
            <div className='container'>
                {/* 식단 관리 */}
                <div className="imgButton">
                    <Image src="/icons/fi-rr-cookie.svg" width={20} height={20} />
                </div>

                {/* 운동 관리 */}
                <div className="imgButton">
                    <Image src="/icons/fi-rr-gym.svg" width={20} height={20} />
                </div>

                {/* 메인 */}
                <div className="imgButton">
                    <Image onClick={() => {Router.push('/member');}} src="/icons/fi-rr-home.svg" width={20} height={20}/>
                </div>

                {/* 변화 기록 */}
                <div className="imgButton">
                    <Image src="/icons/fi-rr-stats.svg" width={20} height={20} />
                </div>

                {/* 일정 관리 */}
                <div className="imgButton">
                    <Image src="/icons/fi-rr-calendar.svg" width={20} height={20} />
                </div>

                <style jsx>{style}</style>
            </div>
        );
    }
}

const style = css`
  .container{
    height: 49px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px -3px 10px #00000029;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  Image:hover{
    cursor: pointer;
  }
  //모바일
  @media all and (max-width:499px){
    .container{
      padding-bottom: 34px;
    }
  }
`;