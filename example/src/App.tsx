import React, { useState } from 'react'
import { Stepper } from './react-tiny-stepper/react-tiny-stepper'

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
      <h1>Vite + React</h1>
      <div className="card">
        <Stepper steps={STEPS} activeStep={step} onChange={onStepChange} />
      </div>
    </div>
  )
}

export default App
