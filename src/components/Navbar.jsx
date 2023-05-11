import  { useState } from 'react'
import { links } from '../data'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className="nav">
      <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
        <ul className="nav__list">
          {links.map(({ name, icon, path }, index) => {
            return (
              <li
                className="nav__item"
                key={index}
                onClick={() => setShowMenu(!showMenu)}
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? 'nav__link active-nav' : 'nav__link'
                  }
                >
                  {icon}
                  <h3 className="nav__name">{name}</h3>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>

      <div
        className={`${
          showMenu ? 'nav__toggle burger animate-burger' : 'nav__toggle burger'
        }`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <div className="burger__wrapper">
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
