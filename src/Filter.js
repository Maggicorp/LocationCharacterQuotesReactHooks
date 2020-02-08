import React, { Component } from 'react';
import Button from './Button';

class Filter extends Component {

  componentDidMount() {
    this.selectedCheckboxes = [];
  }

  toggleCheckbox = name => {
    const indexOfElemtn = this.selectedCheckboxes.indexOf(name);
    if (indexOfElemtn > -1) {
        this.selectedCheckboxes.splice(index, 1);
    } else {
        this.selectedCheckboxes.push(name);
    }
  };

  render() {
    return (
        <div>
        {["These", "Button", "Tyoes"].map(button => <Button buttonName={button} selected={selected} setSelected={setSelected} />
        )}
      </div>
    );
  }
}
