import { FC, ReactElement } from 'react';
import { Box, Text } from '~/components/uiKits';
import useColorModeValue from '~/hooks/useColorModeValue';

type Props = {
  pageName: string;
};

const FormHeader: FC<Props> = function ({ pageName }): ReactElement {
  return (
    <Box position='absolute' top='-16px' left='50%' style={{ transform: 'translate(-50%)' }}>
      <Text
        bg={useColorModeValue('purple.500', 'purple.900')}
        px={3}
        py={1}
        color={'white'}
        fontSize='sm'
        fontWeight='600'
        rounded='xl'
      >
        {pageName}
      </Text>
    </Box>
  );
};

export default FormHeader;
