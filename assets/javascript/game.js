const teamonenumshots = document.querySelector("#teamone-numshots");
const teamonenumgoals = document.querySelector("#teamone-numgoals");
const teamoneshootbutton = document.querySelector("#teamone-shoot-button");
teamoneshootbutton.addEventListener("click", function () {
  // TODO 2: Fill in this function so that it increments
  // (adds one to) the variable named count,
  // then updates the inner text of "countspan"
  // to show the current value of "count".

  console.log("SHOOT");

  // Calculate the new value for our counter:

  let newCounterValue = Number(teamonenumshots.innerHTML) + 1;

  // Only update the counter value on the screen:

  teamonenumshots.innerHTML = newCounterValue;

  // Team One makes goal by chance:

  if (Math.random() >= 0.5) {
    console.log("Team One Scored!");
    let newCounterValue = Number(teamonenumgoals.innerHTML) + 1;
    teamonenumgoals.innerHTML = newCounterValue;
  }
});

const teamtwonumshots = document.querySelector("#teamtwo-numshots");
const teamtwonumgoals = document.querySelector("#teamtwo-numgoals");
const teamtwoshootbutton = document.querySelector("#teamtwo-shoot-button");
teamtwoshootbutton.addEventListener("click", function () {
  // TODO 2: Fill in this function so that it increments
  // (adds one to) the variable named count,
  // then updates the inner text of "countspan"
  // to show the current value of "count".

  console.log("SHOOT");

  // Calculate the new value for our counter:

  let newCounterValue = Number(teamtwonumshots.innerHTML) + 1;

  // Only update the counter value on the screen:

  teamtwonumshots.innerHTML = newCounterValue;

  // Team Two makes goal by chance:

  if (Math.random() < 0.5) {
    console.log("Team Two Scored!");
    let newCounterValue = Number(teamtwonumgoals.innerHTML) + 1;
    teamtwonumgoals.innerHTML = newCounterValue;
  }
});

const numresets = document.querySelector("#num-resets");
const resetbutton = document.querySelector("#reset-button");
resetbutton.addEventListener("click", function () {
  console.log("RESET");

  let newCounterValue1 = 0 / Number(teamonenumshots.innerHTML);
  teamonenumshots.innerHTML = newCounterValue1;

  let newCounterValue2 = 0 / Number(teamonenumgoals.innerHTML);
  teamonenumgoals.innerHTML = newCounterValue2;

  let newCounterValue3 = 0 / Number(teamtwonumshots.innerHTML);
  teamtwonumshots.innerHTML = newCounterValue3;

  let newCounterValue4 = 0 / Number(teamtwonumgoals.innerHTML);
  teamtwonumgoals.innerHTML = newCounterValue4;

  let resetValue = Number(numresets.innerHTML) + 1;
  numresets.innerHTML = resetValue;
});
