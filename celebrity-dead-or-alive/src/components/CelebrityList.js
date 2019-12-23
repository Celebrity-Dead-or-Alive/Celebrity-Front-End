import React, { useEffect, useState } from "react";
import axios from "axios";
import CelebrityCard from "./CelebrityCard";

export default function CelebrityList() {
  const [celebrityData, setCelebrityData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://celebs-dead-or-alive.herokuapp.com/celebs`)
      .then(res => {
        console.log(res.data);
        setCelebrityData(res.data);
      })
      .catch(error => {
        console.log("data error");
      });
  }, []);

  return (
    <div>
      {celebrityData.map(item => {
        return (
          <CelebrityCard
            key={item.id}
            name={item.name}
            image_url={item.image_url}
          />
        );
      })}
    </div>
  );
}
