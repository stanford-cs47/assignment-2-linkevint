import React from 'react';
import { 
	StyleSheet, 
	Text, 
	View, 
	Image,
	Button, 
	Platform, 
	TouchableOpacity 
} from 'react-native';
import { Images, Profiles } from '../Themes'

export default class Actions extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.actions}>
      	<TouchableOpacity style={styles.smallButton}>
          <Image
            source={Images.rewind}
            style={styles.smallButtonImage}
            resizeMode='contain'
         	/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bigButton}>
          <Image
            source={Images.nope}
            style={styles.bigButtonImage}
            resizeMode='contain'
        />
        </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton}>
            <Image
              source={Images.boost}
              style={styles.smallButtonImage}
              resizeMode='contain'
            />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bigButton}>
          <Image
            source={Images.like}
            style={styles.bigButtonImage}
            resizeMode='contain'
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallButton}>
          <Image
            source={Images.superLike}
            style={styles.smallButtonImage}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
		);
	}
}

const styles = StyleSheet.create({
	actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? 60: 72,
    width: '85%',
    bottom: 7,
  },
  smallButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 30,
    aspectRatio: 1,
    borderRadius: 20,
  },
  smallButtonImage: {
    width: '45%',
    height: '45%',
  },
  bigButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 45,
    aspectRatio: 1,
    borderRadius: 25,
  },
  bigButtonImage: {
    width: '50%',
    height: '50%',
  },
});