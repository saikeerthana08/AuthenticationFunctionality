// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const onClickBtn = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <>
      <button className="logout-btn" type="button" onClick={onClickBtn}>
        Logout
      </button>
    </>
  )
}

export default withRouter(LogoutButton)
