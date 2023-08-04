import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { FormControl, FormErrorMessage, FormLabel, Stack } from '~/components/uiKits';
import { FieldValues, useFormContext } from 'react-hook-form';
import { useErrorMessage } from '~/hooks/useErrorMessage';
import { Element } from '~/ts';
import { FC, ReactElement } from 'react';

type Props = Omit<Element, 'id' | 'type' | 'editableIf'>;

const CheckboxField: FC<Props> = function ({
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
      <CheckboxGroup>
        <Stack spacing={[1, 5]} direction={['column', 'row']}>
          {choices.map((choice: string) => (
            <Checkbox key={choice} value={choice} {...register(name)}>
              {choice}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
      <FormErrorMessage errorMessage={errorMessage} />
    </FormControl>
  );
};

export default CheckboxField;
