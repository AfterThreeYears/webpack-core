const acorn = require('acorn');
const walk = require('acorn-walk');
// const util = require('util');

const ast = acorn.parse('let x = 10');
// console.log(util.inspect(ast, {depth: 10}));
walk.simple(ast, {
  VariableDeclarator(data) {
    console.log('VariableDeclarator is:', data);
  },
  Literal(node) {
    console.log('node is: ', node);
  }
})
