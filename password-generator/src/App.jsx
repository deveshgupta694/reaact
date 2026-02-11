import { useState , useCallback , useEffect ,useRef} from 'react'


function App() {
  const [length , setLength] = useState(8);
  const [number , setNumber] = useState(false);
  const [character , setCharacter] = useState(false);
  const [password , setPassword]= useState("");
  const passref = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFCHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number) str += "0123456789";
    if(character) str += "!@#$%&^*()_+<?:{}][\|";

    for(let i = 1;i <= length;i += 1)
    {
        let ch = str.charAt(Math.floor(Math.random() * str.length + 1));
        pass += ch;
    }
    setPassword(pass);
  } , [length , number , character , setPassword]); // dependencies of this callback function


  const copyToClipboard = useCallback(() => {
    passref.current?.select();//for making the selectoion vissible
    passref.current?.setSelectionRange(0 , 4);//select from index [0 , 4)zero based
    window.navigator.clipboard.writeText(password)
  } , [password])

  useEffect(() => {passwordGenerator()} , [length , number , character])// any value of this array changes RERUN THE FUNCTION keep in cache

  

  return (
    <>
      <h1 className='text-4xl text-center'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto px-4 py-2 text-red-900 bg-gray-800'>

        <div className='flex overflow-hidden mb-4 rounded-lg'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 bg-yellow-800 text-white'          
          placeholder='password'
          readOnly
          ref={passref}
          />

          <button 
          className='outline-none bg-blue-700 text-white px-3 py-0.5' onClick={copyToClipboard}
          >COPY</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
              <input type="range" min={8} max={20} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}} />
              <label className='text-white'>Length: {length}</label>
          </div>
        </div>

        <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={number} onChange={() => {setNumber((prev) => !prev)}} />
              <label htmlFor='numberInput' className='text-white'>Number</label>
        </div>

        <div className='flex items-center gap-x-1'>
              <input type="checkbox" defaultChecked={character} onChange={() => setCharacter((prev) => !prev)} />
              <label htmlFor='numberInput' className='text-white'>Character</label>
        </div>


      </div>
    </>
  )
}

export default App
