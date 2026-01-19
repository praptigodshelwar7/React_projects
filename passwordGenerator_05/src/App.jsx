import { useState ,useCallback , useEffect, useRef} from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed,setNumAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState("")


  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*+_~'"

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,numAllowed,charAllowed,setPassword])
  
  //useReff hook
  const passwordRef=useRef(null)
  
  const copyPasswordToClip=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed,passwordGenerator])
  return (

      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 my-5 bg-gray-700 text-black">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='"flex shadow rounded-lg overflow-hidden mb-4 py-2"'>
          <input type="text"
          value={password}
          className="outline-none w-full py-2 px-3 bg-white"
          placeholder='password'
          readOnly
          ref={passwordRef}/>
          <button 
          onClick={copyPasswordToClip}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            type='range'
            min={6} 
            max={18} 
            value={length} 
            className='cursor-pointer px-1' 
            onChange={(e)=>{setLength(e.target.value)}}
            /><label className="text-white px-1 ">Length:{length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input 
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={()=>{
                setNumAllowed((prev)=>!prev);
              }}
              />
              <label htmlFor="numberInput" className="text-white px-1 ">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input 
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={()=>{
                setCharAllowed((prev)=>!prev);
              }}
              />
              <label htmlFor="characterInput" className="text-white px-1 ">Special Characters</label>
            </div>
        </div>
      </div>

  )
}

export default App
