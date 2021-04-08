import React, { useState } from "react"
import { Link } from "gatsby"
import { navCenter, navHeader, logoIcon, navLinks, showNav, navSocialLinks, logoBtn} from '../css/navbar.module.css'
import { FaAlignLeft} from "react-icons/fa"
import vinculos from "../constants/links"
import socialIcons from "../constants/social-icons"
import logo from "../images/logos/peli_naranja.svg"

const Navbar = () => {
  const [isOpen, setNav] = useState()
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav >
      <div className={navCenter}>
        <div className={navHeader}>
          <img src={logo} alt="Firma de Peli" height="50" className="logo"/>
          <button type="button" className={logoBtn} onClick={toggleNav}>
            <FaAlignLeft className={logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${navLinks} ${showNav}`
              : `${navLinks}`
          }
        >
          {vinculos.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            )
          })}
        </ul>
        <div className={navSocialLinks}>
          {socialIcons.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

