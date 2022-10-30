import React from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.less'
import { store } from './store'

const container = document.getElementById('root')
const root = createRoot(container)


root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
) 