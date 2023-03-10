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
  key: string;
  label?: string;
  value: string;
  index: number;
}

export type TypedSurvey<T extends ESurveyTypes> = Extract<TSurvey, { type: T }>;

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
}
