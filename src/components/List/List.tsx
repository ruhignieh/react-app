import React, { Component } from "react";
import "./List.scss";

const defaultProps = {
  name: "list",
};

type Props = {
  age: number;
  list: any[];
} & Partial<typeof defaultProps>;

class List extends Component {
  static defaultProps = defaultProps;

  render() {
    console.log(this.props);
    return <div className="component-list">this is list component</div>;
  }
}

export default List;
