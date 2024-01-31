"use client";

const EventCard = (
    props
) => {
  const keyID = props.keyA
  return (
    <div className="w-full flex flex-col p-1">
      
      <div className="flex item-center w-full sm:justify-end sm:pb-8 md:pb-4 md:pt-8">
        <div className="card w-full bg-gradient-to-b from-[#F5F1DF] to-[#E2E2C7] shadow-lg shadow-black border rounded-xl">
          <div className="card-body flex flex-col items-center justify-center">
            <h2 className="card-title hover:text-[#087CA7] text-2xl text-[#221D23] font-bold md:text-4xl text-center p-4">
              {props.EventName}
            </h2>

            <div className="flex items-center justify-center mb-5"></div>
            <div className="flex flex-col mb-10">
              <div className="grid grid-cols-2 gap-4 md:gap-x-36">
                <div>
                  <p className="whitespace-normal hover:text-[#087CA7] text-[#221D23] text-md text-center font-bold text-sm md:text-base">
                    Location
                  </p>
                  <p className="whitespace-normal text-[#221D23] text-center md:text-2xl ">
                    {props.EventCity}
                  </p>
                </div>
                <div>
                  <p className="whitespace-normal hover:text-[#087CA7] text-[#221D23] text-center font-bold text-sm md:text-base">
                    Date
                  </p>
                  <p className="whitespace-normal text-[#221D23] text-center md:text-2xl ">
                    {props.EventDate}
                  </p>
                </div>
                <div className="col-span-2 h-64 rounded-2xl border-[#087CA7] border-2 p-2 bg-white">
                  <p className="whitespace-normal hover:text-[#087CA7] text-[#221D23] text-center mt-2 font-bold text-sm md:text-base ">
                    Description
                  </p>
                  <p className="whitespace-normal text-[#221D23] text-center md:text-2xl">
                    {props.EventDescription}
                  </p>
                </div>
                <div className="col-span-3 sm:col-span-2 flex justify-center">
                  <p className="whitespace-normal mr-2 font-bold hover:text-[#087CA7] text-[#221D23] text-sm md:text-base">
                    Ticket Price: {props.EventPrice}
                  </p>

                </div>
                <button
                  type="submit"
                  className="sm:mx-auto w-full flex justify-center items-center text-white p-4 font-bold rounded-md bg-[#087CA7] hover:text-[#087CA7] hover:bg-[#DFC2F2] focus:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80"
                  onClick={() => props.updateEvents(props)}
                >
                  Update
                </button>

                <button
                  type="submit"
                  className="sm:mx-auto w-full flex justify-center items-center text-white p-4 font-bold rounded-md bg-[#087CA7] hover:text-[#087CA7] hover:bg-[#DFC2F2] focus:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80"
                  onClick={() => {
                    props.removeEvents(keyID);
                  }}
                >
                  Delete
                </button>

                {/* <button onClick={() => removeAdvert(current._id)}>Delete Ad</button>
            <button onClick={() => updateAdvert(current)}>update</button> */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
