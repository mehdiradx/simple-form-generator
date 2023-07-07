import { OperatorTypes } from '~/ts';

type props = {
  expectedValue: string;
  operator: OperatorTypes;
  userValue: string;
};

function handleComparison({ expectedValue, operator, userValue }: props) {
  switch (operator) {
    case OperatorTypes.EQUAL:
      return userValue === expectedValue;
    case OperatorTypes.GT:
      return userValue >= expectedValue;
    case OperatorTypes.LT:
      return userValue <= expectedValue;
    default:
      return false;
  }
}

export default handleComparison;
