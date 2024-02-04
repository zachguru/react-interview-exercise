import { HStack, useRadioGroup } from "@chakra-ui/react";
import React from "react";
import { RadioCard } from '@components/design/RadioCard'

// Required props for RadioGroupStack component
export interface RadioGroupProps {
    handleSwitch : (e:any) => void // Function to handle switch when radio button is selected
    options : string[] // Options of a radio group
    defaultValue: string // Default value of the radio group
    name: string // Value used to distinguish two different radio groups. Two radio group components will behave as one if they have same name argument
}

// Radio Group component
export const RadioGroupStack: React.FC<RadioGroupProps> = ({handleSwitch, options, defaultValue, name}) => {

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: name,
    defaultValue: defaultValue,
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
