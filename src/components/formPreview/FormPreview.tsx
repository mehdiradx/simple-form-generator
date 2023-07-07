import { FC, ReactElement } from 'react';
import { useForm, FormProvider, UseFormProps } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import {
  Box,
  CheckboxField,
  Stack,
  RadioField,
  SelectField,
  Text,
  TextInputField,
  Button,
} from '~/components/uiKits';
import { BoxWrapper } from '~/components/shared';
import { Element, ElementTypes, Page } from '~/ts';
import FormHeader from '~/components/formPreview/FormHeader';

type Props = {
  formSchema: Page;
};

const renderField = function ({
  id,
  name,
  choices,
  type,
  requiredIf,
  visibleIf,
  editableIf,
}: Element): ReactElement | null {
  let Component: any = null;

  switch (type) {
    case ElementTypes.TEXT:
      Component = TextInputField;
      break;

    case ElementTypes.CHECKBOX:
      Component = CheckboxField;
      break;

    case ElementTypes.SELECT:
      Component = SelectField;
      break;

    case ElementTypes.RADIO:
      Component = RadioField;
      break;

    default:
      return <Text>Please insert a correct schema</Text>;
  }

  return (
    <Box key={`${id}-container`}>
      <Component
        name={name}
        choices={choices}
        requiredIf={requiredIf}
        visibleIf={visibleIf}
        editableIf={editableIf}
      />
    </Box>
  );
};

const FormPreview: FC<Props> = function ({ formSchema }): ReactElement {
  const form = useForm<UseFormProps>();
  const { control } = form;

  function handleSubmit(data: UseFormProps) {
    // Do something with the data
  }

  return (
    <BoxWrapper>
      <FormProvider {...form}>
        <Box position='relative'>
          <FormHeader pageName={formSchema.name} />
          <Stack as='form' spacing={8} py={4} px={12} onSubmit={form.handleSubmit(handleSubmit)}>
            {formSchema.elements.map(renderField)}
            <Button type='submit' w='full' colorScheme='purple' variant='solid'>
              Submit
            </Button>
          </Stack>
          <DevTool control={control} placement='top-left' />
        </Box>
      </FormProvider>
    </BoxWrapper>
  );
};

export default FormPreview;
