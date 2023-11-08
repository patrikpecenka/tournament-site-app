import {useState, useEffect} from 'react'


const useModal = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false)
  const [isCreateVisible, setIsCreateVisible] = useState(false)

  
  useEffect(() => {
    document.body.style.overflow = isLoginVisible ? "hidden" : "unset"
  }, [isLoginVisible])


  function toggleHide1() {
    setIsCreateVisible(!isCreateVisible)
  }

  function closeLoginOpenCreate() {
    /*Closes login modal and opens sign up modal*/
    setIsLoginVisible(false)
    setIsCreateVisible(true)
  }

  function closeCreateOpenLogin() {
    /*Closes signup modal and opens login modal*/
    setIsLoginVisible(true)
    setIsCreateVisible(false)
  }

  
  return {
    isLoginVisible,
    setIsLoginVisible,

    isCreateVisible,
    toggleHide1,

    closeLoginOpenCreate,
    closeCreateOpenLogin
  }

}

export default useModal
