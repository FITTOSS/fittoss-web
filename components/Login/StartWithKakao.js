import React, {PureComponent} from 'react';
import KakaoLogin from "react-kakao-login";
import Image from "next/image";
import css from "styled-jsx/css";
import Router from "next/router";

export default class StartWithKakao extends PureComponent {

    onSuccessKakaoLogin = (response) => {
        console.log(response.response);
        console.log(response.profile);
        Router.push('/');
    }

    onFailKakaoLogin = (error) => {
        console.error(error);
        alert('로그인에 실패하셨습니다.');
    }

    render() {
        return (
            <KakaoLogin token='8c9342658538f5f775e33765cedd9623'
                        onSuccess={this.onSuccessKakaoLogin}
                        onFail={this.onFailKakaoLogin}
                        style={{
                            cursor: "pointer",
                            border: 'none',
                            background: '#FAE100',
                            borderRadius: '5px',
                            width: '350px',
                            height: '60px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '50px',
                            marginBottom: '10px'
                        }}>
                <Image src="/images/kakaotalk.png" width={40} height={40}/>
                <div className='kakaoTalkText'>카카오톡으로 시작하기</div>
                <style jsx>{style}</style>
            </KakaoLogin>

        )
    };
}

const style = css`
    @font-face {  
      font-family: 'GodoB';  
      src: url('/fonts/GodoB.ttf');
    }
    .kakaoTalkText{
      font-family: 'GodoB';
      color: #3C1E1E;
      font-size: 18px;
    }
`;