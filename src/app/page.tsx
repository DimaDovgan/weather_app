"use client"
import { useGetUsersMutation } from "@/Redux/api/userApi";
import React, { useEffect, useState } from "react";
import UserCard from "@/component/UserCard";
import Loader from "@/component/Loader";

export default function Home() {
  const [getUsers, { isLoading, isError, error, isSuccess, data }] = useGetUsersMutation();
  const [downloadedUsers,setDownloadedUsers]=useState<any[]>([]);
  const [downloadBool,setDownloadBool]=useState(false);

  const downloadUser = async (count = 4) => {
    try {
      setDownloadBool(false); 
      const arr:any[] = [];;
      for (let index = 0; index < count; index++) {
        const response = await getUsers({});
        if ('data' in response && response.data) {
          arr.push(response.data.results[0]);
        }
      }
      setDownloadBool(true); 
      setDownloadedUsers((prevUsers:any[]) => [...prevUsers, ...arr]);
    } catch (error) {
      console.error('Error downloading users:', error);
    }
  };

  useEffect(() => {
    downloadUser();
  }, []); 
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-between pt-10">
      {!downloadBool && <Loader/>}
      {isError && <p>Помилка із завантаженням </p>}
      {downloadedUsers.length > 0 && (
        <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {downloadedUsers.map((user, index) => (
          
            <UserCard key={index}  user={user} saveBtn={true}/>
          
        ))}
        </ul>
      )}
      {downloadedUsers.length > 0 && (
        <button className="mt-8 mb-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full" onClick={() => downloadUser()}>Download more</button>
      )}
    </div>
  );
}
