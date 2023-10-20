import '../MyShop/Mileage.css';
import React, { useEffect } from 'react';
import Pagination from '../../../components/Pagination/Pagination';

function MileageUnavailList() {
    
    return (
        <div className='MileageUnavailList'>
            <div id='wrap'>
                <div id='container'>
                    <div id='contents'>

                        <div className='UnavailList_inside'>
                            <div className='Base_Table_TypeList'>
                                <table border="1" summary>
                                    <thead><tr>
                                        <th scope="col">주문날짜</th>
                                        <th scope="col">적립금</th>
                                        <th scope="col">관련 주문</th>
                                        <th scope="col">사용가능 예정일</th>
                                        <th scope="col">내용</th>
                                    </tr>
                                    </thead>
                                    <tbody className=" center">
                                        <tr className="ec-base-table">
                                            <td>2023-06-07</td>
                                            <td className="right">5,000원</td>
                                            <td>철의 왕좌</td>
                                            <td className="left">2023-09-08</td>
                                            <td className="left">구매 적립금</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <Pagination />
                    {/* <div className="ec-base-paginate"><a className="first"><img src="/images/btn_page_first.gif" alt="첫 페이지" /></a>
                        <a><img src="/images/btn_page_prev.gif" alt="이전 페이지" /></a>
                        <ol>
                            <li className="record"><p href="" className="this">1</p></li>
                        </ol>
                        <a><img src="/images/btn_page_next.gif" alt="다음 페이지" /></a>
                        <a className="last"><img src="/images/btn_page_last.gif" alt="마지막 페이지" /></a>
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default MileageUnavailList;