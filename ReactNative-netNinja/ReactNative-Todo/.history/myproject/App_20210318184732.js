import React , {useState} from 'react';
import { StyleSheet , Text , View, TextInput} from 'react-native';

export default function App() {
  const [people, setPeople] = useState({
    { name: 'shaun', key: '1'},
    { name: 'yoshi', key: '2'},
    { name: 'maria', key: '3'},
    { name: 'peach', key: '4'},
    { name: 'browser', key: '5'},
  })
}