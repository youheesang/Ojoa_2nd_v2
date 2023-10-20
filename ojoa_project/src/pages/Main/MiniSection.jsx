import '../../pages/Main/Main.css';
import React from 'react';
import { useState } from 'react';
import MiniItems from './MiniItems';


// 미니섹션에 있는 아이템들

const mockMinipro = [
    {
        id: 0,
        imgNo: 0,
        blacklabel: "2022 F/W BEST",
        mini_1: "[Ojoa 단독입점]",
        mini_2: "2022 SEASON BEST",
        proname: "천연 소가죽 소파",
        proprice: "123,450원",
        sale: "5%"
    },

    {
        id: 1,
        imgNo: 1,
        blacklabel: "브랜드 기획전",
        mini_1: "[BROWN TOM] X Ojoa",
        mini_2:"Sepcial Colaboration",
        proname: "브라운 거실의자",
        proprice: "59,200원",
        sale: "2%"
    },

    {
        id: 2,
        imgNo: 2,
        blacklabel: "Ojoa's BEST ITEM",
        mini_1: "[ACE BED] 입점상품", 
        mini_2: "BRANDNEW ITEM",
        proname: "노르웨이원목 침대",
        proprice: "562,456원",
        sale: "10%"
    },

    {
        id: 3,
        imgNo: 3,
        blacklabel: "SPECIAL ITEM",
        mini_1: "[ROYAL FAMILY]",
        mini_2: "ENGLAND DESIGN BEST",
        proname: "왕실 스탠 조명",
        proprice: "956,000원",
        sale: "23%"
    },

    {
        id: 4,
        imgNo: 4,
        blacklabel: "해외 직배송",
        mini_1: "[L.IKEA X Ojoa] 해외 직구",
        mini_2: "SUMMER COLLECTION",
        proname: "고급 아일랜드 식탁",
        proprice: "3,423,406원",
        sale: "7%"
    },

    {
        id: 5,
        imgNo: 5,
        blacklabel: "CLASSIC ITEM",
        mini_1: "[BLACK LABEL]", 
        mini_2: "MODERN BAR ITEM",
        proname: "클래식 스탠드 의자",
        proprice: "456,456원",
        sale: "20%"
    }

] //mockMinipro



const MiniSection = () => {

    const miniLi = mockMinipro.map((content) => {
        // ... (ProductListItem 렌더링 코드)

        return (
            <li key={content.id}><MiniItems imgNo={content.imgNo} proname={content.proname} 
            blacklabel={content.blacklabel} mini_1={content.mini_1} mini_2={content.mini_2}
            proprice={content.proprice} sale={content.sale}/></li>
        );
    });



    return (
        // main_col -> MiniSection
        <div className="MiniSection">
            {miniLi}
        </div>

    );
};

export default MiniSection;