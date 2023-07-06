import { HStack as CHStack, StackProps } from '@chakra-ui/react';
import { FC, PropsWithChildren, ReactElement } from 'react';

const HStack: FC<PropsWithChildren<StackProps>> = function ({ children, ...props }): ReactElement {
  return <CHStack {...props}>{children}</CHStack>;
};

export default HStack;
