import { Select } from '@chakra-ui/react';
import { FormControl, FormErrorMessage, FormLabel } from '~/components/uiKits';
import { FieldValues, useFormContext } from 'react-hook-form';
import { useErrorMessage } from '~/hooks/useErrorMessage';
import { FC, ReactElement } from 'react';
import { Element } from '~/ts';

type Props = Omit<Element, 'id' | 'type' | 'editableIf'>;

const SelectField: FC<Props> = function ({
  choices = [],
  name = '',
  // requiredIf,
  // visibleIf,
}): ReactElement {
  const { register } = useFormContext<FieldValues>();
  const errorMessage = useErrorMessage(name);

  return (
    <FormControl isInvalid={!!errorMessage}>
      <FormLabel>{name}</FormLabel>
      <Select placeholder={`Select a ${name}`} {...register(name)}>
        {choices.map((choices: string) => (
          <option key={choices}>{choices}</option>
        ))}
      </Select>
      <FormErrorMessage errorMessage={errorMessage} />
    </FormControl>
  );
};

export default SelectField;
