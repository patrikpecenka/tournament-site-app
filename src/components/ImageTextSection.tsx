import { ImageTextSectionData } from 'constant/ImageTextSectionData'
import 'styles/ImageTextSection.css'
import CreateAccount from './CreateAccount'
import useModal from 'hooks/useModal'

const ImageTextSection = () => {
  const { isCreateVisible, toggleHide1, closeCreateOpenLogin } = useModal()
  return (
    <>
      {ImageTextSectionData.map((item, index) => (
        /* Check if index is even, if index of the wrapper is odd image and text switch positions */
        index % 2 == 0
          ? <div key={index} className="image-text-section-wrapper" >
              <div className="image-text-section-container">
                <div className="image-section-container">
                  <img className="img-section" src={item.url} />
                </div>

                <div className="text-section-container">
                  <h1 className='--text-section-title'>{item.title}</h1>
                  <p className="--text-section-text">{item.text}</p>
                  <button className='account-creation create-button section-container-create-button' onClick={toggleHide1}>Create account</button>
                </div>
              </div>
            </div>

          : <div key={index} className="image-text-section-wrapper" >
              <div className="swapped-text-section-container">
                <h1 className='swapped--text-section-title'>{item.title}</h1>
                <p className="swapped--text-section-text">{item.text}</p>
                <button className='account-creation create-button swapped-section-container-create-button' onClick={toggleHide1}>Create account</button>
              </div>

              <div className="swapped-image-text-section-container">
                <div className="swapped-image-section-container">
                  <img className="img-section" src={item.url} />
                </div>
              </div>
            </div>
      ))}
      <CreateAccount
        isCreateVisible={isCreateVisible}
        toggleHide1={toggleHide1}
        closeCreateOpenLogin={closeCreateOpenLogin}
      />
    </>
  )
}

export default ImageTextSection