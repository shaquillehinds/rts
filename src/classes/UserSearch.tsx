import React, { Component } from "react";

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

export default class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };
  handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const foundUser = this.props.users.find((user) => {
      return user.name.toLowerCase() === this.state.name.toLowerCase();
    });
    this.setState({ user: foundUser });
  };
  render() {
    const { name, user } = this.state;
    return (
      <div>
        <h3>User Search</h3>
        <form onSubmit={this.handleSubmit}>
          <input value={name} onChange={(e) => this.setState({ name: e.target.value })} />
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
  }
}
