import css from "styled-jsx/css";
import React, {useEffect} from "react";

const Post = ({background, text}) => {
    useEffect(()=>{
        console.log(background);
    })
    return(
        <div className="container" style={background}>
            <div className="title">{text}</div>
            <style jsx>{style}</style>
        </div>
    )
}

const style = css`
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 302px;
    height: 72px;
    background: 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 10px #00000029;
    border-radius: 10px;
    text-align: center;
  }
  .title{
    font: normal normal normal 14px/16px GodoB;
  }
`;


export default Post;
