import { Stack as CStack, StackProps } from '@chakra-ui/react';
import { FC, PropsWithChildren, ReactElement } from 'react';

const Stack: FC<PropsWithChildren<StackProps>> = function ({ children, ...props }): ReactElement {
  return <CStack {...props}>{children}</CStack>;
};

export default Stack;
