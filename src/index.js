import React from 'react';
import ReactDOM from 'react-dom';
import HemisphereDisplay from './HemisphereDisplay';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { latitude: null, longitude: null, errorMessage: '' }

   
  
  }

  //Babel constructorı otomatik olarak tanımladığından tanımlamak zorunda değliz  

componentDidMount()
{
  console.log('componentDidMount')


   //Bulundugun lokasyonu öğrenmek için hazır bir fonksiyon 
  window.navigator.geolocation.getCurrentPosition(

    (position) => {
      this.setState({ latitude: position.coords.latitude })
      this.setState({ longitude: position.coords.longitude })

    },
    (error) => {


      this.setState({ errorMessage: error.message })

    }
  );
}
componentDidUpdate()
{
  console.log('componentDidUpdate')
  
}
  render() {
    if (!this.state.latitude && this.state.errorMessage)
      return (<div> Location info's not available. Check your location devices...  Message : {this.state.errorMessage} </div>)
    if (this.state.latitude && !this.state.errorMessage)
      return (<div> <HemisphereDisplay  latitude={this.state.latitude}  longitude={this.state.longitude} /> </div>)
    else {
      return <div>Loading...</div>
    }
  }
}

// const App = () => {

// //Bulundugun lokasyonu öğrenmek için hazır bir fonksiyon 
// window.navigator.geolocation.getCurrentPosition(

//   (position) => console.log(position),
//   (error) => console.log(error)



// );
//   return (

//     <div>


//     </div>
//   )
// }

ReactDOM.render(
  <App />, document.querySelector('#root')
)

