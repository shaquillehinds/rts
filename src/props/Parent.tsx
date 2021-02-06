import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC
      color="blue"
      onClick={() => {
        alert("clickec");
      }}
    >
      Text
    </ChildAsFC>
  );
};

export default Parent;
