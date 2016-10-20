function speak(string){
  return 'The ' + this.type + ' rabbit says ' + string;
}

var oldRabbit = {type: 'old', speak: speak};

console.log(oldRabbit.speak('Burp!')); // The old rabbit says Burp!

var fatRabbit = speak.apply({type: 'fat'}, ['food time!']);
console.log(fatRabbit); // The fat rabbit says food time!

console.log(speak.call({type: 'cool'}, 'chill out dude!')); // The cool rabbit says chill out dude!

var oldRabbitSpeaks = speak.bind(oldRabbit, "I'm too old for this crap!");
console.log(oldRabbitSpeaks()); // The old rabbit says I'm too old for this crap!
