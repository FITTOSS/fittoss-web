import React from 'react';
import KakaoLogin from "react-kakao-login";
import Image from "next/image";
import css from "styled-jsx/css";
import Router from "next/router";

const StartWithKakao = (props) => {

    const onSuccessKakaoLogin = (response) => {
        if(props.role === 'member'){
            Router.push({
                pathname: '/member',
                query: {name: encodeURIComponent(response.profile.properties.nickname)}
            });
        } else if (props.role === 'trainer') {
            Router.push('/trainer');
        } else {
            alert('사용자 타입을 선택해주세요');
            Router.push('/');
        }
    }

    const onFailKakaoLogin = (error) => {
        console.error(error);
        alert('로그인에 실패하셨습니다.');
    }

    return (
        <KakaoLogin token='8c9342658538f5f775e33765cedd9623'
                    onSuccess={onSuccessKakaoLogin}
                    onFail={onFailKakaoLogin}
                    getProfile={true}
                    style={{
                        cursor: "pointer",
                        border: 'none',
                        background: '#FAE100',
                        borderRadius: '5px',
                        width: '303px',
                        maxWidth: '94%',
                        height: '60px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: '15px'
                    }}>
            <Image src="/images/kakaotalk.png" width={40} height={40}/>
            <div className='kakaoTalkText'>카카오톡으로 시작하기</div>
            <style jsx>{style}</style>
        </KakaoLogin>
    );
}

const style = css`
    .kakaoTalkText{
      font: normal normal normal 18px/20px GodoB;
      color: #3C1E1E;
      font-size: 18px;
    }
`;

export default StartWithKakao;