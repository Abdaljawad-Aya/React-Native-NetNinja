import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { globalStyles, images } from '../styles/global'
import { Formik } from 'formik'
import { TextInput } from 'react-native-gesture-handler'

export default function ReviewForm() {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        onSubmit={(values) => {}}
      >
        {(props) => (
          <View>
            <TextInput />
          </View>
        )}
      </Formik>
    </View>
  )
}
