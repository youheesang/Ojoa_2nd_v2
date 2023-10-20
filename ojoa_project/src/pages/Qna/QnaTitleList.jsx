// import { table } from 'console';
import './Qna.css';
import React, { useState } from "react";

const mockListQnaTop = [
    {
        id: 0,
        num: '공지',
        itemInfo: '-',
        category: '-',
        title: '리뷰작성 포인트 적립안내',
        notification: '첫번째 공지 입니다.  리액트 어렵네요.  스트레스 엄청 받네요.',
        titleIcon: '[16]',
        writer: 'ojoa',
        date: '2023.03.23'
    },
    {
        id: 1,
        num: '공지',
        itemInfo: '-',
        category: '-',
        title: 'ojoa 온라인몰 배송관련 안내',
        notification: '새로운 공지 입니다.  벌써 50일이 지났습니다.  봄이 올까요?',
        titleIcon: '[10]',
        writer: 'ojoa',
        date: '2023.07.23'
    },
]; // mockListQnaTop

function QnaTitleList() {

    const [expandedId, setExpandedId] = useState(null);

    const handleTitleClick = (id) => {
        if (expandedId === id) {
            setExpandedId(null);
        } else {
            setExpandedId(id);
        }
    };

    return (
        <table className='qna_TitleList_container'>
            <tr className='qna_Tboard_st'>
                <td className='qna_board_name'>번호</td>
                <td className='qna_board_name'>상품정보</td>
                <td className='qna_board_name'>카테고리</td>
                <td className='qna_board_name'>제목</td>
                <td className='qna_board_name'>작성자</td>
                <td className='qna_board_name'>작성일</td>
            </tr>

            {mockListQnaTop.map((item) => (
                <React.Fragment key={item.id}>
                    <tr className='qna_Tboard_st'>
                        <td className='qna_board_st1'>{item.num}</td>
                        <td className='qna_board_st2'>{item.itemInfo}</td>
                        <td className='qna_board_st3'>{item.category}</td>
                        <td className='qna_board_st4'>
                            <td
                                className='title_button'
                                onClick={() => handleTitleClick(item.id)}
                            >
                                {item.title}
                            </td>
                        </td>
                        <td className='qna_board_st5'>{item.writer}</td>
                        <td className='qna_board_st6'>{item.date}</td>
                    </tr>
                    {expandedId === item.id && (
                        <tr className='qna_board_st7'>
                            <td colSpan="6" className='notification_row'>
                                {item.notification}
                            </td>
                        </tr>
                    )}
                </React.Fragment>
            ))
            }

        </table >
    )
}

export default QnaTitleList;