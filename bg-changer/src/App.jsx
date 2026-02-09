import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('white')

  return (
    <div
      className="w-screen h-screen"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 left-0 w-full flex justify-center px-2">
        <div className="flex gap-6 bg-white rounded-xl px-3 py-2">
          <button
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: 'red' }}
            onClick={() => setColor('red')}
          >
            RED
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: 'blue' }}
            onClick={() => setColor('blue')}
          >
            BLUE
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: 'green' }}
            onClick={() => setColor('green')}
          >
            GREEN
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: 'black' }}
            onClick={() => setColor('black')}
          >
            BLACK
          </button>

          <button
            className="outline-none px-4 py-1 rounded-full text-black"
            style={{ backgroundColor: 'white' }}
            onClick={() => setColor('white')}
          >
            WHITE
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
