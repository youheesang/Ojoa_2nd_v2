import { useState } from 'react';
import ModalBasic from './ModalBasic';
import './ModalBasic.css';

// 모달을 노출하는 페이지
function Modal() {
    // 모달창 노출 여부 state
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

    // 모달창 노출
    const openSearchModal = () => {
        setIsSearchModalOpen(true);
    };

    return (
        <div className='SearchModal_container'>
            <img onClick={openSearchModal} src="/images/btn_search.png" alt="search" />
            {/* ModalBasic 컴포넌트에 isSearchModalOpen 값을 전달 */}
            {isSearchModalOpen && <ModalBasic setModalOpen={setIsSearchModalOpen} />}
        </div>
    );
}

export default Modal;