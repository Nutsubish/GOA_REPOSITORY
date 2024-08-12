import { useState } from 'react'
import Counter from './components/Counter.jsx'
import ToggleText from './components/ToggleText.jsx'
import ShowHide from './components/ShowHide.jsx'
import BackGround from './components/BackGroundCol.jsx'
import ListOf from './components/ListofItems.jsx'


function App() {


  return (
    <>
      <Counter/>
      <ToggleText/>
      <ShowHide/>
      <BackGround/>
      <ListOf/>
    </>
  )
}

export default App
