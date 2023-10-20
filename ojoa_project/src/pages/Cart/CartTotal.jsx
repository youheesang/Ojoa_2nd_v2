import '../../pages/Cart/Cart.css';
import { useEffect, useState } from "react";

const CartTotal = ({ cart, convertPrice, selectedItemsTotal  }) => {

    const [selectedTotal, setSelectedTotal] = useState(0); // 선택된 항목의 가격 합 상태 추가

    // 선택된 아이템의 가격 합 계산
    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => {
            const itemPrice = item.productPriceFormatted * item.quantity;
            return total + itemPrice;
        }, 0);
    }; //얘는 수량 올리면 합계는 올라가는데 선택이 안됨

    const totalPayment = selectedItemsTotal; // 선택된 아이템 가격 합을 추가(근데 수량 올리면 합계반영안됨)


    return (
        <div className="CartTotal">

            <div className="PriceBox">

                <div className="total_price">
                    <p className="cart_product_total_price">상품금액</p>
                    <p className="cart_product_price">{convertPrice(totalPayment)}원</p>
                </div>


                <div className="pay_plus">
                    <img src={"../images/plus.png"} alt="plus" />
                </div>

                <div className="delivery">
                    <p className="cart_product_delivery">배송비</p>
                    <p className="cart_product_delivery_price">무료</p>
                </div>

                <div className="pay_plus">
                    <img src={"../images/equal.png"} alt="equal" />
                </div>

                <div className="payment">
                    <p className="cart_prouct_payment">총 합계</p>
                    {/* <p className="cart_prouct_payment_price">{convertPrice(totalPayment)}원</p> */}
                    <p className="cart_prouct_payment_price">{convertPrice(totalPayment)}원</p> {/* 선택된 아이템 가격 합을 추가 */}
                </div>
            </div>

            <div className="cart_info">
                <ul className="cart_info_1">
                    <li>Ojoa의 모든 상품은 100,000원 이상 구매시 무료배송 입니다.</li>
                    <li>결제 후 주소, 옵션 등 정보가 변경된 경우 교환이 불가하오니 신중히 구매 부탁드립니다.</li>
                    <li>장바구니 상품은 최대 30일간 저장됩니다.</li>
                </ul>
            </div>

            {/* <-------------  여기부터 버튼 시작   -----------------> */}
            <div className="final_btns">
                <div className="button">
                    <p className="btnText">CANCEL</p>
                    <div className="btnTwo">
                        <p className="btnText2">X</p>
                    </div>
                </div>

                <div className="button">
                    <p className="btnText">PAY NOW</p>
                    <div className="btnTwo">
                        <p className="btnText2">GO!</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default CartTotal;