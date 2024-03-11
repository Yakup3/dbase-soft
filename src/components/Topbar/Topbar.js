import React, { useEffect, useRef, useState } from "react";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { PiRecordFill } from "react-icons/pi";
import { MdSportsSoccer } from "react-icons/md";
import { FaAngleDown, FaLink } from "react-icons/fa6";

import "./Topbar.css";

const menus = [
  { name: "HOME", icon: <FaHome color="#DD8E32" /> },
  { name: "SPORTS", icon: <MdSportsSoccer color="#DD8E32" /> },
  { name: "LIVE SPORTS", icon: <PiRecordFill color="#DD8E32" /> },
  { name: "SLOT", icon: null },
  { name: "LIVE CASINO", icon: null },
  { name: "VIRTUAL SPORTS", icon: null },
  { name: "SCRATCH", icon: null },
  { name: "BINGO", icon: null },
  { name: "BETGAMES", icon: null },
  { name: "AVIATOR", icon: null },
];

const socials = [
  {
    name: "Twitter",
    color: "#11A2ED",
    icon: <FaTwitter color="#11A2ED" size={14} />,
  },
  {
    name: "Facebook",
    color: "#395A94",
    icon: <FaFacebook color="white" size={14} />,
  },
  {
    name: "Instagram",
    color: "#E2455D",
    icon: <FaInstagram color="white" size={14} />,
  },
  {
    name: "Whatsapp",
    color: "#11B38D",
    icon: <FaWhatsapp color="white" size={14} />,
  },
];

export default function Topbar() {
  const [isSocialsMenuOpen, setIsSocialsMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleMenus, setVisibleMenus] = useState([]);
  const menusRef = useRef(null);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    if (menusRef.current) {
      const containerWidth = menusRef.current.offsetWidth;
      const menuItemWidth = 120;
      const availableWidth = containerWidth - 20;
      const visibleCount = Math.floor(availableWidth / menuItemWidth);
      setVisibleMenus(menus.slice(0, visibleCount));
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderLogo = () => {
    return (
      <div className="logo-container">
        <img className="logo" src={require("../../img/logo.png")} alt="logo" />
      </div>
    );
  };

  const renderSocialsMenu = () => {
    return (
      isSocialsMenuOpen && (
        <div className="socials-menu-container">
          <div className="socials-menu-top">
            {socials.map((social, index) => {
              return (
                <div
                  key={index}
                  className="socials-menu-item"
                  style={{
                    borderBottom: `0.14vw solid ${social.color}`,
                  }}
                >
                  {social.icon}
                </div>
              );
            })}
          </div>
          <div className="socials-menu-bottom">
            <button className="socials-menu-custom-button">Custom Btn</button>
            <button className="socials-menu-custom-button">Custom Btn</button>
          </div>
        </div>
      )
    );
  };

  const renderSocials = () => {
    return (
      <div className="socials-container">
        <div className="link-icon-container">
          <FaLink color="white" size={14} />
        </div>
        <div
          className="down-icon-container"
          onClick={() => setIsSocialsMenuOpen(!isSocialsMenuOpen)}
        >
          <FaAngleDown color="white" size={10} />
        </div>
        {renderSocialsMenu()}
      </div>
    );
  };

  const renderMenu = (menu, index) => {
    return (
      <div key={index} className="menu-item">
        {menu.icon}
        {menu.name}
      </div>
    );
  };

  const renderMenus = () => {
    return (
      <div ref={menusRef} className="menus-container">
        {visibleMenus.map(renderMenu)}
        {menus.length > visibleMenus.length && (
          <div className="menu-item" onClick={toggleMenu}>
            {`+${menus.length - visibleMenus.length}`}
            <IoMdMenu color="#DD8E32" size={18} />
          </div>
        )}
      </div>
    );
  };

  const renderDropdownMenu = (menu, index) => {
    return (
      <div key={index} className="dropdown-menu-item">
        {menu.icon}
        {menu.name}
      </div>
    );
  };

  const renderMenusDropdown = () => {
    return (
      isMenuOpen && (
        <div className="dropdown-menu">
          {menus.slice(visibleMenus.length).map(renderDropdownMenu)}
        </div>
      )
    );
  };

  const renderLoginButton = () => {
    return <button className="login-button">LOGIN</button>;
  };

  const renderRegisterButton = () => {
    return <button className="register-button">REGISTER</button>;
  };

  const renderPhoneIcon = () => {
    return (
      <div className="phone-icon-container">
        <FaPhone color="white" size={14} />
      </div>
    );
  };

  const renderButtons = () => {
    return (
      <div className="buttons-container">
        {renderLoginButton()}
        {renderRegisterButton()}
        {renderPhoneIcon()}
      </div>
    );
  };

  const renderTime = () => {
    return <span className="time">GMT +3 23:35</span>;
  };

  const renderLanguageSelector = () => {
    return (
      <div className="language-selector-container">
        <span className="language-selector">EN</span>
        <FaAngleDown color="white" size={14} />
      </div>
    );
  };

  return (
    <div className="topbar-container">
      {renderLogo()}
      {renderSocials()}
      {renderMenus()}
      {renderMenusDropdown()}
      {renderButtons()}
      {renderTime()}
      {renderLanguageSelector()}
    </div>
  );
}
