import { ButtonProps, Button as CButton } from '@chakra-ui/react';
import { FC, PropsWithChildren, ReactElement } from 'react';

const Button: FC<PropsWithChildren<ButtonProps>> = function ({ children, ...props }): ReactElement {
  return <CButton {...props}>{children}</CButton>;
};

export default Button;
