import './frame.scss';
export default function Frame(props) {
  return (
    <div className='content'>
      {props.children}
    </div>
  )
}

export function Img(props) {
  return (
    <div className='image'>
      <img src={props.imgSrc} alt={props.imgAlt} />
    </div>
  )
}

export function Text(props) {
  return (
    <div className='text'>
      <h1>{props.head}</h1>
      <p>{props.p}</p>
      {props.children}
      <button onClick={props.method}>{props.btnText}</button>
    </div>
  )
}