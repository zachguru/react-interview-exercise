import { HStack, useRadioGroup } from "@chakra-ui/react";
import React from "react";
import { RadioCard } from '@components/design/RadioCard'

export interface RadioGroupProps {
    handleSwitch : (e:any) => void
    options : string[]
    defaultValue: string
    name: string
}

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
