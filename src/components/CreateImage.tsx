import React, { useState } from "react";
import { saveAs } from "file-saver";

const CreateImage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const createImage = async () => {
    setLoading(true);

    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 1;
    const ctx = canvas.getContext("2d");

    for (let i = 0; i < 256; i++) {
      ctx!.fillStyle = `rgb(${i}, ${i}, ${i})`;
      ctx!.fillRect(i, 0, 1, 1);
    }

    canvas.toBlob((blob) => {
      saveAs(blob!, "bw-ramp.png");
      setLoading(false);
    });
  };

  return (
    <div className="">
      <button
        className=" hover:border-[#646cff] border-[1px] border-transparent duration-300 text-white font-bold py-2 px-4 rounded-lg bg-[#1a1a1a]"
        disabled={loading}
        onClick={createImage}
      >
        {loading ? "Creating image..." : "Create image"}
      </button>
    </div>
  );
};

export default CreateImage;
