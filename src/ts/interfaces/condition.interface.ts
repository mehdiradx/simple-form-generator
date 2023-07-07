import { OperatorTypes } from '~/ts';

interface Condition {
  elementName: string;
  operator: OperatorTypes;
  value: string;
}

export default Condition;
