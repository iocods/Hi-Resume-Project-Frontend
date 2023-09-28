import React from 'react'
import image from '../background.jpg';

const Container = ({type, template}) => {
    
    return <div className='template-container'>
        <h1>{type}</h1>
        <div>
            {template.map((t, index )=> <div key={index} className='template-wrapper'>
                    <img className='template-image' src={t} alt='template pic'/>
                    <button className='create-template-button'> Create </button>
                    </div>
                )
            }
        </div>
        
    </div>
}
export default Container;