import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { fakeApiKey, url, sayHi, old, dog } from './src/config';

console.log(fakeApiKey);
console.log(url);
sayHi('Andy');
console.log(old, dog);

const ages = [1, 1, 4, 52, 12, 4];

console.log(uniq(ages));
