import React, { useState, useEffect, useRef } from 'react';
import './ModalBasic.css';
import mockList from '../../data/ItemsData';

function ModalBasic({ setModalOpen }) {

    const [inputValue, setInputValue] = useState('');
    const [searchResults, setSearchResults] = useState([]); // 검색 결과 상태

    // 모달 끄기 (X버튼 onClick 이벤트 핸들러)
    const closeModal = () => {
        setModalOpen(false);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value); // 입력한 텍스트 상태 업데이트
    };

    // // 모달 외부 클릭시 끄기 처리
    // // Modal 창을 useRef로 취득
    // const modalRef = useRef(null);

    // useEffect(() => {
    //     // 이벤트 핸들러 함수
    //     const handleClickOutside = (event) => {
    //         // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
    //         if (modalRef.current && !modalRef.current.contains(event.target)) {
    //             closeModal();
    //         }
    //     };

    //     // 이벤트 핸들러 등록
    //     document.addEventListener('mousedown', handleClickOutside);

    //     return () => {
    //         // 이벤트 핸들러 해제
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, []);

    // useEffect(() => {
    //     // inputValue가 변경될 때마다 alert 메시지를 띄움
    //     if (inputValue !== '') {
    //         // alert('\n [상품 검색] 기능은 현재 준비중 입니다.\n\n Text 입력도 허용하지 않습니다.');
    //     }
    // }, [inputValue]);

    // const handleModalClick = (event) => {
    //     event.stopPropagation();
    // };

    const handleSearchButtonClick = () => {
        // alert('\n [상품 검색] 기능은 현재 준비중 입니다.');
        if (inputValue !== '') {
            // mockList에서 상품 이름으로 검색하여 결과를 필터링
            const searchResults = mockList.filter((product) =>
                product.productName.includes(inputValue)
            );
            setSearchResults(searchResults); // 검색 결과 상태 업데이트
        }
    };

    // const handleSearchResults = (results) => {
    //     setSearchResults(results); // 검색 결과 상태 업데이트
    // };

    return (
        <div className="Modal_container">
            <div className="Modal_container2">
                <img onClick={closeModal} className="madal_close_rotate" src="./images/search_X.png" alt="search_x" />
                <form id="search-form-view">
                    <input
                        name="keyword"
                        className="inputTypeText"
                        value={inputValue}
                        type="text"
                        onChange={handleInputChange}
                        autoFocus
                    />
                    <img
                        src="./images/search_icon.png"
                        alt="검색"
                        className="search_btn"
                        onClick={handleSearchButtonClick}
                    />
                </form>
            </div>
            {/* 검색 결과 출력 */}
            <div className="search-container">
                <div className="search-results">
                {searchResults.map((product) => (
                    <div key={product.id} className="search-result-item">
                        <h3>{product.productName}</h3>
                        <p>{product.productPriceFormatted}원</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default ModalBasic;