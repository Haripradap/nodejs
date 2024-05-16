//common js
// const {GRN, ctf} = require('./utils')

// console.log(`Random number ${GRN()}`);
// console.log(`celciustofarenheit is ${ctf(0)}`);


//ES module

import  getPosts,{ getPostsLength } from './postController.js';

console.log(getPosts());
console.log(getPostsLength());
