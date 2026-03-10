const bootScreen = document.getElementById('boot-screen');
const enterBtn = document.getElementById('enter-btn');
enterBtn.style.display = 'none';

function addLine(text, color = '') {
  const p = document.createElement('p');
  p.textContent = text;
  if (color) p.style.color = color;
  bootScreen.insertBefore(p, enterBtn);
  return p;
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function runBoot() {
  await delay(300);
  addLine("> IBM PC Compatible BIOS v2.1");
  await delay(400);
  addLine("> Copyright (C) 1984 IBM Corp.");
  await delay(400);
  addLine("> 640K Base Memory OK");
  await delay(600);

  // --- hardware check with dots ---
  const hwLine = addLine("> Checking hardware...");
  await delay(500);
  hwLine.textContent = "> Checking hardware.";
  await delay(500);
  hwLine.textContent = "> Checking hardware..";
  await delay(500);
  hwLine.textContent = "> Checking hardware...";
  await delay(600);
  hwLine.textContent = "> Checking hardware... OK";
  hwLine.style.color = '#36ff04';

  await delay(500);
  addLine("> Keyboard OK");
  await delay(400);
  addLine("> Display adapter OK");
  await delay(400);

  const loadLine = addLine("> Loading IBM.EXE");
  await delay(400);
  loadLine.textContent = "> Loading IBM.EXE.";
  await delay(400);
  loadLine.textContent = "> Loading IBM.EXE..";
  await delay(400);
  loadLine.textContent = "> Loading IBM.EXE...";
  await delay(400);
  loadLine.style.color = '#36ff04'
  enterBtn.style.display = 'block';
}

runBoot();

enterBtn.addEventListener('click', () => {
  bootScreen.style.display = 'none';
  
  const app = document.getElementById('app');
  app.style.display = 'block';

  setTimeout(() => {
    app.style.opacity = '1';
  }, 50);
});

enterBtn.addEventListener('click', handleEnter);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    handleEnter();
  }
});

function handleEnter() {
  bootScreen.style.display = 'none';
  const app = document.getElementById('app');
  app.style.display = 'block';
  setTimeout(() => {
    app.style.opacity = '1';
  }, 50);
}

var historyToggle = document.getElementById('history-toggle');
var historyBody = document.getElementById('history-body');

historyToggle.addEventListener('click', function() {
    historyBody.classList.toggle('open');
    historyToggle.textContent = historyBody.classList.contains('open') ? '[-]' : '[+]';
});