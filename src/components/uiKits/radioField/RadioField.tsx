import { Radio, RadioGroup } from '@chakra-ui/react';
import { FormControl, FormErrorMessage, FormLabel, HStack } from '~/components/uiKits';
import { FieldValues, useFormContext } from 'react-hook-form';
import { useErrorMessage } from '~/hooks/useErrorMessage';
import { FC, ReactElement } from 'react';
import { Element } from '~/ts';

type Props = Omit<Element, 'id' | 'type' | 'editableIf'>;

const RadioField: FC<Props> = function ({
  choices = [],
  name = '',
  // requiredIf,
  // visibleIf,
}): ReactElement {
  const { register } = useFormContext<FieldValues>();
  const errorMessage = useErrorMessage(name);

  return (
    <FormControl as='fieldset' isInvalid={!!errorMessage}>
      <FormLabel as='legend'>{name}</FormLabel>
      <RadioGroup>
        <HStack spacing='24px'>
          {choices.map((choice: string) => (
            <Radio key={choice} value={choice} {...register(name)}>
              {choice}
            </Radio>
          ))}
        </HStack>
      </RadioGroup>
      <FormErrorMessage errorMessage={errorMessage} />
    </FormControl>
  );
};

export default RadioField;
