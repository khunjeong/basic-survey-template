import type { FC } from 'react';
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import { Button } from '@components';

const App: FC = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#00b96b',
      },
    }}>
    <Button>Button</Button>
  </ConfigProvider>
);

export default App;
