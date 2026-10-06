"use strict";

const categories = [
  {name:"JIRAN", icon:"🏘️", color:"#a9e8d1", situations:[
    "JIRAN KAMU MEMBUAT BISING KETIKA KAMU SEDANG BELAJAR. APAKAH TINDAKAN KAMU?",
    "JIRAN BERLAINAN AGAMA MENGADAKAN SAMBUTAN PERAYAAN. APAKAH TINDAKAN KAMU?",
    "JIRAN MEMERLUKAN BANTUAN MENGANGKAT BARANG. APAKAH TINDAKAN KAMU?",
    "KAMU TERJUMPA JIRAN BAHARU DI SEBELAH RUMAH. APAKAH TINDAKAN KAMU?"
  ]},
  {name:"SEKOLAH", icon:"🏫", color:"#9ed7ff", situations:[
    "RAKAN KAMU MEMPUNYAI PENDAPAT YANG BERBEZA. APAKAH TINDAKAN KAMU?",
    "SEORANG RAKAN TERLUPA MEMBAWA ALAT TULIS. APAKAH TINDAKAN KAMU?",
    "RAKAN KAMU BERCAKAP DENGAN LOGHAT YANG BERBEZA. APAKAH TINDAKAN KAMU?",
    "DUA ORANG MURID MAHU MENGGUNAKAN KOMPUTER YANG SAMA. APAKAH TINDAKAN KAMU?"
  ]},
  {name:"TAMAN PERMAINAN", icon:"🛝", color:"#ffd981", situations:[
    "DUA ORANG KANAK-KANAK MAHU MENGGUNAKAN BUAIAN PADA MASA YANG SAMA. APAKAH TINDAKAN KAMU?",
    "SEORANG RAKAN BERMAIN PERMAINAN YANG BERBEZA DARIPADA KAMU. APAKAH TINDAKAN KAMU?",
    "RAKAN KAMU TERJATUH SEMASA BERMAIN. APAKAH TINDAKAN KAMU?",
    "SEORANG KANAK-KANAK MEMOTONG GILIRAN. APAKAH TINDAKAN KAMU?"
  ]},
  {name:"MAJLIS", icon:"🎉", color:"#ffb8a8", situations:[
    "KAMU MENGHADIRI MAJLIS YANG MEMPUNYAI MAKANAN BERLAINAN. APAKAH TINDAKAN KAMU?",
    "SEORANG TETAMU BERCAKAP DALAM BAHASA YANG BERBEZA. APAKAH TINDAKAN KAMU?",
    "RAKAN KAMU TIDAK MAHU MENYERTAI SATU AKTIVITI. APAKAH TINDAKAN KAMU?",
    "KAMU PERLU BERKONGSI TEMPAT DUDUK DENGAN ORANG LAIN. APAKAH TINDAKAN KAMU?"
  ]},
  {name:"DEWAN KOMUNITI", icon:"🏛️", color:"#d4b6f3", situations:[
    "DUA KUMPULAN MAHU MENGGUNAKAN DEWAN PADA HARI YANG SAMA. APAKAH TINDAKAN KAMU?",
    "PENDUDUK MEMPUNYAI CADANGAN YANG BERBEZA. APAKAH TINDAKAN KAMU?",
    "SEORANG PENDUDUK TIDAK BERSETUJU DENGAN KEPUTUSAN MESYUARAT. APAKAH TINDAKAN KAMU?",
    "KAMU PERLU MENUNGGU GILIRAN MENGGUNAKAN DEWAN. APAKAH TINDAKAN KAMU?"
  ]},
  {name:"PERBEZAAN PENDAPAT", icon:"💬", color:"#f6b8d8", situations:[
    "RAKAN KAMU TIDAK BERSETUJU DENGAN IDEA KUMPULAN. APAKAH TINDAKAN KAMU?",
    "KAMU DAN RAKAN MEMILIH PERMAINAN YANG BERBEZA. APAKAH TINDAKAN KAMU?",
    "SEORANG AHLI KUMPULAN MENCADANGKAN IDEA BAHARU. APAKAH TINDAKAN KAMU?",
    "RAKAN KAMU MELAKUKAN SESUATU DENGAN CARA YANG BERBEZA. APAKAH TINDAKAN KAMU?"
  ]}
];

const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");
const selectedCategory = document.getElementById("selectedCategory");
const situationCard = document.getElementById("situationCard");
const actionAnswer = document.getElementById("actionAnswer");
const feelingAnswer = document.getElementById("feelingAnswer");
const saveAnswerBtn = document.getElementById("saveAnswerBtn");
const clearAnswerBtn = document.getElementById("clearAnswerBtn");
const saveMessage = document.getElementById("saveMessage");
const nextBtn = document.getElementById("nextBtn");
const situationCount = document.getElementById("situationCount");
const roundLabel = document.getElementById("roundLabel");
const tipResult = document.getElementById("tipResult");

let state = {
  sound:true, rotation:0, categoryIndex:null, situationIndex:0,
  round:0, usedCategories:[], savedAnswers:{}, selectedEmotion:""
};

try {
  const old = JSON.parse(localStorage.getItem("roda-toleransi-state"));
  if (old) state = {...state,...old};
} catch (error) {}

function persist(){
  localStorage.setItem("roda-toleransi-state", JSON.stringify(state));
}

function beep(type="click"){
  if(!state.sound) return;
  try{
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const context = new AudioContext();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.connect(gain); gain.connect(context.destination);
    oscillator.frequency.value = type === "win" ? 820 : 560;
    gain.gain.setValueAtTime(.045, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, context.currentTime + .2);
    oscillator.start(); oscillator.stop(context.currentTime + .22);
    oscillator.onended = () => context.close();
  }catch(error){}
}

function pickSituation(categoryIndex){
  const category = categories[categoryIndex];
  const previous = state.savedAnswers[categoryIndex];
  if(previous && Number.isInteger(previous.situationIndex)){
    return previous.situationIndex % category.situations.length;
  }
  return Math.floor(Math.random() * category.situations.length);
}

function showSituation(categoryIndex, announce=true){
  const category = categories[categoryIndex];
  state.categoryIndex = categoryIndex;
  state.situationIndex = pickSituation(categoryIndex);
  const key = String(categoryIndex);
  const saved = state.savedAnswers[key] || {};
  actionAnswer.disabled = false;
  saveAnswerBtn.disabled = false;
  nextBtn.disabled = false;
  actionAnswer.value = saved.action || "";
  feelingAnswer.value = saved.feeling || "";
  saveMessage.textContent = saved.action ? "✅ JAWAPAN TERAKHIR TELAH DIPULIHKAN." : "";
  situationCount.textContent = "SITUASI " + (state.situationIndex + 1) + " / " + category.situations.length;
  roundLabel.textContent = "PUSINGAN " + state.round;
  selectedCategory.textContent = "🎉 KATEGORI TERPILIH: " + category.name;
  selectedCategory.style.background = category.color;
  situationCard.className = "situation-card";
  situationCard.innerHTML = "<div class='situation-icon'>" + category.icon + "</div><div class='category-tag'>" + category.name + "</div><h3>" + category.situations[state.situationIndex] + "</h3><p>FIKIRKAN TINDAKAN YANG MENUNJUKKAN HORMAT, BERBINCANG DAN BERTOLAK ANSUR.</p>";
  tipResult.textContent = "PILIH TINDAKAN YANG AMAN DAN BERTOLAK ANSUR.";
  if(announce){
    situationCard.scrollIntoView({behavior:"smooth",block:"center"});
    beep("win");
  }
  persist();
}

function spin(){
  if(spinBtn.disabled) return;
  spinBtn.disabled = true;
  selectedCategory.textContent = "🎡 RODA SEDANG BERPUTAR...";
  const available = categories.map((category,index) => index).filter(index => !state.usedCategories.includes(index));
  const pool = available.length ? available : categories.map((category,index) => index);
  if(!available.length) state.usedCategories = [];
  const chosen = pool[Math.floor(Math.random() * pool.length)];
  const segmentAngle = 360 / categories.length;
  const targetAngle = 360 - chosen * segmentAngle - segmentAngle / 2;
  state.rotation += 1440 + targetAngle - (state.rotation % 360);
  wheel.style.transform = "rotate(" + state.rotation + "deg)";
  beep();
  setTimeout(() => {
    state.usedCategories.push(chosen);
    state.round += 1;
    showSituation(chosen);
    spinBtn.disabled = false;
  }, 4600);
}

function saveAnswer(){
  if(state.categoryIndex === null) return;
  const action = actionAnswer.value.trim();
  const feeling = feelingAnswer.value.trim();
  if(!action){
    saveMessage.textContent = "⚠️ SILA TAIP TINDAKAN YANG SESUAI DAHULU.";
    actionAnswer.focus();
    return;
  }
  state.savedAnswers[String(state.categoryIndex)] = {
    action, feeling, situationIndex:state.situationIndex
  };
  saveMessage.textContent = "✅ JAWAPAN BERJAYA DISIMPAN!";
  tipResult.textContent = "HEBAT! TINDAKAN KAMU MENUNJUKKAN NILAI TOLERANSI.";
  persist(); beep("win");
}

function clearAnswer(){
  actionAnswer.value = "";
  feelingAnswer.value = "";
  saveMessage.textContent = "";
  if(state.categoryIndex !== null){
    delete state.savedAnswers[String(state.categoryIndex)];
    persist();
  }
}

function nextSituation(){
  if(state.categoryIndex === null) return;
  const category = categories[state.categoryIndex];
  state.situationIndex = (state.situationIndex + 1) % category.situations.length;
  actionAnswer.value = "";
  feelingAnswer.value = "";
  saveMessage.textContent = "";
  situationCount.textContent = "SITUASI " + (state.situationIndex + 1) + " / " + category.situations.length;
  situationCard.querySelector("h3").textContent = category.situations[state.situationIndex];
  state.savedAnswers[String(state.categoryIndex)] = {situationIndex:state.situationIndex};
  persist(); beep();
  situationCard.scrollIntoView({behavior:"smooth",block:"center"});
}

function resetGame(){
  if(!confirm("PADAM SEMUA JAWAPAN DAN MULAKAN SEMULA?")) return;
  state = {sound:state.sound,rotation:0,categoryIndex:null,situationIndex:0,round:0,usedCategories:[],savedAnswers:{},selectedEmotion:""};
  wheel.style.transform = "rotate(0deg)";
  selectedCategory.textContent = "PILIH SATU KATEGORI";
  selectedCategory.style.background = "";
  situationCount.textContent = "BELUM DIPILIH";
  roundLabel.textContent = "PUSINGAN 1";
  situationCard.className = "situation-card empty";
  situationCard.innerHTML = "<div class='empty-icon'>💭</div><h3>PUTAR RODA UNTUK MEMULAKAN</h3><p>GURU AKAN MEMBERIKAN SATU SITUASI SELEPAS KATEGORI DIPILIH.</p>";
  actionAnswer.value = ""; actionAnswer.disabled = true;
  feelingAnswer.value = ""; saveAnswerBtn.disabled = true; nextBtn.disabled = true;
  saveMessage.textContent = ""; tipResult.textContent = "PILIH TINDAKAN YANG AMAN DAN BERTOLAK ANSUR.";
  document.querySelectorAll(".emotion").forEach(button => button.classList.remove("active"));
  persist(); beep();
}

spinBtn.addEventListener("click", spin);
saveAnswerBtn.addEventListener("click", saveAnswer);
clearAnswerBtn.addEventListener("click", clearAnswer);
nextBtn.addEventListener("click", nextSituation);
document.getElementById("resetBtn").addEventListener("click", resetGame);

document.getElementById("soundBtn").addEventListener("click", () => {
  state.sound = !state.sound;
  document.getElementById("soundBtn").textContent = state.sound ? "🔊" : "🔇";
  persist();
});

document.getElementById("fullscreenBtn").addEventListener("click", async () => {
  try{
    if(!document.fullscreenElement) await document.documentElement.requestFullscreen();
    else await document.exitFullscreen();
  }catch(error){}
});

document.querySelectorAll(".emotion").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".emotion").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    state.selectedEmotion = button.dataset.emotion;
    const current = feelingAnswer.value.trim();
    if(!current) feelingAnswer.value = "SAYA BERASA " + state.selectedEmotion + " KERANA ";
    persist();
  });
});

if(state.sound === false) document.getElementById("soundBtn").textContent = "🔇";
if(state.categoryIndex !== null && categories[state.categoryIndex]){
  showSituation(state.categoryIndex, false);
} else {
  actionAnswer.disabled = true;
  saveAnswerBtn.disabled = true;
  nextBtn.disabled = true;
}
