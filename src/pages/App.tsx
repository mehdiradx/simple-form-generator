import { FC, ReactElement, useState } from 'react';
import { Box, Stack } from '~/components/uiKits';
import { FormPreview, Header, JsonEditor } from '~/components';
import { ElementTypes, OperatorTypes, Page } from '~/ts';

const mockedFormSchema: Page = {
  name: 'Page Name',
  elements: [
    {
      id: '1',
      type: ElementTypes.TEXT,
      name: 'first item',
      requiredIf: [
        {
          elementName: 'third item',
          operator: OperatorTypes.EQUAL,
          value: '2',
        },
      ],
      visibleIf: [
        {
          elementName: 'third item',
          operator: OperatorTypes.EQUAL,
          value: '2',
        },
      ],
      editableIf: [
        {
          elementName: 'third item',
          operator: OperatorTypes.EQUAL,
          value: '3',
        },
      ],
    },
    {
      id: '2',
      type: ElementTypes.CHECKBOX,
      name: 'second item',
      choices: ['1', '2'],
    },
    {
      id: '3',
      type: ElementTypes.RADIO,
      name: 'third item',
      choices: ['1', '2', '3'],
    },
    {
      id: '4',
      type: ElementTypes.SELECT,
      name: 'forth item',
      choices: ['1', '2'],
    },
  ],
};

const App: FC = function (): ReactElement {
  const [formSchema, setFormSchema] = useState<Page>(mockedFormSchema);

  return (
    <Box py={12}>
      <Header />
      <Stack direction={{ base: 'column', md: 'row' }} py={20}>
        <JsonEditor formSchema={formSchema} setFormSchema={setFormSchema} />
        <FormPreview formSchema={formSchema} />
      </Stack>
    </Box>
  );
};

export default App;
