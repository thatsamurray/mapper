var facts = [
    "I'm Adam, a <i>Psychological Wellbeing Practitioner</i> with a passion for bringing mental health and technology together like <i>warm, cosy burrito</i>.", 
    "I'm Adam, a <i>Psychological Wellbeing Practitioner</i> with a passion for bringing mental health and technology together like <i>butter on a freshly cooked potato</i>.", 
    "I'm Adam, a <i>Psychological Wellbeing Practitioner</i> with a passion for bringing mental health and technology together like <i>slipping on black ice</i>."
];

!function newFact() {
  var randomFact = Math.floor(Math.random() * facts.length);
  document.getElementById('helloiam').innerHTML = facts[randomFact]
}();