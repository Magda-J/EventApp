"use client";
import { useEffect, useState } from "react";

const EventCard = (props) => {
  const [events, setEvents] = useState([]);
  const [current, setCurrent] = useState(undefined);

  // gets the events from the backend and updates the state in this file

  //   const refreshList = () => {
  //     props.client.getEvents().then((response) => {
  //       setEvents(response.data);
  //     });
  //   };

  //   // removes the advert and then calls refresh list so that the list of ads
  //   //  is updated and doesnt include the ad that the user just deleted.

  //   const removeEvents = (id) => {
  //     props.client.removeEvent(id).then(() => {
  //       refreshList();
  //     });
  //   };

  //   // take an ad from a child component and then we will set the current state to that at
  //   // so that we can edit it later on

  //   const updateEvents = (event) => {
  //     setCurrent(event);
  //   };

  //   // this function is called when the component renders and it calls the refresh list function
  //   // that allows us to see the ads from the db (useeffect)

  //   useEffect(() => {
  //     refreshList();
  //   }, []);

  //   const buildrows = () => {
  //     return events.map((current) => {
  //       return (
  //         <tr key={current._id}>
  //           <td>{current.name}</td>
  //           <td>{current.city}</td>
  //           <td>{current.date}</td>
  //           <td>{current.description}</td>
  //           <td>${current.price}</td>
  //           <td></td>
  //           <td>
  //             <button onClick={() => removeEvent(current._id)}>Delete Event</button>
  //             <button onClick={() => updateEvent(current)}>Update Event</button>
  //           </td>
  //         </tr>
  //       );
  //     });
  //   };

  return (
    <div>
      {/* Event
      <table>
        <thead>
          <th>Event name</th>
          <th>Price</th>
        </thead>
        <tbody>{buildrows()}</tbody>
      </table> */}
      <div className="flex item-center sm:justify-end p-4">
        <div className="card w-full md:w-1/2 bg-gradient-to-b from-[#F5F1DF] to-[#E2E2C7] shadow-lg shadow-black border rounded-xl">
          <div className="card-body flex flex-col items-center justify-center">
            <h2 className="card-title hover:text-[#087CA7] text-2xl text-[#221D23] font-bold md:text-4xl text-center p-4">
              Event Name
            </h2>

            <div className="flex items-center justify-center mb-5"></div>
            <div className="flex flex-col mb-10">
              <div className="grid grid-cols-2 gap-4 md:gap-x-36">
                <div>
                  <p className="whitespace-normal hover:text-[#087CA7] text-[#221D23] text-md text-center font-bold text-sm md:text-base">
                    Location
                  </p>
                  <p className="whitespace-normal text-[#221D23] text-center md:text-2xl ">
                    London
                  </p>
                </div>
                <div>
                  <p className="whitespace-normal hover:text-[#087CA7] text-[#221D23] text-center font-bold text-sm md:text-base">
                    Date
                  </p>
                  <p className="whitespace-normal text-[#221D23] text-center md:text-2xl ">
                    20-04-2024
                  </p>
                </div>
                <div className="col-span-2 h-64 border border rounded-2xl border-[#087CA7] border-2 bg-white">
                  <p className="whitespace-normal hover:text-[#087CA7] text-[#221D23] text-center mt-2 font-bold text-sm md:text-base ">
                    Event Description
                  </p>
                  <p className="whitespace-normal text-[#221D23] text-center md:text-2xl">
                    Text
                  </p>
                </div>
                <div className="col-span-3 sm:col-span-2 flex justify-center">
                  <p className="whitespace-normal mr-2 font-bold hover:text-[#087CA7] text-[#221D23] text-sm md:text-base">
                    Price:
                  </p>
                  <p className="text-sm text-[#221D23] md:text-base">Price</p>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 sm:mx-auto w-full flex justify-center items-center text-white p-4 font-bold rounded-md bg-[#087CA7] hover:text-[#087CA7] hover:bg-[#DFC2F2] focus:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80"
                >
                  Update
                </button>

                <button
                  type="submit"
                  className="bg-blue-500 sm:mx-auto w-full flex justify-center items-center text-white p-4 font-bold rounded-md bg-[#087CA7] hover:text-[#087CA7] hover:bg-[#DFC2F2] focus:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80"
                >
                  Delete
                </button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
