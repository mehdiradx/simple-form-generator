import { FormLabel as CFormLabel, FormLabelProps } from '@chakra-ui/react';
import { FC, PropsWithChildren, ReactElement } from 'react';

const FormLabel: FC<PropsWithChildren<FormLabelProps>> = function ({
  children,
  ...props
}): ReactElement {
  return <CFormLabel {...props}>{children}</CFormLabel>;
};

export default FormLabel;
