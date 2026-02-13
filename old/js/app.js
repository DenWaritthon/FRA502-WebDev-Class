const $ = (id) => document.getElementById(id);

let count = 0;
/** @type {{count:number, iso:string}[]} */
let logs = [];

// counter functions zone
function renderCount() {
  $("count").textContent = String(count);
}

function clampNonNegative(n) {
  return Math.max(0, n);
}

function inc() {
  count += 1;
  renderCount();
}

function dec() {
  count = clampNonNegative(count - 1);
  renderCount();
}

function reset() {
  count = 0;
  renderCount();
}

// log functions zone
function save() {
  const now = new Date().toISOString();
  logs.unshift({ count, iso: now });
  logs = logs.slice(0, 500);
  renderLogs();
}

function formatThaiDateTime(iso) {
  const dt = new Date(iso);
  return dt.toLocaleString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function renderLogs() {
  const list = $("logList");
  list.innerHTML = "";

  if (!logs.length) {
    $("logEmpty").hidden = false;
    return;
  }
  $("logEmpty").hidden = true;

  for (const item of logs) {
    const li = document.createElement("li");
    li.className = "log-item";

    const row1 = document.createElement("div");
    row1.className = "row";

    const dt = document.createElement("span");
    dt.className = "pill";
    dt.textContent = formatThaiDateTime(item.iso);

    row1.appendChild(dt);

    const row2 = document.createElement("div");
    row2.className = "row";

    const label = document.createElement("span");
    label.className = "subtitle";
    label.textContent = "Number of users recorded :";

    const c = document.createElement("span");
    c.className = "count";
    c.textContent = `${item.count}`;

    row2.appendChild(label);
    row2.appendChild(c);

    li.appendChild(row1);
    li.appendChild(row2);
    list.appendChild(li);
  }
}

function clearLog() {
  const ok = confirm("Do you want to clear all history?");
  if (!ok) return;
  logs = [];
  renderLogs();
}

// Main
renderCount();
renderLogs();

$("btnInc").addEventListener("click", inc);
$("btnDec").addEventListener("click", dec);
$("btnReset").addEventListener("click", reset);
$("btnSave").addEventListener("click", save);
$("btnClearLog").addEventListener("click", clearLog);

