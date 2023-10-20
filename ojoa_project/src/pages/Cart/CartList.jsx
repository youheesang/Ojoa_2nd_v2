import '../../pages/Cart/Cart.css';
import React, { useState, useEffect } from "react";
import mockList from '../../data/ItemsData'
// import { NavLink, Routes, Route, useParams, Link } from "react-router-dom"



const CartList = ({ cart, onDecrease, onIncrease, handleRemove, convertPrice, selectedItems, setSelectedItems, updateSelectedTotal }) => {

    const handleCheckboxChange = (itemId) => {
        setSelectedItems(prevSelectedItems => {
            if (prevSelectedItems.includes(itemId)) {
                return prevSelectedItems.filter(id => id !== itemId);
            } else {
                return [...prevSelectedItems, itemId];
            }
        });
    };


    // 선택된 상품들의 final_price 합 계산하는 로직 추가
    // const selectedItemsTotal = selectedItems.reduce((total, itemId) => {
    //     const selectedItem = cart.find(item => item.id === itemId);
    //     if (selectedItem) {
    //         return total + selectedItem.productPriceFormatted * selectedItem.quantity;
    //     }
    //     return total;
    // }, 0);



    return (
        <div className="CartListAll">
            {cart.map((item) => (
                <div className="CartList">
                    <table className="list_detail">
                        <tbody>
                            <tr key={item.id}>
                                <td>

                                    <input
                                        type="checkbox"
                                        checked={selectedItems.includes(item.id)}
                                        onChange={() => handleCheckboxChange(item.id)}
                                    />

                                </td>

                                <td><img className="cart_img" src={`/thumbs/${item.imgNo}_1.jpg`} alt={`Product ${item.productName}`} /></td>
                                <td>
                                    <div className="cart_mininame">[{item.productInfo}]</div>
                                    <td><a className="cart_mainname" href="#">{item.productName}</a></td>
                                </td>
                                <td className="cart_saleprice">
                                    <sup>{item.productPromotion}&#37;&#8595;</sup>
                                    <div className="cart_li_price">{convertPrice(item.productPriceFormatted)}원</div>
                                </td>
                                <td>
                                    <div className="cart_product_count">
                                        <img
                                            className="minus"
                                            src={"../images/minus.png"}
                                            alt="minus"
                                            onClick={() => onDecrease(item.id)} // Pass item.id to identify which product to update
                                        />
                                        <div className="count">
                                            <span>{item.quantity}</span>
                                        </div>
                                        <img
                                            className="plus"
                                            src={"../images/cartplus.png"}
                                            alt="plus"
                                            onClick={() => onIncrease(item.id)} // Pass item.id to identify which product to update
                                        />
                                    </div>
                                </td>
                                <td>무료배송</td>
                                <td className="final_price">
                                    {/* {convertPrice(item.productPriceFormatted)}원 */}
                                    {convertPrice((item.productPriceFormatted) * item.quantity)}원
                                    <img
                                        src={"/images/cancel.png"}
                                        alt="delete"
                                        onClick={() => handleRemove(item.id)}
                                        className="product_remove"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};


// useEffect(() => {
//     const selectedTotal = cart.reduce((total, item) => {
//         if (selectedItems.includes(item.id)) {
//             return total + item.productPriceFormatted * item.quantity;
//         }
//         return total;
//     }, 0);
//     updateSelectedTotal(selectedTotal); // 수정: 부모 컴포넌트의 상태 업데이트 함수 호출
// }, [cart, selectedItems, updateSelectedTotal]);

export default CartList;