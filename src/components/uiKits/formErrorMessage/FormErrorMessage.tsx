import { FC, ReactElement } from 'react';
import { FormErrorMessage as CFormErrorMessage, FormErrorMessageProps } from '@chakra-ui/react';

interface Props extends FormErrorMessageProps {
  errorMessage: string;
}

const FormErrorMessage: FC<Props> = function ({ errorMessage, ...props }): ReactElement {
  return <CFormErrorMessage {...props}>{errorMessage}</CFormErrorMessage>;
};

export default FormErrorMessage;
