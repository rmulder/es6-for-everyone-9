import { sum, kebabCase } from 'npm:lodash';
import { addTax } from './checkout';

console.log(kebabCase('Andy is awesome!'));
console.log(addTax(100, 0.15));
console.log('It works!');