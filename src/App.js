import React from 'react';
import { Provider } from 'react-redux'
import Store from './store'
import './App.scss';
import Index from './components/index'

function App() {
  return (
    <Provider store={Store}>
      <Index/>
    </Provider>
  )
}

export default App;