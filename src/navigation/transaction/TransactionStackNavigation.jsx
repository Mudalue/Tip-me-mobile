import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TransactionStacks } from '../../constants/screens'

const Stack = createNativeStackNavigator()

export default function TransactionStackNavigation() {
  return (
    <Stack.Navigator>
      {TransactionStacks.map((dash) => (
        <Stack.Screen
          name={dash.name}
          component={dash.component}
          options={{ headerShown: false }}
        />
      ))}
    </Stack.Navigator>
  )
}