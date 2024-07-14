import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Playlist from './components/Playlist/Playlist2'
import ContactUs from './components/Contact/ContactUs'
import MealPlanner from './components/Meal-Planner/MealPlanner2'
import Footer from './components/Footer/Footer'
import NavbarMobile from './components/Navbar/NavbarMobile'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <> 
        <Navbar />
        <Footer />
        <NavbarMobile /> 

      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/meal_planner" element={<MealPlanner />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
              
    </>
  )
}

export default App
