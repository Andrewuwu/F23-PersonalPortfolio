import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Profile from './components/Profile'
import Projects from './components/Projects'

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
