import { useState } from 'react';

function App() {
  let [color, setColor] = useState("black");

  return (
    <>
      {/* <h1 className='bg-red-50 font-sans underline text-black'>Hello! Chai is ready</h1> */}
      <div className='w-full h-screen' style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap gap-3 px-3 py-3 rounded-md shadow-lg'>
            <button
              onClick={() => setColor("red")}
              className="px-4 py-3 rounded-xl outline-none text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("blue")}
              className='bg-blue-500 px-4 py-3 rounded-xl outline-none text-white'
            >
              Blue
            </button>
            <button
              onClick={() => setColor("yellow")}
              className='bg-yellow-400 px-4 py-3 rounded-xl outline-none text-black'
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("green")}
              className='bg-green-600 px-4 py-3 rounded-xl outline-none text-white'
            >
              Green
            </button>
            <button
              onClick={() => setColor("lavender")}
              className='bg-purple-300 px-4 py-3 rounded-xl outline-none text-black'
            >
              Lavender
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
