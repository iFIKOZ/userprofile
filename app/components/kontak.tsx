"use client";
import { useState, useEffect } from "react";

export default function info() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const randomuserapi = async () => {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    const user = data.results[0];

    setEmail(user.email);
    setPhone(user.cell); // ✅ store phone number

  };

    useEffect(() => {
    randomuserapi();
  }, []);

  return (
    <div className="p-2 ">     
        <div><h1 className="text-sm mt-4">Email</h1>
            <input
              type="text"
              value={email}
              placeholder="Place holder"
              className="w-full p-2 border-2 bg-white border-gray-600 rounded"
            />
        </div>

        <div><h1 className="text-sm mt-4">Nomor Telpon</h1>
            <input
              type="text"
              value={phone}
              placeholder="Place holder"
              className="w-full p-2 border-2 bg-white border-gray-600 rounded"
            />
        </div>

    </div>
  );
}