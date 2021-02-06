import { useState, useRef, useEffect } from "react";

interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const foundUser = users.find((user) => {
      return user.name.toLowerCase() === name.toLowerCase();
    });
    setUser(foundUser);
  };

  return (
    <div>
      <h3>User Search</h3>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
        <input type="submit" value="Search User" />
      </form>
      <br />
      <h3>User Details</h3>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default UserSearch;
