export interface IDropdownProps<T> {
  items: T[];
  selectedIndex?: number;
  onChange?: (value: T, index: number) => void;
}
