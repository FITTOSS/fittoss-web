import React from 'react';
import css from "styled-jsx/css";
import Logo from "../../components/common/Logo";

export default function main() {
    return(
        <div className='container'>
            <Logo />

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
`;