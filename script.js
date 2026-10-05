"use strict";

const situations = [
  {
    title:"Dewan Komuniti", icon:"🏛️",
    situation:"Dua kumpulan penduduk mahu menggunakan dewan pada masa yang sama. Kedua-duanya tidak mahu berbincang atau bertolak ansur.",
    prediction:[
      {emoji:"😡",label:"Bergaduh",type:"effect",feedback:"Apabila penduduk tidak mahu bertolak ansur, pertelingkahan boleh berlaku."},
      {emoji:"😢",label:"Hubungan menjadi renggang",type:"effect",feedback:"Sikap tidak bertoleransi boleh menyebabkan jiran menjauhkan diri antara satu sama lain."},
      {emoji:"🏘️",label:"Masyarakat tidak aman",type:"effect",feedback:"Konflik yang berterusan boleh menjejaskan keamanan masyarakat."},
      {emoji:"🤝",label:"Berbincang dan mencari penyelesaian",type:"solution",feedback:"Ini tindakan yang baik untuk mengelakkan konflik, bukan kesan pengabaian toleransi."}
    ],
    helpers:["mereka tidak mahu berbincang","mereka tidak bertolak ansur","masing-masing mahu menang","mereka tidak menghormati orang lain"],
    feelings:["Risau","Sedih","Marah"],
    solutions:["Terus bergaduh","Tidak bercakap antara satu sama lain","Berbincang dan bertolak ansur","Menjerit supaya orang lain mengalah"],
    correctSolution:2,
    suggested:"Berbincang, berkongsi masa penggunaan dewan dan bertolak ansur."
  },
  {
    title:"Bunyi Bising", icon:"🔊",
    situation:"Seorang jiran memainkan muzik dengan kuat ketika jirannya sedang berehat. Mereka enggan berbincang tentang masalah itu.",
    prediction:[
      {emoji:"😠",label:"Jiran saling marah",type:"effect",feedback:"Tanpa perbincangan, rasa marah boleh menjadi semakin kuat."},
      {emoji:"💔",label:"Hubungan jiran rosak",type:"effect",feedback:"Sikap tidak menghormati keperluan jiran boleh merosakkan hubungan."},
      {emoji:"📢",label:"Bunyi menjadi lebih kuat",type:"effect",feedback:"Jika tiada tolak ansur, masalah mungkin berterusan atau menjadi lebih buruk."},
      {emoji:"🤝",label:"Tetapkan masa muzik bersama",type:"solution",feedback:"Ini penyelesaian toleransi yang sesuai untuk mengelakkan konflik."}
    ],
    helpers:["mereka tidak menghormati masa rehat","mereka enggan berbincang","mereka hanya fikir kehendak sendiri","bunyi kuat mengganggu orang lain"],
    feelings:["Risau","Sedih","Marah"],
    solutions:["Naikkan muzik lebih kuat","Berbincang tentang masa yang sesuai","Saling membalas dengan bunyi bising","Tidak tegur langsung"],
    correctSolution:1,
    suggested:"Berbincang dan menetapkan masa muzik yang sesuai."
  },
  {
    title:"Tempat Letak Kereta", icon:"🚗",
    situation:"Dua jiran berebut satu tempat letak kereta dan masing-masing tidak mahu mengalah.",
    prediction:[
      {emoji:"😡",label:"Pertengkaran berlaku",type:"effect",feedback:"Berebut tanpa tolak ansur boleh menyebabkan pertengkaran."},
      {emoji:"🚫",label:"Saling menghalang kereta",type:"effect",feedback:"Konflik boleh menjadi lebih serius apabila masing-masing mahu menang."},
      {emoji:"😢",label:"Hubungan menjadi renggang",type:"effect",feedback:"Sikap tidak bertoleransi boleh menyebabkan jiran tidak lagi mesra."},
      {emoji:"🅿️",label:"Cari tempat lain bersama",type:"solution",feedback:"Ini tindakan toleransi yang boleh membantu menyelesaikan masalah."}
    ],
    helpers:["masing-masing mahu menang","mereka tidak mahu mengalah","mereka tidak berbincang dengan baik","mereka tidak menghormati giliran"],
    feelings:["Risau","Sedih","Marah"],
    solutions:["Letak kereta melintang","Berbincang dan bergilir","Menyembunyikan kon jiran","Menjerit dari rumah"],
    correctSolution:1,
    suggested:"Berbincang, bergilir atau mencari ruang lain dengan baik."
  },
  {
    title:"Perayaan Jiran", icon:"🎉",
    situation:"Seorang penduduk tidak menghormati sambutan perayaan jirannya dan mengejek amalan mereka.",
    prediction:[
      {emoji:"😢",label:"Jiran berasa tersinggung",type:"effect",feedback:"Ejekan boleh menyakiti perasaan orang lain."},
      {emoji:"💔",label:"Hubungan antara jiran renggang",type:"effect",feedback:"Kurang hormat boleh menjejaskan hubungan dalam masyarakat."},
      {emoji:"⚡",label:"Konflik berlaku",type:"effect",feedback:"Sikap tidak toleran boleh mencetuskan pertelingkahan."},
      {emoji:"🙏",label:"Hormati sambutan jiran",type:"solution",feedback:"Menghormati amalan orang lain ialah tindakan toleransi."}
    ],
    helpers:["dia mengejek orang lain","dia tidak menghormati perbezaan","perasaan jiran boleh terluka","setiap orang perlu dihormati"],
    feelings:["Risau","Sedih","Marah"],
    solutions:["Terus mengejek","Menghormati sambutan jiran","Menghalang sambutan","Menyebarkan ejekan"],
    correctSolution:1,
    suggested:"Menghormati sambutan dan perbezaan amalan jiran."
  },
  {
    title:"Kemudahan Taman", icon:"🏸",
    situation:"Kanak-kanak berebut menggunakan gelanggang permainan dan tidak mahu menunggu giliran.",
    prediction:[
      {emoji:"😡",label:"Bergaduh",type:"effect",feedback:"Berebut tanpa bertolak ansur boleh menyebabkan pergaduhan."},
      {emoji:"😭",label:"Ada yang kecewa",type:"effect",feedback:"Apabila giliran tidak dihormati, orang lain boleh berasa kecewa."},
      {emoji:"🚷",label:"Permainan terganggu",type:"effect",feedback:"Konflik boleh menyebabkan semua orang tidak dapat bermain dengan baik."},
      {emoji:"⏰",label:"Buat jadual giliran",type:"solution",feedback:"Bergilir ialah cara bertoleransi dan adil."}
    ],
    helpers:["mereka tidak mahu menunggu giliran","mereka berebut","mereka tidak berkongsi kemudahan","mereka tidak menghormati hak orang lain"],
    feelings:["Risau","Sedih","Marah"],
    solutions:["Berebut lebih kuat","Buat giliran penggunaan","Sorok peralatan","Halau kumpulan lain"],
    correctSolution:1,
    suggested:"Buat giliran dan berkongsi kemudahan taman."
  },
  {
    title:"Gotong-royong", icon:"🧹",
    situation:"Penduduk sedang merancang gotong-royong tetapi ada yang tidak mahu menerima pendapat orang lain.",
    prediction:[
      {emoji:"🗯️",label:"Mesyuarat menjadi tegang",type:"effect",feedback:"Tidak mahu mendengar pendapat boleh menyebabkan suasana tegang."},
      {emoji:"🙅",label:"Penduduk enggan bekerjasama",type:"effect",feedback:"Orang mungkin hilang semangat untuk membantu jika pendapat mereka tidak dihormati."},
      {emoji:"🧹",label:"Aktiviti tidak berjalan lancar",type:"effect",feedback:"Kurang toleransi boleh menjejaskan kerjasama dan perancangan."},
      {emoji:"👂",label:"Dengar dan bincang pendapat",type:"solution",feedback:"Mendengar pandangan orang lain ialah amalan toleransi."}
    ],
    helpers:["pendapat orang lain tidak dihormati","mereka tidak mahu mendengar","mereka sukar bekerjasama","semua orang mahu cadangan sendiri diterima"],
    feelings:["Risau","Sedih","Marah"],
    solutions:["Paksa semua ikut satu pendapat","Dengar dan bincang semua cadangan","Batalkan gotong-royong","Marah orang yang tidak setuju"],
    correctSolution:1,
    suggested:"Mendengar semua pendapat dan mencari persetujuan bersama."
  }
];

const emotions = [
  {emoji:"😄",label:"Gembira"},{emoji:"😌",label:"Tenang"},{emoji:"😟",label:"Risau"},
  {emoji:"😢",label:"Sedih"},{emoji:"😡",label:"Marah"}
];

const app = document.getElementById("app");
const modal = document.getElementById("teacherModal");
let state = {
  screen:"home", index:0, stars:0, sound:true, hints:true,
  selectedPrediction:null, reason:"", emotion:null, feelingReason:"",
  solution:null, awarded:{choice:false,reason:false,solution:false}
};

function save(){sessionStorage.setItem("ramalkan-akibatnya",JSON.stringify(state))}
function load(){
  try{
    const saved=JSON.parse(sessionStorage.getItem("ramalkan-akibatnya"));
    if(saved && typeof saved.index==="number") state={...state,...saved};
  }catch(e){}
}
function esc(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function beep(kind="click"){
  if(!state.sound)return;
  try{
    const AudioCtx=window.AudioContext||window.webkitAudioContext,ctx=new AudioCtx(),o=ctx.createOscillator(),g=ctx.createGain();
    o.connect(g);g.connect(ctx.destination);
    o.frequency.value=kind==="success"?820:kind==="star"?1040:560;
    g.gain.setValueAtTime(.05,ctx.currentTime);g.gain.exponentialRampToValueAtTime(.001,ctx.currentTime+.18);
    o.start();o.stop(ctx.currentTime+.2);o.onended=()=>ctx.close();
  }catch(e){}
}
function addStar(type){
  if(!state.awarded[type]){state.stars=Math.min(18,state.stars+1);state.awarded[type]=true;beep("star");save()}
}
function resetPerSituation(){
  state.selectedPrediction=null;state.reason="";state.emotion=null;state.feelingReason="";state.solution=null;
  state.awarded={choice:false,reason:false,solution:false};save()
}
function progress(){
  return `<div class="progress-wrap"><div><div class="small">Misi ${state.index+1} / 6</div><div class="progress"><span style="width:${((state.index+1)/6)*100}%"></span></div></div><div class="score">⭐ ${state.stars} / 18</div></div>`
}
function show(html,name){state.screen=name;save();app.innerHTML=`<section class="screen">${html}</section>`;window.scrollTo({top:0,behavior:"smooth"})}
function renderHome(){
  show(`<div class="hero">
    <div>
      <div class="pill">Pendidikan Moral Tahun 5</div>
      <h1>🔮 RAMALKAN<br>AKIBATNYA!</h1>
      <p class="subtitle">Apa akan berlaku jika kita tidak bertoleransi?</p>
      <div class="meta"><span class="pill">🏘️ Masyarakat</span><span class="pill">🤝 Toleransi</span><span class="pill">💭 Ramal akibat</span></div>
      <p>Misi kamu: ramalkan kesan, jelaskan <b>mengapa</b>, nyatakan perasaan dan pilih tindakan yang bertoleransi.</p>
      <div class="action-row"><button class="primary" onclick="startVideo()">▶️ MULA MISI</button></div>
      <p class="small">Standard Pembelajaran: 14.3 · 14.4 · 14.5</p>
    </div>
    <div class="hero-art">
      <div class="neighborhood">🏠 🏡<br>🏛️ 🌳<br>👨‍👩‍👧‍👦 🤝</div>
      <div class="float q1">❓</div><div class="float q2">💭</div><div class="float q3">🔮</div>
    </div>
  </div>`,"home")
}
let videoTimer=null, videoPaused=false;
function startVideo(){
  beep();show(`<div class="panel">
    <h2>🎬 Video Pembukaan</h2>
    <div id="videoStage" class="video-stage">
      <div class="video-title">🏘️ TAMAN HARMONI</div>
      <div class="houses">🏠 🏡 🏠</div><div class="hall">🏛️</div>
      <div class="character char-a">👨‍👩‍👧</div><div class="character char-b">🏸👨‍👩‍👦</div>
      <div class="speech a">“Kami mahu mengadakan majlis keluarga!”</div>
      <div class="speech b">“Kami sudah merancang aktiviti sukan!”</div>
      <div class="speech c">“Kami mahu gunakan dewan dahulu!”</div>
      <div class="speech d">“Kami pun tidak mahu mengalah!”</div>
    </div>
    <p class="center"><b>Hari ini, dua kumpulan penduduk mahu menggunakan Dewan Taman Harmoni pada waktu yang sama.</b></p>
    <div class="video-controls">
      <button onclick="playVideo()">▶️ Play</button><button onclick="pauseVideo()">⏸️ Pause</button>
      <button onclick="replayVideo()">🔄 Replay</button><button class="secondary" onclick="beginMission()">⏭️ Skip Video</button>
    </div>
    <div class="action-row center"><button class="primary" onclick="beginMission()">🔮 RAMALKAN SEKARANG ➜</button></div>
  </div>`,"video");
  playVideo()
}
function playVideo(){videoPaused=false;document.getElementById("videoStage")?.classList.remove("paused");clearTimeout(videoTimer);videoTimer=setTimeout(()=>{},18000)}
function pauseVideo(){videoPaused=true;document.getElementById("videoStage")?.classList.add("paused");clearTimeout(videoTimer)}
function replayVideo(){const st=document.getElementById("videoStage");if(st){const clone=st.cloneNode(true);st.replaceWith(clone)}playVideo()}
function beginMission(){clearTimeout(videoTimer);state.index=0;state.stars=0;resetPerSituation();renderPrediction()}
function renderPrediction(){
  const s=situations[state.index];
  show(`${progress()}<div class="case-layout">
    <div class="panel case-card">
      <div class="scene-art"><div class="scene-icon">${s.icon}</div></div>
      <div class="pill">🏘️ SITUASI</div>
      <h2>${s.title}</h2><p class="case-text">${s.situation}</p>
    </div>
    <div class="panel">
      <div class="question">🤔 Apa yang mungkin berlaku selepas ini?</div>
      <div class="option-grid">
      ${s.prediction.map((o,i)=>`<button class="option-card ${state.selectedPrediction===i?"selected":""}" onclick="choosePrediction(${i})"><span class="emoji">${o.emoji}</span><span class="label">${o.label}</span></button>`).join("")}
      </div>
      <div id="predictionFeedback"></div>
    </div>
  </div>`,"prediction");
  if(state.selectedPrediction!==null)showPredictionFeedback()
}
function choosePrediction(i){state.selectedPrediction=i;addStar("choice");save();beep("success");renderPrediction()}
function showPredictionFeedback(){
  const s=situations[state.index],o=s.prediction[state.selectedPrediction];
  const box=document.getElementById("predictionFeedback");if(!box)return;
  box.innerHTML=`<div class="feedback ${o.type==="solution"?"think":""}"><b>${o.type==="effect"?"Ya, ini boleh berlaku!":"Ini tindakan yang baik!"}</b><p>${o.feedback}</p><p>💭 <b>Mengapa kamu fikir perkara ini boleh berlaku?</b></p><button class="primary" onclick="renderJustification()">JELASKAN PILIHAN ➜</button></div>`
}
function renderJustification(){
  const s=situations[state.index],o=s.prediction[state.selectedPrediction];
  show(`${progress()}<div class="panel">
    <div class="pill">💬 JELASKAN PILIHAN KAMU</div>
    <h2>MENGAPA?</h2>
    <div class="sentence">Saya memilih <b>${o.label.toUpperCase()}</b> kerana ______.</div>
    <label for="reason"><b>Alasan kamu</b></label>
    <textarea id="reason" placeholder="Taip sebab kamu di sini…">${esc(state.reason)}</textarea>
    ${state.hints?`<div class="action-row"><button class="secondary" onclick="toggleHelpers()">💡 BANTU SAYA</button></div><div id="helpers" class="helper-wrap hidden">${s.helpers.map(h=>`<button class="helper" onclick="useHelper('${esc(h).replace(/'/g,"&#39;")}')">${h}</button>`).join("")}</div>`:""}
    <div class="action-row"><button class="primary" onclick="saveReason()">SIMPAN ALASAN ➜</button></div>
  </div>`,"justification")
}
function toggleHelpers(){document.getElementById("helpers")?.classList.toggle("hidden")}
function useHelper(text){const ta=document.getElementById("reason");if(ta){ta.value=text;ta.focus()}}
function saveReason(){
  const v=document.getElementById("reason").value.trim();
  if(!v){alert("Sila tulis atau pilih satu alasan dahulu.");return}
  state.reason=v;addStar("reason");save();renderFeeling()
}
function renderFeeling(){
  show(`${progress()}<div class="panel">
    <div class="pill">💗 BAGAIMANA PERASAAN KAMU?</div>
    <h2>Jika perkara ini berlaku di kawasan tempat tinggal kamu, apakah perasaan kamu?</h2>
    <div class="emotions">${emotions.map((e,i)=>`<button class="emotion ${state.emotion===i?"selected":""}" onclick="chooseEmotion(${i})"><div class="emoji">${e.emoji}</div><b>${e.label}</b></button>`).join("")}</div>
    <div class="sentence" style="margin-top:18px">Saya berasa <b>${state.emotion!==null?emotions[state.emotion].label.toUpperCase():"______"}</b> kerana ______.</div>
    <label for="feelingReason"><b>Alasan perasaan</b></label>
    <input id="feelingReason" type="text" value="${esc(state.feelingReason)}" placeholder="Contoh: pergaduhan boleh menjejaskan hubungan jiran">
    <div class="action-row"><button class="primary" onclick="saveFeeling()">SETERUSNYA ➜</button></div>
  </div>`,"feeling")
}
function chooseEmotion(i){state.emotion=i;save();renderFeeling()}
function saveFeeling(){
  if(state.emotion===null){alert("Pilih satu perasaan dahulu.");return}
  state.feelingReason=document.getElementById("feelingReason").value.trim();save();renderSolution()
}
function renderSolution(){
  const s=situations[state.index];
  show(`${progress()}<div class="panel">
    <div class="pill">🤝 APA YANG PATUT MEREKA LAKUKAN?</div>
    <h2>Pilih tindakan yang menunjukkan toleransi.</h2>
    <div class="solution-list">${s.solutions.map((x,i)=>`<button class="solution ${state.solution===i&&i===s.correctSolution?"correct":""}" onclick="chooseSolution(${i})"><b>${String.fromCharCode(65+i)}.</b> ${["😡","🚫","🤝","📢"][i]||"•"} ${x}</button>`).join("")}</div>
    <div id="solutionFeedback"></div>
  </div>`,"solution");
  if(state.solution!==null)showSolutionFeedback()
}
function chooseSolution(i){state.solution=i;save();renderSolution()}
function showSolutionFeedback(){
  const s=situations[state.index],ok=state.solution===s.correctSolution,box=document.getElementById("solutionFeedback");
  if(!box)return;
  if(ok){addStar("solution");box.innerHTML=`<div class="feedback center"><div class="big-success">✨🤝🏘️</div><h2>HEBAT!</h2><p><b>Toleransi membantu masyarakat hidup aman dan harmoni.</b></p><button class="primary" onclick="nextSituation()">SETERUSNYA ➜</button></div>`;beep("success")}
  else box.innerHTML=`<div class="feedback think"><b>Fikir lagi.</b><p>Tindakan bertoleransi perlu membantu orang berbincang, menghormati orang lain atau bertolak ansur.</p></div>`
}
function nextSituation(){
  if(state.index<5){state.index++;resetPerSituation();renderPrediction()}else renderEnd()
}
function renderEnd(){
  const stars="⭐".repeat(state.stars);
  show(`<div class="panel center">
    <div class="big-success">🎉</div><h1>TAHNIAH!</h1>
    <p class="subtitle">Kamu telah menyelesaikan Misi Ramalkan Akibatnya!</p>
    <div class="stars">${stars||"⭐"}</div><h2>${state.stars} / 18 bintang</h2>
    <div class="feedback"><h3>🤝 INGAT!</h3>
    <p>Jika toleransi diabaikan, masyarakat boleh mengalami konflik, pergaduhan dan hubungan yang renggang.</p>
    <p><b>Jika kita saling menghormati, berbincang dan bertolak ansur, masyarakat akan hidup aman dan harmoni.</b></p></div>
    <div class="action-row" style="justify-content:center"><button class="primary" onclick="restart()">🔄 MAIN SEMULA</button><button class="secondary" onclick="goHome()">🏠 KEMBALI KE MENU</button></div>
  </div>`,"end");beep("success")
}
function restart(){state.index=0;state.stars=0;resetPerSituation();renderPrediction()}
function goHome(){state={...state,screen:"home",index:0,stars:0,selectedPrediction:null,reason:"",emotion:null,feelingReason:"",solution:null,awarded:{choice:false,reason:false,solution:false}};save();renderHome()}
function openTeacher(){
  modal.classList.add("open");modal.setAttribute("aria-hidden","false");
  document.getElementById("teacherSituation").innerHTML=situations.map((s,i)=>`<option value="${i}" ${i===state.index?"selected":""}>${i+1}. ${s.title}</option>`).join("");
  syncTeacher()
}
function closeTeacher(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true")}
function syncTeacher(){document.getElementById("hintState").textContent=state.hints?"Aktif":"Tidak aktif";document.getElementById("soundState").textContent=state.sound?"Aktif":"Tidak aktif"}
function teacherJump(){state.index=Number(document.getElementById("teacherSituation").value);resetPerSituation();closeTeacher();renderPrediction()}
function teacherRepeat(){resetPerSituation();closeTeacher();renderPrediction()}
function teacherShow(){
  const s=situations[Number(document.getElementById("teacherSituation").value)];
  document.getElementById("teacherAnswer").innerHTML=`<b>Jawapan cadangan:</b><p>${s.suggested}</p><p><b>Kesan pengabaian:</b> ${s.prediction.filter(x=>x.type==="effect").map(x=>x.label).join(", ")}.</p>`
}
document.getElementById("homeBtn").onclick=goHome;
document.getElementById("soundBtn").onclick=()=>{state.sound=!state.sound;document.getElementById("soundBtn").textContent=state.sound?"🔊":"🔇";save();syncTeacher()};
document.getElementById("teacherBtn").onclick=openTeacher;
document.getElementById("closeTeacher").onclick=closeTeacher;
document.getElementById("jumpSituation").onclick=teacherJump;
document.getElementById("repeatSituation").onclick=teacherRepeat;
document.getElementById("showSuggestion").onclick=teacherShow;
document.getElementById("toggleHints").onclick=()=>{state.hints=!state.hints;save();syncTeacher()};
document.getElementById("toggleSoundTeacher").onclick=()=>{state.sound=!state.sound;document.getElementById("soundBtn").textContent=state.sound?"🔊":"🔇";save();syncTeacher()};
document.getElementById("resetGame").onclick=()=>{if(confirm("Reset semua kemajuan permainan?")){sessionStorage.removeItem("ramalkan-akibatnya");state={screen:"home",index:0,stars:0,sound:state.sound,hints:state.hints,selectedPrediction:null,reason:"",emotion:null,feelingReason:"",solution:null,awarded:{choice:false,reason:false,solution:false}};closeTeacher();renderHome()}};
modal.addEventListener("click",e=>{if(e.target===modal)closeTeacher()});
load();document.getElementById("soundBtn").textContent=state.sound?"🔊":"🔇";renderHome();
