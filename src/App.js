import React, {Component} from 'react';
import './App.css';
import Amplify from "aws-amplify"
import awsmobile from "./aws-exports"
import { withAuthenticator } from "aws-amplify-react"
//import weatherByCity from './graphql/queries'
Amplify.configure(awsmobile)

class App extends Component {
state = {
      weather: [
        {
        temperature: '',
        location: ''
        }
      ]
    }


  render(){
  return (
    <div className="App">
					<form >
						<input type='text' placeholder='enter city' />
						<button type='submit' className='form-button'>
							enter
						</button>
					</form>
          <div>
          {this.state.weather.map(item => (
							<div key={item.location}>
								<li>{item.temperature}</li>
                <li>{item.location}</li>

							</div>
						))}
          </div>
    </div>
  );
  }
}
export default withAuthenticator(App, true)
