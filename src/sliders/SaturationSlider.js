import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import GradientSlider from './GradientSlider';
import SaturationGradient from '../gradients/SaturationGradient';
import tinycolor from 'tinycolor2';

const SaturationSlider = ({
  style,
  value,
  color,
  disabled,
  disabledThumbTintColor,
  onValueChange,
  onSlidingComplete,
  gradientSteps
}) => {
  return (
    <GradientSlider
      gradient={
        <SaturationGradient color={color} gradientSteps={gradientSteps} />
      }
      style={style}
      step={0.01}
      maximumValue={1}
      value={value}
      disabled={disabled}
      thumbTintColor={
        disabled && disabledThumbTintColor
          ? disabledThumbTintColor
          : tinycolor({ ...color, s: value }).toHslString()
      }
      onValueChange={onValueChange}
      onSlidingComplete={onSlidingComplete}
    />
  );
};

export default SaturationSlider;

SaturationSlider.propTypes = {
  value: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
  disabledThumbTintColor: PropTypes.string,
  color: PropTypes.shape({
    h: PropTypes.number.isRequired,
    s: PropTypes.number.isRequired,
    l: PropTypes.number.isRequired
  }).isRequired,
  onValueChange: PropTypes.func.isRequired,
  onSlidingComplete: PropTypes.func,
  gradientSteps: PropTypes.number.isRequired
};

SaturationSlider.defaultProps = {
  disabled: false,
  disabledThumbTintColor: null,
  onSlidingComplete: () => {}
};
