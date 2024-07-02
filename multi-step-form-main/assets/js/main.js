const steps = document.querySelectorAll(".step");
const stepsNum = document.querySelectorAll(".step-num");
const GoBackBTN = document.querySelector(".GoBack");
const nextStep = document.querySelector(".nextStep");
const YearlyOrMonthly = document.querySelector(".YearlyOrMonthly");
const plans = document.querySelectorAll(".plan");
const AddOns = document.querySelectorAll(".addOn");
let finalPrice = 0;
let currentStep = 1;
let planType;

renderStep(currentStep);
function renderStep(num) {
  if (num === 1) {
    GoBackBTN.classList.add("d-none");
  } else {
    GoBackBTN.classList.remove("d-none");
  }
  document
    .querySelectorAll(".active")
    .forEach((e) => e.classList.remove("active"));
  steps[num - 1].classList.add("active");
  stepsNum[num - 1].classList.add("active");
  checkPlanType();
  renderAddOns(planType);
}

function renderPlans(type) {
  plans.forEach((p) => {
    let price =
      type == "monthly"
        ? p.getAttribute("data-monthly")
        : p.getAttribute("data-yearly");

    p.querySelector(".planPrice").textContent = `$${price}/${
      type == "monthly" ? "mo" : "yr"
    }`;
    if (type == "yearly") {
      if (p.querySelector(".plan-info").querySelector(".free"))
        p.querySelector(".plan-info").querySelector(".free").remove();
      let div = document.createElement("div");
      div.classList = "free";
      div.textContent = "2 months free";
      p.querySelector(".plan-info").appendChild(div);
    } else {
      if (p.querySelector(".plan-info").querySelector(".free"))
        p.querySelector(".plan-info").querySelector(".free").remove();
    }
  });
}
function renderAddOns(type) {
  AddOns.forEach((p) => {
    let price =
      type == "monthly"
        ? p.getAttribute("data-monthly")
        : p.getAttribute("data-yearly");

    p.querySelector(".addOn-price").textContent = `+$${price}/${
      type == "monthly" ? "mo" : "yr"
    }`;
  });
}
function checkPlanType() {
  if (YearlyOrMonthly.checked) {
    planType = "yearly";
    document.querySelector(".yearly").classList.add("chosen");
  } else {
    planType = "monthly";
    document.querySelector(".monthly").classList.add("chosen");
  }
  return planType;
}
YearlyOrMonthly.addEventListener("change", () => {
  document.querySelector(".chosen").classList.remove("chosen");

  checkPlanType();

  renderPlans(planType);
});

GoBackBTN.addEventListener("click", () => {
  currentStep--;
  renderStep(currentStep);
});
nextStep.addEventListener("click", () => {
  if (currentStep == 2) stepTwoPrice();
  stepThreePrice();

  if (currentStep == 3) {
    stepFourRender(
      document.querySelector(".plan:has(input:checked) h5").textContent,
      document
        .querySelector(".plan:has(input:checked)")
        .getAttribute(planType == "yearly" ? "data-yearly" : "data-monthly")
    );
  }
  if (currentStep == 4) {
    ThankYouMessage();
  }
  if (currentStep >= 4) return;
  currentStep++;
  renderStep(currentStep);
});
function stepThreePrice() {
  let stepThreePrice = 0;
  if (Boolean(!document.querySelector(".addOn:has(input:checked)"))) return;
  let selected = document.querySelectorAll(".addOn:has(input:checked)");
  selected.forEach((e) => {
    let attr = e.getAttribute(
      planType == "yearly" ? "data-yearly" : "data-monthly"
    );
    stepThreePrice += parseInt(attr);
  });

  return stepThreePrice;
}
function stepTwoPrice() {
  let check = document.querySelector(".plan:has(input:checked)");
  if (Boolean(!check)) window.alert("please choose a plan");
  let stepTwoPrice = 0;
  stepTwoPrice += parseInt(
    document
      .querySelector(".plan:has(input:checked)")
      .getAttribute(planType == "yearly" ? "data-yearly" : "data-monthly")
  );
  return parseInt(stepTwoPrice);
}
function stepFourRender(plan, price) {
  finalPrice = stepThreePrice() + stepTwoPrice();
  document.querySelector(".summary-info--addOns").innerHTML = "";
  nextStep.textContent = "Confirm";

  // final price
  document.querySelector(
    ".summary-totalPrice p"
  ).textContent = `Total (per ${planType})`;
  document.querySelector(
    ".summary-totalPrice span"
  ).textContent = `$${finalPrice}/${planType == "monthly" ? "mo" : "yr"}`;

  document.querySelector(
    ".summary-info--plan p"
  ).textContent = `${plan}(${checkPlanType()})`;
  document.querySelector(".summary-info--plan span").textContent = `${price}/${
    planType == "monthly" ? "mo" : "yr"
  }`;

  // adding services
  // if (Boolean(!document.querySelector(".addOn:has(input:checked)"))) return;

  let selected = document.querySelectorAll(".addOn:has(input:checked)");
  selected.forEach((e) => {
    let attr = e.getAttribute(
      planType == "yearly" ? "data-yearly" : "data-monthly"
    );
    let div = document.createElement("div");
    div.classList = "d-flex justify-content-between";
    let p = document.createElement("p");
    p.classList.add("text-black-50");
    console.log();
    p.textContent = e.querySelector(".addOn-info h6").textContent;
    let sspan = document.createElement("span");
    sspan.textContent = `+$${attr}/${planType == "monthly" ? "mo" : "yr"}`;
    div.appendChild(p);
    div.appendChild(sspan);
    document.querySelector(".summary-info--addOns").appendChild(div);
  });
}

// /
function ThankYouMessage() {
  document.querySelector(".buttons").innerHTML = "";
  let stepFour = document.querySelector(".step-four");
  stepFour.innerHTML = "";
  let img = document.createElement("img");
  let h1 = document.createElement("h1");
  h1.textContent = `Thank you!`;
  let p = document.createElement("p");
  p.textContent =
    "Thanks for confirming your subscription! We hope you have fun using our platform. if you ever need support, please feel free to email us as support@example.com";
  p.classList = "text-black-50";
  h1.classList = "fw-bold mt-2 mb-2";
  stepFour.classList =
    "d-flex flex-column gap-2 align-items-center justify-content-center step-four h-100 p-4";
  stepFour.appendChild(h1);
  stepFour.appendChild(p);
  console.log("what happend?");
}
