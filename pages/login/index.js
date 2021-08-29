import Image from 'next/image';
import css from "styled-jsx/css";
import {useRouter} from "next/router";
import StartWithKakao from "../../components/Login/StartWithKakao";
import Logo from "../../components/common/Logo";
import {useSelector} from "react-redux";
import axios from 'axios';

export default function Login() {
    const router = useRouter();
    const role = useSelector((state) => state.role);
    const onClickRegister = () => {
        router.push('/join');
        //회원가입 창 이동
    }

    const onSubmitForm = (e) => {
        e.preventDefault();

        //로그인
        axios.patch('http://localhost:4000/api/login', {
            "email": e.target.email.value,
            "password": e.target.password.value
        }).then((response) => {
           console.log(response.data.data);
        }).catch((err) => {
            console.log(err.response.data);
            alert(err.response.data.message);
        });
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

                <a className="registerButton" onClick={onClickRegister}>간편회원가입</a>
            </div>
            {/* style */}
            <style jsx>{style}</style>
        </form>
    );
}

const style = css`
  .container{
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
    margin-top:30px;
    height: calc(100vh - 30px);
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
    max-width: 90%;
    height: 404px;
    margin-top: 20px;
  }
  .inputDiv{
    background: #FCFCFC 0% 0% no-repeat padding-box;
    border: 1px solid #EDEDED;
    width: 273px;
    max-width: calc(94% - 30px);
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
    max-width: 94%;
    height: 60px;
    margin-top: 10px;
    box-shadow: 0px 3px 6px #00000029;
  }
  .loginText{
    color: white;
    font: normal normal normal 20px/23px GodoB;
  }
  .forgotPwdButton{
    font: normal normal normal 12px/18px IBMPlexSansKR-Regular;
    margin-top: 7px;
    display: inline-flex;
    width:303px;
    justify-content: flex-end;
  }
  .registerButton{
    font: normal normal normal 14px/21px IBMPlexSansKR-Regular;
    margin-top: 33px;
  }
   button:hover, a:hover{
     cursor: pointer;
   }
`;

