import React, {PureComponent} from "react";
import css from "styled-jsx/css";

const Diet = () => {
    //임시
    const realCalories = 800;
    const goalCalories = 1000;

    return(
        <div className="container">
            <div className="title">식단</div>
            <div className="real">{realCalories}</div>
            <div className="goal">/ {goalCalories} kcal</div>
            <style jsx>{style}</style>
        </div>
    );
}

// db 데이터 가져오기 - https://lgphone.tistory.com/136
// Diet.getInitialProps = async () => {
//     const {data: diet} = await axios.get();
//     return {diet};
// }

const style = css`
  .container{
    width: 144px;
    height: 108px;
    background: #F0EDFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 10px #00000029;
    border-radius: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .title{
    font: normal normal normal 14px/16px GodoB;
    margin-bottom: 10px;
  }
  .real{
    font: normal normal normal 20px/23px GodoB;
  }
  .goal{
    font: normal normal normal 12px/13px GodoB;
  }
`;

export default Diet;