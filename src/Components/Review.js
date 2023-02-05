
import { useState } from "react"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa"
import people from './data'


export default function Review() {
  const [index, setIndex] = useState(0);
  const { name, work, image, text } =  people[index];
  

  const handlePrev = ()=>{
    setIndex((index)=>{ 
     let newIndex = index + 1;
     return handleSurprise(newIndex)
    })
  }
  
  const handleNext = ()=>{
  setIndex(()=>{
    let newIndex = index-1
    return handleSurprise(newIndex)
  })
    }

  const handleSurprise=(number)=>{
    if(number>people.length-1){
      return 0;
    }
    if(number< 0){
      return people.length-1;
      }
     return number;
     
    }
  
  

  return (
      
      <article>
      <div>
      <img src={image} alt='name'/>
      <span>
        <FaQuoteRight/>
      </span>
      </div>
      <h4>{name}</h4>
      <p>{work}</p>
      <p>{text}</p>
      <div>
       <button><FaChevronLeft onClick={handlePrev}/></button>
       <button><FaChevronRight onClick={handleNext}/></button>
      </div>
      <button handleSurprise={handleSurprise}>surprise me</button>
    </article>

    
  )
}
