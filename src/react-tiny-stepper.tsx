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
  onChange: (step: T) => void
}

export const Stepper = <T extends string>({
  steps,
  activeStep,
  onChange,
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
          onClick={() => onChange(step)}
        >
          <div className={'step-counter'}></div>
          <div className={'step-name'}>{step}</div>
        </div>
      ))}
    </div>
  )
}
