import { HStack, useRadioGroup } from "@chakra-ui/react";
import React from "react";
import { RadioCard } from '@components/design/RadioCard'

export const RadioGroupStack: React.FC = () => {
  const options = ['Map View', 'Table View'];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'view',
    defaultValue: 'Map View',
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}
