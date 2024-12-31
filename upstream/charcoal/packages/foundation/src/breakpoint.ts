import { COLUMN_UNIT, GUTTER_UNIT, columnSystem } from './grid'

export const HORIZONTAL_MIN_MARGIN = 72

export const BREAKPOINT = {
  [6]: columnSystem(6, COLUMN_UNIT, GUTTER_UNIT) + HORIZONTAL_MIN_MARGIN * 2,
  [8]: columnSystem(8, COLUMN_UNIT, GUTTER_UNIT) + HORIZONTAL_MIN_MARGIN * 2,
  [10]: columnSystem(10, COLUMN_UNIT, GUTTER_UNIT) + HORIZONTAL_MIN_MARGIN * 2,
  [12]: columnSystem(12, COLUMN_UNIT, GUTTER_UNIT) + HORIZONTAL_MIN_MARGIN * 2,
} as const
