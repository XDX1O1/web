const clock = document.querySelector(".clock");
const hourHand = document.querySelector("#hourHand");
const minuteHand = document.querySelector("#minuteHand");
const secondHand = document.querySelector("#secondHand");
const activityInput = document.querySelector("#activity-input");
const addActivityBtn = document.querySelector("#add-activity-btn");
const activitiesList = document.querySelector(".activities-list");

let activities = [];

addActivityBtn.addEventListener("click", () => {
  const activity = activityInput.value.trim();
  if (activity !== "") {
    activities.push(activity);
    activityInput.value = "";
    updateActivitiesList();
  }
});

function updateActivitiesList() {
  activitiesList.innerHTML = "";
  activities.forEach((activity, index) => {
    const activityElement = document.createElement("div");
    activityElement.textContent = activity;
    activitiesList.appendChild(activityElement);
  });
}

function updateClock() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  hourHand.style.transform = `rotate(${hour * 30 + minute * 0.5}deg)`;
  minuteHand.style.transform = `rotate(${minute * 6 + second * 0.1}deg)`;
  secondHand.style.transform = `rotate(${second * 6}deg)`;
}

setInterval(updateClock, 1000);

