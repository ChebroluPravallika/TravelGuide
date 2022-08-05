import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CityItem from './CityItem'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    getTravelGuide: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTravelData()
  }

  getTravelData = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')

    const data = await response.json()
    console.log(data)
    const formattedData = data.packages.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      imageUrl: eachItem.image_url,
      description: eachItem.description,
    }))
    this.setState({getTravelGuide: formattedData, isLoading: false})
  }

  render() {
    const {getTravelGuide, isLoading} = this.state
    return (
      <div style={{backgroundColor: ' #eef4f7', padding: '30px'}}>
        <h1 className="heading">Travel Guide</h1>
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div>
            <ul style={{listStyle: 'none'}} className="list">
              {getTravelGuide.map(each => (
                <CityItem each={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default App
