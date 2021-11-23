import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';

import Constants from 'expo-constants';

export default function GirisSayfasi() {
  return (
    <SafeAreaView style={styles.safeareviewstyles}>
      <View style={styles.container}>
        <Icon name="rocket" size={30} color="#900" style={styles.iconstyles} />

        <Text style={styles.paragraph}>Kullanici adi giriniz</Text>
        <TextInput style={[styles.textinputstyle, styles.viewspacestyles]} />

        <Text style={styles.paragraph}>Sifre giriniz</Text>
        <TextInput style={[styles.textinputstyle, styles.viewspacestyles]} />

        <View style={styles.viewspacestyles}>
          <Button
            buttonStyle={styles.loginbutton}
            type="outline"
            title="Giris Yapin"
            titleStyle={styles.loginText}
          />
        </View>

        <View style={styles.viewspacestyles}>
          <Icon.Button name="facebook" backgroundColor="#3b5998">
            <Text style={styles.facebookstyle}> Facebook ile giris yap</Text>
          </Icon.Button>
        </View>

        <View style={styles.viewspacestyles}>
          <Icon.Button name="twitter" backgroundColor="#1DA1F2">
            <Text style={styles.facebookstyle}>Twitter ile giris yap</Text>
          </Icon.Button>
        </View>

        <View style={styles.viewspacestyles}>
          <Icon.Button name="google" backgroundColor="#DB4437">
            <Text style={styles.facebookstyle}>Google ile giris yap</Text>
          </Icon.Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#e6e2d3',
    padding: 8,
    flexDirection: 'column',
  },
  paragraph: {
    margin: 4,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  facebookstyle: {
    fontFamily: 'Arial',
    fontSize: 15,
    color: 'white',
  },
  textinputstyle: {
    height: 40,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 2,
    fontSize: 18,
    paddingLeft: 4,
    paddingRight: 4,
  },
  iconstyles: {
    textAlign: 'center',
  },
  safeareviewstyles: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#e6e2d3',
    padding: 8,
  },
  viewspacestyles: {
    marginBottom: 10,
  },
  loginbutton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#1E6738',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
