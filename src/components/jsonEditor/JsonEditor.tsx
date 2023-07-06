import { ChangeEvent, FC, ReactElement } from 'react';
import { BoxWrapper } from '~/components/shared';
import { Box, HStack, Text, VStack, Button, TextareaField } from '~/components/uiKits';
import useColorModeValue from '~/hooks/useColorModeValue';
import { Page } from '~/ts';

type Props = {
  formSchema: Page;
  setFormSchema: (value: Page) => void;
};

const JsonEditor: FC<Props> = function ({ formSchema, setFormSchema }): ReactElement {
  return (
    <BoxWrapper>
      <Box py={3} px={12}>
        <HStack justifyContent='center'>
          <Text>JSON Schema</Text>
        </HStack>
      </Box>
      <VStack bg={useColorModeValue('gray.50', 'gray.700')} py={2} borderBottomRadius={'xl'}>
        <TextareaField
          isReadOnly
          w='90%'
          fontFamily='Andale Mono'
          fontSize={14}
          minHeight='200px'
          value={JSON.stringify(formSchema)}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setFormSchema(JSON.parse(e.target.value))
          }
        />
        <Box w='80%'>
          <Button w='full' colorScheme='purple' variant='outline'>
            Build
          </Button>
        </Box>
      </VStack>
    </BoxWrapper>
  );
};

export default JsonEditor;
