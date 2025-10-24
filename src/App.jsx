import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import {fusionEatsTheme} from './muiTheme.js';
import {Home} from './pages/home.jsx'
import {Menu} from './pages/menu.jsx'
import {AboutUs} from './pages/aboutUs.jsx'
import TableBooking from "./pages/booking";
import {NotFound} from './pages/notFound.jsx'

import './App.css'
import {Footer} from "./components/footer";

function App() {
  return (
    <section
        style={{
            display: 'flex',
            flexDirection: 'column',
        }}
    >
        <ThemeProvider theme={fusionEatsTheme}>
            <BrowserRouter>
                <Routes>
                        <>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/menu" element={<Menu/>}/>
                            <Route path="/about" element={<AboutUs/>}/>
                            <Route path="/book" element={<TableBooking/>}/>
                            <Route path="/404" element={<NotFound/>}/>
                        </>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </ThemeProvider>
    </section>
  )
}

export default App
