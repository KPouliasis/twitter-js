const _ = require('lodash')
var data = [];
let count = 0;
function add (name, content) {
  data.push({id: ""+count, name: name, content: content });
  count ++;
}

function list () {
  return _.cloneDeep(data);
}

function find (properties) {
  return _.cloneDeep(_.filter(data, properties));
}

module.exports = { add: add, list: list, find: find };


const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function() {
  const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
  const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

const defaultNames = function (){
  module.exports.add("Jess","Hello tweetBank!");
  module.exports.add("Kostas", "Hello again");
}
const getFakeTweet = function() {
  const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

defaultNames();

for (let i = 0; i < 10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}

//console.log(data)
console.log(module.exports.find(['name','Kostas']))
console.log(module.exports)
console.log(module.exports.list())
