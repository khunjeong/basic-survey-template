import { TDate } from './global';
export declare enum ESurveyTypes {
  BLANK = 'blank',
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
  key: string;
  label?: string;
  value: string;
  index: number;
  image: string;
}
export type TypedSurvey<T extends ESurveyTypes> = Extract<
  TSurvey,
  {
    type: T;
  }
>;
export interface ISurveyBlank extends ISurvey {
  type: ESurveyTypes.BLANK;
}
export interface ISurveySingleSelect extends ISurvey {
  type: ESurveyTypes.SINGLE_SELECT;
  question: IDropdownOption[];
  answer: string | null;
}
export interface ISurveyMultiSelect extends ISurvey {
  type: ESurveyTypes.MULTI_SELECT;
  question: IDropdownOption[];
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
