import { useMemo } from 'react';
import { FieldErrors, useFormContext } from 'react-hook-form';

export const useErrorMessage = (name: string): string => {
  const {
    formState: { errors },
  } = useFormContext<FieldErrors>();

  return useMemo(() => {
    const error = errors[name];

    if (!error) {
      return undefined;
    }

    const message = error.message;

    if (message) {
      return message;
    }
    return 'Validation failed!';
  }, [errors, errors[name]?.message, name]) as string;
};
