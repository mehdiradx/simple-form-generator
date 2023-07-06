import { BoxProps, Box as CBox } from '@chakra-ui/react';
import { FC, PropsWithChildren, ReactElement } from 'react';

const Box: FC<PropsWithChildren<BoxProps>> = function ({ children, ...props }): ReactElement {
  return <CBox {...props}>{children}</CBox>;
};

export default Box;
