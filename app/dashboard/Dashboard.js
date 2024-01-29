"use client";
import { useEffect, useState } from "react";
import Add from "../components/Add";

const Dashboard = (props) => {
  const [events, setEvents] = useState([]);
  const [current, setCurrent] = useState(undefined);

  // gets the events from the backend and updates the state in this file

  const refreshList = () => {
    props.client.getEvents().then((response) => {
      setEvents(response.data);
    });
  };

  // removes the advert and then calls refresh list so that the list of ads
  //  is updated and doesnt include the ad that the user just deleted.

  const removeEvents = (id) => {
    props.client.removeEvent(id).then(() => {
      refreshList();
    });
  };

  // take an ad from a child component and then we will set the current state to that at
  // so that we can edit it later on

  const updateEvents = (event) => {
    setCurrent(event);
  };

  // this function is called when the component renders and it calls the refresh list function
  // that allows us to see the ads from the db (useeffect)

  useEffect(() => {
    refreshList();
  }, []);

  const buildrows = () => {
    return events.map((current) => {
      return (
        <tr key={current._id}>
          <td>{current.name}</td>
          <td>${current.price}</td>
          <td>
            <button onClick={() => removeEvent(current._id)}>Delete Ad</button>
            <button onClick={() => updateEvent(current)}>update</button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      Dashboard
      <table>
        <thead>
          <th>Event name</th>
          <th>Price</th>
        </thead>
        <tbody>{buildrows()}</tbody>
      </table>
      <Add
        client={props.client}
        refreshList={() => {
          refreshList();
          setCurrent(undefined);
        }}
        currentEvent={current}
      />
    </div>
  );
};

export default Dashboard;
