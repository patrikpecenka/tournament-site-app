import { FunctionComponent, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import '../styles/Register.css'
import { DropdownData } from 'constant/DropdownData';
import { useLocation, useNavigate } from 'react-router-dom';

interface RegisterProps {
  isLoginVisible: boolean;
  toggleHide: () => void;
  closeLoginOpenCreate: () => void
}

//const queryParameters = new URLSearchParams(window.location.search)>
//const email = queryParameters.get("email")

const Register: FunctionComponent<RegisterProps> = ({ }) => {
  const [activeDay, setActiveDay] = useState(false)
  const [activeMonth, setActiveMonth] = useState(false)
  const [activeYear, setActiveYear] = useState(false)
  const [activeCountry, setActiveCountry] = useState(false)
  //const [email, setEmail] = useState("")

  const location = useLocation()
  const navigate = useNavigate()

  //const emailString = JSON.stringify(location.search)

  useEffect(() => {
    window.addEventListener("popstate", (e) => {
      e.preventDefault
      navigate(location)
    })
  })


  /*const [dayValue, setDayValue] = useState("")
  const [monthValue, setMonthValue] = useState("")
  const [yearValue, setYearValue] = useState("")

  const BirthdayRaw = [dayValue, monthValue, yearValue]
  const birthdayValidation = () => {
    const BDAY_IN_MILISECONDS = new Date(
      parseInt(BirthdayRaw[2],10),
      parseInt(BirthdayRaw[1], 10) - 1,
      parseInt(BirthdayRaw[0]), 10).getTime()
    const today = new Date().getTime()
    if(today - BDAY_IN_MILISECONDS > 410240038000){
      console.log(true)
    } else {
      console.log(false)
    }
  }*/


  //const submitValidation = () => {
   // const nicknameRegex = /^[a-zA-Z0-9]{2,13}$/gi
 // }/


  const handleDayChange = () => {
    setActiveDay(true)
    /*setDayValue(e.currentTarget.value)*/

  }

  const handleMonthChange = () => {
    setActiveMonth(true)
    /*setMonthValue(e.currentTarget.value)*/
  }

  const handleYearChange = () => {
    setActiveYear(true)
    /*setYearValue(e.currentTarget.value)*/
  }

  const handleCountryChange = () => {
    setActiveCountry(true)
  }


  return (
    ReactDOM.createPortal(
      <>
        <div className="register-overlay" />
        <div className="register-blur">
          <div className="register-dialog">
            <div className="register-page-modal-container">
              <div className="register-header">
                <h2>Champ Utopia</h2>
              </div>
              <div className="register-message">
                <p>OK, YOU ARE <span data-highlight="highlight">ALMOST </span>DONE!</p>
              </div>
              <div className="register-main-content-wrapper">
                <div className="register-nickname-container">
                  <input type="text" placeholder='ChampUtopia Nickname' className='r-input register-nickname-input' required />
                </div>

                <div className="register-name-container">
                  <input type="text" placeholder='First name' className='r-input register-first-name-input' required />
                  <input type="text" placeholder='Last name' className='r-input register-last-name-input' required />
                </div>

                <div className="register-password-container">
                  <input type="text" placeholder='Password' className='r-input register-password-input' required />
                </div>

                <div className="register-birthday">
                  <p>Birthday</p>
                </div>

                <div className="register-dropdown-wrapper">
                  <div className="register-dropdown-container">
                    <select className='birthday-day-dropdown' name="day" id="day" onChange={handleDayChange} style={{ color: activeDay ? "#000" : "#a7a7a7" }}>
                      <option value="" disabled selected hidden>Day</option>
                      {DropdownData.day.map((item, index) => (
                        <option value={item} key={index}>{item}</option>
                      ))}
                    </select>

                    <select className='birthday-month-dropdown' name="month" id="month" onChange={handleMonthChange} style={{ color: activeMonth ? "#000" : "#a7a7a7" }}>
                      <option value="" disabled selected hidden>Month</option>
                      {DropdownData.month.map((item, index) => (
                        <option value={index + 1} key={index}>{item}</option>
                      ))}
                    </select>

                    <select className='birthday-year-dropdown' name="year" id="year" onChange={handleYearChange} style={{ color: activeYear ? "#000" : "#a7a7a7" }}>
                      <option value="" disabled selected hidden>Year</option>
                      {DropdownData.year.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))}
                    </select>
                  </div>
                  <div className='country-dropdown-container'>
                    <select className='country-dropdown' name="country" id="country" onChange={handleCountryChange} style={{ color: activeCountry ? "#000" : "#a7a7a7" }}>
                      <option value="" disabled selected hidden>Country</option>
                      {DropdownData.country.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="register-button-container">
                  <button type='submit' className='submit register-submit-button' >CREATE ACCOUNT!</button>
                  <div className='terms-message'>By signing up to our service, you agree to our <a href="" className='terms-redirect'>Terms & Conditions</a> and <br /><a href='' className='terms-redirect'>Privacy Policy</a></div>
                </div>


              </div>

            </div>
          </div>
        </div>
      </>, document.body
    )
  )
}
export default Register