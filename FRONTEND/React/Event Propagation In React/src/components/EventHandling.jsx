import EventProps from "./EventProps";

 
export const EventHandling = () => {
    const handleButtonClick=(e)=>{
    alert("hey hello");
    console.log(e)
}
  return (
    <div>
       <button onClick={handleButtonClick}>Click Me</button>
       <EventProps/>
    </div>
  )
}

export default EventHandling
