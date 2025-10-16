"use client";
import { useState, useEffect } from "react";

export default function info() {
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    postcode: "",
    country: "",
  });

  const randomuserapi = async () => {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    const user = data.results[0];

    setAddress({
      street: `${user.location.street.number} ${user.location.street.name}`,
      city: user.location.city,
      state: user.location.state,
      postcode: user.location.postcode,
      country: user.location.country,
    });
  };

    useEffect(() => {
    randomuserapi();
  }, []);

  return (
    <div className="p-2">
        <div>
            <div className="flex justify-between gap-2">
              <div className="text-sm w-full">Kota
                <input
                type="text"
                value={address.city}
                placeholder="Place holder"
                className="w-full p-2 border-2 bg-white border-gray-600 rounded mr-2"
                />
              </div>

              <div className="text-sm w-full">Provinsi
                <input
                type="text"
                value={address.state}
                placeholder="Place holder"
                className="w-full p-2 border-2 bg-white border-gray-600 rounded mr-2"
                />
              </div>

              <div className="text-sm w-full">Negara
                <input
                type="text"
                value={address.country}
                placeholder="Place holder"
                className="w-full p-2 border-2 bg-white border-gray-600 rounded mr-2"
                />
              </div>
            </div>

            <div className="flex justify-between mt-2 gap-2">
              <div className="text-sm w-full">Nama Jalan
                <input
                type="text"
                value={address.street}
                placeholder="Place holder"
                className="w-full p-2 border-2 bg-white border-gray-600 rounded mr-2"
                />
              </div>

              <div className="text-sm w-full">Kode Pos
                <input
                type="text"
                value={address.postcode}
                placeholder="Place holder"
                className="w-full p-2 border-2 bg-white border-gray-600 rounded mr-2"
                />
              </div>
            </div>            
        </div>

    </div>
  );
}