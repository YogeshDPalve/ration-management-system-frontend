import PageTitle from "@/components/PageTitle";
import { PanelsTopLeft } from "lucide-react";
import React, { useState } from "react";

const Dashboard = () => {
  const [image, setImage] = useState(null); // store image file
  const [preview, setPreview] = useState(null); // store preview URL

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreview(null);
  };
  return (
    <>
      <PageTitle title={"Dashboard"} />

      <div className="md:m-10 my-10 mx-3">
        <div className="flex gap-4 text-primary items-center">
          <PanelsTopLeft size={30} />
          <h1 className="md:text-3xl t`ext-2xl font-semibold font-winky ">
            Dashboard
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-start">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="cursor-pointer"
        />

        {preview && (
          <div className="flex flex-col gap-2">
            <img
              src={preview}
              alt="Preview"
              className="w-40 h-40 object-cover rounded-lg shadow-md"
            />
            <button
              onClick={handleRemoveImage}
              className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
