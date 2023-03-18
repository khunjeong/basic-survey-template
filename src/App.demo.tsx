import { useEffect, useState } from 'react';
import type { FC } from 'react';
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import '@styles/global.css';
import { Article, DefaultModeEditor, Editor, FlexDiv, Viewer } from './components';
import { ISurveyResult } from './types';
import { Reset } from 'styled-reset';

const App: FC = () => {
  const [result, setResult] = useState<ISurveyResult>();

  useEffect(() => {
    console.log({ result });
  }, [result]);

  return (
    <div className='App'>
      <Reset />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#00b96b',
          },
        }}>
        <FlexDiv>
          <Article style={{ width: '50%' }}>
            <Editor onSubmit={result => setResult(result)} />
          </Article>
          {result && (
            <Article style={{ width: '50%' }}>
              <Viewer survey={result} onSubmit={result => console.log({ result })} />
            </Article>
          )}
        </FlexDiv>
        <DefaultModeEditor
          onClose={() => console.log('11111')}
          onSubmit={result => console.log({ result })}
        />
      </ConfigProvider>
    </div>
  );
};

export default App;
