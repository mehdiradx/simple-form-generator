import { Input } from '@chakra-ui/react';
import { FC, ReactElement } from 'react';
import { FieldValues, useFormContext } from 'react-hook-form';
import { FormControl, FormErrorMessage, FormLabel } from '~/components/uiKits';
import { useErrorMessage } from '~/hooks/useErrorMessage';
import { useCheckCondition } from '~/hooks/useCheckCondition';
import { Element } from '~/ts';

type Props = Omit<Element, 'choices' | 'id' | 'type'>;

// TODO: Enrich this Element with more control on Props like placeholder and default value
const TextInputField: FC<Props> = function ({
  name = '',
  requiredIf = [],
  visibleIf = [],
  editableIf = [],
}): ReactElement {
  const { register } = useFormContext<FieldValues>();
  const errorMessage = useErrorMessage(name);
  const required = useCheckCondition(requiredIf);
  const visible = useCheckCondition(visibleIf);
  const editable = useCheckCondition(editableIf);

  return (
    <FormControl isInvalid={!!errorMessage} hidden={!visible}>
      <FormLabel>
        {name} {required ? '*' : null}
      </FormLabel>
      <Input
        disabled={!editable}
        type='text'
        {...register(name, {
          validate: {
            required: (fieldValue) => {
              return (required && fieldValue === '') || 'This field is required!';
            },
          },
        })}
      />
      <FormErrorMessage errorMessage={errorMessage} />
    </FormControl>
  );
};

export default TextInputField;
