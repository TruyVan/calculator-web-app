import React, {useEffect, useState} from 'react'

function App(){
  // Components
  const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0,'.']
  const calculations = ['+', '-', '*', '/']

  // HOOK REACT
  // Show warning Message
  const [msg, setMsg] = useState('')
  // Closing or Opening "(round brackets)"
  const [cRB, setCRB] = useState(false)
  // show what had typed
  const [show, setShow] = useState(0)
  // get what numbers are getting
  const [get, setGet] = useState(0)
  // Detect Keydown on physical keyboard
  useEffect(() => {
    // window.addEventListener('keydown', onHandleKeyDown);
    window.addEventListener('keydown', deny);
    return () => {
      // window.removeEventListener('keydown', onHandleKeyDown);
      window.removeEventListener('keydown', deny);
    };
  }, []);
  // Function
  //Should we close the round bracket?
  const onClosingBracket = ()=>{
    if(!cRB){
      onHandleGet('(')
      setCRB(!cRB)
    }
    else{
      onHandleGet(')')
      setCRB(!cRB)
    }
  }
  // Handle Clear one by one
  const onClearOne = ()=>{
    if(get.length > 1){
      setGet(prev => prev.slice(0, -1))
    }
    else{
      setGet(0)
    }
  }
  const deny = ()=>{ //Remove keydown from physical keyboards
    setMsg("YOU CAN NOT USE KEYBOARD TO ENTER DATA")
  }

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
    setMsg('');
    var keypress = event
    var dataType = typeof(keypress);
    if(dataType === 'string'){ //Handle Point Symbol on Virtual Keyboards
      onHandleGet(keypress)
    }
    // else if(dataType === 'object'){ //Handle Physical Key Down
    //   keypress = keypress.key
    //   if(calculations.includes(keypress) || keypress === '.' || !isNaN(keypress)){
    //     onHandleGet(keypress);
    //   }
    //   else if(keypress === 'Enter'){
    //     onHandleCal();
    //     console.log(get)
    //     console.log(show)
    //   }
    //   else if(keypress === 'Backspace'){
    //     if(get === ''){
    //       setGet(0);
    //     }
    //     else{
    //       setGet(prev => prev.slice(0, -1))
    //     }
    //   }
    //   else if(keypress === 'Escape'){
    //     setGet(0)
    //     setShow(0)
    //   }
    //   else{
    //     console.log('Not here')
    //   }
    // }
    else if(dataType === 'number'){ // Handle Virtual Key Down
      onHandleGet(String(keypress))
    }
  }
  return(
    <React.Fragment>
      <div className='container text-center my-4'>
        <h3>The simple calculator</h3>
      </div>
      <div className='container p-3 cal-bg border rounded border-dark'>
        <div className='cal-screen bg-dark rounded px-2 py-1'>
          <div className='text-white above-cal-screen d-flex justify-content-end'>
            <h5>{show}</h5>
          </div>
          <div className='text-white below-cal-screen d-flex justify-content-end'>
            <h1>{get}</h1>
          </div>
          <div>
            <h4 className='text-danger'><strong>{msg}</strong></h4>
          </div>
        </div>
        <div className='row'>
          <div className='d-flex flex-row row col-9'>
            <div className='col-4'>
              <button onClick={()=>onClosingBracket()} className='btn btn-warning border-dark col-12'>(   )</button>
            </div>
            <div className='col-4'>
              <button onClick={()=>onHandleGet('%')} className='btn btn-warning border-dark col-12'>%</button>
            </div>
            <div className='col-4'>
              <button onClick={()=>{onClearOne()}} className='btn btn-warning border-dark col-12'>C</button>
            </div>
          </div>
          <div className='col-3'>
            <div >
                <button onClick={()=>{setGet(0);setShow(0);setCRB(false)}} className='btn btn-warning border-dark col-12'>AC</button>
              </div>
          </div>
        </div>
        <div className='cal-keyboard row '>
          <div className='key-number d-flex flex-row row col-9'>
            {numbers.map(number=>(
            <div key={number} className='col-4 my-1'>
              <button onClick={()=>{onHandleKeyDown(number)}} className='border-dark btn btn-light col-12'>{number}</button>
            </div>
            ))}
            <div className='col-4 my-1'>
              <button onClick={()=>{onHandleCal()}} className='border-dark btn btn-primary col-12'>=</button>
            </div>
          </div>
          <div className='key-calculation col-3'>
              {calculations.map(item=>(
              <div key={item}  className='col-12 my-2'>
                <button onClick={()=>onHandleGet(item)} className='border-dark btn border btn-secondary opacity-100 col-12'>{item}</button>
              </div>
              ))}
            </div>
        </div>
      </div>
      <div className='my-5 container border border-danger rounded'>
        <h3 className='text-danger'>WARNING:</h3>
        <div>This app is under developing. To prevent you from getting unexpected warnings or errors when you use <strong>Physical keyboard</strong> to enter the data, So I have to turn this feature off. Please accept my sincere apology for this inconvenience! I am gonna fix these problems as soon as possible.</div>
        <h1>🙇‍♂️</h1>
      </div>
    </React.Fragment>
  )
}
export default App;

