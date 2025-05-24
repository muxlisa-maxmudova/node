import {URL} from 'url';
const url = new URL('http://becomeauthenticwithus.en:2010/home?query=string/#hash/');
console.log(url.host) // shows web's name (becomeauthenticwithus.en:2010) +
console.log(url.port) // port which web page is running on (2010) +
console.log(url.protocol) // (http:) protocol +
console.log(url.pathname) // (/home) indicates in which page we are located (home, about, contact us and etc...) +
console.log(url.hash) // (/#hash/) when the query is hashed to prevent a cyber strike -
console.log(url.search) // shows what we are searching (?query=string/) -
console.log(url.toJSON()) // transfers to link +
console.log(url.toString()) // do the same +
//33:59