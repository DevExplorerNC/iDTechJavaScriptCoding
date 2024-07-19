let greetings = "Welcome to the future!";
let name = "Victor";
let status = "Vice President";
let myname = "Natasha";

let cityName = "Neotropolis";
let event = "The Final War";
let country1 = "Novaria";
let country2 = "Atlantia";

let year = 2100;
let eventYearAgo = 4;

let intelligence = 70;
let citizenshipStatus = false;
let citizensSatisfied = false;

let amenities = [
  "advanced transportation systems",
  "elite education",
  "cutting-edge technology",
  "state-of-the-art healthcare facilities",
  "rich cultural diversity",
];

function introduceSelf() {
  console.log(greetings + " Hey, I'm " + name);
  console.log("I'm the new " + status + " of " + cityName + ".");
  console.log("I'm sure you already know about the " + event + ".");
}

function describeEvent() {
  if (intelligence < 50) {
    console.log(
      "\nOh... you don't know about it. In the year " +
        year +
        " you must really live under a rock if you don't know about it."
    );
    console.log(
      event +
        " happened " +
        eventYearAgo +
        " years ago when " +
        country1 +
        " went to war with " +
        country2 +
        " causing a nuclear winter.\n"
    );
  }
}

function describeCityAmenities() {
  console.log("Now that it's over we all built " + cityName);
  console.log("A city with " + amenities.join(", "));
  console.log(
    "The city is a beacon of progress and prosperity in a post-war world.\n"
  );
}

function askCitizensSatisfaction() {
  console.log("You: Are the citizens satisfied with your work?");

  if (citizensSatisfied) {
    console.log(name + ": Of course, who wouldn't be?");
  } else {
    console.log(name + ": (ignores you) Anyways, this is a great city.");
  }
}

function offerCitizenship() {
  if (!citizenshipStatus) {
    console.log(
      "By the way, if you want to purchase anything you need citizenship."
    );
    console.log(
      "You can stop by the City Hall to get one. It takes like 5 minutes."
    );
  } else {
    console.log(
      "Nice you already have your citizenship. Your on top of things I see."
    );
  }
}

function concludeMeeting() {
  console.log("\nAnyway, it was nice meeting you... " + myname + ", right?");
}

function masterFunction() {
  introduceSelf();
  describeEvent();
  describeCityAmenities();
  askCitizensSatisfaction();
  offerCitizenship();
  concludeMeeting();
}

masterFunction();
