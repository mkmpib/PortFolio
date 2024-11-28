import { useState } from 'react'
import { Route, Routes, Link } from "react-router-dom";

import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Education from './components/education/Education'
import Project from './components/projects/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar />
      <Hero />
      <About />
      <Education />
      <Project/>
      <Contact />
      <Footer/> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero></Hero>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Education" element={<Education></Education>}></Route>
        <Route path="/Project" element={<Project></Project>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App
