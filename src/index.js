import { h, render } from 'preact'
import App from './app.js'

const app = document.querySelector('#')

render(
  <App />,
  app,
  app.lastChild
)
