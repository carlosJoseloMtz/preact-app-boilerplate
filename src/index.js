import { h, render } from 'preact'
import App from './app.js'

const app = document.querySelector('#your-app')

render(
  <App />,
  app,
  app.lastChild
)
