import React, { useState, useEffect } from 'react';
import '../../pages/Cart/Cart.css';
import CartHeader from '../../pages/Cart/CartHeader';
import CartList from '../../pages/Cart/CartList';
import CartTotal from '../../pages/Cart/CartTotal';
import { Link } from 'react-router-dom';



const Cart = ({ cart, convertPrice }) => {

    // 상태 관리할 state 추가
    const [cartState, setCartState] = useState(cart);
    // 전체 선택 체크 여부 상태
    const [isAllChecked, setIsAllChecked] = useState(false);
    // 선택된 아이템 상태
    const [selectedItems, setSelectedItems] = useState([]);
    // 선택된 상품들의 final_price 합 상태 추가
    const [selectedTotal, setSelectedTotal] = useState(0);
    // 선택된 아이템의 합계 상태
    const [selectedItemsTotal, setSelectedItemsTotal] = useState(0);


    useEffect(() => {
        const total = calculateSelectedTotal();
        setSelectedItemsTotal(total);
    }, [selectedItems, cart]);

    const updateSelectedTotal = (total) => {
        setSelectedTotal(total);
    };

    const handleCheckAll = () => {
        const updatedIsAllChecked = !isAllChecked;
        setIsAllChecked(updatedIsAllChecked);
        const updatedSelectedItems = updatedIsAllChecked ? cartState.map(item => item.id) : [];
        setSelectedItems(updatedSelectedItems);
    };

    const onDecrease = (itemId) => {
        setCartState((prevCart) =>
            prevCart.map((item) =>
                item.id === itemId
                    ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
                    : item
            )
        );
    };

    const onIncrease = (itemId) => {
        setCartState((prevCart) =>
            prevCart.map((item) =>
                item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const addToCart = (cartItem) => {
        setCartState((prevCart) => [...prevCart, cartItem]);
    };

    

    const handleRemoveFromCart = (itemId) => {
        setCartState((prevCart) =>
            prevCart.filter((item) => item.id !== itemId)
        );
    };


    const handleCheckbox = (itemId) => {
        setSelectedItems((prevSelectedItems) => {
            if (prevSelectedItems.includes(itemId)) {
                return prevSelectedItems.filter((id) => id !== itemId);
            } else {
                return [...prevSelectedItems, itemId];
            }
        });
    };

    const calculateSelectedTotal = () => {
        return selectedItems.reduce((total, itemId) => {
            const selectedItem = cart.find(item => item.id === itemId);
            if (selectedItem) {
                return total + selectedItem.productPriceFormatted * selectedItem.quantity;
            }
            return total;
        }, 0);
    };

    useEffect(() => {
        const total = calculateSelectedTotal();
        setSelectedItemsTotal(total);
    }, [selectedItems, cart]);





    return (
        <div className="Cart">
            <div className="path">
                <span>현재 위치</span>
                <ol>
                    <li>
                        <Link to="/">홈</Link>
                    </li>
                    <li title="현재 위치"> &gt; &nbsp; Cart</li>
                </ol>
            </div>
            <div className="title">
                <h2>CART</h2>
                <div className="txt_01">장바구니에 담긴 상품</div>
            </div>

            <CartHeader isAllChecked={isAllChecked} handleCheckAll={handleCheckAll} />

            <CartList
                cart={cartState} // 수정된 상태를 전달
                onDecrease={onDecrease}
                onIncrease={onIncrease}
                handleAddToCart={addToCart} // 상품 추가 함수 전달
                handleRemove={handleRemoveFromCart} // 상품 제거 함수 전달
                convertPrice={convertPrice}
                selectedItems={selectedItems} // 선택된 아이템 전달
                setSelectedItems={setSelectedItems}
                updateSelectedTotal={updateSelectedTotal}// updateSelectedTotal 함수 전달
            />

            <CartTotal
                cart={cartState}
                convertPrice={convertPrice}
                selectedItems={selectedItems} // 선택된 아이템 리스트 전달
                selectedItemsTotal={selectedItemsTotal} // 선택된 아이템 합계 전달
            />
        </div>
    );
};

export default Cart;