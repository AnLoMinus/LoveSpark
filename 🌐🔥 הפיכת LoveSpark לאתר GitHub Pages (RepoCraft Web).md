## 🌐🔥 הפיכת LoveSpark לאתר GitHub Pages (RepoCraft Web)

### שם המאגר לפיתוח: **LoveSpark (LS)** – _Love + Spark_

📅 **תאריך:** י״ח בטבת תשפ״ו | **08.01.2026**  
🕐 **שעה:** 07:49 (שעון ישראל)

---

## ✅ מה תקבל בסוף

- אתר חי ב-GitHub Pages שמציג:
    
    - 🏠 דף בית יפה
        
    - 🎴 רשימת חבילות קלפים (Base Deck 24)
        
    - 🔎 חיפוש קלפים
        
    - 🧭 ניווט קל ומהיר
        
- הכל סטטי (HTML/CSS/JS) → עובד מהר, בלי שרת.
    

---

## 🧩 מבנה תיקיות מומלץ ל-Pages

בחר באחת משתי אפשרויות (שתיהן מצוינות):

### 🅰️ אפשרות מומלצת: `docs/` (נוח לפרויקט)

```text
LoveSpark/
├── docs/
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   └── data/
│       └── base-deck-24.json
└── cards/ (קבצי markdown שלך נשארים פה)
```

### 🅱️ אפשרות חלופית: Root (פשוט)

```text
LoveSpark/
├── index.html
├── styles.css
├── app.js
└── data/
    └── base-deck-24.json
```

---

## ⚙️ שלבים להפעלה ב-GitHub Pages (בלי שאלות)

1. היכנס ל-**Repository → Settings**
    
2. בצד שמאל: **Pages**
    
3. תחת **Build and deployment**:
    
    - **Source** = `Deploy from a branch`
        
    - **Branch** = `main`
        
    - **Folder**:
        
        - אם בחרת אפשרות A: `/(root)` ואז תשתמש ב-workflow (למטה) **או** בחר `/docs` אם מופיע
            
        - אם מופיע `/(root)` + `/docs` → בחר `/docs`
            
4. לחץ **Save**
    
5. GitHub ייתן לך כתובת אתר בסגנון:  
    `https://<username>.github.io/LoveSpark/`
    

---

## 🧱 קבצים מוכנים להדבקה (מינימום אתר עובד)

### 1) `docs/index.html`

```html
<!doctype html>
<html lang="he" dir="rtl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>LoveSpark (LS) – משחק קלפים זוגי</title>
  <link rel="stylesheet" href="./styles.css" />
</head>
<body>
  <header class="topbar">
    <div class="brand">
      <div class="logo">LS</div>
      <div>
        <h1>LoveSpark</h1>
        <p class="sub">משחק קלפים זוגי לחיבור, שיח וצמיחה ❤️</p>
      </div>
    </div>

    <nav class="nav">
      <a href="#decks">🎴 חבילות</a>
      <a href="#cards">🃏 קלפים</a>
      <a href="#how">🧭 איך משחקים</a>
      <a href="#about">ℹ️ על הפרויקט</a>
    </nav>
  </header>

  <main class="container">
    <section class="hero">
      <div class="hero-card">
        <h2>הדליקו ניצוץ קטן – וקבלו חיבור גדול ✨</h2>
        <p>
          בחרו קלף, שתפו בכנות, הקשיבו בלי שיפוט, וצרו רגעים שאוספים אהבה.
        </p>

        <div class="cta">
          <a class="btn" href="#cards">🚀 התחל עכשיו</a>
          <a class="btn ghost" href="https://github.com/" target="_blank" rel="noreferrer">💾 קוד מקור</a>
        </div>

        <div class="stats">
          <div class="chip">💬 שיח</div>
          <div class="chip">🤝 משימות</div>
          <div class="chip">❤️ עומק</div>
          <div class="chip">✨ חיבור</div>
        </div>
      </div>
    </section>

    <section id="decks" class="panel">
      <h3>🎴 חבילות קלפים</h3>
      <div class="grid" id="deckGrid">
        <article class="card">
          <h4>Base Deck – 24</h4>
          <p>סט פתיחה: שיח + משימות + עומק + חיבור מיוחד.</p>
          <button class="btn small" id="loadBase">טען קלפים 🃏</button>
        </article>

        <article class="card muted">
          <h4>Expansion – Intimacy</h4>
          <p>הרחבה עתידית: אינטימיות וקרבה.</p>
          <span class="tag">בקרוב</span>
        </article>

        <article class="card muted">
          <h4>Expansion – Conflict</h4>
          <p>הרחבה עתידית: תקשורת בזמן קונפליקט.</p>
          <span class="tag">בקרוב</span>
        </article>

        <article class="card muted">
          <h4>Expansion – Future</h4>
          <p>הרחבה עתידית: חלומות, יעדים, בנייה.</p>
          <span class="tag">בקרוב</span>
        </article>
      </div>
    </section>

    <section id="cards" class="panel">
      <div class="row">
        <h3>🃏 הקלפים</h3>
        <div class="controls">
          <input id="search" class="input" placeholder="חיפוש לפי כותרת / סוג / תגיות… 🔎" />
          <select id="filterType" class="input">
            <option value="all">הכל</option>
            <option value="conversation">💬 שיח</option>
            <option value="action">🤝 משימה</option>
            <option value="deep">❤️ עומק</option>
            <option value="special">✨ חיבור מיוחד</option>
          </select>
          <button class="btn small ghost" id="randomPick">🎲 שלוף אקראי</button>
        </div>
      </div>

      <div id="cardsGrid" class="grid cards"></div>
      <p class="hint" id="hint">לחץ “טען קלפים” למעלה כדי להתחיל.</p>
    </section>

    <section id="how" class="panel">
      <h3>🧭 איך משחקים</h3>
      <ol class="steps">
        <li>🔀 ערבבו (או שלפו אקראי).</li>
        <li>🗣️ מי שתורו עונה/מבצע.</li>
        <li>👂 השני מקשיב בלי לתקן ובלי לשפוט.</li>
        <li>❤️ מסיימים ב“תודה ששיתפת”.</li>
      </ol>
      <div class="note">
        ✅ אין ניקוד חובה — זוגיות מנצחת, לא אגו.
      </div>
    </section>

    <section id="about" class="panel">
      <h3>ℹ️ על LoveSpark</h3>
      <p>
        LoveSpark הוא מאגר פתוח שמפתח משחקי קלפים זוגיים להעמקת קשר, שיח משמעותי וחוויה משותפת.
      </p>
      <p class="small">
        נבנה כדי לאפשר הרחבות אינסופיות: 24 → 48 → 72 → 144.
      </p>
    </section>

    <footer class="footer">
      <span>© LoveSpark (LS)</span>
      <span class="dot">•</span>
      <span>Made to spark hearts ✨</span>
    </footer>
  </main>

  <script src="./app.js"></script>
</body>
</html>
```

---

### 2) `docs/styles.css`

```css
:root{
  --bg:#0b0f19;
  --panel:#111a2e;
  --panel2:#0f1628;
  --txt:#e9eefc;
  --muted:#a9b4d6;
  --line:rgba(255,255,255,.08);
  --accent:#7dd3fc;
  --accent2:#f0abfc;
  --good:#86efac;
  --warn:#fbbf24;
}

*{box-sizing:border-box}
body{
  margin:0;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  background: radial-gradient(1200px 600px at 70% 10%, rgba(125,211,252,.16), transparent 60%),
              radial-gradient(900px 500px at 10% 30%, rgba(240,171,252,.12), transparent 60%),
              var(--bg);
  color:var(--txt);
}

a{color:inherit;text-decoration:none}
.container{max-width:1100px;margin:0 auto;padding:18px}

.topbar{
  position:sticky; top:0; z-index:10;
  backdrop-filter: blur(10px);
  background: rgba(11,15,25,.72);
  border-bottom:1px solid var(--line);
  padding:12px 18px;
  display:flex; gap:16px; align-items:center; justify-content:space-between;
}

.brand{display:flex; gap:12px; align-items:center}
.logo{
  width:42px;height:42px;border-radius:14px;
  display:grid;place-items:center;
  background: linear-gradient(135deg, rgba(125,211,252,.22), rgba(240,171,252,.22));
  border:1px solid var(--line);
  font-weight:800;
}

h1{margin:0;font-size:18px}
.sub{margin:2px 0 0;color:var(--muted);font-size:12px}

.nav{display:flex; gap:10px; flex-wrap:wrap}
.nav a{
  padding:8px 10px;
  border:1px solid var(--line);
  border-radius:999px;
  background: rgba(255,255,255,.03);
  font-size:13px;
}

.hero{padding:18px 0}
.hero-card{
  border:1px solid var(--line);
  background: linear-gradient(180deg, rgba(17,26,46,.95), rgba(15,22,40,.92));
  border-radius:22px;
  padding:18px;
  box-shadow: 0 20px 50px rgba(0,0,0,.35);
}
.hero-card h2{margin:0 0 8px;font-size:22px}
.hero-card p{margin:0 0 12px;color:var(--muted);line-height:1.6}

.cta{display:flex; gap:10px; flex-wrap:wrap;margin:12px 0}
.btn{
  border:1px solid var(--line);
  border-radius:14px;
  padding:10px 14px;
  background: linear-gradient(135deg, rgba(125,211,252,.18), rgba(240,171,252,.14));
  color:var(--txt);
  cursor:pointer;
  font-weight:700;
}
.btn.ghost{background: rgba(255,255,255,.03)}
.btn.small{padding:8px 12px;border-radius:12px;font-size:13px}

.stats{display:flex; gap:8px; flex-wrap:wrap}
.chip{
  padding:6px 10px;border-radius:999px;
  border:1px solid var(--line);
  background: rgba(255,255,255,.03);
  font-size:12px; color:var(--muted);
}

.panel{
  margin:16px 0;
  padding:16px;
  border-radius:22px;
  border:1px solid var(--line);
  background: rgba(17,26,46,.62);
}

h3{margin:0 0 12px;font-size:18px}

.grid{
  display:grid;
  grid-template-columns: repeat(12, 1fr);
  gap:12px;
}
.card{
  grid-column: span 6;
  border:1px solid var(--line);
  border-radius:18px;
  padding:14px;
  background: rgba(255,255,255,.03);
}
.card h4{margin:0 0 6px}
.card p{margin:0 0 10px;color:var(--muted);line-height:1.5}
.card.muted{opacity:.7}
.tag{
  display:inline-block;
  padding:6px 10px;
  border-radius:999px;
  background: rgba(251,191,36,.12);
  border:1px solid rgba(251,191,36,.18);
  color: var(--warn);
  font-size:12px;
}

.row{display:flex; gap:12px; align-items:center; justify-content:space-between; flex-wrap:wrap}
.controls{display:flex; gap:10px; align-items:center; flex-wrap:wrap}
.input{
  border:1px solid var(--line);
  background: rgba(255,255,255,.03);
  color:var(--txt);
  padding:10px 12px;
  border-radius:14px;
  outline:none;
  min-width:220px;
}
.cards .card{grid-column: span 4}
.small{font-size:13px;color:var(--muted)}
.hint{color:var(--muted);margin:10px 0 0}

.steps{margin:0;padding-inline-start:18px;color:var(--muted);line-height:1.9}
.note{
  margin-top:10px;
  padding:12px;
  border-radius:16px;
  border:1px solid var(--line);
  background: rgba(134,239,172,.08);
  color: var(--good);
}

.footer{
  display:flex; gap:10px; align-items:center; justify-content:center;
  padding:18px 0;
  color:var(--muted);
}
.dot{opacity:.6}

@media (max-width: 860px){
  .card{grid-column: span 12}
  .cards .card{grid-column: span 12}
  .input{min-width: 180px}
}
```

---

### 3) `docs/app.js`

```js
let allCards = [];

const cardsGrid = document.getElementById("cardsGrid");
const hint = document.getElementById("hint");
const search = document.getElementById("search");
const filterType = document.getElementById("filterType");

document.getElementById("loadBase").addEventListener("click", async () => {
  await loadDeck("./data/base-deck-24.json");
});

document.getElementById("randomPick").addEventListener("click", () => {
  if (!allCards.length) return;
  const filtered = getFilteredCards();
  const pick = filtered[Math.floor(Math.random() * filtered.length)];
  if (!pick) return;
  alert(`🎲 קלף אקראי:\n\n${pick.title}\n\n${pick.prompt}`);
});

search.addEventListener("input", render);
filterType.addEventListener("change", render);

async function loadDeck(path) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error("Fetch failed");
    const data = await res.json();
    allCards = data.cards || [];
    hint.textContent = allCards.length ? "" : "לא נמצאו קלפים.";
    render();
  } catch (e) {
    hint.textContent = "שגיאה בטעינת הקלפים. בדוק נתיב וקבצים.";
  }
}

function getFilteredCards() {
  const q = (search.value || "").trim().toLowerCase();
  const t = filterType.value;

  return allCards.filter(c => {
    const hay = [
      c.id, c.type, c.title, c.prompt,
      ...(c.tags || [])
    ].join(" ").toLowerCase();

    const matchQ = !q || hay.includes(q);
    const matchT = (t === "all") || (c.type === t);
    return matchQ && matchT;
  });
}

function render() {
  const list = getFilteredCards();
  cardsGrid.innerHTML = "";

  if (!allCards.length) {
    hint.textContent = "לחץ “טען קלפים” למעלה כדי להתחיל.";
    return;
  }

  hint.textContent = list.length ? "" : "אין תוצאות לפי הסינון.";

  for (const c of list) {
    const el = document.createElement("article");
    el.className = "card";

    const badge = typeBadge(c.type);
    el.innerHTML = `
      <h4>${badge} ${escapeHtml(c.title)}</h4>
      <p>${escapeHtml(c.prompt)}</p>
      <div class="small">תגיות: ${(c.tags || []).map(x => `#${escapeHtml(x)}`).join(" ")}</div>
    `;

    cardsGrid.appendChild(el);
  }
}

function typeBadge(type){
  switch(type){
    case "conversation": return "💬";
    case "action": return "🤝";
    case "deep": return "❤️";
    case "special": return "✨";
    default: return "🃏";
  }
}

function escapeHtml(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}
```

---

### 4) `docs/data/base-deck-24.json`

```json
{
  "deck_id": "base-deck-24",
  "deck_name": "LoveSpark – Base Deck (24)",
  "cards": [
    { "id":"01", "type":"conversation", "title":"הקשבה אמיתית 👂", "prompt":"ספר/י על רגע שבו הרגשת שמקשיבים לך באמת בזוגיות.", "tags":["communication","presence","empathy"] },
    { "id":"02", "type":"conversation", "title":"תודה יומית 🙏", "prompt":"מה דבר אחד קטן שעשה לך טוב ממני לאחרונה?", "tags":["gratitude","love","daily"] },
    { "id":"03", "type":"conversation", "title":"געגוע 💭", "prompt":"למה אתה הכי מתגעגע מההתחלה שלנו?", "tags":["memory","connection","beginning"] },
    { "id":"04", "type":"conversation", "title":"שקט 🌿", "prompt":"מה עוזר לך להירגע כשקשה לך?", "tags":["calm","support","safety"] },
    { "id":"05", "type":"conversation", "title":"גבול בריא 🛡️", "prompt":"איזה גבול חשוב לך שיישמר בינינו?", "tags":["boundaries","respect","trust"] },
    { "id":"06", "type":"conversation", "title":"שמחה 😄", "prompt":"מה מצחיק אותך אצלי גם אחרי הרבה זמן?", "tags":["joy","humor","bond"] },
    { "id":"07", "type":"conversation", "title":"פחד נסתר 🌫️", "prompt":"יש משהו שמפחיד אותך בזוגיות ולא תמיד נאמר?", "tags":["vulnerability","honesty","care"] },
    { "id":"08", "type":"conversation", "title":"גאווה ❤️‍🔥", "prompt":"על מה אתה גאה בי באמת?", "tags":["appreciation","strengths","love"] },

    { "id":"09", "type":"action", "title":"מבט בעיניים 👁️👁️", "prompt":"שבו דקה שלמה והביטו זה בזו – בלי מילים.", "tags":["presence","intimacy","focus"] },
    { "id":"10", "type":"action", "title":"מחמאה כפולה 🌟", "prompt":"כל אחד נותן לשני 2 מחמאות מדויקות.", "tags":["praise","warmth","connection"] },
    { "id":"11", "type":"action", "title":"מגע מרפא 🤲", "prompt":"בחרו מגע נעים (יד/כתף/חיבוק) למשך דקה.", "tags":["touch","safety","closeness"] },
    { "id":"12", "type":"action", "title":"זיכרון מתוק 🍯", "prompt":"שתפו זיכרון טוב שחוויתם יחד.", "tags":["memory","bond","sweet"] },
    { "id":"13", "type":"action", "title":"תכנון קטן 🗓️", "prompt":"תכננו פעילות זוגית פשוטה לשבוע הקרוב.", "tags":["planning","date","future"] },
    { "id":"14", "type":"action", "title":"החלפת תפקידים 🔄", "prompt":"ל־5 דקות כל אחד מדבר מנקודת מבטו של השני.", "tags":["empathy","perspective","growth"] },
    { "id":"15", "type":"action", "title":"נשימה משותפת 🌬️", "prompt":"נשמו יחד 5 נשימות עמוקות בקצב אחיד.", "tags":["breath","calm","sync"] },
    { "id":"16", "type":"action", "title":"צחוק חובה 😂", "prompt":"נסו להצחיק אחד את השנייה – בלי מילים.", "tags":["play","joy","fun"] },

    { "id":"17", "type":"deep", "title":"צורך אמיתי 🔑", "prompt":"מה הצורך הכי עמוק שלך בזוגיות הזאת?", "tags":["needs","depth","truth"] },
    { "id":"18", "type":"deep", "title":"סליחה 🕊️", "prompt":"יש משהו שעדיין צריך סליחה? שתף/י ברוך.", "tags":["forgiveness","healing","peace"] },
    { "id":"19", "type":"deep", "title":"בחירה מחודשת 🔁", "prompt":"למה אתה בוחר בי גם היום?", "tags":["commitment","love","renewal"] },
    { "id":"20", "type":"deep", "title":"אמון 🔐", "prompt":"מה מחזק אצלך את האמון בינינו?", "tags":["trust","security","bond"] },

    { "id":"21", "type":"special", "title":"ברכה 🌈", "prompt":"ברך/י את בן/בת הזוג בברכה אישית מהלב.", "tags":["blessing","heart","uplift"] },
    { "id":"22", "type":"special", "title":"שתיקה קדושה 🤍", "prompt":"שבו יחד בדממה של דקה – נוכחים בלבד.", "tags":["silence","presence","sacred"] },
    { "id":"23", "type":"special", "title":"חלום משותף 🌠", "prompt":"שתפו חלום עתידי שתרצו להגשים יחד.", "tags":["dream","future","vision"] },
    { "id":"24", "type":"special", "title":"הודיה משותפת 🕯️", "prompt":"אמרו יחד בקול: “תודה על מה שיש בינינו”.", "tags":["gratitude","unity","light"] }
  ]
}
```

---

## 🚀 פריסה אוטומטית (אופציונלי אבל חזק): GitHub Actions

אם תרצה ש-Pages תמיד יעבוד דרך `docs/` בלי בלבול—שים את הקובץ הבא:

### `.github/workflows/pages.yml`

```yaml
name: Deploy GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./docs

      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```

אחרי זה: **Settings → Pages → Source = GitHub Actions** ✅

---

## 🧪 בדיקת תקינות מהירה

- אם האתר עולה אבל אין קלפים:
    
    - ודא שהקובץ נמצא בנתיב: `docs/data/base-deck-24.json`
        
- אם CSS לא נטען:
    
    - ודא שהקישור ב-HTML הוא `./styles.css`
        
- אם JS לא עובד:
    
    - ודא ש-`app.js` באותה תיקיה של `index.html`
        

---

## 🧾 קרדיטים (מקורות תיעוד רשמיים)

- GitHub Pages Documentation: [https://docs.github.com/pages](https://docs.github.com/pages)
    
- Deploy Pages with Actions: [https://docs.github.com/actions/deployment/deploying-to-github-pages](https://docs.github.com/actions/deployment/deploying-to-github-pages)
    

---

## 🎤 פזמון ראפ (4 שורות) 🎵

פותחים אתר, נותנים לו לב  
קלף רץ ברשת, עושה פה קסם רב  
לא רק קוד – זו אהבה שמתרגמת  
LoveSpark נדלק, והזוגיות מתקדמת

---

## 📜 משפט קודש לסיום

**“וְהָאֱמֶת וְהַשָּׁלוֹם אֱהָבוּ”** (זכריה ח׳, י״ט)

---

## 📊 מספר המידות

**10 מידות:** אהבה ❤️ | אמת ✨ | שלום 🕊️ | אמון 🔐 | הקשבה 👂 | סבלנות 🌾 | נוכחות 🧘 | שמחה 😄 | הודיה 🙏 | כבוד 🤝