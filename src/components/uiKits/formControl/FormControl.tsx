import { FormControl as CFormControl, FormControlProps } from '@chakra-ui/react';
import { FC, PropsWithChildren, ReactElement } from 'react';

const FormControl: FC<PropsWithChildren<FormControlProps>> = function ({
  children,
  ...props
}): ReactElement {
  return (
    <CFormControl {...props}>
      {children}
    </CFormControl>
  );
};

export default FormControl;
