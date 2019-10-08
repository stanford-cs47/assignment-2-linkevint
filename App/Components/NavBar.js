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

export default class NavBar extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<View style={styles.nav}>
        <TouchableOpacity style={styles.icon}>
          <Image
            source={Images.settings}
            style={styles.iconImage}
            resizeMode='contain'
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.logo}>
          <Image
            source={Images.logo}
            style={styles.logoImage}
            resizeMode='contain'
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Image
            source={Images.chat}
            style={styles.iconImage}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
		);
	}
}

const styles = StyleSheet.create({
	nav: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#C5C5C5',
    width: '100%',
    height: Platform.OS === 'ios' ? 44: 56,
		},
  icon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  iconImage: {
    tintColor: '#CDCDCD', 
    width: '90%',
    height: '80%',
  },
  logo: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: '90%',
    height: '80%',
  },
});