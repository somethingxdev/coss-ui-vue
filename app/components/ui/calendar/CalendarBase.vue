<script setup lang="ts">
import type { CalendarDayButtonState } from '@vase-ui/vue/calendar'
import type { Component, HTMLAttributes } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon, ChevronsUpDownIcon } from '@lucide/vue'
import { Calendar as CalendarPrimitive } from '@vase-ui/vue/calendar'
import { computed } from 'vue'
import { cn } from '../../../lib/utils'
import 'temporal-polyfill/global'

export type CalendarClassNames = Partial<Record<
  | 'months'
  | 'month'
  | 'nav'
  | 'button_previous'
  | 'button_next'
  | 'month_caption'
  | 'caption_label'
  | 'dropdowns'
  | 'dropdown_root'
  | 'dropdown'
  | 'month_grid'
  | 'weekdays'
  | 'weekday'
  | 'weeks'
  | 'week'
  | 'week_number'
  | 'day'
  | 'day_button',
  HTMLAttributes['class']
>>

export interface CalendarDaySlotProps {
  day: Temporal.PlainDate
  state: CalendarDayButtonState
  text: string
}

export interface CalendarBaseProps {
  classNames?: CalendarClassNames
  captionLayout?: 'label' | 'dropdown'
  showWeekNumber?: boolean
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<CalendarBaseProps & {
  root: string | Component
}>(), {
  captionLayout: 'label',
})

defineSlots<{
  day?: (props: CalendarDaySlotProps) => unknown
}>()

const buttonClassNames = `relative flex size-(--cell-size) text-base sm:text-sm items-center justify-center rounded-lg text-foreground not-in-aria-selected:hover:bg-accent data-disabled:pointer-events-none data-disabled:opacity-64 [&_svg:not([class*='opacity-'])]:opacity-80 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0`

const dayButtonClassNames = cn(
  buttonClassNames,
  'in-data-disabled:pointer-events-none in-data-range-middle:rounded-none in-data-range-end:not-in-data-range-start:rounded-s-none in-data-range-start:not-in-data-range-end:rounded-e-none in-data-range-middle:bg-accent in-aria-selected:not-in-data-range-middle:bg-primary in-data-range-middle:text-foreground in-data-disabled:text-muted-foreground/72 in-data-unavailable:text-muted-foreground/72 in-data-outside-month:not-in-aria-selected:text-muted-foreground/72 in-aria-selected:not-in-data-range-middle:text-primary-foreground in-data-disabled:line-through in-data-unavailable:line-through in-aria-selected:not-in-data-range-middle:transition-[border-radius,box-shadow] outline-none focus-visible:z-1 focus-visible:ring-[3px] focus-visible:ring-ring/50',
  'in-data-today:after:pointer-events-none in-data-today:after:absolute in-data-today:after:bottom-1 in-data-today:after:start-1/2 in-data-today:after:z-1 in-data-today:after:size-[3px] in-data-today:after:-translate-x-1/2 in-data-today:after:rounded-full in-data-today:after:bg-primary in-data-today:in-aria-selected:not-in-data-range-middle:after:bg-background in-data-today:in-data-disabled:after:bg-foreground/30',
)

// coss lays a transparent select over a label; a native select with no appearance shows the same box.
const dropdownRootClassNames = `relative flex h-9 items-center rounded-lg border border-input px-[calc(--spacing(3)-1px)] shadow-xs/5 has-focus:border-ring has-focus:ring-[3px] has-focus:ring-ring/50 sm:h-8 [&_svg:not([class*='opacity-'])]:opacity-80 [&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:-me-1`
const dropdownClassNames = 'h-full cursor-pointer appearance-none bg-transparent pe-6 outline-none dark:scheme-dark'

// The table and its cells reset what a page's prose styles give tables: width, margins, borders, padding.
const cellClassNames = 'border-0 p-0 text-center align-middle'
const weekdayClassNames = cn(cellClassNames, 'size-(--cell-size) text-xs font-medium text-muted-foreground/72')

const cls = computed(() => props.classNames ?? {})
</script>

<template>
  <component :is="props.root" data-slot="calendar" :class="cn('w-fit [--cell-size:--spacing(10)] sm:[--cell-size:--spacing(9)]', props.class)">
    <div class="relative">
      <div :class="cn('pointer-events-none absolute inset-x-0 top-0 z-1 flex justify-between *:pointer-events-auto', cls.nav)">
        <CalendarPrimitive.PreviousButton :class="cn(buttonClassNames, cls.button_previous)">
          <ChevronLeftIcon aria-hidden="true" class="rtl:rotate-180" />
        </CalendarPrimitive.PreviousButton>
        <CalendarPrimitive.NextButton :class="cn(buttonClassNames, cls.button_next)">
          <ChevronRightIcon aria-hidden="true" class="rtl:rotate-180" />
        </CalendarPrimitive.NextButton>
      </div>
      <CalendarPrimitive.Months :class="cn('flex flex-col gap-2 sm:flex-row', cls.months)">
        <template #month="{ month }">
          <CalendarPrimitive.Month :month="month" :class="cn('w-full', cls.month)">
            <div v-if="props.captionLayout === 'dropdown'" :class="cn('mx-(--cell-size) mb-1 flex h-(--cell-size) items-center justify-center gap-1.5', cls.month_caption, cls.dropdowns)">
              <span :class="cn(dropdownRootClassNames, cls.dropdown_root)">
                <CalendarPrimitive.MonthSelect :class="cn(dropdownClassNames, cls.dropdown)" />
                <ChevronsUpDownIcon aria-hidden="true" class="-ms-4.5" />
              </span>
              <span :class="cn(dropdownRootClassNames, cls.dropdown_root)">
                <CalendarPrimitive.YearSelect :class="cn(dropdownClassNames, cls.dropdown)" />
                <ChevronsUpDownIcon aria-hidden="true" class="-ms-4.5" />
              </span>
            </div>
            <CalendarPrimitive.Caption v-else :class="cn('mb-1 flex h-(--cell-size) items-center justify-center text-base font-medium sm:text-sm', cls.month_caption, cls.caption_label)" />
            <CalendarPrimitive.Grid :class="cn('my-0 w-auto', cls.month_grid)">
              <CalendarPrimitive.GridHeader>
                <CalendarPrimitive.GridHeaderRow :class="cls.weekdays">
                  <CalendarPrimitive.WeekNumberHeader v-if="props.showWeekNumber" :class="cn(weekdayClassNames, cls.week_number)" />
                  <template #weekday="{ weekday }">
                    <CalendarPrimitive.Weekday :weekday="weekday" :class="cn(weekdayClassNames, cls.weekday)" />
                  </template>
                </CalendarPrimitive.GridHeaderRow>
              </CalendarPrimitive.GridHeader>
              <CalendarPrimitive.GridBody :class="cls.weeks">
                <template #week="{ week }">
                  <CalendarPrimitive.Week :week="week" :class="cls.week">
                    <CalendarPrimitive.WeekNumber v-if="props.showWeekNumber" :week="week" :class="cn(weekdayClassNames, cls.week_number)" />
                    <template #day="{ day }">
                      <CalendarPrimitive.Day :day="day" :class="cn(cellClassNames, 'size-(--cell-size) py-px', cls.day)">
                        <CalendarPrimitive.DayButton v-slot="{ state, text }" :class="cn(dayButtonClassNames, cls.day_button)">
                          <slot name="day" :day="day" :state="state" :text="text">
                            {{ text }}
                          </slot>
                        </CalendarPrimitive.DayButton>
                      </CalendarPrimitive.Day>
                    </template>
                  </CalendarPrimitive.Week>
                </template>
              </CalendarPrimitive.GridBody>
            </CalendarPrimitive.Grid>
          </CalendarPrimitive.Month>
        </template>
      </CalendarPrimitive.Months>
    </div>
  </component>
</template>
