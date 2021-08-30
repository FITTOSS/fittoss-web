import React, {PureComponent} from "react";
import css from "styled-jsx/css";
import Image from "next/image";

export default class AddMenuItem extends PureComponent {
    render() {
        return (
            <div className="container imgButton">
                <Image src="/icons/fi-rr-plus-small.svg"
                       width={36} height={36} />
                <style jsx>{style}</style>
            </div>
        );
    }
}

const style = css`
    .container{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 144px;
      height: 112px;
      box-shadow: 0px 3px 10px #00000029;
      background: #F2F2F2;
      border-radius: 10px;
      cursor: pointer;
    }
  @media all and (max-width:350px) {
    .container{
      width: 136px;
    }
  }
`;