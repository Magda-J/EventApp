"use client";
import { useEffect, useState } from "react";
import Add from "./Add";

const Dashboard = (props) => {
  const [ads, setAds] = useState([]);
  const [current, setCurrent] = useState(undefined);

  // gets the ads from the backend and updates the state in this file

  const refreshList = () => {
    props.client.getAds().then((response) => {
      setAds(response.data);
    });
  };

  // removes the advert and then calls refresh list so that the list of ads
  //  is updated and doesnt include the ad that the user just deleted.

  const removeAdvert = (id) => {
    props.client.removeAd(id).then(() => {
      refreshList();
    });
  };

  // take an ad from a child component and then we will set the current state to that at
  // so that we can edit it later on

  const updateAdvert = (ad) => {
    setCurrent(ad);
  };

  // this function is called when the component renders and it calls the refresh list function
  // that allows us to see the ads from the db (useeffect)

  useEffect(() => {
    refreshList();
  }, []);

  const buildrows = () => {
    return ads.map((current) => {
      return (
        <tr key={current._id}>
          <td>{current.name}</td>
          <td>${current.price}</td>
          <td>
            <button onClick={() => removeAdvert(current._id)}>Delete Ad</button>
            <button onClick={() => updateAdvert(current)}>update</button>
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
          <th>Advert name</th>
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
        currentAd={current}
      />
    </div>
  );
};

export default Dashboard;
