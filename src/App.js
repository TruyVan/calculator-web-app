import React, {useEffect, useState} from 'react'

function App(){
  // Components
  const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0,'.']
  const calculations = ['+', '-', '*', '/']

  // HOOK REACT
  // show what factor 1 got
  const [show, setShow] = useState(0)
  // get what numbers are getting
  const [get, setGet] = useState(0)
  // Detect Keydown on physical keyboard
  useEffect(() => {
    window.addEventListener('keydown', onHandleKeyDown);
    return () => {
      window.removeEventListener('keydown', onHandleKeyDown);
    };
  }, []);
  // Function
  const onHandleCal = ()=>{ //Handle clicking math symbol on screen
    try{
      setShow(get);
      setGet(eval(get))
    }
    catch{
      setShow('ERROR')
    }
  }
  const onHandleGet = (something)=>{
    if(get[0] === '0'){
      setGet(prev => prev.slice(1, prev.length))
    }
    setGet(prev => prev + something)
  }
  const onHandleKeyDown = (event)=>{ // Handle pressing
    var keypress = event
    var dataType = typeof(keypress);
    if(dataType === 'string'){ //Handle Point Symbol on Virtual Keyboards
      onHandleGet(keypress)
    }
    else if(dataType === 'object'){ //Handle Physical Key Down
      keypress = keypress.key
      if(calculations.includes(keypress) || keypress === '.' || !isNaN(keypress)){
        onHandleGet(keypress);
      }
      else if(keypress === 'Enter'){
        onHandleCal();
        console.log(get)
        console.log(show)
      }
      else if(keypress === 'Backspace'){
        if(get === ''){
          setGet(0);
        }
        else{
          setGet(prev => prev.slice(0, -1))
        }
      }
      else if(keypress === 'Escape'){
        setGet(0)
        setShow(0)
      }
      else{
        console.log('Not here')
      }
    }
    else if(dataType === 'number'){ // Handle Virtual Key Down
      onHandleGet(String(keypress))
    }
  }
  return(
    <React.Fragment>
      <div className='container text-center my-4'>
        <h3>The simple calculator</h3>
      </div>
      <div className='container p-3 bg-secondary border rounded border-dark'>
        <div className='cal-screen bg-dark rounded px-2 py-1'>
          <div className='text-white above-cal-screen d-flex justify-content-end'>
            <h5>{show}</h5>
          </div>
          <div className='text-white below-cal-screen d-flex justify-content-end'>
            <h1>{get}</h1>
          </div>
        </div>
        <div className='cal-keyboard row'>
          <div className='key-number d-flex flex-row row col-9'>
            {numbers.map(number=>(
            <div key={number} className='col-4 my-1'>
              <button onClick={()=>{onHandleKeyDown(number)}} className='btn btn-light col-12'>{number}</button>
            </div>
            ))}
            <div className='col-4 my-1'>
              <button onClick={()=>{onHandleCal()}} className='btn btn-primary col-12'>=</button>
            </div>
          </div>
          <div className='key-calculation col-3'>
              {calculations.map(item=>(
              <div key={item}  className='col-12 my-2'>
                <button onClick={()=>onHandleGet(item)} className='btn border btn-secondary opacity-100 col-12'>{item}</button>
              </div>
              ))}
            </div>
        </div>
      </div>
      <div className='my-5 container border border-danger rounded'>
        <h3 className='text-danger'>WARNING:</h3>
        <div>This app is under developing. You may get unexpected warnings or errors when you use <strong>Physical keyboard</strong> to enter the data. Please accept my sincere apology for this inconvenience! I am gonna fix these problems as soon as possible.</div>
        <h1>🙇‍♂️</h1>
      </div>
    </React.Fragment>
  )
}
export default App;

