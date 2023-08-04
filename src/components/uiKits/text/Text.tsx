import { Text as CText, TextProps } from '@chakra-ui/react';
import { FC, PropsWithChildren, ReactElement } from 'react';

const Text: FC<PropsWithChildren<TextProps>> = function ({ children, ...props }): ReactElement {
  return <CText {...props}>{children}</CText>;
};

export default Text;
