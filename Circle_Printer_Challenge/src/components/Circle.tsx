import { CircleType } from "../types/CircleType";

const Circle = ({ circle: { pageX, pageY } }: { circle: CircleType }) => {
  return (
    <div
      className="circle"
      style={{
        position: "absolute",
        top: `${pageY - 50}px`,
        left: `${pageX}px`,
      }}
    ></div>
  );
};

export default Circle;
