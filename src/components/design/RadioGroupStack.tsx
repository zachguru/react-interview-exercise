import { HStack, useRadioGroup } from "@chakra-ui/react";
import React from "react";
import { RadioCard } from '@components/design/RadioCard'

export interface RadioGroupProps {
    handleSwitch : (e:any) => void
}

export const RadioGroupStack: React.FC<RadioGroupProps> = ({handleSwitch}) => {
  const options = ['Map View', 'Table View'];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'view',
    defaultValue: 'Map View',
    onChange: handleSwitch,
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
