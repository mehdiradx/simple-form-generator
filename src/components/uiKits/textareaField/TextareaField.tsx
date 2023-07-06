import { Textarea, TextareaProps } from '@chakra-ui/react';
import { FC, PropsWithChildren, ReactElement } from 'react';

const TextareaField: FC<PropsWithChildren<TextareaProps>> = function ({
  children,
  ...props
}): ReactElement {
  return <Textarea {...props}>{children}</Textarea>;
};

export default TextareaField;
