import { Text } from 'native-base';
import React from 'react';
import { NumericFormat } from 'react-number-format';

const PriceFormat = ({ value, ...props }) => {
  return (
    <NumericFormat
      value={value}
      displayType="text"
      decimalScale={2}
      fixedDecimalScale
      prefix="$"
      renderText={(value) => <Text {...props}>{value}</Text>}
    />
  );
};

export default PriceFormat;
