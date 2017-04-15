import React from 'react'
import {
  View,
  Text
} from 'react-native'

import Grid from 'react-native-grid-component';

class Simple extends Component {


	var drinks = JSON.parse(this.props.drinks)
	_renderItem = (data.strDrink, data.strDrinkThumb) => <View><Image source={{uri: data[strDrinkThumb]}} style={{width: 400, height: 400}} /><Text>data.strDrink</Text></View>

  	render() {
    	return (
      		<Grid
        		renderItem={this._renderItem}
        		data={drinks}
        		itemsPerRow={2}
      		/>
    	);
  	}
}


export default Grid
