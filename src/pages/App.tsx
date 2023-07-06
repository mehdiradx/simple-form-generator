import { FC, ReactElement, useState } from 'react';
import { Box, Stack } from '~/components/uiKits';
import { FormPreview, Header, JsonEditor } from '~/components';
import { ElementTypes, Page } from '~/ts';

const mockedFormSchema: Page = {
  name: 'Page Name',
  elements: [
    {
      id: '1',
      type: ElementTypes.TEXT,
      name: 'first item',
      requiredIf: '',
      visibleIf: '',
      editableIf: '',
    },
    {
      id: '2',
      type: ElementTypes.CHECKBOX,
      name: 'second item',
      choices: ['1', '2'],
      requiredIf: '',
      visibleIf: '',
      editableIf: '',
    },
    {
      id: '3',
      type: ElementTypes.RADIO,
      name: 'third item',
      choices: ['1', '2'],
      requiredIf: '',
      visibleIf: '',
      editableIf: '',
    },
    {
      id: '4',
      type: ElementTypes.SELECT,
      name: 'forth item',
      choices: ['1', '2'],
      requiredIf: '',
      visibleIf: '',
      editableIf: '',
    },
  ],
};

const App: FC = function (): ReactElement {
  const [formSchema, setFormSchema] = useState<Page>(() => mockedFormSchema);

  return (
    <Box py={12}>
      <Header />
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign='center'
        justify='center'
        spacing={{ base: 4, lg: 10 }}
        py={20}
      >
        <JsonEditor formSchema={formSchema} setFormSchema={setFormSchema} />
        <FormPreview formSchema={formSchema} />
      </Stack>
    </Box>
  );
};

export default App;
