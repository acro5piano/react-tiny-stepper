import '../../dist/react-tiny-stepper.css'

import React, { useState } from 'react'
import { Stepper } from '../..'

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
      <h1>Default Theme</h1>
      <Stepper steps={STEPS} activeStep={step} onChange={onStepChange} />

      <h1>With custom color</h1>
      <Stepper
        steps={STEPS}
        activeStep={step}
        onChange={onStepChange}
        primaryColor="#4f46e5"
        secondaryColor="#e2e8f0"
      />
    </div>
  )
}

export default App
