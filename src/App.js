import React,{Component} from 'react';
import Cardlist from './Cardlist';
import {Robot} from './Robot';
import Searchbox from './Searchbox';
import './App.css';
import Scroll from './Scroll';
class App extends Component{
constructor(){
	super()
	this.state={
		Robot:[],
		SearchField:''
	}
}
onSearchChange=(event)=>{



	this.setState({SearchField: event.target.value});
 
}
componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({Robot:users}));
}
render()
{
	const filteredRobots=this.state.Robot.filter(Robot=>{

		return Robot.name.toLowerCase().includes(this.state.SearchField.toLowerCase())
	});if(this.state.Robot.length===0)
	{
		return <h1>Loading....</h1>

	}
	else
	{

	return(
<div className="tc">		
<h1 className='f1'>RoboFriends</h1>
<Searchbox SearchChange={this.onSearchChange}/>
<Scroll>
<Cardlist Robot={filteredRobots}/>
</Scroll>
</div>
);
}
}
}

export default App;
