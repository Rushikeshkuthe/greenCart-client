import { Avatar, Card, CardContent, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const farmers = [
  { id: 1, name: "Ramesh Yadav", location: "Nagpur" },
  { id: 2, name: "Sunita Patil", location: "Pune" },
  { id: 3, name: "Amit Sharma", location: "Mumbai" },
  { id: 4, name: "Geeta Joshi", location: "Nashik" },
    { id: 5, name: "Ramesh Yadav", location: "Nagpur" },
  { id: 6, name: "Sunita Patil", location: "Pune" },
  { id: 7, name: "Amit Sharma", location: "Mumbai" },
  { id: 8, name: "Geeta Joshi", location: "Nashik" },
];

const NearbyFarmers = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 7;

  const handleNext = () => {
    if (startIndex + visibleCount < farmers.length)
      setStartIndex(startIndex + 1);
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="flex justify-between px-5">
      

        <IconButton onClick={handlePrev} disabled={startIndex === 0}>
          <MdArrowBackIos color="gray" />
        </IconButton>
    

      <div className="flex justify-between gap-7 ">
        {farmers.slice(startIndex, startIndex + visibleCount).map((farmer) => (
          <Card key={farmer.id} className="w-48 rounded-xl shadow-md transition-transform hover:scale-105">
            <CardContent className="flex flex-col items-center">
              <Avatar src={farmer.img} alt={farmer.name} sx={{ width: 60, height: 60, mb: 1 }} />
              <Typography variant="subtitle1" fontWeight="bold">
                {farmer.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {farmer.location}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
     
        <IconButton
        onClick={handleNext}
        disabled={startIndex + visibleCount >= farmers.length}
      >
        <MdArrowForwardIos color="gray"/>
      </IconButton>
   
      
    </div>
  );
};

export default NearbyFarmers;
