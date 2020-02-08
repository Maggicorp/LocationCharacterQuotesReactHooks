import React from 'react';
import { ToggleButton } from  '@material-ui/lab';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const Button = ({ buttonName, selected, setSelected }) => {
  const onChange = () => {
    console.log('onchange')
    const index = selected.indexOf(buttonName)
    let newSelectedArray
    if (index === -1){
      // add type to the array of selected types
      newSelectedArray = [...selected, buttonName]
    } else {
      // remove type from the array of selected types
      newSelectedArray = selected.filter(item => item !== buttonName)
    }
    setSelected(newSelectedArray)
  }

    return (
        <div>
<ToggleButton
  value="check"
  selected={selected.includes(buttonName)}
  onChange={onChange}
>
  <CheckCircleIcon />
</ToggleButton>
{buttonName}
</div>)}

export default Button;
