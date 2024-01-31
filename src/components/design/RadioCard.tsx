import { useRadio, UseRadioProps } from '@chakra-ui/radio';
import { Box } from '@chakra-ui/react';
import React from 'react';

export const RadioCard: React.FC<UseRadioProps> = (props) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();
  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: 'green.400',
          color: 'white',
          borderColor: 'green.600',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
};
