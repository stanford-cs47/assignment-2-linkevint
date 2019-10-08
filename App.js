import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, Platform, TouchableOpacity } from 'react-native';
import { Images, Profiles } from './App/Themes';

export default class App extends React.Component {
  constructor() {
    super();

    var haroldProfile = Profiles.harold;
    this.state = {
      profileImage: haroldProfile.image,
      name: haroldProfile.name,
      age: haroldProfile.age,
      occupation: haroldProfile.occupation
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>

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

      <View style={styles.middle}>
        <View style={styles.profileCard}>
          <View style={styles.profileImageView}>
            <Image
              source={Images.harold}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.profileDetails}>
            <View style={styles.profileDetailsRow}>
              <Text style={{fontWeight: 'bold', fontSize: 24}}>Harold,</Text>
              <Text style={{fontSize: 24}}>65</Text>
            </View>
            <View style={styles.profileDetailsRow}>
              <Text style={{color: 'gray', fontSize: 16}}>Internet meme</Text>
            </View>
          </View>
        </View>
      </View>

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

        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E9E9E9',
  },

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