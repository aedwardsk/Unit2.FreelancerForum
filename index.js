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
  const totalPrice = possibleFreelancers.reduce(
    (total, freelancer) => total + freelancer.price,
    0
  );
  //averagePrice is the Numerical price AveragePriceP Holds text information.
  const averagePrice = totalPrice / possibleFreelancers.length;

  const root = document.querySelector("#root");
  const averagePriceP = document.createElement("p");
  averagePriceP.textContent = `The average starting price is $${averagePrice.toFixed(
    2
  )} `;
  //the two in tofixed is Number of decimal points.
  root.appendChild(averagePriceP);
}

//add freelancers to the existing array
function addFreelancers() {}
// iterate through freelancers to create an element for each on and add info to the elementand add element to the DOM
function renderFreelancers(freelancers) {
  // iterates through array
  const root = document.querySelector("#root");

  freelancers.forEach((freelancer) => {
    const freelancersection = document.createElement("div");
    freelancersection.classList.add("freelancer");

    const name = document.createElement("h3");
    name.textContent = freelancer.name;

    const occupation = document.createElement("p");
    occupation.textContent = `Occupation: ${freelancer.occupation}`;

    const price = document.createElement("p");
    price.textContent = `Price: $${freelancer.price}`;

    freelancersection.appendChild(name);
    freelancersection.appendChild(occupation);
    freelancersection.appendChild(price);

    root.appendChild(freelancersection);
  });
}

// fuction that renders items onto the DOM
function render() {}

setInterval(() => {
  addFreelancers();
  render();
}, 1000);

renderFreelancers(freelancers);
calculateAverageStartingPrice();

//back up code if need if doing the rendering in the same function does not work
// const root = document.querySelector("#root");
// const averagePrice = document.createElement("p");
// averagePrice.textContent = `The average starting price is $${calculateAverageStartingPrice().toFixed(
//   2
// )} `;
// root.appendChild(averagePrice);
