export const ChRadioSymbol = Symbol("RadioSymbol");

export interface RadioContext {
  name: string;
  selected?: string;
  disabled?: boolean;
  readonly?: boolean;
  invalid?: boolean;
  onChange?(value: string): void;
}
