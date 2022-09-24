import AsyncStorage from '@react-native-async-storage/async-storage'

export const WriteToStorage = async (data, name) => {
  try {
    let save = await AsyncStorage.setItem(name, data)
    console.log(save)
  } catch (e) {
    return 'error '
  }
}

export const ReadFromStorage = async (name) => {
  try {
    let value = await AsyncStorage.getItem(name)
    console.log(value);
    return value
  } catch (e) {
    return 'error '
  }
}