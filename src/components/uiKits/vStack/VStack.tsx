import { VStack as CVStack, StackProps } from '@chakra-ui/react';
import { FC, PropsWithChildren, ReactElement } from 'react';

const VStack: FC<PropsWithChildren<StackProps>> = function ({ children, ...props }): ReactElement {
  return <CVStack {...props}>{children}</CVStack>;
};

export default VStack;
