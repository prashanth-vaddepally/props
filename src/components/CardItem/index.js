import './index.css'
const theComp = props => {
  const {thedetails} = props

  const {title, description, imgUrl, className} = thedetails

  return (
    <li className={`${className} theborder`}>
      <div>
        <h1 className="heads">{title}</h1>
        <p className="paragraphy">{description}</p>
        <div className="forimage">
          <img src={imgUrl} className="theimage" alt = "theimage"/>
        </div>
      </div>
    </li>
  )
} export default theComp