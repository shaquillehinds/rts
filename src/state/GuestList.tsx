import { useState } from "react";

const GuestList: React.FC = () => {
  const [guests, setGuests] = useState<string[]>([]);
  const [name, setName] = useState("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (name) {
      setGuests((prev) => [...prev, name]);
      setName("");
    }
  };
  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input name="Name" onChange={handleInput} value={name} />
        <input type="submit" value="Add Guest" />
      </form>
    </div>
  );
};

export default GuestList;
