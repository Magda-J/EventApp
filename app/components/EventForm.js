'use client'
import { useState } from 'react'

const EventForm = (props) => {
     const [disabled, setDisabled] = useState(false);

     const submitHandler = (e) => {
          // stop the page from refreshing when the user submits the form. That is the default behaviour of HTML forms
          e.preventDefault();
          setDisabled(true);
          let result;
     
          // form validation to make sure we send the correct data and types to the backend
          //e.target.price.value = Number(e.target.price.value)
          console.log(e.target.eventDate.value)
          if (!e.target.eventName.value || !e.target.eventDate.value || !e.target.eventDescription.value || !e.target.eventCity.value|| !typeof e.target.eventDate.value === "Number" ) {
               alert("Please enter a valid name and price")
               setDisabled(false);
               return;
          }
     
          // if there is a current event, we know that the user is updating an event because in order to have 
          // a current event, the user has to have clicked on the update button for that event
          
               //result = props.client.addEvent(e.target.eventName.value, e.target.price.value);
 
     //     result.then(() => {
     //         setDisabled(false);
     //         document.getElementById("addForm").reset();
     //         props.refreshList()
     //     }).catch(() => {
     //         alert("there was an error")
     //         setDisabled(false);
     //     })
     }
  return (
     <form className='flex flex-col w-full h-full bg-[#EFEBCE] rounded-lg gap-4 shadow-lg shadow-black p-[5%]'
     onSubmit={submitHandler} id='addForm'>
          <button type="submit" className='rounded-lg bg-[#D6CE93] mx-[5%] h-[20%]'>Create Event</button>
          
          <div className='mx-[10%] flex gap-4 h-[10%]'>
               <input type="text" className='rounded-lg w-[50%] p-1' placeholder='Event Name:'
               defaultValue={props.currentEvent?.eventName} id='eventName'/>

               <input type="date" className='rounded-lg w-[50%] p-1' 
               defaultValue={props.currentEvent?.eventDate} id='eventDate'/>
          </div>

          <input type="text" className='rounded-lg mx-[10%] h-[10%] p-1' placeholder='City'
          defaultValue={props.currentEvent?.eventCity} id='eventCity'/>

          <textarea className='rounded-lg mx-[10%] max-h-full min-h-[50%] p-1' id='eventDescription' 
          defaultValue={props.currentEvent?.eventDescription} placeholder='Description'/>
     </form>
  )
}

export default EventForm