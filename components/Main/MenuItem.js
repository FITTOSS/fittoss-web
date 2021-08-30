import React, {PureComponent} from "react";
import css from "styled-jsx/css";

export default class MenuItem extends PureComponent {

    render() {
        return (
            <div className="container" style={{background: this.props.backgroundColor}}>
                <div className="item-name">{this.props.name}</div>
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
      height: 112px;
      box-shadow: 0px 3px 10px #00000029;
      border-radius: 10px;
      cursor: pointer;
      
    }
  .item-name{
    text-align: center;
    font: normal normal normal 20px/23px GodoB;
  }
`;