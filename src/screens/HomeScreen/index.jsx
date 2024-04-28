import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  TextInput,
} from 'react-native'
import useController from './useController'

const {width} = Dimensions.get('window')

const dataNumber = [7, 8, 9, 4, 5, 6, 1, 2, 3]

export default function HomeScreen() {
  const {val, onSetValue, onSave} = useController()

  return (
      <SafeAreaView style={style.container}>
        <View style={[style.section, style.inputItem]}>
          <TextInput
              defaultValue={val}
              style={{fontSize: 32}}
              editable={false}
          />
        </View>
        <View style={[style.section, style.row]}>
          <View style={[style.row, {width: '75%'}]}>
            {dataNumber.map((item) => (
                <TouchableHighlight
                    onPress={onSetValue(item)}
                    underlayColor="#DDDDDD"
                    key={item}
                    style={style.item}
                >
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>{item}</Text>
                </TouchableHighlight>
            ))}
          </View>
          <View style={{width: '25%'}}>
            <TouchableHighlight
                onPress={onSetValue('0')}
                underlayColor="#DDDDDD"
                style={style.item}
            >
              <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>0</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={onSave} underlayColor="#DDDDDD" style={style.itemSave}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>Simpan</Text>
            </TouchableHighlight>
          </View>
        </View>
      </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    flex: 0.5,
    marginBottom: -130
  },
  inputItem: {
    justifyContent: 'flex-end',
    marginBottom: 16,
    marginHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  item: {
    width: width * 0.25,
    height: width * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgb(199, 199, 204)',
    backgroundColor: '#FF4E4E',
  },
  itemSave: {
    width: width * 0.25,
    height: width * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgb(199, 199, 204)',

  },
})