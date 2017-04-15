import React from 'react'
import {
  View,
  Text
} from 'react-native'
import { fetchDrinks } from '../reducers/actions.js';
import { Grid } from 'Grid';

class Button extends Component {
	this.state={loadingStatus:false}

	toggleStatus(){
		this.setState({
			loadingStatus:true
		})
	}

	onPressLoadDrinks (){
		toggleStatus()
		this.props.fetchData('http://localhost:8080/drinks');
	}


	render: function () {
	    return (
	    	{renderIf(this.state.loadingStatus || this.state.isLoading)(
	    		<Text>Loading...</Text>
	    	)}
	    	{renderIf(!this.state.loadingStatus && this.state.isloading && !this.state.drinks)(
	    		<Button
	    			onPress={onPressLoadDrinks}
	    			title="Press Me!"
	    			color="#841584"
	    			accessibilityLabel="press me"
	  			/>
	    	)}
			{renderIf(this.state.drinks)(
				<Grid drinksData={this.props.drinks} /> 
			)}
	    )

	}
}



const mapStateToProps = (state) => {
    return {
        drinks: state.drinks,
        isLoading: state.drinksLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchDrinks(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);