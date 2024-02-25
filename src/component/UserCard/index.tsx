"use client"
import React, { useState, useEffect } from 'react';
import WeatherModal from '../Weather';
import {notifyWarn,notifySuccess} from "../../helpers/toast";

interface User {
  name:{
    title:string;
    first:string;
    last:string;
  };
  gender: string;
  profileImage: Object;
  location:{
    timezone:{
      offset: string;
    }
    coordinates:{
      latitude:string;
      longitude:string;
      
    }
    street:{
      number: Number;
      name:string;
    },
    city:string;
    country:string;
  };
  email: string;
  login: {
    uuid: string;

  };
  picture:{
    large:string,
    medium:string,
    thumbnail:string,

  }
}

interface UserCardProps {
  user: User;
  saveBtn:boolean;
}


const UserCard: React.FC<UserCardProps> = ({ user ,saveBtn}) => {
  const [showWeatherModal, setShowWeatherModal] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getWeatherData = async () => {
    setShowWeatherModal(true);
  };
  const saveToLocalStorage = () => {
    const savedUsersString = localStorage.getItem('UsersArr');
    const existingData: User[] = savedUsersString ? JSON.parse(savedUsersString) : [];
  const userExists = existingData.some(existingUser => existingUser.login.uuid === user.login.uuid);
  if (!userExists) {
    existingData.push(user);
    localStorage.setItem('UsersArr', JSON.stringify(existingData));
    notifySuccess('User added');
  } else {
    notifyWarn(`User already exists in localStorage`);
  }};

  const getImageSrc = () => {
    if (screenWidth >= 1024) {
      return user.picture.large;
    } else if (screenWidth >= 768) {
      return user.picture.medium;
    } else {
      return user.picture.thumbnail;
    }
  };

  return (
    <li className=" relative mx-auto mt-3 bg-white rounded-xl shadow-md overflow-hidden w-[300px] flex flex-col ">
      <div className="flex items-center justify-center">
    <img className="object-cover mt-2" src={getImageSrc()} alt="Profile" />
  </div>
  <div className="p-6 flex flex-col justify-between h-full">
    <div>
      <h2 className="font-bold text-xl mb-2">
        {user.name.title} {user.name.first} {user.name.last}
      </h2>
      <p className="text-gray-600">Gender: {user.gender}</p>
      <p className="text-gray-600">
        Location: {user.location.street.number.toString()} {user.location.street.name}, {user.location.city}, {user.location.country}
      </p>
      <p className="text-gray-600">Email: {user.email}</p>
    </div>
    <div className="mt-4 flex justify-center">
      {saveBtn &&<button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded"
        onClick={saveToLocalStorage}
      >
        Save
      </button>
      }
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={getWeatherData}
      >
        Weather
      </button>
    </div>
  </div>
  {showWeatherModal && <div className=""><WeatherModal location={user.location} close={()=>setShowWeatherModal(false)}/></div>
  }
</li>
  );
};

export default UserCard;