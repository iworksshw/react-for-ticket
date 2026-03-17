import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import styles from './PubDropdown.module.scss';

function PubDropdown({list, defaultVal, locn}) {
    const [open, setOpen] = useState(false);
    const [currentVal, setCurrentVal] = useState(defaultVal);
    const dropdownRef = useRef(null);

    // 바깥 클릭 시 닫기
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleItemClick = (lang) => {
        setCurrentVal(lang);
        setOpen(false);
    };

    // 마지막 메뉴에서 Tab키 누르면 닫기
    const handleLastItemKeyDown = (e) => {
        if (e.key === "Tab" && !e.shiftKey) {
            setOpen(false);
        }
    };

    return (
        <div className={`${styles.pubDropdown} ${locn ? styles.pubDropdownLocn : ''}`} ref={dropdownRef}>
            <div className={styles.dropArea} >
                <button
                    className={`${styles.btnDrop} ${open ? styles.open : ""}`}
                    type="button"
                    title={open ? "닫힘" : "열림"}
                    onClick={() => setOpen((prev) => !prev)}
                >
                    {defaultVal}
                </button>
                <ul className={styles.dropMenu} style={{ display: open ? "block" : "none" }}>
                    {list.map((lang, index) => (
                            <li key={index}><a href="#" tabIndex="0" onClick={() => handleItemClick(lang)} onKeyDown={index === list.length -1 ? handleLastItemKeyDown : null}>{lang}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PubDropdown;



// function ComDropdown() {
    
//     return (
//         <div className={styles.comDropdown}>
//             <div className={styles.dropArea}>
//                 <button className={styles.btnDrop} type="button">
//                     한국어
//                 </button>
//                 <ul className={styles.dropMenu}>
//                     <li><a href="javascript:void(0)">영어</a></li>
//                     <li><a href="javascript:void(0)">중국어</a></li>
//                     <li><a href="javascript:void(0)">일본어</a></li>
//                 </ul>
//             </div>
//         </div>
//     );
// }
// export default ComDropdown;

// function initDropdowns() {
//     const dropdowns = document.querySelectorAll(".comDropdown");

//     if(!dropdowns) return;

//     dropdowns.forEach(dropdown => {
//         const btn = dropdown.querySelector(".btnDrop");
//         const menu = dropdown.querySelector(".dropMenu");
//         if (!btn || !menu) return;

//         // 초기 상태
//         btn.setAttribute("title", "열림");
//         menu.style.display = "none";

//         // 닫기
//         const close = () => {
//             btn.setAttribute("title", "열림");
//             menu.style.display = "none"; 
//             btn.classList.remove("open");
//         };

//         // 열기
//         const open = () => {
//             // 드롭다운 2개일때, 하나만 열리도록 처리
//             dropdowns.forEach(d => {
//                 if (d !== dropdown) {
//                     const b = d.querySelector(".btnDrop");
//                     const m = d.querySelector(".dropMenu");
//                     if (b && m) {
//                         b.setAttribute("title", "열림");
//                         m.style.display = "none";
//                         b.classList.remove("open");
//                     }
//                 }
//             });

//             // 자기 자신 열기
//             btn.setAttribute("title", "닫힘");
//             menu.style.display = "block";
//             btn.classList.add("open");

//         };

//         // 토글 메뉴 클릭
//         const toggle = () => (btn.getAttribute("title") === "닫힘" ? close() : open());
//         btn.addEventListener("click", e => { 
//             e.stopPropagation(); 
//             toggle(); 
//         });

//         // 외부 클릭 시 닫기
//         document.addEventListener("click", e => { 
//             if (!dropdown.contains(e.target)) close(); 
//         });

//         // 드롭다운 메뉴 마지막에서 tab키 누르면 닫기
//         const items = menu.querySelectorAll("li a, li button, li [tabindex]:not([tabindex='-1'])");
//         if (items.length > 0) {
//             const lastItem = items[items.length - 1];
//             lastItem.addEventListener("keydown", e => {
//                 if (e.key === "Tab" && !e.shiftKey) { 
//                     close(); 
//                 }
//             });
//         }

//     });
// }