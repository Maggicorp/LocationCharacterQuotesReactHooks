import React from 'react';
import { ToggleButton } from '@material-ui/lab';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import './styles.css';

const Filter = ({ tagName, selected, setSelected }) => {
  const onChange = () => {
    const index = selected.indexOf(tagName)
    let newSelectedArray
    if (index === -1) {
      // add type to the array of selected types
      newSelectedArray = [...selected, tagName]
    } else {
      // remove type from the array of selected types
      newSelectedArray = selected.filter(item => item !== tagName)
    }
    setSelected(newSelectedArray)
  }

  return (
    <div className="Filter">
      <ToggleButton
        alt={`Toggle button for ${tagName}`}
        value="check"
        selected={selected.includes(tagName)}
        onChange={onChange}
      >
        <CheckCircleIcon className={"CheckCircle"}/>
      </ToggleButton>
     <div className="Tag-name"> {tagName} </div>
    </div>)
}

export default Filter;
