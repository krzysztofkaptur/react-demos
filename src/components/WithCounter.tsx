import { useState } from 'react'

export const WithCounter = (Component: any) => {
  return function WithState(props: any) {
    const [counter, setCounter] = useState(0)
    const handleClick = () => {
      setCounter(prev => ++prev)
    }

    return (
      <div>
        {counter}
        <Component onClick={handleClick} {...props} />
      </div>
    )
  }
}
