import './App.css'

import { Button } from './components/Button'
import { WithCounter } from './components/WithCounter'
import { Image } from './components/Image'

const MyButton = WithCounter(Button)
const MyImage = WithCounter(Image)

function App() {
  return (
    <>
      <MyButton label="heheszki" />
      <hr />
      <MyImage />
    </>
  )
}

export default App
