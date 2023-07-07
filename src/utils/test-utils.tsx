import { render, RenderOptions } from '@testing-library/react';
import { FunctionComponent, ReactElement, PropsWithChildren } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

const AllProviders: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const form = useForm();

  return <FormProvider {...form}>{children}</FormProvider>;
};

const testingUtils = {
  renderWithAllProviders: (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
    render(ui, { wrapper: AllProviders, ...options }),
};

export default testingUtils;
