"use client";
import { useState } from "react";
import Info from "@/app/components/info";
import Kontak from "@/app/components/kontak";
import Alamat from "@/app/components/alamat";

export default function Sidebar() {
  const [active, setActive] = useState("bio");

  // Function to render active component
  const renderComponent = () => {
    switch (active) {
      case "bio":
        return <Info />;
      case "kontak":
        return <Kontak />;
      case "alamat":
        return <Alamat />;
      default:
        return <Info />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black p-6">
      <h1 className="text-3xl font-bold mb-6">Profil Pengguna</h1>

        <div className="flex justify-end mb-2">            
          <button           
            className={`py-2 px-6 text-left rounded text-white bg-green-500 hover:bg-green-400`}> Edit Profil </button>
        </div>

        <div className="flex gap-1 justify-center rounded shadow-xl/30 bg-gray-200">
          <div className="w-64 flex flex-col gap-y-2 font-bold bg-white">
            <button           
            onClick={() => setActive("bio")}
            className={`p-3 text-left hover:text-orange-500 ${
            active === "bio" ? "border-r-2 border-orange-400" : ""
            }`}> Profil </button>

            <button           
            onClick={() => setActive("kontak")}
            className={`p-3 text-left hover:text-orange-500 ${
            active === "kontak" ? "border-r-2 border-orange-400" : ""
            }`}> Kontak </button>

            <button           
            onClick={() => setActive("alamat")}
            className={`p-3 text-left hover:text-orange-500 ${
            active === "alamat" ? "border-r-2 border-orange-400" : ""
            }`}> Alamat </button>

          </div>

          <div className="grow bg-white pb-10"> {renderComponent()} </div>
        </div>

    </div>
  );
}
