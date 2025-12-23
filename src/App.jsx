import { useState } from 'react'
import './App.css'
import ImageSlider from './components/image-slider'

function App() {
  return(
    <div className="App">
      <ImageSlider url={'http://picsum.photos/v2/list'} limit={10}/>
    </div>
  )
}

export default App