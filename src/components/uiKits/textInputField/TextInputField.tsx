import { Input } from '@chakra-ui/react';
import { FC, ReactElement } from 'react';
import { FieldValues, useFormContext } from 'react-hook-form';
import { FormControl, FormErrorMessage, FormLabel } from '~/components/uiKits';
import { useErrorMessage } from '~/hooks/useErrorMessage';
import { Element } from '~/ts';

type Props = Omit<Element, 'choices' | 'id' | 'type'>;

// TODO: Enrich this Element with more control on Props like placeholder and default value
// TODO : Add more control on this Element by accessing value by watch(name)
const TextInputField: FC<Props> = function ({
  name = '',
  // requiredIf,
  // visibleIf,
  // editableIf,
}): ReactElement {
  const { register } = useFormContext<FieldValues>();
  const errorMessage = useErrorMessage(name);

  return (
    <FormControl isInvalid={!!errorMessage}>
      <FormLabel>{name}</FormLabel>
      <Input
        type='text'
        {...register(name, {
          // TODO: Remove these lines! These lines are a test for validation.
          required: 'This field is required',
          validate: {
            notShow: (fieldValue) => {
              return fieldValue !== 'test' || 'This is a test';
            },
          },
        })}
      />
      <FormErrorMessage errorMessage={errorMessage} />
    </FormControl>
  );
};

export default TextInputField;
