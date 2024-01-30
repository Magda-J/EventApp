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
          
          if(e.target.eventPrice !== "")
          {
               e.target.eventPrice.value = Number(e.target.eventPrice.value)
          }
          console.log(e.target.eventPrice.value)
         
          if (!e.target.eventName.value || !e.target.eventDate.value || !e.target.eventDescription.value || !e.target.eventCity.value || typeof e.target.eventPrice.value !== "number") {
               if(!e.target.eventName.value)
               {
                    alert("Please enter Event Name")
                    setDisabled(false);
               }
               else if(!e.target.eventDate.value)
               {
                    alert("Please enter Event Date")
                    setDisabled(false);
               }
               else if(!e.target.eventDescription.value)
               {
                    alert("Please enter Event Description")
                    setDisabled(false);
               }
               else if(!e.target.eventCity.value)
               {
                    alert("Please enter Event City")
                    setDisabled(false)
               }
               else if(typeof e.target.eventPrice.value === "number")
               {
                    alert("Please enter Valid price")
                    setDisabled(false)
               }
               return;
          }
     
          // if there is a current event, we know that the user is updating an event because in order to have 
          // a current event, the user has to have clicked on the update button for that event

          if (props.currentEvent) {
               result = props.client.updateEvent(props.currentEvent._id, e.target.eventName.value, e.target.eventCity.value, e.target.eventDate.value, e.target.eventPrice.value, e.target.eventDescription.value );
          } else {
               result = props.client.addEvent(e.target.eventName.value, e.target.eventCity.value, e.target.eventDate.value, e.target.eventPrice.value, e.target.eventDescription.value );
          }
        

          result.then(() => {
               setDisabled(false);
               document.getElementById("addForm").reset();
               props.refreshList()
          }).catch(() => {
               alert("there was an error")
               setDisabled(false);
          })
     }
  return (
     <form className='flex flex-col w-full h-full bg-[#EFEBCE] rounded-lg gap-4 shadow-lg shadow-black p-[5%]'
     onSubmit={submitHandler} id='addForm'>
          <button type="submit" className='rounded-lg bg-[#D6CE93] mx-[5%] h-[20%]' disabled={disabled} >Create Event</button>
          
          <div className='mx-[10%] flex gap-4 h-[10%]'>
               <input type="text" className='rounded-lg w-[50%] p-1' placeholder='Event Name:'
               defaultValue={props.currentEvent?.eventName} disabled={disabled} id='eventName'/>

               <input type="date" className='rounded-lg w-[50%] p-1' 
               defaultValue={props.currentEvent?.eventDate} disabled={disabled} id='eventDate'/>
          </div>

          <div className='mx-[10%] flex gap-4 h-[10%]'>
               <input type="text" className='rounded-lg w-[50%] p-1' placeholder='City'
               defaultValue={props.currentEvent?.eventCity} disabled={disabled} id='eventCity'/>

               <input type="text" className='rounded-lg w-[50%] p-1' 
               defaultValue={props.currentEvent?.eventPrice} disabled={disabled} id='eventPrice' placeholder='Price'/>
          </div>

          <textarea className='rounded-lg mx-[10%] max-h-full min-h-[50%] p-1' id='eventDescription' 
          defaultValue={props.currentEvent?.eventDescription} disabled={disabled}  placeholder='Description'/>
     </form>
  )
}

export default EventForm