import 'styles/Error404.css'
import sad_robot from "/sad_robot.png"
import img_404 from "/img_404.png"


const NotFoundError = () => {

  const goBack = () =>{
    window.location.replace("http://localhost:3000/")
  }

  return (
    <div className='error-wrapper'>
      <div className="error-container">
        <img className='text' src={img_404} alt='404_img'/>
        <img className='robot' src={sad_robot} alt="sad_robot_img" />
      </div>
      <div className="error-return-wrapper">
        <button className="error-return-button" onClick={goBack}> Take me back!
          <div className="icon">
            <svg fill="#af508d" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  width="193px" height="193px" viewBox="0 0 45.58 45.58" stroke="#af508d">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> 
                <g> 
                  <path d="M45.506,33.532c-1.741-7.42-7.161-17.758-23.554-19.942V7.047c0-1.364-0.826-2.593-2.087-3.113 c-1.261-0.521-2.712-0.229-3.675,0.737L1.305,19.63c-1.739,1.748-1.74,4.572-0.001,6.32L16.19,40.909 c0.961,0.966,2.415,1.258,3.676,0.737c1.261-0.521,2.087-1.75,2.087-3.113v-6.331c5.593,0.007,13.656,0.743,19.392,4.313 c0.953,0.594,2.168,0.555,3.08-0.101C45.335,35.762,45.763,34.624,45.506,33.532z">
                  </path> 
                </g> 
              </g>
            </svg>
          </div>
        </button>
      </div>
    </div>
  )
}

export default NotFoundError

