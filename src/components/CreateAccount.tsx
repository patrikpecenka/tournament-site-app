import { FunctionComponent, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactDOM from 'react-dom'
import '../styles/login.css'
interface createAccountProps {
  isCreateVisible: boolean,
  toggleHide1: () => void,
  closeCreateOpenLogin: () => void
}

const CreateAccount: FunctionComponent<createAccountProps> = ({ isCreateVisible, toggleHide1, closeCreateOpenLogin }) => {
  const [email, setEmail] = useState("")
  const [allowRegister, setAllowRegister] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const navigate = useNavigate()

  const onRegisterRedirectClicked = () => {
    if(allowRegister == false){
      setError("Please enter valid email adress")
    } else {
      navigate(`/register?email=${email}`)
      toggleHide1()
    }
  }

  const back = () => {
    toggleHide1()
    history.pushState(null, "", "/")
    setError(null)
    setEmail("")
  }

  const isValidEmail = (emailValue: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (emailRegex.test(emailValue)){
      setError(null)
      setAllowRegister(true)
    } else {
      if(emailValue === ""){
        setAllowRegister(false)
      } else {
        setError("Please enter valid email adress")
        setAllowRegister(false)
      }
    }
  }

  useEffect(() =>{
    if(isCreateVisible){
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  },[isCreateVisible]);

  useEffect(() => {
    isValidEmail(email)    
  }, [email]);


  if(!isCreateVisible) return null



  return(
    ReactDOM.createPortal(
      <>
        <div className="register-overlay" />
        <div className="register-blur">
          <div className="register-dialog">
            <div className="register-modal-container">
              <div className="register-header">
                <h2>Create account</h2>
                <button type='button' className="register-close-button" data-dismiss="modal" aria-label='Close' onClick={back}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
    
              <div className="main-content-wrapper">
                <div className="email-container">
                  <div>Email address</div>
                  <input autoFocus type="text" placeholder='Enter your email' className='input email-input' value={email} required onChange={(e) => setEmail(e.currentTarget.value)}/>
                  <p className='error-message'>{error && <h3 style={{color: "red"}}>{error}</h3>}</p>
                </div>
    
                <div className="password-container">
                  <button type='submit' className='submit submit-button' onClick={onRegisterRedirectClicked}>SIGN UP AND PLAY!</button>
                </div>
              </div>
    
              <div className="social-message">
                <div className='line1'></div>
                <p className="message">Login with social accounts</p>
                <div className='line2'></div>
              </div>
    
              <div className="register-facebook-wrapper">
                <div className="register-facebook-container">
                  <button type='submit' className='submit submit-reg-fb-button'>SIGN UP WITH FACEBOOK</button>
                </div>
              </div>
    
              <div className="register-footer-container">
                <div>Already registered?</div>
                <a className="sign-in-now" onClick={closeCreateOpenLogin}>Login now!</a>
              </div>
    
            </div>
          </div>
        </div>
      </>, document.body
    )
  )
}
export default CreateAccount