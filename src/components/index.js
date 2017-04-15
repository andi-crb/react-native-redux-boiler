import React from 'react'
import {
  View,
  Text
} from 'react-native'

class Button extends Component {
	this.state={loadingStatus:false}

	toggleStatus(){
		this.setState({
			loadingStatus:true
		})
	}

	onPressLoadDrinks (){
		toggleStatus()
	}


	render: function () {
	    return (
	    	{renderIf(this.state.loadingStatus)(
	    		<Text>Loading...</Text>
	    	)}
	    	{renderIf(!this.state.loadingStatus
	    		<Button
	    			onPress={onPressLoadDrinks}
	    			title="Press Me!"
	    			color="#841584"
	    			accessibilityLabel="press me"
	  			/>
	    	)}
	    )

	}
}