import React from "react";
import css from "styled-jsx/css";
import Logo from "../components/common/Logo";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {SET_ROLE} from "../redux/types";

export default function Index() {
    const router = useRouter();
    const dispatch = useDispatch();
    const onClickMember = () => {
        dispatch({type: SET_ROLE, role: 'member'});
        router.push('/login');
    }
    const onClickTrainer = () => {
        dispatch({type: SET_ROLE, role: 'trainer'});
        router.push('/login');
    }

    return(
      <div className="container">
          <Logo />
          <button className="memberButton" onClick={onClickMember}>회원님용</button>
          <button className="trainerButton" onClick={onClickTrainer}>트쌤용</button>
          <style jsx>{style}</style>
      </div>
    );
}

const style = css`
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    height: calc(100vh - 30px);
  }
  .memberButton{
    background: #EEEBFF 0% 0% no-repeat padding-box;
    margin-top:50px;
    margin-bottom: 20px;
  }
  .trainerButton{
    background: #EBF1FF 0% 0% no-repeat padding-box;
  }
  button{
    width: 303px;
    height: 60px;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 5px;
    outline: none;
    border-width: 0;
    text-align: center;
    font: normal normal normal 20px/23px GodoB;
    color: #1A1A1A;
  }
  button:hover{
    cursor: pointer;
  }
`;
