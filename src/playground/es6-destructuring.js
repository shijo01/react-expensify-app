console.log('destructuring');

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-published'} = book.publisher;
console.log(publisherName);

//Array destructuring

const item = ['Coffee (Hot)', '$2.00', '$2.50', '$2.75'];

const [name, , cost] = item;

console.log(`A medium ${name} costs ${cost}`);