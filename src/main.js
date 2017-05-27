import { config } from '../firebase.config';

var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');
require('firebase/storage');

firebase.initializeApp(config);

var database = firebase.database().ref('test')
databse.on('value', snapshot => {
    console.log('snapshot?', snapshot);
    console.log(snapshot.val());
});