export enum ESurveyTypes {
  BLANK = 'blank',
  SHORT_TEXT = 'short_text',
  LONG_TEXT = 'long_text',
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

export interface IDropdownOption {
  key: string;
  label?: string;
  value: string | number;
  index: number;
}
