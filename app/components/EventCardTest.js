"use client";

const EventCard = (
    props
) => {
  const keyID = props.keyA
  return (
     <div className="w-full flex flex-col bg-white rounded-lg gap-4 shadow-lg shadow-black p-[5%]">

          <div className="h-[20%] text-lg">
               name
          </div>

          <div className="flex mx-[5%]">
               <div className="w-[50%]">date</div>
               <div className="w-[50%]">location</div>
          </div>

          <div className="mx-[5%] h-[50%] rounded-lg">
               <div>description</div>
          </div>

          <div className="mx-[5%] gap-4">
               <button
                  type="submit"
                  className="w-[50%] rounded-2xl"
                  onClick={() => props.updateEvents(props)}>
                  Update
               </button>

               <button
                    type="submit"
                    className="w-[50%] rounded-2xl"
                    onClick={() => {
                    props.removeEvents(keyID);
                    }}>
                  Delete
               </button>
          </div>

     </div>
  );
};

export default EventCard;
