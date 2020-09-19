import React, { Component } from "react";
import "./List.scss";
import ComponentList from "../../components/List/List";

class List extends Component {
  state = {
    list: [1, 2, 3, 4, 5, 6, 7],
  };
  render() {
    const { list } = this.state;
    return (
      <div className="screen-list">
        <h1>this is list</h1>
        <ComponentList list={list} />
      </div>
    );
  }
}

export default List;
