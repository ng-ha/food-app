import React from 'react';
import { Button, TouchableOpacity } from 'native-base';
const MyButton = ({ mt, bg, color, children, onPress, fontSize, ...props }) => {
  return (
    <Button
      w="full"
      h={55}
      mt={mt}
      rounded="full"
      bg={bg}
      _text={{ color, fontSize, fontWeight: 'bold' }}
      _pressed={{ bg, opacity: 0.7 }}
      onPress={onPress}
      {...props}
    >
      {children}
    </Button>
  );
};

export default MyButton;
