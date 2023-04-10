import React from 'react'

function classNames(...maybeClasses: Array<string | boolean | undefined>) {
  let result = ''
  for (const cls of maybeClasses) {
    if (Boolean(cls)) {
      result += cls + ' '
    }
  }
  return result
}

interface StepperProps<T extends string> {
  steps: readonly T[]
  activeStep: T
  onChange?: (step: T) => void
  primaryColor?: string
}

export const Stepper = <T extends string>({
  steps,
  activeStep,
  onChange,
  primaryColor,
}: StepperProps<T>) => {
  const currentIndex = steps.findIndex((s) => s === activeStep)!
  return (
    <div className={'react-tiny-stepper stepper-wrapper'}>
      {steps.map((step, index) => (
        <div
          key={step}
          className={classNames(
            'stepper-item',
            currentIndex === index && 'current',
          )}
          onClick={() => onChange && onChange(step)}
        >
          <div
            className={'step-counter'}
            style={
              currentIndex === index
                ? primaryColor
                  ? { backgroundColor: primaryColor }
                  : {}
                : undefined
            }
          ></div>
          <div
            className={'step-name'}
            style={
              currentIndex === index
                ? primaryColor
                  ? { color: primaryColor }
                  : {}
                : undefined
            }
          >
            {step}
          </div>
        </div>
      ))}
    </div>
  )
}
