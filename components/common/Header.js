import React, {PureComponent} from "react";
import Image from "next/image";
import Logo from "./Logo";
import css from "styled-jsx/css";

export default class Header extends PureComponent {
    render() {
        return(
            <div className='container'>
                <div className="imgButton"><Image src="/icons/fi-rr-menu-burger.svg" width={30} height={30} /></div>
                <div className="imgButton"><Image src="/icons/fi-rr-portrait.svg" width={30} height={30} /></div>
                <style jsx>{style}</style>
            </div>
        );
    }
}

const style = css`
  .container {
    display: flex;
    padding: 12px;
    width: calc(100% - 24px);
    justify-content: space-between;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 6px #00000029;
  }
`;