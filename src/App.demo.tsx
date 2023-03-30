import { useEffect, useState } from 'react';
import type { FC } from 'react';
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import './styles/global.css';
import {
  Article,
  DefaultModeEditor,
  DefaultModeResult,
  DefaultModeViewer,
  Editor,
  FlexDiv,
  Viewer,
} from './components';
import { ISurveyResult, IDefaultModeSurveyResult, IUploadOptions } from './types';
import { Reset } from 'styled-reset';

const App: FC = () => {
  const [result, setResult] = useState<ISurveyResult>();
  const [defaultResult, setDefaultResult] = useState<IDefaultModeSurveyResult>();
  const [surveyResult, setSurveyResult] = useState<IDefaultModeSurveyResult>();
  useEffect(() => {
    console.log({ result });
  }, [result]);

  const uploadOptions: IUploadOptions = {
    baseUrl: 'http://ip-set-nlp-2cce1cff97b66aa1.elb.ap-northeast-2.amazonaws.com',
    actionUrl: '/post/image',
    authorization:
      'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwiYXV0aCI6IlVTRVJfUk9MRSIsImV4cCI6MTY4MDQ5NzU2M30.eKE3QzWMDJ_KIK4wlMLZyL0DvJdTSpgv_1PttsplB1loIAADzPaf3wZRy6eZt0F_zEoPpLvtAAad1HXB9imotQ',
  };

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
          onSubmit={result => setDefaultResult(result)}
          uploadOptions={uploadOptions}
        />
        {defaultResult && (
          <DefaultModeViewer
            survey={defaultResult}
            // onResult={() => console.log('resultGO')}
            onSubmit={result => {
              setSurveyResult(result);
            }}
            onRemove={key => console.log({ key })}
          />
        )}
        {surveyResult && (
          <>
            <h1>투표 결과 표시</h1>
            <DefaultModeResult
              survey={surveyResult}
              onSubmit={result => {
                console.log({ result });
              }}
            />
          </>
        )}
      </ConfigProvider>
    </div>
  );
};

export default App;
