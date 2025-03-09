
function App() {


  function formSubmit(event){
    event.preventDefault();
    
  }

  function handleEmail(event){
    console.log(event.target.value)
  }

  function handlePassword(event){
    console.log(event.target.value)
  }



  return (
     <form action="">
      <input type="text" placeholder='Email' onChange={handleEmail} />
      <br />
      <input type="password" placeholder='Password' onChange={handlePassword}/>
      <button onClick={formSubmit}>Log-in</button>
     </form>
  )
}

export default App
