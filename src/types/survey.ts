import { TDate } from './global';

export enum ESurveyTypes {
  BLANK = 'blank',
  // SHORT_TEXT = 'short_text',
  // LONG_TEXT = 'long_text',
  SINGLE_SELECT = 'single_select',
  MULTI_SELECT = 'multi_select',
}

export interface ISurvey {
  id: string;
  type: ESurveyTypes;
  title?: string;
  description?: string;
  required: boolean;
}

export type TSurvey = ISurveyBlank | ISurveySingleSelect | ISurveyMultiSelect;

export interface IDropdownOption {
  id: string;
  label?: string;
  item: string;
  index: number;
  image: string;
}

export type TypedSurvey<T extends ESurveyTypes> = Extract<TSurvey, { type: T }>;

export interface ISurveyBlank extends ISurvey {
  type: ESurveyTypes.BLANK;
}

export interface ISurveySingleSelect extends ISurvey {
  type: ESurveyTypes.SINGLE_SELECT;
  questions: IDropdownOption[];
  answer: string | null;
}

export interface ISurveyMultiSelect extends ISurvey {
  type: ESurveyTypes.MULTI_SELECT;
  questions: IDropdownOption[];
  answer: string[];
  maxChoice: number;
}

export interface ISurveyResult {
  title: string;
  description?: string;
  content: TSurvey[];
  startDate: TDate;
  endDate: TDate;
}

export interface IDefaultModeSurveyResult extends ISurveyMultiSelect {
  startDate: TDate;
  endDate: TDate;
}

export interface IUploadOptions {
  baseUrl: string;
  actionUrl: string;
  authorization: string;
}
