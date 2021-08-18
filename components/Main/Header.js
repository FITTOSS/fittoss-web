import React, {PureComponent} from "react";
import Image from "next/image";
import Logo from "../common/Logo";
import css from "styled-jsx/css";

export default class Header extends PureComponent {
    render() {
        return(
            <div className='container'>
                <Image src="/icons/fi-rr-menu-burger.svg" width={30} height={30} />
                <Logo />
                <Image src="/icons/fi-rr-portrait.svg" width={30} height={30} />
                <style jsx>{style}</style>
            </div>
        );
    }
}

const style = css`
  .container {
    display: flex;
    width: 680px;
    justify-content: space-between;
    margin-bottom: 30px;
  }
`;