import './Qna.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import QnaData from "../Qna/QnaData";

const QnaFilter = () => {

    // 카테고리 번호에 따라 카테고리 이름을 반환하는 함수
    const getCategoryName = (categoryNumber) => {
        switch (categoryNumber) {
            case '2':
                return '상품문의';
            case '3':
                return '배송문의';
            case '4':
                return '주문/결제';
            case '5':
                return '취소문의';
            case '6':
                return '반품/교환';
            case '7':
                return '환불문의';
            case '8':
                return '재입고문의';
            case '9':
                return '기타문의';
            default:
                return '';
        }
    };

    // 검색기능 
    const [searchDate, setSearchDate] = useState('period');
    const [searchKey, setSearchKey] = useState('subject');
    const [searchText, setSearchText] = useState('');
    const [filteredItems, setFilteredItems] = useState(QnaData); // 초기 상태로 전체 항목 표시

    const handleSearchDateChange = (event) => {
        setSearchDate(event.target.value);
    };

    const handleSearchKeyChange = (event) => {
        setSearchKey(event.target.value);
    };

    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearchButtonClick = () => {
        // 검색 버튼 클릭 시 실행될 코드
        const filtered = QnaData.filter((item) => {
            const matchesDate = searchDate === 'all' || item.date.includes(searchDate);
            const matchesKey = item[searchKey].toLowerCase().includes(searchText.toLowerCase());
            return matchesDate && matchesKey;
        });
        setFilteredItems(filtered);
    };

    return (
        <div className='qna_filter_container'>
            <div className="qna_board_sort">
                <select name="board_category" value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="1" >전체</option>
                    <option value="2">상품문의</option>
                    <option value="3">배송문의</option>
                    <option value="4">주문/결제</option>
                    <option value="5">취소문의</option>
                    <option value="6">반품/교환</option>
                    <option value="7">환불문의</option>
                    <option value="8">재입고문의</option>
                    <option value="9">기타문의</option>
                    <option value="10"></option>
                </select>
                <form className="qna_board_find">
                    <fieldset>
                        <legend>게시물 검색</legend>
                        <select name="search_date" id="search_date" value={searchDate} onChange={handleSearchDateChange}>
                            <option value="period">기간</option>
                            <option value="all">전체</option>
                            <option value="week">일주일</option>
                            <option value="month">한달</option>
                            <option value="month3">세달</option>
                        </select>
                        <select name="search_key" id="search_key" value={searchKey} onChange={handleSearchKeyChange}>
                            <option value="subject">제목</option>
                            <option value="content">내용</option>
                            <option value="writer_name">작성자</option>
                            <option value="product">상품정보</option>
                        </select>
                        <input type="text" value={searchText} onChange={handleSearchTextChange} />
                        <button className="qna_board_find_btn" onClick={handleSearchButtonClick}>찾기</button>

                        {/* <input type="text" /><Link to="#" class="qna_board_find_btn">찾기</Link> */}
                    </fieldset>
                </form>
            </div>
        </div>
    );
};
export default QnaFilter;