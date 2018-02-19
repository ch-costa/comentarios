import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
   apiKey: "AIzaSyAV784zQJaplmFL7AxEXPLv3YkZy2R16a0",
   authDomain: "reactjs-b6835.firebaseapp.com",
   databaseURL: "https://reactjs-b6835.firebaseio.com",
   projectId: "reactjs-b6835",
   storageBucket: "reactjs-b6835.appspot.com",
   messagingSenderId: "904323434759"
})

const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export const providers = {
   'facebook': new firebase.auth.FacebookAuthProvider()
}

export const auth = firebaseApp.auth()
export default base