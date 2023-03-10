import type { FC } from 'react';
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import '@styles/global.css';
import { Article, Button, Dropdown, Editor, FlexDiv, Inputs } from './components';
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
      <Article style={{ width: '50%' }}>
        <Editor />
      </Article>
      {/* <FlexContainer style={{ gap: 10 }}>
        <Button>Button</Button>
        <Button>Button2</Button>
      </FlexContainer>
      <Dropdown
        items={['객관식', '서술형']}
        selectedIndex={0}
        onChange={(value: any) => {
          console.log({ value });
        }}
      />
      <Inputs /> */}
    </ConfigProvider>
  </div>
);

export default App;
