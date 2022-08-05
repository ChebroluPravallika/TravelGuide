import './App.css'

const CityItem = props => {
  const {each} = props
  return (
    <li
      style={{
        backgroundColor: 'white',
        width: '48%',

        marginBottom: '20px',
      }}
    >
      <img src={each.imageUrl} alt={each.name} className="image" />
      <h1 style={{paddingLeft: '20px'}}>{each.name}</h1>
      <p style={{paddingLeft: '20px', paddingBottom: '10px'}}>
        {each.description}
      </p>
    </li>
  )
}

export default CityItem
