import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Profile from './components/Profile/Profile'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Profile></Profile>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
    </>
  )
}

export default App
