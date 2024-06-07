import React, {useEffect, useState} from 'react'

function App(){
  // Components
  // HOOK REACT
  // Function
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.']
  const calculations = ['+', '–', '×', '÷']
  return(
    <React.Fragment>
      <div className='container border border-info'>
        <div className='cal-screen bg-dark d-flex justify-content-end px-2 p-1'>
          <h4 className='text-white'>123</h4>
        </div>
        <div className='cal-keyboard row'>
          <div className='key-number d-flex flex-row row col-9'>
            {numbers.map(number=>(
            <div className='col-4 my-1'>
              <a target='_blank' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
                <button  className='btn btn-light col-12'>{number}</button>
              </a>
            </div>
            ))}
            <div className='col-4 my-1'>
              <button className='btn btn-primary col-12'>=</button>
            </div>
          </div>
          <div className='key-calculation col-3'>
              {calculations.map(item=>(
              <div className='col-12 my-2'>
                <a target='_blank' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
                  <button className='btn btn-secondary opacity-25 col-12'>{item}</button>
                </a>
              </div>
              ))}
            </div>
        </div>
      </div>
    </React.Fragment>
  )
}
export default App;

