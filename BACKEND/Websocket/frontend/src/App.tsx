
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [ws,setWs]= useState<WebSocket | null>(null)
  const inputRef= useRef<HTMLInputElement>(null)
  function sendMessage(){
    const message= inputRef.current?.value
      if(ws){
        ws.send(message || '')
      }
    }
    useEffect(() => {
      const ws= new WebSocket('ws://localhost:8080')
      setWs(ws)
      ws.onerror = (error) => {
        console.error('WebSocket error:', error)
      }
      ws.onopen = () => {
        console.log('WebSocket connection established')
      }
      ws.onmessage = (event) => {
        alert( event.data)
      }

      ws.onclose = () => {
        console.log('WebSocket connection closed')
      }

    },[])

  return (
    
    <div>
     <input type="text" placeholder="Enter text" ref={inputRef} /> 
    <button onClick={sendMessage}>Send</button>
    
    </div>
  )
}

export default App
