import React from 'react';
import css from "styled-jsx/css";
import Logo from "../../components/common/Logo";
import Image from "next/image";

export default function main() {
    return(
        <div className='container'>
            <div className='header-container'>
                <Image src="/icons/fi-rr-menu-burger.svg" width={30} height={30} />
                <Logo />
                <Image src="/icons/fi-rr-portrait.svg" width={30} height={30} />

            </div>

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
  }
  .header-container {
    display: flex;
    width: 680px;
    justify-content: space-between;
    
  }
`;