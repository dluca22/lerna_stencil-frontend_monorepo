// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { AnotherOne, CustomHello, HardcodedValues, MyComponent, StatusBadge, TemplateCard } from 'react-library'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <div>
          This is the standard element, it inherits the global styles and applies none of its own
        </div>
        <MyComponent first="Stencil" middle="'Don't call me a framework'" last="JS"></MyComponent>

      </section>
      <section>
        <div>
          This is another custom elements, in the shadow dom, which applies scoped styles that do not bleed outside
          its own scope
        </div>
        <CustomHello first="Walker" middle="texas" last="ranger"></CustomHello>
      </section>

      <section>
        <div>
          This is a Card showcase with their own sub children and scoped styles
        </div>
        <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>

          <TemplateCard first="walker" last="Texas Ranger" job="Ranger/semi-god"  age={49}
            accomplishments={99} add-complementary-actions="true"></TemplateCard>

          <div>
            <TemplateCard first="rookie " last="patookie" job="Web dev"
              description-text="I crash them code like it's going out of style" age={33} accomplishments={0}
              add-complementary-actions="true"></TemplateCard>

          </div>
        </div>
      </section>

      <section>
        <div>
          This is a status badge
        </div>
        <StatusBadge message="You are logged in!" status="success"></StatusBadge>
        <StatusBadge message="You received Mail!" status="info"></StatusBadge>
        <StatusBadge message="Your token is about to expire!" status="warning"></StatusBadge>
        <StatusBadge message="I will auto remove!" auto-remove ttl={5} status="secondary"></StatusBadge>
      </section>

      <section>
        <div>
          other componente created after
        </div>
        <HardcodedValues></HardcodedValues>
      </section>

      <section>
        <div>
          other giving issue?!?!?!
        </div>
        <AnotherOne></AnotherOne>
      </section>


    </>
  )
}

export default App
