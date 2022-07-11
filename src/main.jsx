import React from 'react'
import ReactDOM from 'react-dom/client'
import {TodoTask} from './TodoTask'
import {store} from './store/store'
import {Provider} from 'react-redux'
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <TodoTask />
  </Provider>
)
