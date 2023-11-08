import 'styles/LandingPage.css'
import { useEffect, useState } from 'react'
import ImageTextSection from 'components/ImageTextSection'
import Carousel from 'components/Carousel'
import { images } from 'constant/CarouselImages'


const LandingPage = () => {

  const FADE_INTERVAL_MS = 3700
  const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2
  const WORDS_TO_ANIMATE = ["the best", "pro player", "apex predator", "challenger", "super sonic legend", "global elite"]

  type FadeProp = 'fade-in' | 'fade-out'

  const [fadeProp, setFadeProp] = useState<FadeProp>('fade-in')
  const [wordOrder, setWordOrder] = useState<number>(0)

  /*useEffect(() => {
    const fadeTimeout = setInterval(() => {
      fadeProp === 'fade-in' ? setFadeProp('fade-out') : setFadeProp('fade-in')
    }, FADE_INTERVAL_MS)

    return () => clearInterval(fadeTimeout)
  }, [fadeProp])*/

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      setFadeProp((prev) => prev === 'fade-in' ? 'fade-out' : 'fade-in')
    }, FADE_INTERVAL_MS);

    return () => clearInterval(fadeTimeout)
  }, [])

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setWordOrder((prevWordOrder) => prevWordOrder === 5 ? 0 : prevWordOrder + 1)

    }, WORD_CHANGE_INTERVAL_MS)
    return () => clearInterval(wordTimeout)

  }, [])


  return (
    <div className="landingpage-wrapper">
      <div className="text-container">
        <div className="lp-title-text-container">
          <div className='lp-title-text'>
            improve, dominate
            <br />
            and become <span className={fadeProp} data-highlight="highlight" >{WORDS_TO_ANIMATE[wordOrder]}</span>
          </div>
        </div>
        <div className="lp-subtitle-text">
          Play against players <span data-highlight="highlight">all over the globe</span> and improve your skills
        </div>

      </div>
      {/*<Carousel/>*/}
      <Carousel images={images} />
      <ImageTextSection />
    </div>
  )
}

export default LandingPage