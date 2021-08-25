import React from 'react';
import css from "styled-jsx/css";
import JoinInput from '../../components/Join/joinInput';
import JoinCompleted from '../../components/Join/joinCompleted';
import Logo from "../../components/common/Logo";

export default function Join() {
    return (
        <form className='container'>
            <Logo/>
            <JoinInput/>
            <style jsx>{style}</style>
        </form>     
    )
}

const style = css`
.container {
    margin-top:30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
 
 font-size: 20px;
`