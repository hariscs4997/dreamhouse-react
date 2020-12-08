import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import './admin.css';
const useStyles = makeStyles({
  root: {
    width: '90%',
    margin : 'auto',
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider({min, max}) {
  const classes = useStyles();
  const [value, setValue] = React.useState([min, max]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Slider
        value={value}
        min={min}
        step={1}
        max={max}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        valueLabelDisplay="on"
      />
    </div>
  );
}
