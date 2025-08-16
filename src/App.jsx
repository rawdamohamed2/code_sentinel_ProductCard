import Card from './Card/Card';
import { Component } from 'react'

export class App extends Component {
  render() {
    return (
    <div className='flex items-center justify-center min-h-dvh py-5'>
      <Card/>
    </div>
  )
  }
}

export default App
