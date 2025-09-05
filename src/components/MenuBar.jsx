import { useState } from "react";
import '../styles/MenuBar.css';
import MenuBarIndividualButton from "./MenuBarIndividualButton";


const menuList = [
  { name: "Home", path: "/" },
  { name: "Computer Science", path: "/computer-science" },
  { name: "Chemistry", path: "/chemistry" },
  { name: "Physics", path: "/physics" },
  { name: "Biology", path: "/biology" },
  { name: "Further Pure Math", path: "/further-pure-math" },
  { name: "Math B", path: "/math-b" },
  { name: "Business", path: "/business" },
];


export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Backdrop appears when menu is open */}
      {open && <div className="dimBackdrop" onClick={() => setOpen(false)} />}

      <div className="menuBarWrapper" onClick={() => setOpen(!open)}>
        <div className={`menuBarCircleContainer ${open ? "active" : ""}`}>
          <hr />
          <hr />
          <hr />
        </div>

        {/* The menuList will appear beside the hamburger menu */}
        {open && (
          <div className="menuBarClickerContainer">
            <MenuBarIndividualButton menuList={menuList}/>
          </div>
        )}
      </div>
    </>
  );
}
