import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {useState, useEffect} from 'react'

import firebase from "firebase"
import "firebase/firestore"
import './firebase'

const db = firebase.firestore()
// const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

// auth.signOut() //☆ログアウトする

export default function App() {
  const mydata = []
  const [data, setData] = useState(mydata)
  // const [message, setMessage] = useState('wait...')

  // useEffect(() => {
  //   auth.signInWithPopup(provider).then(result=> {
  //     setMessage('logined: ' + result.user.displayName)
  //   }).catch((error) => {
  //     setMessage('not logined.')
  //   })
  // },[])

  useEffect(() => {
      db.collection('data').get().then((snapshot)=> {
        snapshot.forEach((document)=> {
          const doc = document.data()
          mydata.push(
            <Text>
              {doc.name}
              {doc.age}
            </Text>
            // <tr key={document.id}>
            //   <td><a href={'/fire/del?id=' + document.id}>
            //       {document.id}</a></td>
            //   <td>{doc.name}</td>
            //   <td>{doc.age}</td>
            // </tr>
          )
        })
        setData(mydata)
      })
  }, [])

  return (

      <View style={{flex:1, paddingVertical:80, alignItems:'center'}}>
        <Text>
          Open up App.js to start working on your app!
        </Text>
        <View>
            {data}
        </View>
    </View>

  )
}
