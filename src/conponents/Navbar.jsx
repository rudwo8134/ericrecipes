import React,{useState} from 'react'
import { Link } from 'gatsby'
import {FaAlignJustify} from 'react-icons/fa'
import logo from '../asset/images/logo.svg'

const Navbar = () => {
  const [show,setshow] = useState(false)

  return (
    <nav className='navbar'>
      <div className="nav-center">
        <div className="nav-header">
          <Link to='/'>
            <img src={logo} alt='simple recipe' />
          </Link>
          <button className='nav-btn' onClick={()=>setshow(!show)}>
            <FaAlignJustify/>
          </button>
        </div>
          <div className={show ? "nav-links show-links": "nav-links"} >
            <Link onClick={()=>setshow(false)} to='/' className="nav-link" activeClassName="active-link">home</Link>
            <Link onClick={()=>setshow(false)} to='/recipes' className="nav-link" activeClassName="active-link">Recipes</Link>
            <Link onClick={()=>setshow(false)} to='/tags' className="nav-link" activeClassName="active-link">tags</Link>
            <Link onClick={()=>setshow(false)} to='/about' className="nav-link" activeClassName="active-link">about</Link>
            <div className="nav-link contact-link">
              <Link  onClick={()=>setshow(false)} to='/contact' className="btn">contact</Link>
            </div>
          </div>

      </div>
    </nav>
  )
}

export default Navbar
