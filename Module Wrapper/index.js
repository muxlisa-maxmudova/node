const {person, person1,person2} = require('./people')
function say(username) {
    console.log('Hello, ', username)
}
say(person)// this is an anonymous function
say(person1)
say(person2)



