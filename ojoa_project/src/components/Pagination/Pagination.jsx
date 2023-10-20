import React from "react";
import "./Pagination.css";

function Pagination() {
    return (
        <div className="Pagination">
            {/* <!-- 페이지네이션 --> */}
            <div className="pl_page">
                <ul className="pl_pagination pl_modal">
                    <li><a href="#" className="pl_first">처음 페이지</a></li>
                    <li><a href="#" className="pl_arrow pl_left">◀</a></li>
                    <li><a href="#" className="pl_active pl_num">1</a></li>
                    <li><a href="#" className="pl_num">2</a></li>
                    <li><a href="#" className="pl_num">3</a></li>
                    <li><a href="#" className="pl_num">4</a></li>
                    <li><a href="#" className="pl_num">5</a></li>
                    <li><a href="#" className="pl_num">6</a></li>
                    <li><a href="#" className="pl_num">7</a></li>
                    <li><a href="#" className="pl_num">8</a></li>
                    <li><a href="#" className="pl_num">9</a></li>
                    <li><a href="#" className="pl_arrow pl_right">▶</a></li>
                    <li><a href="#" className="pl_last">끝 페이지</a></li>
                </ul>
            </div>
        </div>
    )
};

export default Pagination;