import { Link } from "react-router-dom";

function MenuBarIndividualButton({ menuList }) {
  return (
    <>
      {menuList.map((menu, index) => (
        <Link
          key={index}
          to={menu.path}
          className="menuBarIndividualButtonContainer"
        >
          <div
            className="smallInnerMenuBarIndividualFirst"
            id={menu.name.toLowerCase().replace(/\s+/g, "") + "subjectBmenuBarIndividualButtonContaineruttonContainer"}
          >
            <p>{menu.name.charAt(0).toUpperCase()}</p>
          </div>
          <div className="smallInnerMenuBarIndividualSecond">
            {menu.name}
          </div>
        </Link>
      ))}
    </>
  );
}

export default MenuBarIndividualButton