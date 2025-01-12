const freelancers = [
  {
    name: "Alice",
    occupation: "Writer",
    price: 30,
  },
  {
    name: "Bob",
    occupation: "Teacher",
    price: 50,
  },
];

const possibleFreelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];
// function that will calculate Average Starting Price.
function calculateAverageStartingPrice() {
  const totalPriceint = freelancers.reduce(
    (total, freelancer) => total + freelancer.price,
    0
  );
  //averagePrice is the Numerical price AveragePriceP Holds text information.
  const averagePrice = totalPriceint / freelancers.length;

  const root = document.querySelector("#root");
  const averagePriceP = document.getElementById("averagePrice");
  averagePriceP.textContent = `The average starting price is $${averagePrice.toFixed(
    2
  )} `;
  //the two in tofixed is Number of decimal points.
  root.appendChild(averagePriceP);
}

//add freelancers to the existing array
function addFreelancers() {
  const randomFreelancer =
    possibleFreelancers[Math.floor(Math.random() * possibleFreelancers.length)];
  freelancers.push({
    name: randomFreelancer.name,
    price: randomFreelancer.price,
    occupation: randomFreelancer.occupation,
  });
  // calculateAverageStartingPrice();
}
// iterate through freelancers to create an element for each on and add info to the elementand add element to the DOM
function renderFreelancers(freelancers) {
  // iterates through array
  const freelancerSection = document.querySelector("#freelancersection");
  freelancerSection.innerHTML = "";

  freelancers.forEach((freelancer) => {
    const freelancerdiv = document.createElement("div");
    freelancerdiv.classList.add("freelancer");

    const name = document.createElement("h3");
    name.textContent = freelancer.name;

    const occupation = document.createElement("p");
    occupation.textContent = `Occupation: ${freelancer.occupation}`;

    const price = document.createElement("p");
    price.textContent = `Price: $${freelancer.price}`;

    freelancerdiv.appendChild(name);
    freelancerdiv.appendChild(occupation);
    freelancerdiv.appendChild(price);

    freelancerSection.appendChild(freelancerdiv);
  });
}

// fuction that renders items onto the DOM
function render() {
  renderFreelancers(freelancers);
  calculateAverageStartingPrice();
}

setInterval(() => {
  addFreelancers();
  render();
}, 3000);
render();

// renderFreelancers(freelancers);
// calculateAverageStartingPrice();

//back up code if need if doing the rendering in the same function does not work
// const root = document.querySelector("#root");
// const averagePrice = document.createElement("p");
// averagePrice.textContent = `The average starting price is $${calculateAverageStartingPrice().toFixed(
//   2
// )} `;
// root.appendChild(averagePrice);
