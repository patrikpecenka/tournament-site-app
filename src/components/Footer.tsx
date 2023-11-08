import 'styles/FooterStyles.css'
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandFacebook } from '@tabler/icons-react'
import logo from "/utopia-logo.png"

const Footer = () => {
  return(
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-main-content">
          <div className="footer-logo-container">
            <img className="footer-logo" src={logo} alt="logo" />
          </div>
          <div className="footer-links-wrapper">
            <div className="links-container">
              <a href="#" target="_blank" rel="noopener noreferrer" className="link--">About</a>
              <a href="#1" target="_blank" rel="noopener noreferrer" className="link--">Support</a>
              <a href="#2" target="_blank" rel="noopener noreferrer" className="link--">Privacy policy</a>
              <a href="#3" target="_blank" rel="noopener noreferrer" className="link--">Advertising</a>
              <a href="#4" target="_blank" rel="noopener noreferrer" className="link--">Terms</a>
              <a href="#5" target="_blank" rel="noopener noreferrer" className="link--">Developers</a>
              <a href="#6" target="_blank" rel="noopener noreferrer" className="link--">Sponsors</a>
              <a href="#6" target="_blank" rel="noopener noreferrer" className="link--">Sponsors</a>
              <a href="#6" target="_blank" rel="noopener noreferrer" className="link--">Sponsors</a>
              <a href="#6" target="_blank" rel="noopener noreferrer" className="link--">Sponsors</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-social-media-wrapper">
          <div className="soocial-media-container">
            <a href="" rel="noopener noreferrer" target="_blank" className='link--social'>
              <IconBrandInstagram/>
            </a>
            <a href="" rel="noopener noreferrer" target="_blank" className='link--social'>
              <IconBrandTwitter/>
            </a>
            <a href="" rel="noopener noreferrer" target="_blank" className='link--social'>
              <IconBrandYoutube/>
            </a>
            <a href="" rel="noopener noreferrer" target="_blank" className='link--social'>
              <IconBrandFacebook/>
            </a>
          </div>
        </div>

    </div>
  )
}

export default Footer