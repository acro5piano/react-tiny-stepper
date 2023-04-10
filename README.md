# react-tiny-stepper

dead simple stepper library for React

## Usage

Install the package:

```bash
$ yarn add react-tiny-stepper
```

Then place the component:

```tsx
import 'react-tiny-stepper/dist/react-tiny-stepper.css'
import { Stepper } from 'react-tiny-stepper'
import { useState } from 'react'

const STEPS = ['Input your info', 'Confirm', 'Register', 'Complete'] as const
type IStep = typeof STEPS[number]

function App() {
  const [step, setStep] = useState<IStep>('Input your info')

  const onStepChange = (step: IStep) => {
    console.log('step changed', step)
    setStep(step)
  }

  return (
    <div className="App">
      <Stepper
        steps={STEPS}
        activeStep={step}
        onChange={onStepChange} // optional
        primaryColor="#4f46e5" // optional
      />
    </div>
  )
}
```
