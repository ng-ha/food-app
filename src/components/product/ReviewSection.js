import { formatDistanceToNow } from 'date-fns';
import {
  Box,
  CheckIcon,
  FormControl,
  Heading,
  HStack,
  Select,
  Text,
  TextArea,
  VStack,
} from 'native-base';
import React, { useState } from 'react';
import Colors from '../../color';
import MyButton from '../MyButton';
import Message from '../notifications/Message';
import Rating from '../Rating';
import { TouchableOpacity } from 'react-native';

const ReviewSection = ({ product }) => {
  const [rating, setRating] = useState('');
  const [isAddReviewMode, setIsAddReviewMode] = useState(false);
  const [showError, setShowError] = useState(false);
  return (
    <Box my={9}>
      <HStack justifyContent="space-between">
        <TouchableOpacity onPress={() => setIsAddReviewMode(false)}>
          <Heading fontSize={15} mb={2}>
            Reviews
          </Heading>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsAddReviewMode(true)}>
          <Heading fontSize={15} mb={2}>
            Add review
          </Heading>
        </TouchableOpacity>
      </HStack>
      {isAddReviewMode && (
        <Box mt={6}>
          <VStack space={6}>
            <FormControl>
              <FormControl.Label _text={{ fontSize: 12, fontWeight: 'bold', color: Colors.black }}>
                Rating
              </FormControl.Label>

              <Select
                w="100%"
                bg={Colors.mainLight}
                borderWidth={0}
                rounded={5}
                py={4}
                placeholder="Choose Rate"
                _selectedItem={{
                  bg: Colors.mainLight,
                  endIcon: <CheckIcon size={4} />,
                }}
                selectedValue={rating}
                onValueChange={setRating}
              >
                <Select.Item label="Terrible" value="1"></Select.Item>
                <Select.Item label="Bad" value="2"></Select.Item>
                <Select.Item label="Normal" value="3"></Select.Item>
                <Select.Item label="Good" value="4"></Select.Item>
                <Select.Item label="Excellent" value="5"></Select.Item>
              </Select>
            </FormControl>

            <FormControl>
              <FormControl.Label _text={{ fontSize: 12, fontWeight: 'bold', color: Colors.black }}>
                Comment
              </FormControl.Label>

              <TextArea
                h={20}
                w="full"
                placeholder="Type something..."
                borderWidth={0}
                bg={Colors.mainLight}
                py={3}
                _focus={{ bg: Colors.mainLight }}
              ></TextArea>
            </FormControl>
            <Box mb={6}>
              <MyButton
                bg={Colors.main}
                color={Colors.white}
                mt={4}
                onPress={() => setShowError(true)}
                fontSize="md"
              >
                Submit
              </MyButton>

              {showError && (
                // <Message color={Colors.red} bg={Colors.white} size={14} mt={-6}>
                //   Please 'Login' to write a review
                // </Message>
                <Text
                  textAlign="center"
                  italic
                  fontSize={12}
                  color={Colors.red}
                  style={{
                    position: 'absolute',
                    bottom: -20,
                    left: 110,
                  }}
                >
                  Please 'Login' to write a review
                </Text>
              )}
            </Box>
          </VStack>
        </Box>
      )}

      {!isAddReviewMode && (
        <>
          {product.reviews.length === 0 && (
            <Message color={Colors.black} bg={Colors.white} fontWeight="normal" italic mt={8}>
              No one has rated this dish yet.
            </Message>
          )}
          {product.reviews.length > 0 &&
            product.reviews.map((review, index) => (
              <Box key={index} p={3} bg={Colors.mainLight} mt={5} rounded={5}>
                <Heading fontSize={15} color={Colors.black}>
                  {review.username}
                </Heading>
                <Rating value={Number(review.rating)} />
                <Text my={2} pb={1} fontSize={12}>
                  {formatDistanceToNow(review.createdAt, { addSuffix: true })}
                </Text>
                <Message color={Colors.black} bg={Colors.white} size={14}>
                  {review.content}
                </Message>
              </Box>
            ))}
        </>
      )}
    </Box>
  );
};

export default ReviewSection;
