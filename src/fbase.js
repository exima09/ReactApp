import Rebase from 're-base';
import * as firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBsVAQ_yvRlD1Q0mVTYfKd3uFpTq4kX72I',
  authDomain: 'react-stateless.firebaseapp.com',
  databaseURL: 'https://react-stateless.firebaseio.com',
  messagingSenderId: '795332670117',
  projectId: 'react-stateless',
  storageBucket: 'react-stateless.appspot.com',
});

const fbase = Rebase.createClass(firebaseApp.database());

export { fbase, firebaseApp };