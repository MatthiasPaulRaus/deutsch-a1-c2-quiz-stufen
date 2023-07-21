import { useState } from 'react'
import './App.css'
import {FaAngleLeft} from 'react-icons/fa'
import {FaAngleRight} from 'react-icons/fa'
import stufen from './stufen'


function App() {
  
  const [currentStufe, setCurrentStufe]= useState(0)

  const prev =()=> {
    setCurrentStufe(currentStufe === 0 ? stufen.length -1 : currentStufe -1)
  }
  
  const next =()=> {
    setCurrentStufe(currentStufe === stufen.length -1 ? 0 : currentStufe +1)
  }

  
  return (
   
    <div>
      
      <div className="titel" >Quiz-Aufgaben</div>
    
      <div className="dotsList">
        {stufen.map((stufen, index)=>(
          <button 
          key={index}
          className={currentStufe === index ? "dots dots-active":"dots"} 
          onClick={() => setCurrentStufe(index)}
          >
          {stufen.name}
          </button> 
        ))} 
      </div>

      <div className="slide">

        <button className="arrow"
         onClick={prev}><FaAngleLeft/>
        </button>

          <div>

            <a href={stufen[currentStufe].link1}>
              <button className="btn">
              {stufen[currentStufe].quiz1}
              </button>
            </a>

            <a href={stufen[currentStufe].link2}>
              <button className="btn">
              {stufen[currentStufe].quiz2}
              </button>
            </a>
          
            {stufen[currentStufe].quiz3 &&
            <a href={stufen[currentStufe].link3}>
              <button className="btn">
              {stufen[currentStufe].quiz3}
              </button>
            </a>}
         
            {stufen[currentStufe].quiz4 &&
            <a href={stufen[currentStufe].link4}>
              <button className="btn">
              {stufen[currentStufe].quiz4}
              </button>
            </a>}
        
          </div>
        
        <button className="arrow"
         onClick={next}><FaAngleRight/>
        </button>
        
      </div>

       <div className="dotsList">
        {Array.from({length:6}).map((_, index)=>(
          <div key={index}
          className={currentStufe === index ? "dots dots-active":"dots"}
          onClick={() => setCurrentStufe(index)} 
          ></div>
        ))}
       </div>
       
    </div>
  )
}

export default App
