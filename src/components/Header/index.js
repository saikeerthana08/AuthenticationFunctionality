// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/" className="link">
      <p className="link-item">Home</p>
    </Link>
    <Link to="/about" className="link">
      <p className="link-item">About</p>
    </Link>
  </div>
)

export default Header
