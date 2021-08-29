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
                        <input type="radio" value="man" name="myRadio" id="myRadio1" className="genderInput"/>
                            <label className="genderLBtn" for="myRadio1"><div>남</div></label>
                        <input type="radio" value="woman" name="myRadio" id="myRadio2" className="genderInput"/>
                            <label className="genderRBtn" for="myRadio2"><div>여</div></label>
                    </div>
                </div>
                <div>
                    <div className="text">생년월일</div>
                    <input type="date" className="input"></input>
                </div>
                <input type="button" value="다음으로 &gt;" className="nextButton"/>
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
    margin-bottom: 10px;
}
.genderInput {
    display: none;
}
.genderLBtn {
    display: flex;
    justify-content: center;
    align-items: center;
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
    display: flex;
    justify-content: center;
    align-items: center;
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
.genderInput:checked + .genderLBtn {
    background: #EDEDED 0% 0% no-repeat padding-box;
    box-shadow: inset 4px 0px 12px #0000000D;
}
.genderInput:checked + .genderRBtn {
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
    background-color: #FCFCFC;
    width: 303px;
    height: 60px;
    font-size: 18px;
    box-shadow: 0px -1px 10px 1px #0000000B;
    margin-bottom: 10px;
}
.nextButton {
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
    margin-top: 20px;
    margin-bottom: 30px;
    font-size: 20px;
}
font-weight: bold;
font-size: 20px;
`