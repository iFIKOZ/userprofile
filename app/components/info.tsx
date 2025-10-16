"use client";
import { useState, useEffect } from "react";

export default function info() {
  const [photo, setPhoto] = useState<string | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const randomuserapi = async () => {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    const user = data.results[0];

    setPhoto(user.picture.large);
    setFirstName(user.name.first);
    setLastName(user.name.last);
  };

    useEffect(() => {
    randomuserapi();
  }, []);

  return (
    <div className="p-2">
        <div><h1 className="text-xl">Foto Profil</h1>
            <div><img src={photo || "https://via.placeholder.com/150"}
            alt="photo" className="w-24 h-24 rounded-full bg-orange-300" /></div> 
        </div>

        <div className="mt-5">
            <div className="flex justify-between gap-2">
              <div className="text-sm w-full">Nama Depan
                <input
                type="text"
                value={firstName}
                placeholder="Place holder"
                className="w-full p-2 border-2 bg-white border-gray-600 rounded mr-2"
                />
              </div>
              <div className="text-sm w-full">Nama Belakang
                <input
                type="text"
                value={lastName}
                placeholder="Place holder"
                className="w-full p-2 border-2 bg-white border-gray-600 rounded mr-2"
                />
              </div>
            </div>
        </div>

    </div>
  );
}