const $ = (id) => document.getElementById(id);

let man = 0;
let woman = 0;
/** logs: [{ man:number, woman:number, total:number, iso:string }] */
let logs = [];

function clampNonNegative(n) {
  return Math.max(0, n);
}

// ภาษาไทย + ค.ศ. (Gregorian)
function formatThaiDateTimeAD(iso) {
  const dt = new Date(iso);
  return dt.toLocaleString("th-TH-u-ca-gregory", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function renderCounts() {
  $("countMan").textContent = String(man);
  $("countWoman").textContent = String(woman);
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

    // row 1: date time + delete
    const row1 = document.createElement("div");
    row1.className = "row";

    const dt = document.createElement("span");
    dt.className = "pill";
    dt.textContent = formatThaiDateTimeAD(item.iso);

    const delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.textContent = "ลบ";
    delBtn.title = "ลบรายการนี้";
    delBtn.style.padding = "6px 10px";
    delBtn.style.borderRadius = "12px";
    delBtn.addEventListener("click", () => {
      logs = logs.filter((x) => x !== item);
      renderLogs();
    });

    row1.appendChild(dt);
    row1.appendChild(delBtn);

    // row 2: man
    const rowMan = document.createElement("div");
    rowMan.className = "row";
    const manLabel = document.createElement("span");
    manLabel.className = "subtitle";
    manLabel.textContent = "ชาย";
    const manVal = document.createElement("span");
    manVal.className = "count";
    manVal.textContent = String(item.man);
    rowMan.appendChild(manLabel);
    rowMan.appendChild(manVal);

    // row 3: woman
    const rowWoman = document.createElement("div");
    rowWoman.className = "row";
    const womanLabel = document.createElement("span");
    womanLabel.className = "subtitle";
    womanLabel.textContent = "หญิง";
    const womanVal = document.createElement("span");
    womanVal.className = "count";
    womanVal.textContent = String(item.woman);
    rowWoman.appendChild(womanLabel);
    rowWoman.appendChild(womanVal);

    // row 4: total
    const rowTotal = document.createElement("div");
    rowTotal.className = "row";
    const totalLabel = document.createElement("span");
    totalLabel.className = "subtitle";
    totalLabel.textContent = "รวม";
    const totalVal = document.createElement("span");
    totalVal.className = "count";
    totalVal.textContent = String(item.total);
    rowTotal.appendChild(totalLabel);
    rowTotal.appendChild(totalVal);

    li.appendChild(row1);
    li.appendChild(rowMan);
    li.appendChild(rowWoman);
    li.appendChild(rowTotal);

    list.appendChild(li);
  }
}

// Handlers
function incMan() { man += 1; renderCounts(); }
function decMan() { man = clampNonNegative(man - 1); renderCounts(); }

function incWoman() { woman += 1; renderCounts(); }
function decWoman() { woman = clampNonNegative(woman - 1); renderCounts(); }

function resetAll() {
  man = 0;
  woman = 0;
  renderCounts();
}

function save() {
  const now = new Date().toISOString();
  const total = man + woman;
  logs.unshift({ man, woman, total, iso: now });
  logs = logs.slice(0, 500);
  renderLogs();
}

function clearLog() {
  const ok = confirm("ต้องการล้างประวัติทั้งหมดใช่หรือไม่?");
  if (!ok) return;
  logs = [];
  renderLogs();
}

// Init
renderCounts();
renderLogs();

// Wire up
$("btnManInc").addEventListener("click", incMan);
$("btnManDec").addEventListener("click", decMan);
$("btnWomanInc").addEventListener("click", incWoman);
$("btnWomanDec").addEventListener("click", decWoman);

$("btnSave").addEventListener("click", save);
$("btnReset").addEventListener("click", resetAll);
$("btnClearLog").addEventListener("click", clearLog);
