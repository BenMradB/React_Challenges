import { useState } from "react";
import { Button, Circle } from "./components";
import { CircleType } from "./types/CircleType";

const App = () => {
  const [circles, setCircles] = useState<CircleType[]>([]);
  const [undoCircles, setUndoCircles] = useState<CircleType[]>([]);

  const onclickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const { pageX, pageY } = e;
    setCircles((currCircles) => [...currCircles, { pageX, pageY }]);
  };

  const redoHandler = () => {
    if (!undoCircles.length) return;

    const redoCircle = undoCircles[undoCircles.length - 1];
    setUndoCircles((currUndoCircles) => currUndoCircles.slice(0, -1));
    setCircles((currCircles) => [...currCircles, redoCircle]);
  };

  const undoHandler = () => {
    if (!circles.length) return;
    const undoCircle = circles[circles.length - 1];

    setUndoCircles((currUndoCircles) => [...currUndoCircles, undoCircle]);

    setCircles((currCircles) => currCircles.slice(0, -1));
  };

  return (
    <>
      <Button onClickHandler={undoHandler}>Undo</Button>
      <Button onClickHandler={redoHandler}>Redo</Button>
      <div className="app" onClick={onclickHandler}>
        {circles.map((circle, key) => (
          <Circle key={key} circle={circle} />
        ))}
      </div>
    </>
  );
};

export default App;
