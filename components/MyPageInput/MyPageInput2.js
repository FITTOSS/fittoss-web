import css from "styled-jsx/css";
import React from 'react';

export default function MyPageInput2(props) {

    return (
        <form className="container">
            <div>
                <div className="text">신장</div>
                <div className="inputDiv">
                    <input type="number" className="input"></input>
                    <div className="inputText">CM</div>
                </div>
            </div>
            <div>
                <div className="text">체중</div>
                <div className="inputDiv">
                    <input type="number" className="input"></input>
                    <div className="inputText">KG</div>
                </div>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '100%'
            }}>
                <div style={{
                    width: '147px',
                    display: 'flex',
                    flexDirection: 'column'}}>
                    <div className="text">체지방</div>
                    <div className="halfInputDiv">
                        <input type="number" className="halfInput"></input>
                        <div className="halfInputText">KG</div>
                    </div>
                    
                </div>
                <div style={{
                    width: '147px',
                    display: 'flex',
                    flexDirection: 'column'}}>
                    <div className="text">골격근</div>
                    <div className="halfInputDiv">
                        <input type="number" className="halfInput"></input>
                        <div className="halfInputText">KG</div>
                    </div>
                </div>
            </div>
            <input type="button" value="메인으로 &gt;" className="nextButton"/>
            <style jsx>{style}</style>
        </form>

    )
}

const style = css`
.container {
    width: 100%;
    height: 507px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.text {
    font-family: 'IBMPlexSansKR-Regular';
    font-size: 14px;
    margin-bottom: 10px;
    height: 20px;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
.inputDiv {
    display: flex;
    flex-direction: row;
    border: solid 1px #EDEDED;
    outline: none;
    border-radius: 20px;
    background-color: #FCFCFC;
    width: 303px;
    height: 60px;
    font-size: 18px;
    box-shadow: inset 0px 1px 10px #0000000B;
    margin-bottom: 10px;
}
.input {
    width: 244px;
    border-radius: 20px;
    background-color: #FCFCFC;
    border: none;
    outline: none;
    padding: 0px;
}
.inputText {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-family: 'IBMPlexSansKR-Regular';
}
.halfInputDiv {
    display: flex;
    flex-direction: row;
    width: 147px;
    height: 60px;
    padding: 0px;
    background: #FCFCFC 0% 0% no-repeat padding-box;
    box-shadow: inset 0px 1px 10px #0000000B;
    border: 1px solid #EDEDED;
    border-radius: 20px;
    opacity: 1;  
}
.halfInput {
    width: 104px;
    border-radius: 20px;
    background-color: #FCFCFC;
    border: none;
    outline: none;
    padding: 0px;
}
.halfInputText {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-family: 'IBMPlexSansKR-Regular';
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
font-size: 20px;
font-weight: bold;
`