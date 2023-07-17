import { NavLink, useNavigate } from 'react-router-dom';
import './header.scss';
import { FaShoppingCart, FaBars } from "react-icons/fa"
import Logo from './Logo';
export default function Header({ cartItems }) {
  const navigate = useNavigate();
  return (
    <header>
      <div className="container">
        <Logo />
        <nav>
          <ul>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
            <li><NavLink to={'/services'}>Services</NavLink></li>
            <li><NavLink to={'/categories'}>Categories</NavLink></li>
            <li><NavLink to={'/contact'}>Contact</NavLink></li>
          </ul>
        </nav>
        <div className='btns'>
          <button onClick={() => navigate('/shopping')} className='shopping-car'><FaShoppingCart /> {cartItems.length === 0 ? null : <span>{cartItems.length}</span>}</button>
        </div>
        <span className='bar' onClick={() => {
          document.querySelector("nav").classList.toggle("display")
        }}><FaBars /></span>
      </div>
    </header>
  )
}