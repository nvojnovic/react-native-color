import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import GradientSlider from './GradientSlider';
import HueGradient from '../gradients/HueGradient';
import tinycolor from 'tinycolor2';

const HueSlider = ({
  style,
  value,
  disabled,
  onValueChange,
  onSlidingComplete,
  gradientSteps
}) => {
  return (
    <GradientSlider
      gradient={<HueGradient gradientSteps={gradientSteps} />}
      style={style}
      step={1}
      maximumValue={359}
      value={value}
      disabled={disabled}
      thumbTintColor={tinycolor({ s: 1, l: 0.5, h: value }).toHslString()}
      onValueChange={onValueChange}
      onSlidingComplete={onSlidingComplete}
    />
  );
};

export default HueSlider;

HueSlider.propTypes = {
  value: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
  onValueChange: PropTypes.func.isRequired,
  onSlidingComplete: PropTypes.func,
  gradientSteps: PropTypes.number.isRequired
};

HueSlider.defaultProps = {
  disabled: false,
  onSlidingComplete: () => {}
};
