"use client"
import { useGetUsersMutation } from "@/Redux/api/userApi";
import React, { useEffect, useState } from "react";
import UserCard from "@/component/UserCard";

interface User {
    name: Object;
    gender: string;
    profileImage: Object;
    location: Object;
    email: string;
  }

const SavedUsers =()=>{
const [usersArr,setUsersArr]=useState<any[]>([])
  const [downloadBool,setDownloadBool]=useState(false);
  useEffect(() => {
    const existingDataString = localStorage.getItem('UsersArr');

if (existingDataString) {
  const existingData: User[] = JSON.parse(existingDataString);
  setUsersArr(existingData);
  setDownloadBool(true);
  
} else {
  console.log('LocalStorage is empty or key does not exist');
}
  }, []); 
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-between pt-10">
      {(downloadBool && usersArr.length > 0 ) && (
        <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {usersArr.map((user, index) => (
            <UserCard key={index}  user={user} saveBtn={false}/>
        ))}
        </ul>
      )}
      {(!downloadBool && usersArr.length == 0 ) && (<div className="pt-24 text-gray-600 text-lg">You have no saved users</div>)}
    </div>
  );
}
export default SavedUsers ;
