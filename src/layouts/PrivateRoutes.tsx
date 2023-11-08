import { Outlet} from "react-router-dom";
import { projectAuth } from "firebase/config";
import useModal from "hooks/useModal";
import Login from "components/Login";


const PrivateRoutes = () => {
  const { toggleHide, isLoginVisible, closeLoginOpenCreate } = useModal();

  return projectAuth.currentUser ? (
    <Outlet/>
  ) : (
    <Login
      isLoginVisible={!isLoginVisible}
      toggleHide={toggleHide}
      closeLoginOpenCreate={closeLoginOpenCreate}
    />
  )
}

export default PrivateRoutes;