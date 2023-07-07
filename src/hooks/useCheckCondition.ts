import { useEffect, useState } from 'react';
import { useWatch } from 'react-hook-form';
import { Condition } from '~/ts';
import { handleComparison } from '~/utils';

export const useCheckCondition = (condition: Condition[]) => {
  // TODO: Handle not only the first one, but also all items
  const { value: expectedValue, operator, elementName } = condition[0];
  const userValue = useWatch({ name: elementName });
  const [result, setResult] = useState(false);

  useEffect(() => {
    const result = handleComparison({
      expectedValue,
      operator,
      userValue,
    });
    setResult(result);
  }, [userValue]);

  return result;
};
