const tellMeHowAreYou = (state) => {
    if(state === 'good'){
        console.log('Good to hear');
    }else if(state === 'bad'){
        console.log('What is wrong?');
    }else{
        console.log('I see!');
    }
}
module.exports = tellMeHowAreYou