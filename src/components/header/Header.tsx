import { FC, ReactElement } from 'react';
import { Heading, Text, VStack } from '~/components/uiKits';

const Header: FC = function (): ReactElement {
  return (
    <VStack spacing={2} textAlign='center'>
      <Heading as='h1' fontSize='4xl'>
        Form Generator
      </Heading>
      <Text fontSize='lg' color={'gray.500'}>
        A Form Generator module using React and the specified libraries and tools.
      </Text>
    </VStack>
  );
};

export default Header;
