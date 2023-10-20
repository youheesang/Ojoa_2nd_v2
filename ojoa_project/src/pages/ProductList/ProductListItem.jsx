import React from "react";
import "./ProductListItem.css";
import { Link } from "react-router-dom";
import { Chair, Bed, Sofa, Closet, Bookshelf, Lighting } from '../../data/ItemsData'

const ProductListItem = ({ content, onSelect }) => {

    const productPrice = content.productPriceFormatted.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");



    return (
        <div className="ProductListItem" onClick={onSelect}>
            <section className="pl_section">
                <ul className="prodItems">
                    <li className="pl_thumb_img">
                        <a>
                            <Link to={{
                                key: content.id,
                                pathname: `/ProductDetail/${content.id}`,
                                state: { productData: content } // 선택한 상품 정보를 state로 전달
                            }}>
                                <img src={`/thumbs/${content.imgNo}_1.jpg`} alt={`Product ${content.productName}`} />
                            </Link>
                            <div className="pl_icon">
                                <a className="pd_cart">
                                    <img src={"../images/cart_icon.png"} alt="장바구니" />
                                </a>
                                <a className="pd_heart">
                                    <img src={"../images/heart_icon.png"} alt="관심상품" />
                                </a>
                            </div>
                        </a>
                    </li>

                    <li className="pl_a"><a><Link to="/ProductDetail">{content.productName}</Link></a></li>
                    <li className="pl_b"><a><Link to="/ProductDetail">{productPrice}원
                        <span> {content.productPromotion}%</span></Link></a></li>
                    <li className="pl_c"><a><Link to="/ProductDetail">{content.productInfo}</Link></a></li>
                    <li className="pl_d"><a><Link to="/ProductDetail">리뷰 <span>{content.productReview}</span> 평점 *
                        <span>{content.productGrade}/5</span></Link></a></li>
                </ul>
            </section>
        </div >
    )


}; //ProductList

export default ProductListItem;