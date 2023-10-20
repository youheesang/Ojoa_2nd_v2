import './Qna.css';
import React, { useState } from "react";
// import mockList from '../../data/ItemsData';
import QnaData from '../Qna/QnaData';

// const mockListQna = [
//     {
//         id: 0,
//         num: 1,
//         imgNo: 5,
//         itemInfo: '[이끼 의자]',
//         category: '상품문의',
//         title: '물 줘도 되나요?',
//         notification: '제가 살아 있는 생물만 구매하는 주의라서요. 신선 배송 되겠죠? 서울인데 새벽배송 가능하죠?',
//         titleIcon: '[1]',
//         writer: '오원희',
//         date: '2023.08.23'
//     },
//     {
//         id: 1,
//         num: 2,
//         imgNo: 13,
//         itemInfo: '[철의 왕좌]',
//         category: '상품문의',
//         title: '가격이... 혹시 정품 인가요?',
//         notification: '왕좌의 게임에 나오는 철의 왕좌 같은데요... 정품 인가요? 예전에 중국산을 속아서 산적이 있어서요...',
//         titleIcon: '[1]',
//         writer: '어성은',
//         date: '2023.08.22'
//     }, {
//         id: 2,
//         num: 3,
//         imgNo: 14,
//         itemInfo: '[희상 의자]',
//         category: '주문/결제',
//         title: '주문하려고 하는데 240개월 할부가 되나요?',
//         notification: '카드사 별로 얼마나 할부되는지 궁금해요.',
//         titleIcon: '[1]',
//         writer: '유희상',
//         date: '2023.08.21'
//     },
//     {
//         id: 3,
//         num: 4,
//         imgNo: 15,
//         itemInfo: '[원희 의자]',
//         category: '상품문의',
//         title: '손가락은 꺾이나요?',
//         notification: '손가락이 꺾여서 팔받침으로 사용할 수 있는 건가요?',
//         titleIcon: '[1]',
//         writer: '이진기',
//         date: '2023.08.20'
//     },
//     {
//         id: 4,
//         num: 5,
//         imgNo: 16,
//         itemInfo: '[성은 의자]',
//         category: '배송문의',
//         title: '먹을 수 있나요?',
//         notification: '아무리 봐도 바게트 같은.....? 배송은 언제쯤 가능한가요?',
//         titleIcon: '[1]',
//         writer: '오원희',
//         date: '2023.08.19'
//     },
//     {
//         id: 5,
//         num: 6,
//         imgNo: 12,
//         itemInfo: '[푸바오 의자]',
//         category: '상품문의',
//         title: '손가락은 꺾이나요?',
//         notification: '손가락이 꺾여서 팔받침으로 사용할 수 있는 건가요?',
//         titleIcon: '[1]',
//         writer: '이진기',
//         date: '2023.08.18'
//     }

//]; // mockListQna

// 배열 속성 writer 입력시 성만 따오기
const lastName = (fullName) => {
    if (fullName.length > 0) {
        return fullName.charAt(0);
    };
    return;
};

function QnaListItem() {
    const [expandedId, setExpandedId] = useState(null);

    const handleTitleClick = (id) => {
        if (expandedId === id) {
            setExpandedId(null);
        } else {
            setExpandedId(id);
        }
    };

    return (
        <div>
            <table className='qna_ListItem_container'>

                {QnaData.map((item) => (
                    <React.Fragment key={item.id}>
                        <tr className='qna_Lboard_st'>
                            <td className='qna_board_st1'>{item.num}</td>
                            <td className='qna_board_st2'>
                                <div><img src={`../thumbs/${item.imgNo}_1.jpg`} alt='상품' /></div>
                                <div>{item.itemInfo}</div>
                            </td>
                            <td className='qna_board_st3'>{item.category}</td>
                            <td className='qna_board_st4'>
                                <td
                                    className='title_button'
                                    onClick={() => handleTitleClick(item.id)}>{item.title}
                                </td>
                            </td>
                            <td className='qna_board_st5'>{lastName(item.writer)}&#42;&#42;</td>
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
                ))}

            </table >
        </div>
    );
} //QnaListItem

export default QnaListItem;