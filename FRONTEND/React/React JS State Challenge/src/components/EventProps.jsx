

export const EventProps = () => {
    const HandleWelcomeUser= (user)=>{
        alert(`Hey ${user} welcome to my world!`)
    }
    const handleHover= ()=>{
        alert(`Hey hover  welcome to my world!`)
    }
  return (
    <>
      <WelcomeUser onClick={()=>HandleWelcomeUser('Saurabh')} onMouseEnter={handleHover}/>
    </>
  )
}

export default EventProps


const WelcomeUser=(props)=>{
    const handleGreeting= ()=>{
        alert("Her Handle greeting is here!")
        props.onClick()
    }
    return(
       <>
       <button onClick={props.onClick}>Click</button>
       <button onMouseEnter={props.onMouseEnter}>Hover me</button>
       <button onClick={handleGreeting}>GREETING</button>
       </>

    )

}