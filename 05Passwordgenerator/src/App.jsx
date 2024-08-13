import { useState, useCallback,useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")
  
  

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789";
    if (character) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, number, character, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length,number,character,passwordGenerator])
  


  //copy password 

  const passwordRef = useRef(null)
  const copyPaswwordtoCLip = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])
  
  return (
    <>
    
      <div className='w-full max-w-lg mx-auto px-8 py-6  bg-gray-700 my-16 text-orange-400 rounded-lg justify-center items-center'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 w-auto px-3 py-1'>
          <input
            type="text"
            value={password}
            readOnly
            placeholder='password'
            className='w-full outline-none py-1 px-3'
            ref={passwordRef}
          />
          <button
            onClick={copyPaswwordtoCLip}
            className='bg-blue-500 outline-none shrink-0 text-white mx-1 px-3 py-0.5 rounded-md'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>setLength(e.target.value)}
            />
            <label>Length:{length }</label>

            <input
              type="checkbox"
              value={number}
              defaultChecked={number}
              onChange={() => {
                setNumber((prev)=>!prev)
              }}
            />
            <label>Number</label>
            <input
              type="checkbox"
              value={character}
              defaultChecked={character}
              onChange={() => {
                setCharacter((prev)=>!prev)
              }}
            />
            <label>Character</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
