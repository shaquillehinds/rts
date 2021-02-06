import React from "react";

const EventComponent: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e.pageY);
  };
  return (
    <div>
      <input type="text" onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
