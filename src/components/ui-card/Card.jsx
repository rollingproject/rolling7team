import React, {useState, useEffect} from "react";

export default function Card(props){

    return(
        <div className="card">
            <div className="card_inner">
                <div className="card_data">
                    <p className="recipient">To.{props.response.name}</p>
                    <ul className="sender_img">{/* 작성한 유저 프로필 노출 구현 필요*/}</ul>
                    <p className="alert">{props.response.messageCount}명이 작성했어요!</p>
                </div>
                <div className="reaction_box">
                    <ul>
                        {} {/* reaction 추가 */}
                    </ul>
                </div>
            </div>
        </div>
    )
}