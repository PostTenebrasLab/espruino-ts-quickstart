const blinkInterval = 500;

let on = false;
setInterval(() => {
  on = !on;
  digitalWrite(D2, on);
}, blinkInterval);
