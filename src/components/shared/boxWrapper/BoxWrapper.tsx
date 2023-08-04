import { FC, PropsWithChildren, ReactElement } from 'react';
import useColorModeValue from '~/hooks/useColorModeValue';
import { Box } from '~/components/uiKits';

const BoxWrapper: FC<PropsWithChildren> = function ({ children }): ReactElement {
  return (
    <Box
      mb={4}
      shadow='base'
      borderWidth='1px'
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}
      mx={'auto'}
      minWidth={{ base: '250px', lg: '350px' }}
    >
      {children}
    </Box>
  );
};

export default BoxWrapper;
