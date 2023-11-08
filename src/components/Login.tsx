import { FunctionComponent } from 'react'
import ReactDOM from 'react-dom'
import '../styles/login.css'
interface LoginProps {
  isLoginVisible: boolean;
  toggleHide: () => void;
  closeLoginOpenCreate: () => void
}


const Login: FunctionComponent<LoginProps> = ({ isLoginVisible, toggleHide, closeLoginOpenCreate  }) => {
  
  const back = () => {
    toggleHide()
    history.pushState(null, "", "/")
  }

  if (!isLoginVisible) return null

  return (
    ReactDOM.createPortal(
      <>
        <div className="login-overlay" />
        <div className="login-blur">
          <div className="login-dialog">
            <div className="modal-container">
              <div className="login-header">
                <h2>Login</h2>
                <button type='button' className="login-close-button" data-dismiss="modal" aria-label='Close' onClick={back}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="login-main-content-wrapper">
                <div className="email-container">
                  <div>Email address</div>
                  <input autoFocus type="text" placeholder='Enter your email' className='input email-input' required />
                </div>

                <div className="password-container">
                  <div>Password</div>
                  <input type="text" placeholder='Enter your password' className='input password-input' required />
                  <a href="" className="forgot-pass-hyperlink">
                    <div className="forgot-pass-label">Forgot your password?</div>
                  </a>
                  <button type='submit' className='submit submit-button'>LOGIN WITH EMAIL</button>
                </div>

                <div className="login-facebook-wrapper">
                  <div className="login-facebook-container">
                    <div className='line0'></div>
                    <div className='line'></div>
                    <button type='submit' className='submit submit-facebook-button'>LOGIN WITH FACEBOOK</button>
                  </div>
                </div>
              </div>

              <div className="login-footer-container">
                <div >Don't have an account?</div>
                <a className="sign-up-now" onClick={closeLoginOpenCreate}>Sign up now!</a>
              </div>

            </div>
          </div>
        </div>
      </>, document.body
    )
  )
}

export default Login