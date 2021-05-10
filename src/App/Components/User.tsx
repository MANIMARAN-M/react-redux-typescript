import React from "react";
import ListUsers from "./ListUsers";

interface UserDetails {
  name: string;
  data: any;
}

class User extends React.Component<{}, UserDetails> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "hey",
      data: [],
    };
  }
  componentDidMount?(): void {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ ...this.state, data: res });
      })
      .catch((err) => console.log(err));
  }
  render(): JSX.Element {
    console.log("render 3");
    return (
      <div data-testid="users-data">
        <div className="UsersListTitle">
          <h1>Fetching users data using TypeScript</h1>
        </div>
        <div>
          <ListUsers UserData={this.state.data} />
        </div>
      </div>
    );
  }
}

export default React.memo(User);
