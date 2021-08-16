import Image from 'next/image';
import css from "styled-jsx/css";
import {useRouter} from "next/router";
import StartWithKakao from "../components/Login/StartWithKakao";
import Logo from "../components/common/Logo";

export default function Login() {
    const router = useRouter();

    const onSubmitForm = (e) => {
        e.preventDefault();

        alert('email = ' + e.target.email.value + '\npassword = ' + e.target.password.value);
        //로그인 기능
    }

    return(
         // 로그인 폼
        <form onSubmit={onSubmitForm} className='container'>
            
            <Logo />

            {/* 카카오톡으로 시작하기 버튼 */}
            <StartWithKakao />

            {/* 이메일 입력 */}
            <div className='inputDiv'>
                <Image src="/icons/fi-rr-user.svg" width="30" height="30" />
                <input className='inputText' type='text' name="email" />
            </div>

            {/* 비밀번호 입력 */}
            <div className='inputDiv'>
                <Image src="/icons/fi-rr-lock.svg" width="30" height="30" />
                <input className='inputText' type='password' name="password" />
            </div>

            {/* 로그인 버튼 */}
            <button type="submit" className='loginButton'>
                <div className='loginText'>로그인</div>
            </button>

            <a className="forgotPwdButton">암호를 잊어버렸나요?</a>

            <a className="registerButton">간편회원가입</a>

            {/* style */}
            <style jsx global>{`body{ margin:0px;}`}</style>
            <style jsx>{style}</style>
        </form>
    );
}

const style = css`
    @font-face {  
      font-family: 'GodoB';  
      src: url('/fonts/GodoB.ttf');
    }
  @font-face {
    font-family: 'IBMPlexSansKR-Regular';
    src: url('/fonts/IBMPlexSansKR-Regular.ttf');
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
  .forgotPwdButton{
    font-family: 'IBMPlexSansKR-Regular';
    font-size: 12px;
    margin-top: 7px;
    display: inline-flex;
    width:350px;
    justify-content: flex-end;
  }
  .registerButton{
    font-family: 'IBMPlexSansKR-Regular';
    font-size: 14px;
    margin-top: 32px;
  }
   button:hover, a:hover{
     cursor: pointer;
   }
`;

