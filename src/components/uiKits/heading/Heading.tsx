import { Heading as CHeading, HeadingProps } from '@chakra-ui/react';
import { FC, PropsWithChildren, ReactElement } from 'react';

const Heading: FC<PropsWithChildren<HeadingProps>> = function ({
  children,
  ...props
}): ReactElement {
  return <CHeading {...props}>{children}</CHeading>;
};

export default Heading;
