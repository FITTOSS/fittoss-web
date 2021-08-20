import css from "styled-jsx/css";
import React, {Component} from 'react';
import Link from 'next/link'


export default class JoinCompleted extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <div style={{
                    fontFamily: 'IBMPlexSansKR-Regular',
                    fontSize: '20px',
                    marginTop: '80px',
                    marginBottom: '121px'

                }}>가입을 환영합니다
                </div>
                <Link href="/">
                    <button><div>시작하기 &gt;</div></button>
                </Link>
                <style jsx>{style}</style>
            </div>
        )
    }
}

const style = css`
button {
    background-color: #FFFFFF;
    border-radius: 20px;
    border: solid 1px #EDEDED;
    box-shadow: 0px 3px 10px 3px #0000000D;
    width: 303px;
    height: 60px;
    font-family: 'GodoB';
    margin-top: 30px;
    font-size: 20px;
}
`