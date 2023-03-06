import type { FC } from 'react';
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import '@styles/global.css';
import { Button, FlexContainer } from './components';
import { Reset } from 'styled-reset';

const App: FC = () => (
  <div className='App'>
    <Reset />
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b',
        },
      }}>
      <FlexContainer style={{ gap: 10 }}>
        <Button>Button</Button>
        <Button>Button2</Button>
      </FlexContainer>
    </ConfigProvider>
  </div>
);

export default App;
