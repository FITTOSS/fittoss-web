import css from "styled-jsx/css";
import React from 'react';

export default function MyPageInput1(props) {

    return (
        <div>
            <form className="inputDiv">
                <div>
                    <div className="text">이름</div>
                    <input type="text" className="input"></input>
                </div>
                <div>
                    <div className="text">성별</div>
                    <div className="genderChoiceBox">
                        <input type="button" value="남" className="genderLBtn"></input>
                        <input type="button" value="여" className="genderRBtn"></input>
                    </div>
                </div>
                <div>
                    <div className="text">생년월일</div>
                    <input type="" className="input"></input>
                </div>
            </form>
            <style jsx>{style}</style>
        </div>
    )
}

const style = css`
.inputDiv {
    height: 507px;
    display: flex;
    flex-direction: column;
    align-items: center;

}
.genderChoiceBox {
    display: flex;
    flex-direction: row;
    width: 303px;
    height: 60px;
}
.genderLBtn {
    width: 50%;
    background: #FCFCFC 0% 0% no-repeat padding-box;
    border: 1px solid #EDEDED;
    border-radius: 20px 0px 0px 20px;
    opacity: 1;
    font-family: 'GodoB';
    font-size: 20px;

}
.genderLBtn:hover {
    background: #EDEDED 0% 0% no-repeat padding-box;
    box-shadow: inset 4px 0px 12px #0000000D;
}
.genderLBtn:checked {
    background: #EDEDED 0% 0% no-repeat padding-box;
    box-shadow: inset 4px 0px 12px #0000000D;
}
.genderRBtn {
    width: 50%;
    background: #FCFCFC 0% 0% no-repeat padding-box;
    border: 1px solid #EDEDED;
    border-radius: 0px 20px 20px 0px;
    opacity: 1;
    font-family: 'GodoB';
    font-size: 20px;
}
.genderRBtn:hover {
    background: #EDEDED 0% 0% no-repeat padding-box;
    box-shadow: inset 4px 0px 12px #0000000D;
}
.text {
    font-family: 'IBMPlexSansKR-Regular';
    font-size: 14px;
    margin-bottom: 10px;
    height: 20px;
  }
.input {
    border: solid 1px #EDEDED;
    outline: none;
    border-radius: 20px;
    background-color: #0000000B;
    width: 303px;
    height: 60px;
    font-size: 18px;
    box-shadow: 0px -1px 10px 1px #0000000B;
    margin-bottom: 10px;
}
button {
    display:flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 10px #0000000D;
    border: 1px solid #EDEDED;
    border-radius: 20px;
    opacity: 1;
    width: 303px;
    height: 60px;
    font-family: 'GodoB';
    margin-top: 23px;
    margin-bottom: 20px;
    font-size: 20px;
ifont-size: 20px;
`