
import './App.css'
import AboutPage from './components/About/AboutPage';
import ContactUsPage from './components/Contact/ContactUs';
import HomeNavbar from './components/HomeNav';
import Navbar from './components/Navbar'
import HomePage from './Pages/Home';
import {BrowserRouter, Route, Routes,} from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
    <HomeNavbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contactus' element={<ContactUsPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

{/* <BrowserRouter>
<Routes>
  <Route path='/' element={<HomePage/>}/>
  {/* <Route path='/about' element={<AboutPage/>}/> */}
// </Routes>
// </BrowserRouter> 
export default App
