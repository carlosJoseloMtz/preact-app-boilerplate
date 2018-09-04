import { h } from 'preact'

const Button = (props) => {
  let text
  if ('text' in props) {
    text = props.text
  }

  return <div>
      <button className="btn">
        {text}
      </button>
    </div>
}

export default Button
