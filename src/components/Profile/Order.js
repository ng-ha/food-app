import { Box, Button, HStack, Pressable, ScrollView, Text } from 'native-base';
import React from 'react';
import Colors from '../../color';

const Order = () => {
  return (
    <Box h="full" bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* PAID ORDER */}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            bg={Colors.mainLight}
            py={5}
            px={2}
          >
            <Text fontSize={9} bold color={Colors.blue} isTruncated>
              23423523523423
            </Text>
            <Text fontSize={12} bold color={Colors.black} isTruncated>
              PAID
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              Dec 12 2022
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.main}
              _text={{ color: Colors.white }}
              _pressed={{
                bg: Colors.main,
                opacity: 0.7,
              }}
            >
              $456
            </Button>
          </HStack>
        </Pressable>
        {/* NOT PAID */}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            // bg={Colors.mainLight}
            py={5}
            px={2}
          >
            <Text fontSize={9} bold color={Colors.blue} isTruncated>
              23423523523423
            </Text>
            <Text fontSize={12} bold color={Colors.black} isTruncated>
              NOT PAID
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              Aug 12 2022
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.red}
              _text={{ color: Colors.white }}
              _pressed={{
                bg: Colors.red,
                opacity: 0.7,
              }}
            >
              $29
            </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  );
};

export default Order;
