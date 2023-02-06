import React from "react";
import ReactCurvedText from "react-curved-text";

const Kruh = () => {
  return (
    <div className="m-40">
      <div className="bg-red-500 w-[200px] h-[200px] rounded-full">
        <ReactCurvedText
          width={370}
          height={300}
          cx={100}
          cy={100}
          rx={80}
          ry={80}
          startOffset={100}
          reversed={false}
          text=" react-curved-text"
          textProps={{ style: { fontSize: 18 } }}
          textPathProps={{ fill: "#FBB574" }}
          tspanProps={null}
          ellipseProps={null}
          svgProps={null}
        />
      </div>
    </div>
  );
};

export default Kruh;
