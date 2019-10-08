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

export default class Profile extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.middle}>
        <View style={styles.profileCard}>
          <View style={styles.profileImageView}>
            <Image
              source={this.props.profile.profileImage}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.profileDetails}>
            <View style={styles.profileDetailsRow}>
              <Text style={{fontWeight: 'bold', fontSize: 24}}>{this.props.profile.name},</Text>
              <Text style={{fontSize: 24}}>{this.props.profile.age}</Text>
            </View>
            <View style={styles.profileDetailsRow}>
              <Text style={{color: 'gray', fontSize: 16}}>{this.props.profile.occupation}</Text>
            </View>
          </View>
        </View>
      </View>
		);
	}
}

const styles = StyleSheet.create({
	middle: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileCard: {
    width: '85%',
    height: '73%',
    borderWidth: 1,
    borderColor: '#C5C5C5',
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  profileImageView: {
    width: '100%',
    aspectRatio: 1,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  profileDetails: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  profileDetailsRow: {
    flexDirection: 'row',
    paddingLeft: 10,
  },
});