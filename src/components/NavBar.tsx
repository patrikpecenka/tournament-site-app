import 'styles/NavBarStyles.css'
import '../styles/login.css'
import { NavData } from '../constant/NavData'
import Login from './Login'
import CreateAccount from './CreateAccount'
import useModal from 'hooks/useModal'
import { Link } from 'react-router-dom'
import logo from "/utopia-logo.png"

const navBar = () => {
	const { isLoginVisible, setIsLoginVisible, isCreateVisible, toggleHide1, closeLoginOpenCreate, closeCreateOpenLogin } = useModal()
	
	const toggleHide = () => {
    setIsLoginVisible(!isLoginVisible)
  }

	return (
		<div className="navbar-container">
			<div className="navbar-logo-container">
				<img className='navbar-logo' src={logo}alt="logo" /> 
				<p className='navbar-site-name'>champutopia</p>
			</div>
			<ul className="list-container">
				{NavData.map((item, index) => (
					<li key={index} className="item-list">
						<a href={item.url} className={item.className}>
							{item.title}
						</a>
					</li>
				))}
			
			<Link to="/signup"><button className='account-creation create-button' onClick={toggleHide1}>Create account</button></Link>
			<Link to="/login"><button className='account-creation login-button' onClick={toggleHide}>Login</button></Link>

			<Login
				isLoginVisible={isLoginVisible}
				toggleHide={toggleHide}
				closeLoginOpenCreate={closeLoginOpenCreate}
			/>
			<CreateAccount
				isCreateVisible={isCreateVisible}
				toggleHide1={toggleHide1}
				closeCreateOpenLogin = {closeCreateOpenLogin}
			/>
			</ul>
		
		</div>
	)
}

export default navBar