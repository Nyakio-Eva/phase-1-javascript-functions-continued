function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun());
console.log(saturdayFun(activity= 'battle my dog'));


function mondayWork(activity= 'go to the office'){
    return `This Monday, I will ${activity}.`;
}
console.log(mondayWork());
console.log(mondayWork(activity='work from home'));

function wrapAdjective(highlight="*"){
    return function(adjective ="special"){
        return `You are ${highlight}${adjective}${highlight}!`;
    }
}
const promptFunction = wrapAdjective("*");
const emphatic1 = promptFunction("a hard worker");
console.log(emphatic1);

const emphatic2 = wrapAdjective("||")("a dedicated programmer");
console.log(emphatic2);
