import { useEffect } from "react";
import { useLocation } from "react-router-dom";


// 페이지 이동시 스크롤 맨 위로 이동
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [pathname]);

    return null;

}