import AppShell from './AppShell';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './LandingPage';
import Home from './Home';
import NotFoundError from './Error404';
import Tournaments from './Tournaments';
import ContactPage from './ContactPage';
import Register from './Register';

export default function App() {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="App">

        <BrowserRouter>
          <Routes>
            //accesable pages
            <Route path = "register" element={<Register isLoginVisible={false} toggleHide={function (): void {
              throw new Error('Function not implemented.');
            } } closeLoginOpenCreate={function (): void {
              throw new Error('Function not implemented.');
            } } />}/>
            

            //private pages
            <Route path='/' element={<AppShell />}>
              <Route index element={<LandingPage />}/>
                <Route path = "/login" element={<LandingPage/>}/>
                <Route path = "/signup" element={<LandingPage/>}/>
                <Route path='home' element={<Home />} />
                <Route path ='tournaments' element={<Tournaments/>}/>
                <Route path ='contact-us' element={<ContactPage/>}/>
            </Route>
            
            //error page
            <Route path='*' element = {<NotFoundError/>}/>
          </Routes>

        </BrowserRouter>
      </div>
    </MantineProvider>
  );
}




