import React from 'react';
import { Center, Text } from 'native-base';

const Message = ({ bg, color, children, size, bold, italic, fontWeight, ...props }) => {
  return (
    <Center bg={bg} p={4} rounded={5} {...props}>
      <Text
        color={color}
        fontSize={size}
        fontWeight={fontWeight}
        italic={italic}
        textAlign="justify"
        bold={bold}
      >
        {children}
      </Text>
    </Center>
  );
};

export default Message;
