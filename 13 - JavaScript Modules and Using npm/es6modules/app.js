import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { fakeApiKey, url, sayHi, old, dog } from './src/config';
import User, { createURL, gravatar } from './src/user';

console.log(fakeApiKey);
console.log(url);
sayHi('Andy');
console.log(old, dog);

const ages = [1, 1, 4, 52, 12, 4];

console.log(uniq(ages));

const wes = new User('Wes Bos', 'wesbos@gmail.com', 'wesbos.com');
const profile = createURL(wes.name);
const image = gravatar(wes.email);
console.log(wes);
console.log(profile);
console.log(image);