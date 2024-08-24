import React from 'react'

function Card({character}) {
  return (
 
   <div className='col mb-5'>
     <div class="card h-100 " style={{width: '18rem'}}> 
         
         <img class="card-img-top" src={character.imageURL} alt="Card image cap"/>
        
         <div class="card-body">
           <h5 class="card-title charName"><span style={{color:'#FFD700'}}>{character.name}</span></h5>
           <h6 class="card-subtitle mb-2 text-muted">{character.house}</h6>
           <p class="card-text">{character.description}</p>
           <a href="#" class="btn btn-dark">Click</a>
         </div>
       </div>
   </div>
  
  )
}

export default Card