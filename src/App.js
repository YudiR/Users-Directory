import React from "react";
import Name from "./components/name/name";
import Data from "./components/data/data";
import Title from "./components/title/title";
import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      data: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => resp.json()) // Transform the data into json
      .then(data => {
        let userArray = data.map((e, i) => e);
        console.log(userArray);

        this.setState({
          users: userArray
        });
      });
  }

  delete = index => {
    console.log(index);
    let dataCopy = JSON.parse(JSON.stringify(this.state.users));
    console.log(dataCopy[index], "datacopy index:::");

    if (dataCopy[index].id === this.state.data.id) {
      this.setState({
        data: []
      });
    }
    dataCopy.splice(index, 1);
    this.setState({
      users: dataCopy
    });
  };

  data = index => {
    console.log("index:::::::", index);
    let dataCopy = JSON.parse(JSON.stringify(this.state.users));

    console.log(dataCopy, "dataCopy!");
    this.setState({
      data: dataCopy[index]
    });
  };

  render() {
    if (this.state.data.username) {
      var ui = <Data {...this.state.data} />;
    } else {
      ui = <Title />;
    }

    return (
      <div>
        {this.state.users.map((user, index) => (
          <Name
            key={index}
            index={index}
            name={user.name}
            data={this.data}
            delete={this.delete}
          />
        ))}

        {ui}
      </div>
    );
  }
}

export default App;
