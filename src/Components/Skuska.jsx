import React from "react";
import { useState } from "react";

const Skuska = () => {
  const [data, setData] = useState(0);
  console.log(data);
  function updateData() {
    setData(data + 1);
  }

  return (
    <div className="flex  justify-around  items-center h-screen w-full ">
      <h1 className="p-4 bg-green-500">{data}</h1>
      <button onClick={updateData} className="bg-yellow-300 p-4">
        Klikni
      </button>

      {/* <h1 className={` ${data === 70 ? `bg-green-400` : `bg-yellow-400`}`}>
        {" "}
        cislo podmienka{" "}
      </h1> */}

      <select name="dil">
        <option value="1">first</option>
        <option value="1">second</option>
        <option value="1">third</option>
      </select>
      <div>
        <table>
          <thead>
            <tr>
              <th>nadpis1</th>
              <th>nadpis2</th>
              <th>nadpis3</th>
              <th>nadpis4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>hodnota1</td>
              <td>hodnota2</td>
              <td>hodnota3</td>
              <td>hodnota4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Skuska;
