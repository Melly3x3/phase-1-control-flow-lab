function scuberGreetingForFeet(distance){
  let greeting
if(distance <= 400) {
  greeting = "This one is on me!";
  return greeting ; 
}
else if (distance >= 400 && distance <= 2000) {
  greeting = 'That will be twenty bucks.'
  return greeting
}
else if (distance >= 2000 && distance <= 2500) {
  greeting = 'I will gladly take your thirty bucks.'
  return greeting
}
else if(distance > 2500){
  greeting = 'No can do.'
  return greeting
}
}

function ternaryCheckCity(city){
  let response = city === `NYC` ? `Ok, sounds good.` : `No go.`
  return response
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous":
      return ("Thank you so much.");
    case "not as generous":
      return ("Thank you.");
    default:
      return ("Bye.");
  }
}