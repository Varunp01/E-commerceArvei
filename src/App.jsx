import { useState } from 'react'
import './App.css'
import Navbar from './navcomponents/navbar';
import Category from './categorycomponents/Category';
import Logo from './logocomponent/Logo';
import Trending from './trendingcomponents/Trending';
import Footer from './Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Category></Category>
      <Logo></Logo>
      <Trending></Trending>
      <Footer></Footer>
    </>
  )
}

export default App
