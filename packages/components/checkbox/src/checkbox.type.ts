/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-23 21:45:34
 * @LastEditors: Huccct
 * @LastEditTime: 2023-01-24 11:13:45
 */
import type { ComputedRef } from 'vue';
export interface checkBoxProps {
  indeterminate?: boolean;
  isChecked?: boolean;
  name?: string;
  disabled?: boolean;
  label?: string | number | boolean | object;
  modelValue?: string | number | boolean;
}

export interface T {
  modelValue?: ComputedRef;
  handlerChange?: (val: unknown) => void;
}
