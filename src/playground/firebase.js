import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCz1-o5Fe8cU8-QI9wdnbyNxqn9FfYM0n8",
    authDomain: "expensify-bd3d0.firebaseapp.com",
    databaseURL: "https://expensify-bd3d0.firebaseio.com",
    projectId: "expensify-bd3d0",
    storageBucket: "expensify-bd3d0.appspot.com",
    messagingSenderId: "1088323970641"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
});

// Setup data sub -> Andrew is a Software Developer at Amazon.

// Change the data and make sure it reprints

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Andrew Mead',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Philadelphia',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log('Did not remove data', e);
//   });
