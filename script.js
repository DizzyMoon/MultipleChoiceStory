window.addEventListener("DOMContentLoaded", start);
const scene3A = {
  title: "A light! A light!",
  text: /*html*/ `<p>You slide the diamond up to the top of the relic</p>
  <p>The top opens up and a small white pearl emerges</p>
  <p>Suddenly a bright white light blinds you</p>
  <p>You blink a few times, letting your eyes adjust</p>
  <p>You notice that you find yourself in a stone cave</p>
  <p>Water is running from a small hole in the ceiling down along the surface, making the walls shimmer in the light</p>
  <p> Before you lies to pathways. On the right, the ceiling is addorned with small gemstones.</p>
  <p> On the left, the pathway has a strange inscribed metal railing attached the the left wall, snaking its way into the dark</p>`,
  choices: [
    {
      name: "Go left",
      node: null,
    },
    {
      name: "Go right",
      node: null,
    },
  ],
};

const scene3B = {
  title: "Memories...",
  text: /*html*/ `
    <p>Grandad ded. Waaa waa waaaaaaaaaaa :(</p>
    `,
  choices: [
    {
      name: "Use trinket",
      node: scene3A,
    },
  ],
};

const scene2 = {
  title: "Perculiar relic...",
  text: /*html*/ `<p>You pull out the small trinket.</p>
    <p>It's cylindrical in shape with a small diamond shaped bump on the side, that fits into a groove which leads to the top of the contraption</p>`,
  choices: [
    {
      name: "Use trinket",
      node: scene3A,
    },
    {
      name: "Inspect further",
      node: scene3B,
    },
  ],
};

const scene1 = {
  title: "Gloomy beginnings",
  text: /*html*/ `<p>You wakeup to the feeling of a singular droplet collapsing on the skin of your forehead</p>
  <p>It's incredibly dark. "Where am i?", you wonder.</p>
  <p>Last thing you remember, you were hoisting up water from the village well. You know, that one of Magi Hill</p>
  <p>You look around, seeing nothing but pure darkness until you remember grandpas trinket in your pocket</p>`,
  choices: [
    {
      name: "Pull out the trinket",
      node: scene2,
    },
  ],
};

function start() {
  console.log("Javascript is running :)");
  currentScene = scene1;
  showScene(scene1);
  registerButtonClicks();
}

let currentScene;

function registerButtonClicks() {
  document.querySelector("main").addEventListener("click", userClicked);
}

function userClicked(event) {
  const target = event.target;
  if (target.tagName === "BUTTON") {
    buttonClicked(target);
  }
}

function buttonClicked(button) {
  console.log(button);
  button.parentElement.remove();
  const index = button.id.substring(10);
  console.log("index", index);
  const choice = currentScene.choices[index].node;

  currentScene = choice;
  console.log("Current Scene", currentScene);
  showScene(currentScene);
}
function showScene(scene) {
  console.log("Scene", scene);
  const html = /*html*/ `<div class="scene">
  <h2>${scene.title}</h2>
  <div class="text">
    ${scene.text}
  </div>
  <div class="choices">
    ${scene.choices
      .map((choice, i) => `<button id="btn-choice${i}">${choice.name}</button>`)
      .join(" ")}
  </div>
  </div>`;

  document.querySelector("main").insertAdjacentHTML("beforeend", html);
}
