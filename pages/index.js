import Image from 'next/image';
import css from "styled-jsx/css";
import {useRouter} from "next/router";

export default function Login() {
    const router = useRouter();
    return(
        <div className='container'>
            {/* 로그인 */}
            <Image src="/images/fittoss_logo.png" width={280} height={50} />

            <button className='kakaoTalkButton' onClick={() => {alert('카카오톡으로 시작하기'); router.push('/');}}>
                <Image src="/images/kakaotalk.png" width={40} height={40}/>
                <div className='kakaoTalkText'>카카오톡으로 시작하기</div>
            </button>

            <div className='inputDiv'>
                <Image src="/icons/fi-rr-user.svg" width="30" height="30" />
                <input className='inputText' type='text' />
            </div>
            <div className='inputDiv'>
                <Image src="/icons/fi-rr-lock.svg" width="30" height="30" />
                <input className='inputText' type='password' />
            </div>

            <button className='loginButton' onClick={() => {alert('로그인'); router.push('/');}}>
                <div className='loginText'>로그인</div>
            </button>

            {/* style */}
            <style jsx global>{`body{ margin:0px;}`}</style>
            <style jsx>{style}</style>
        </div> 
    );
}

const style = css`
    @font-face {  
      font-family: 'GodoB';  
      src: url('/fonts/GodoB.ttf');
    }
    .container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: url('/images/background30.png') no-repeat;
      background-size: cover;
    }
    .kakaoTalkButton{
      border: none;
      background: #FAE100;
      border-radius: 5px;
      width: 350px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 50px;
      margin-bottom: 10px;
    }
    .kakaoTalkText{
      font-family: 'GodoB';
      color: #3C1E1E;
      font-size: 18px;
    }
  .inputDiv{
    background: white;
    width: 320px;
    height: 60px;
    border-width: 2px;
    border-color: #EDEDED;
    display: flex;
    align-items: center;
    padding: 0 15px;
    margin-bottom: 1px;
  }
  .inputText {
    border: none;
    outline:none;
    margin-left: 15px;
    width: 100%;
    height: 30px;
    font-size: 18px;
  }
  .loginButton{
    background: #383838;
    border-radius: 5px;
    width: 350px;
    height: 60px;
    margin-top: 10px;
  }
  .loginText{
    color: white;
    font-size: 20px;
    font-family: 'GodoB';
  }
   button:hover{
     cursor: pointer;
   }
`;

