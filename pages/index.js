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

            <div className='login-container'>
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
            </div>
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
    }
  .login-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 10px #00000029;
    border-radius: 10px;
    opacity: 1;
    width: 325px;
    height: 404px;
    margin-top: 20px;
  }
  .inputDiv{
    background: #FCFCFC 0% 0% no-repeat padding-box;
    border: 1px solid #EDEDED;
    width: 243px;
    height: 60px;
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
    width: 303px;
    height: 60px;
    margin-top: 10px;
  }
  .loginText{
    color: white;
    font-size: 23px;
    font: normal normal normal 20px/23px GodoB;
  }
  .forgotPwdButton{
    font: normal normal normal 12px/18px IBMPlexSansKR-Regular;
    font-size: 18px;
    margin-top: 7px;
    display: inline-flex;
    width:303px;
    justify-content: flex-end;
  }
  .registerButton{
    font: normal normal normal 14px/21px IBMPlexSansKR-Regular;
    font-size: 21px;
    margin-top: 33px;
  }
   button:hover, a:hover{
     cursor: pointer;
   }
`;

