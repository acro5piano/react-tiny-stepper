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
    <div className="">
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-start">
            <a className="navbar-item">react-tiny-stepper</a>
          </div>
        </div>
      </nav>
      <div className="container content" style={{ marginTop: 24 }}>
        <div className="columns">
          <div className="column card ">
            <h2>Default Theme</h2>
            <div className="card-content">
              <Stepper
                steps={STEPS}
                activeStep={step}
                onChange={onStepChange}
              />
            </div>
          </div>
          <div className="column is-1"></div>
          <div className="column card ">
            <h2>With custom color</h2>
            <div className="card-content">
              <Stepper
                steps={STEPS}
                activeStep={step}
                onChange={onStepChange}
                primaryColor="#4f46e5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
