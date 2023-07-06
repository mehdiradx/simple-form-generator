import { FC, ReactElement } from 'react';
import { Header } from '~/components';
import { Box } from '~/components/uiKits';

const App: FC = function (): ReactElement {
  return (
    <Box py={12}>
      <Header />
    </Box>
  );
};

export default App;
