import clsx from 'clsx'

interface StepperProps<T extends string> {
  activeStep: T
  steps: readonly T[]
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
          className={clsx('stepper-item', currentIndex === index && 'current')}
          onClick={() => onChange(step)}
        >
          <div className={'step-counter'}></div>
          <div className={'step-name'}>{step}</div>
        </div>
      ))}
    </div>
  )
}

