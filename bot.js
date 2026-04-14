const modalData = {
    'alcohol': {
        icon: '🍷',
        title: 'משקאות אלכוהוליים / יינות',
        body: `הפטור ממס ניתן לנוסע אחד מעל גיל 18 במגבלות ההבאות:
            <ul>
                <li><strong>משקה חריף (ויסקי/וודקה כו'):</strong> עד 1 ליטר בלבד.</li>
                <li><strong>יין:</strong> עד 2 ליטר בלבד.</li>
            </ul>
            <div class="example-box">
                <strong>💡 דוגמה:</strong><br>
                אם הבאתם 3 בקבוקי יין, חרגתם בבקבוק אחד ויש לעבור במסלול האדום. לא ניתן להביא "קצת יותר" ללא הצהרה! 
            </div>`
    },
    'tobacco': {
        icon: '🚬',
        title: 'מוצרי טבק וסיגריות',
        body: `הפטור ניתנת לנוסע מעל גיל 18:
            <ul>
                <li><strong>סיגריות:</strong> "פאקט" אחד בלבד (מוגבל עד 200 סיגריות בודדות בכל הפאקט).</li>
                <li><strong>מוצרי טבק אחרים (כגון טבק לגלגול או סיגרים):</strong> במשקל כולל של עד 250 גרם.</li>
            </ul>
            <div class="example-box">
                <strong>💡 דוגמה:</strong><br>
                נוסע שהביא פאקט סיגריות (200 יח') <strong>ובנוסף</strong> קנה עוד קופסה קטנה – עבר את המכסה המותרת וחייב מעבר במסלול האדום!
            </div>`
    },
    'vape': {
        icon: '<img src="vape-icon.png" alt="vape" style="width: 40px; height: 40px; object-fit: contain;">',
        title: 'סיגריות אלקטרוניות',
        body: `נוסע אחד (מעל גיל 18) רשאי להכניס:
            <ul>
                <li><strong>סיגריות חד פעמיות (Vape):</strong> עד 5 יחידות לנוסע.</li>
                <li><strong>נוזל מילוי:</strong> בנפח של עד 10 מ"ל במצטבר לכל הבקבוקונים.</li>
            </ul>
            <div class="example-box">
                <strong>💡 דוגמה:</strong><br>
                מי שהביא איתו 6 סיגריות חד-פעמיות או בקבוק נוזל של 30 מ"ל נדרש להצהיר עליהם במסלול האדום ולשלם מס כחוק.
            </div>`
    },
    'perfume': {
        icon: '✨',
        title: 'בשמים וקוסמטיקה',
        body: `הפטור ממס ניתן לנוסע:
            <ul>
                <li><strong>תמרוקים כוהליים (בשמים):</strong> עד 1/4 ליטר (250 מ"ל) לנוסע.</li>
                <li><strong>מוצרי קוסמטיקה אחרים:</strong> נכללים במכסת ה-$200 הכללית.</li>
            </ul>`
    },
    'clothes': {
        icon: '👕',
        title: 'הלבשה והנעלה',
        body: `הנחיות הפטור להלבשה והנעלה:
            <ul>
                <li><strong>לשימוש עצמי:</strong> פריטי הלבשה והנעלה המיועדים לשימושכם העצמי - פטורים ואינם מוגבלים בסכום.</li>
                <li><strong>מתנות ופריטים אחרים:</strong> פריטים שאינם לשימושכם העצמי נכללים במכסה הכללית של עד $200.</li>
            </ul>
            <div class="example-box">
                <strong>💡 דגש:</strong><br>
                גם בפריטים לשימוש אישי, על הכמות להיות סבירה לצרכיו של הנוסע. כמות מסחרית (למשל 20 חולצות זהות) עלולה להיחשב לייבוא מסחרי ולחייב תשלום מס.
            </div>`
    },
    'food': {
        icon: '🍏',
        title: 'מזון, תבלינים ותוצרת חקלאית',
        body: `במסגרת פטור ה-200$, ניתן להביא מזון בתנאים הבאים:
            <ul>
                <li><strong>מזון יבש/מעובד:</strong> עד 3 ק"ג סך הכל.</li>
                <li><strong>הגבלת סוג:</strong> עד 1 ק"ג לכל סוג מזון בודד.</li>
                <li><strong>תוצרת טרייה:</strong> חל איסור מוחלט על פירות, ירקות וצמחים חיים!</li>
            </ul>
            <div class="example-box">
                <strong>💡 דוגמה:</strong><br>
                מותר להביא 1 ק"ג שוקולד + 1 ק"ג פסטה + 1 ק"ג אגוזים. אבל אם תביאו 2 ק"ג מאותו סוג, עברתם את המכסה המותרת.
            </div>`
    },
    // --- Prohibited Items Modal Data ---
    'weapons': {
        icon: '🔫',
        title: 'נשק ותחמושת',
        body: `איסור ייבוא נשק, תחמושת וחומרים נפיצים ללא היתר מיוחד מהמשרד לביטחון לאומי וצה"ל.
            <ul>
                <li><strong>נשק קר:</strong> סכינים, אגרופנים וכלי תקיפה אחרים אסורים גם הם.</li>
                <li><strong>חיקויים:</strong> צעצועים הנראים כנשק אמיתי עלולים להיחשב כאסורים.</li>
            </ul>`
    },
    'dangerousDrugs': {
        icon: '💉',
        title: 'סמים מסוכנים',
        body: `איסור גורף על ייבוא סמים מסוכנים המופיעים בפקודת הסמים.
            <ul>
                <li><strong>קנאביס:</strong> כולל קנאביס רפואי - חל איסור גורף על ייבוא, גם אם קיים היתר פרטני ממשרד הבריאות.</li>
                <li><strong>ענישה:</strong> עבירות סמים גוררות הליכים פליליים חמורים.</li>
            </ul>`
    },
    'drugTools': {
        icon: '🏺',
        title: 'כלים לשימוש בסם',
        body: `על פי פקודת הסמים המסוכנים, חל איסור מוחלט על ייבוא כלים המיועדים לשימוש בסמים.
            <ul>
                <li><strong>פריטים:</strong> כולל באנגים, מקטרות ייעודיות וכל כלי שעיקר שימושו הוא לצריכת סם מסוכן.</li>
            </ul>`
    },
    'plants': {
        icon: '🌱',
        title: 'צמחים וזרעים',
        body: `חל איסור מוחלט על הכנסת חומר צמחי (שתילים, זרעים, פקעות) ללא היתר ייבוא ותעודת בריאות ממשרד החקלאות.
            <ul>
                <li>מטרת האיסור: מניעת חדירת מזיקים ומחלות לצמחייה בישראל.</li>
            </ul>`
    },
    'meat': {
        icon: '🥩',
        title: 'מוצרי בשר ומוצרים מהחי',
        body: `איסור על ייבוא מוצרי בשר ומוצרי חלב מחו"ל (למעט שימורים מסוימים וגבינות קשות).
            <ul>
                <li><strong>מוצרי חלב:</strong> חל איסור גורף למעט גבינות קשות (עד 1 ק"ג).</li>
                <li><strong>מזון לתינוקות:</strong> חל איסור על ייבוא תרכובות מזון לתינוקות (תמ"ל).</li>
                <li>משרד החקלאות מחרים מוצרים אלו למניעת מחלות בעלי חיים וסיכונים בריאותיים.</li>
            </ul>`
    },
    'produce': {
        icon: '🍏',
        title: 'פירות וירקות טריים',
        body: `חל איסור מוחלט על הכנסת פירות וירקות טריים לישראל.
            <ul>
                <li><strong>החרמה:</strong> גם כמויות קטנות לשימוש עצמי יוחרמו בכניסה לארץ כדי למנוע חדירת מזיקים חקלאיים.</li>
            </ul>`
    },
    // --- Conditional Approval Items (Official Regs) ---
    'drones': {
        icon: '🚁',
        title: 'רחפנים וציוד טיסה',
        body: `ייבוא רחפנים מותנה באישור משרד התקשורת (פטור ניתן רק לדגמים ברשימה המאושרת) ורשות התעופה האזרחית.
            <ul>
                <li><strong>תדרים:</strong> חובה לוודא תדרים מותרים (2.4GHz או 5.8GHz בלבד).</li>
                <li><strong>שימוש:</strong> רחפנים לשימוש מסחרי דורשים רישוי נוסף.</li>
            </ul>
            <div class="example-box">
                <strong>💡 דוגמה:</strong> רחפן שפועל בתדר "צבאי" או חסום עלול להיתפס במכס ויידרש אישור פרטני ממשרד התקשורת.
            </div>`
    },
    'autoParts': {
        icon: '⚙️',
        title: 'חלקי חילוף לרכב',
        body: `ייבוא חלקי חילוף מותנה ב"צו יבוא חופשי" של משרד התחבורה.
            <ul>
                <li><strong>חלקי בטיחות:</strong> (בלמים, היגוי, תאורה) דורשים אישור משרד התחבורה ובדיקה של בוחן.</li>
                <li><strong>חלקים קוסמטיים:</strong> פטורים ברובם אם הם לשימוש אישי ומיובאים במינון סביר.</li>
            </ul>`
    },
    'laser': {
        icon: '🔴',
        title: 'מכשירי לייזר',
        body: `על פי פקודת המכס וצו הגנת הצרכן, ייבוא צייני לייזר מוגבל.
            <ul>
                <li><strong>עוצמה:</strong> חל איסור על ייבוא לייזרים בעוצמה שמעל 1 מיליוואט (mW) ללא אישור משרד הכלכלה.</li>
                <li><strong>בטיחות:</strong> מטרת האיסור היא למנוע פגיעה בעיניים וסינוור מטוסים.</li>
            </ul>`
    },
    'helmets': {
        icon: '🪖',
        title: 'קסדות מגן',
        body: `קסדות לאופנועים ולרכיבה מותנות בעמידה בתקני בטיחות בינלאומיים (כגון DOT או ECE 22.05).
            <ul>
                <li><strong>בדיקה:</strong> קסדה ללא תו תקן ברור עלולה להיעצר לבדיקת מעבדה של מכון התקנים.</li>
            </ul>`
    },
    'wireless': {
        icon: '📶',
        title: 'ציוד אלחוטי ותקשורת',
        body: `מכשירי שידור, מוניטורים לתינוק, נתבים (Routers) עוצמתיים וציוד קצה אחר.
            <ul>
                <li><strong>אישור:</strong> מחויב באישור של משרד התקשורת כדי לוודא שאינו חוסם תדרים חיוניים.</li>
            </ul>`
    },
    'electricVehicles': {
        icon: '🛴',
        title: 'קורקינטים ואופניים חשמליים',
        body: `ייבוא אישי של כלים חשמליים מותנה בעמידה בתקנים מחמירים (ת"י 6116):
            <ul>
                <li><strong>מהירות:</strong> עד 25 קמ"ש בלבד.</li>
                <li><strong>הספק:</strong> עד 250 וואט בלבד.</li>
                <li><strong>גיל:</strong> שימוש מעל גיל 16 בלבד. כל חריגה מהתקן הופכת את הכלי לאסור ליבוא.</li>
            </ul>`
    }
};

// --- Legal Overlay Acceptance ---
function acceptLegalTerms() {
    const overlay = document.getElementById('legalOverlay');
    const body = document.body;
    const runwayScene = document.querySelector('.runway-scene');

    if (overlay) overlay.style.opacity = '0';
    
    setTimeout(() => {
        if (overlay) overlay.remove();
        body.classList.remove('blur-mode');
        
        // Start the airplane animation
        if (runwayScene) {
            runwayScene.classList.add('animate-now');
        }
    }, 500);
}

const modal = document.getElementById('infoModal');

function openModal(type) {
    const data = modalData[type];
    if (!data) return;

    document.getElementById('modalIcon').innerHTML = data.icon;
    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalBody').innerHTML = data.body;

    const footerNote = document.getElementById('modalFooterNote');

    // Item Groups for Footer Logic
    const prohibitedIds = ['weapons', 'dangerousDrugs', 'drugTools', 'plants', 'meat', 'produce'];
    const conditionalIds = ['drones', 'autoParts', 'laser', 'helmets', 'wireless', 'electricVehicles'];

    if (prohibitedIds.includes(type)) {
        footerNote.innerHTML = '🚫 <strong>פריט זה אסור לייבוא!</strong> אי ציות עלול לגרור החרמה וקנס.';
        footerNote.style.color = '#C53030';
        footerNote.style.background = '#FFF5F5';
        footerNote.style.border = '1px solid #FC8181';
    } else if (conditionalIds.includes(type)) {
        footerNote.innerHTML = '⚠️ <strong>מותנה באישור!</strong> שחרור הפריט דורש אישור מגורם מוסמך.';
        footerNote.style.color = '#B7791F';
        footerNote.style.background = '#FFFFF0';
        footerNote.style.border = '1px solid #F6E05E';
    } else {
        footerNote.innerHTML = '⚠️ הבאתם יותר מהמותר? חובה מסלול אדום! 🔴';
        footerNote.style.color = '#C53030';
        footerNote.style.background = '#FFF5F5';
        footerNote.style.border = '1px dashed #FC8181';
    }

    modal.classList.add('active');
}

function closeModalBtn() {
    modal.classList.remove('active');
}

function closeModal(e) {
    // Close if click is exactly on the overlay (outside the content window)
    if (e.target === modal) {
        modal.classList.remove('active');
    }
}

// --- Multi-View Logic ---
let currentViewMode = 'exempt';
const modes = ['exempt', 'conditional', 'prohibited'];

function cycleViewMode() {
    let nextIndex = (modes.indexOf(currentViewMode) + 1) % modes.length;
    setViewMode(modes[nextIndex]);
}

function setViewMode(mode) {
    currentViewMode = mode;
    const grid = document.getElementById('quotasGrid');
    const cycleBtn = document.getElementById('cycleViewBtn');
    const sectionTitle = document.getElementById('sectionTitle');

    // Update Grid Classes for 3D flip
    if (grid) {
        grid.className = 'grid-quotas view-' + mode;
    }

    // Update Cycle Button
    if (cycleBtn) {
        cycleBtn.classList.remove('pulse'); // Stop pulsing once clicked
        cycleBtn.className = 'cycle-view-btn btn-' + mode;
        
        let modeLabel = "";
        let nextMode = "";
        if (mode === 'exempt') {
            modeLabel = "פריטים פטורים";
            nextMode = "יבוא מותנה";
            cycleBtn.innerText = "🟢 " + modeLabel;
        } else if (mode === 'conditional') {
            modeLabel = "יבוא מותנה";
            nextMode = "פריטים אסורים";
            cycleBtn.innerText = "⚠️ " + modeLabel;
        } else if (mode === 'prohibited') {
            modeLabel = "פריטים אסורים";
            nextMode = "פריטים פטורים";
            cycleBtn.innerText = "🔴 " + modeLabel;
        }
        
        cycleBtn.setAttribute('aria-label', `מצב נוכחי: ${modeLabel}. לחץ למעבר למצב ${nextMode}.`);
    }

    // Update Titles
    if (sectionTitle) {
        if (mode === 'exempt') sectionTitle.innerText = "✨ כמויות פטורות ממס";
        else if (mode === 'conditional') sectionTitle.innerText = "⚠️ יבוא מותנה באישור";
        else if (mode === 'prohibited') sectionTitle.innerText = "🚫 פריטים אסורים בייבוא";
    }
}

function handleBoxClick(type) {
    if (currentViewMode === 'prohibited') {
        const prohibitedMap = {
            'alcohol': 'weapons', 'tobacco': 'dangerousDrugs', 'vape': 'drugTools',
            'perfume': 'plants', 'food': 'meat', 'clothes': 'produce'
        };
        openModal(prohibitedMap[type]);
    } else if (currentViewMode === 'conditional') {
        const conditionalMap = {
            'alcohol': 'drones', 'tobacco': 'autoParts', 'vape': 'laser',
            'perfume': 'helmets', 'food': 'wireless', 'clothes': 'electricVehicles'
        };
        openModal(conditionalMap[type]);
    } else {
        openModal(type);
    }
}

// --- Bot Hint Cycle ---
const botHints = [
    "לחצו על הכפתור למעלה למידע על איסורי יבוא! 🔄",
    "צריכים עזרה? שאלו אותי! 🤖",
    "ידעתם שיש פטור של עד $200 לנוסע? 💰",
    "אלכוהול וטבק? בדקו את הכמויות המותרות! 🍷"
];
let currentHintIndex = 0;

// --- Bot Jumping & Hint Logic ---
const botBtn = document.getElementById('botBtn');
const botHintBubble = document.getElementById('botHintBubble');

setInterval(() => {
    if (botBtn) {
        // Jump animation
        botBtn.classList.add('jump');
        setTimeout(() => { botBtn.classList.remove('jump'); }, 600);

        // Update Hint Text
        if (botHintBubble) {
            currentHintIndex = (currentHintIndex + 1) % botHints.length;
            botHintBubble.innerHTML = botHints[currentHintIndex] + '<div class="bot-bubble-tail"></div>';
        }

        // Show bubble
        botBtn.classList.add('show-bubble');
        setTimeout(() => { botBtn.classList.remove('show-bubble'); }, 8000);
    }
}, 15000);


// --- Bot Logic ---
const chatWindow = document.getElementById('chatWindow');
const chatBody = document.getElementById('chatBody');
const chatInput = document.getElementById('chatInput');
const botBadge = document.getElementById('botBadge');

function initializeDisclaimer() {
    if (sessionStorage.getItem('botDisclaimerAccepted') === 'true') {
        document.getElementById('chatDisclaimer').style.display = 'none';
        document.getElementById('chatInitialGreeting').style.display = 'block';
        document.getElementById('chatInputArea').style.opacity = '1';
        document.getElementById('chatInputArea').style.pointerEvents = 'auto';
    }
}

function acceptDisclaimer() {
    sessionStorage.setItem('botDisclaimerAccepted', 'true');
    initializeDisclaimer();
}

// Run on load
initializeDisclaimer();

function toggleChat() {
    chatWindow.classList.toggle('active');
    botBadge.style.display = 'none'; // hide notification badge when opened
}

function handleEnter(e) {
    if (e.key === 'Enter') {
        sendUserMsg();
    }
}

function addMessage(text, sender) {
    const msg = document.createElement('div');
    msg.className = 'msg ' + sender;
    msg.innerHTML = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function handleQuickReply(text) {
    addMessage(text, 'user');

    // Hide quick replies after selection
    const quickReplies = document.querySelector('.quick-replies');
    if (quickReplies) quickReplies.style.display = 'none';

    showTypingIndicator();
    setTimeout(() => {
        hideTypingIndicator();
        processBotResponse(text);
    }, 1200);
}

function sendUserMsg() {
    const text = chatInput.value.trim();
    if (text) {
        addMessage(text, 'user');
        chatInput.value = '';

        // Show typing indicator
        showTypingIndicator();

        // Delay response for realism
        const delay = Math.min(1000 + text.length * 20, 3000);
        setTimeout(() => {
            hideTypingIndicator();
            processBotResponse(text);
        }, delay);
    }
}

function showTypingIndicator() {
    const typing = document.createElement('div');
    typing.className = 'typing';
    typing.id = 'typingIndicator';
    typing.innerHTML = '<span></span><span></span><span></span>';
    chatBody.appendChild(typing);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function hideTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) indicator.remove();
}

// --- Food and Agriculture Dictionaries ---
const foodDictionaries = {
    prohibited: {
        keywords: /בשר|עוף|חלב|גבינ|ביצ|סטייק|נקניק|חמאה|יוגורט|דג|פירות ים|סלמי|פסטרמה/,
        message: "🥩🥛 <strong>בשר, חלב ומוצרים מהחי:</strong> חל איסור מוחלט להכניס מוצרי בשר ומוצרי חלב מחו\"ל. <br>⚠️ <strong>חשוב לדעת:</strong> גם מוצרים הארוזים ב<strong>ואקום</strong> אינם מותרים לכניסה ללא היתר מיוחד ומשרד החקלאות עלול להחרים אותם."
    },
    fresh: {
        keywords: /פירות|ירקות|תפוח|בננה|עגבני|מלפפון|לימון|תפוז|אפרסק|אגס|ענבים|פרי|צמח|פרחים/,
        message: "🍏🍅 <strong>תוצרת חקלאית טרייה:</strong> חל איסור מוחלט על הכנסת פירות וירקות טריים לישראל (כדי למנוע הכנסת מזיקים). פריטים אלו יוחרמו בכניסה."
    },
    dry: {
        keywords: /שוקולד|חטיף|ממתק|פסטה|אגוז|קדשיו|שקדים|פיצוח|ביגלה|במבה|קפה|תה|שימורים|שמן|דבש|סוכר|עוגיות|חלווה|בורגול|אורז/,
        limitMsg: "📦 <strong>מזון יבש ומעובד:</strong> מותר להביא עד 3 ק\"ג סך הכל, ועד 1 ק\"ג לכל סוג מזון בודד."
    },
    spices: {
        keywords: /תבלין|פלפל|זעתר|פפריקה|כמון|מלח|כורכום|קינמון|חוואיג|סומק/,
        limitMsg: "🌶️ <strong>תבלינים:</strong> מותר להביא עד 1 ק\"ג תבלינים במצטבר."
    }
};

function processBotResponse(text) {
    const query = text.toLowerCase();
    let response = '';

    // --- Core Logic State ---
    let isCustomQuery = false;
    let warnings = [];
    let needsRedPath = false;

    // --- Core Keywords for broad detection ---
    const productKeywords = /חולצ|מכנס|נעל|בגד|פריט|בקבוק|ליטר|יין|אלכוהול|ודקה|וויסקי|ערק|בירה|בושם|בשמים|מ"ל|פאקט|סיגרי|טבק|vape|שואב|דייסון|dyson|מחשב|לפטופ|טלפון|סמארטפון|אייפון|iphone|טאבלט|אייפד|ipad|קונסול|פלייסטיישן|xbox|טלוויזיה|שעון|תיק|אוזניות|מצלמה|בשר|חלב|גבינ|פירות|ירקות|מזון|שוקולד|תבלין|חטיף|ממתק|פיצוח|ואקום|vacuum/;

    if (productKeywords.test(query) || query.includes('כמה') || query.includes('מחיר') || query.includes('עולה') || query.includes('מותר')) {
        isCustomQuery = true;
    }

    // --- IDENTIFY CONTEXT: People ---
    const peopleMatch = query.match(/(\d+)\s*(אנשים|נוסעים|חברים|בני משפחה)|אנחנו\s*(\d+)/);
    let numPeople = 1;
    if (peopleMatch) {
        numPeople = parseInt(peopleMatch[1] || peopleMatch[3]);
        if (isNaN(numPeople)) numPeople = 1;
    } else if (query.includes('אנחנו') || query.includes('קנינו') || query.includes('הבאנו')) {
        numPeople = 2; // Assume at least a couple if they use plural "We"
    }

    // --- CALCULATION: Cigarettes / Tobacco ---
    const cigarettesKeywords = /פאקט|סיגרי|טבק|קופסא/;
    if (cigarettesKeywords.test(query)) {
        const cigarettesMatch = query.match(/(\d+)/);
        let cartons = 0;
        if (query.includes('פאקט')) {
            cartons = cigarettesMatch ? parseInt(cigarettesMatch[1]) : 1;
        } else if (query.includes('סיגרי')) {
            const count = cigarettesMatch ? parseInt(cigarettesMatch[1]) : 200;
            cartons = count / 200;
        }

        if (numPeople > 1) {
            warnings.push(`🚬 <strong>סיגריות וטבק:</strong> הפטור הוא <strong>אישי בלבד</strong> (פאקט 1 או 250 גרם טבק לנוסע מעל גיל 18). לא ניתן לאחד פטורים. אם אתה נושא ${cartons > 0 ? cartons + ' פאקטים' : 'כמות חריגה'} עבור כל הקבוצה, עליך לעבור במסלול האדום ולהצהיר.`);
            if (cartons > 1) needsRedPath = true;
        } else {
            if (cartons > 1) {
                const extra = Math.ceil(cartons - 1);
                const taxEstimate = extra * 350;
                warnings.push(`🚬 <strong>סיגריות:</strong> מותר פאקט 1 בלבד. חרגת ב-<strong>${extra}</strong> פאקטים. <br><span style="color:#C53030; font-weight:bold;">↳ קנס/מס משוער: כ-₪${taxEstimate}. חובה מסלול אדום!</span>`);
                needsRedPath = true;
            } else if (cartons > 0) {
                warnings.push(`🚬 <strong>סיגריות:</strong> פאקט 1 לנוסע נמצא בתוך הפטור.`);
            }
        }
    }

    // --- CALCULATION: Alcohol / Perfume / Bottles ---
    const bottleKeywords = /בקבוק|ליטר|יין|אלכוהול|ודקה|וויסקי|ערק|בירה|בושם|בשמים|מ"ל/;
    const quantityMatch = query.match(/(\d+)/); // Find any number near bottle context

    if (bottleKeywords.test(query)) {
        isCustomQuery = true;
        const amount = quantityMatch ? parseInt(quantityMatch[1]) : 0;
        let adviceChunks = [];

        // Breakdown categories
        const isWineQuery = /יין|בירה/.test(query);
        const isSpiritsQuery = /אלכוהול|ודקה|וויסקי|ערק|חריף/.test(query);
        const isPerfumeQuery = /בושם|בשמים|מ"ל/.test(query);
        const isGenericBottle = !isWineQuery && !isSpiritsQuery && !isPerfumeQuery;

        // Alcohol Breakdown
        if (isWineQuery || isSpiritsQuery || isGenericBottle) {
            let alc = `🍷 <strong>במידה ומדובר באלכוהול:</strong><br>`;
            alc += `• <strong>יין/בירה:</strong> עד 2 ליטר לנוסע בודד (מעל גיל 18).<br>`;
            alc += `• <strong>משקה חריף (וויסקי וכד'):</strong> עד 1 ליטר לנוסע בודד.`;
            if (numPeople > 1) {
                alc += `<br>⚠️ <strong>לתשומת לבכם (${numPeople} אנשים):</strong> הפטור הוא אישי. <strong>חל איסור על איחוד פטורים.</strong> כל מוצר שחורג מהסכום האישי מצריך הגעה למכס במסלול האדום.`;
            }
            adviceChunks.push(alc);

            // Red path logic for alcohol
            const limit = isWineQuery && !isSpiritsQuery ? 2 : 1;
            if (amount > limit) needsRedPath = true;
        }

        // Perfume Breakdown
        if (isPerfumeQuery || isGenericBottle) {
            let perf = `✨ <strong>במידה ומדובר בבשמים:</strong><br>`;
            perf += `• הפטור הוא עד <strong>250 מ"ל</strong> (רבע ליטר) לנוסע בודד בתוך המזוודה.`;
            if (numPeople > 1) {
                perf += `<br>⚠️ לא ניתן לצרף פטורים עבור בקבוק אחד גדול.`;
            }
            adviceChunks.push(perf);
            if (isPerfumeQuery && amount > 250) needsRedPath = true;
        }

        if (amount > 0) {
            warnings.push(`🧴 <strong>ניתוח עבור ${amount} יחידות:</strong><br><br>` + adviceChunks.join('<br><br>'));
        } else {
            warnings.push(`🧴 <strong>מידע על מכסות בקבוקים:</strong><br><br>` + adviceChunks.join('<br><br>'));
        }
    }

    // --- CALCULATION: General Items & Prices ---
    const priceMatch = query.match(/(\d+(?:\.\d+)?)\s*(דולר|\$|יורו|€|שקל|ש"ח|₪)/) || query.match(/ב[-\s]?(\d+(?:\.\d+)?)/);

    // Identify common items
    let item = 'המוצר';
    if (query.includes('שואב') || query.includes('דייסון') || query.includes('dyson')) item = 'שואב אבק (דייסון וכד\')';
    else if (query.includes('מחשב') || query.includes('לפטופ')) item = 'מחשב נייד';
    else if (query.includes('טלפון') || query.includes('סמארטפון') || query.includes('אייפון') || query.includes('iphone')) item = 'סמארטפון';
    else if (query.includes('טאבלט') || query.includes('אייפד') || query.includes('ipad')) item = 'טאבלט/אייפד';
    else if (query.includes('פלייסטיישן') || query.includes('playstation') || query.includes('ps5') || query.includes('אקסבוקס') || query.includes('xbox') || query.includes('סוויץ') || query.includes('switch')) item = 'קונסולת משחקים';
    else if (query.includes('טלוויזיה')) item = 'טלוויזיה';
    else if (query.includes('שעון')) item = 'שעון';
    else if (query.includes('תיק')) item = 'תיק';

    if (priceMatch || item !== 'המוצר') {
        isCustomQuery = true;
        let originalPrice = priceMatch ? parseFloat(priceMatch[1]) : 0;
        let priceUSD = originalPrice;

        // Simple currency conversion logic
        if (priceMatch) {
            const cur = priceMatch[2];
            if (cur === '€' || query.includes('יורו')) priceUSD = originalPrice * 1.1;
            else if (cur === '₪' || query.includes('שקל')) priceUSD = originalPrice / 3.7;
        }

        // Logic based on item type and price
        const isVatOnly = ['מחשב נייד', 'סמארטפון', 'טאבלט/אייפד'].includes(item);
        const isHighTax = ['טלוויזיה', 'שעון', 'קונסולת משחקים'].includes(item);

        if (priceUSD > 200) {
            needsRedPath = true;
            let taxPercent = isVatOnly ? 17 : (isHighTax ? 31 : 17);
            let taxILS = Math.round(priceUSD * 3.7 * (taxPercent / 100));

            let itemAdvice = `📦 <strong>${item}:</strong> מחיר של $${Math.round(priceUSD)} חורג מפטור ה-200$. `;
            if (isVatOnly) {
                itemAdvice += `מכיוון שמדובר במוצר מחשוב/תקשורת, תשלם <strong>מע"מ בלבד (17%)</strong>.`;
            } else {
                itemAdvice += `תצטרך לשלם מיסים (מע"מ + מכס/מס קנייה במידת הצורך) על <strong>כל ערך המוצר</strong>.`;
            }
            itemAdvice += `<br><span style="color:#C53030; font-weight:bold;">↳ מס משוער לתשלום: כ-${taxILS} ש"ח. חובה מסלול אדום!</span>`;
            warnings.push(itemAdvice);
        } else if (originalPrice > 0) {
            warnings.push(`✅ <strong>${item}:</strong> במחיר שציינת ($${Math.round(priceUSD)}), המוצר נכלל בפטור האישי שלך.`);
        }
    }

    // --- CALCULATION: Clothing Quantities ---
    const clothesKeywords = /חולצ|מכנס|נעל|בגד|פריט/;
    if (clothesKeywords.test(query)) {
        const clothesMatch = query.match(/(\d+)/);
        if (clothesMatch) {
            const count = parseInt(clothesMatch[1]);
            if (count > 10) {
                warnings.push(`👕 <strong>כמות פריטים:</strong> הבאת ${count} יחידות. המכס בודק האם הכמות סבירה לשימוש אישי. מעל 12-15 יחידות זהות עלול לעורר חשד לייבוא מסחרי. אם אלו פריטים זהים באריזה, חובה להצהיר.`);
                if (count > 20) needsRedPath = true;
            } else {
                warnings.push(`👕 <strong>כמות פריטים:</strong> ${count} יחידות נחשבות לכמות סבירה לשימוש אישי שנמצאת בפטור.`);
            }
        } else {
            // General "How many" question
            warnings.push(`👕 <strong>כמות בגדים ונעליים:</strong> אין מספר מוחלט בחוק, אך הכלל הוא <strong>"כמות סבירה לשימוש אישי"</strong>. <br>💡 <strong>טיפ:</strong> הבאת מעל 10-12 פריטים זהים (למשל 12 חולצות מאותו סוג) עלולה להיחשב כייבוא מסחרי ולחייב תשלום מס ומעבר במסלול האדום להצהרה.`);
        }
    }

    // --- CALCULATION: Food & Agriculture ---
    const foodKeywords = /מזון|אוכל|בשר|חלב|גבינ|פירות|ירקות|תבלין|שוקולד|חטיף|ממתק|ואקום|קילו|ק"ג/;
    if (foodKeywords.test(query)) {
        isCustomQuery = true;
        let foodAdvice = [];
        const weightMatch = query.match(/(\d+)/);
        const weight = weightMatch ? parseInt(weightMatch[1]) : 0;

        // Prohibited Items Check
        if (foodDictionaries.prohibited.keywords.test(query)) {
            foodAdvice.push(foodDictionaries.prohibited.message);
            needsRedPath = true;
        }

        // Fresh Produce Check
        if (foodDictionaries.fresh.keywords.test(query)) {
            foodAdvice.push(foodDictionaries.fresh.message);
            needsRedPath = true;
        }

        // Dry Food and Spices Check
        if (foodDictionaries.dry.keywords.test(query) || query.includes('מזון') || query.includes('אוכל')) {
            let msg = foodDictionaries.dry.limitMsg;
            if (weight > 1) {
                msg += `<br>⚠️ <strong>שים לב:</strong> ציינת ${weight} ק"ג. החריגה מ-1 ק"ג לסוג בודד מחייבת הגעה למסלול האדום להצהרה ותשלום מס.`;
                needsRedPath = true;
            }
            foodAdvice.push(msg);
        }

        if (foodDictionaries.spices.keywords.test(query)) {
            let msg = foodDictionaries.spices.limitMsg;
            if (weight > 1) {
                msg += `<br>⚠️ <strong>שים לב:</strong> ציינת ${weight} ק"ג תבלינים. המכסה היא 1 ק"ג בלבד. החריגה מחייבת הגעה למסלול האדום.`;
                needsRedPath = true;
            }
            foodAdvice.push(msg);
        }

        if (foodAdvice.length > 0) {
            warnings.push(`🍎 <strong>ניתוח מוצרי מזון וחקלאות:</strong><br><br>` + foodAdvice.join('<br><br>'));
        }
    }

    // --- FINAL RESPONSE ASSEMBLY ---
    if (isCustomQuery && warnings.length > 0) {
        let groupWarning = '';
        if (numPeople > 1) {
            groupWarning = `👨‍👩‍👧‍👦 <strong>לתשומת לבכם (קבוצה של ${numPeople}):</strong> הפטור ממכס הוא <strong>אישי בלבד ($200 לנוסע)</strong>. <br>⚠️ <strong>חשוב מאוד:</strong> לא ניתן לאחד או "לחבר" פטורים של מספר אנשים כדי לקבל פטור על מוצר אחד שערכו מעל $200. כל מוצר שחורג מהסכום האישי מחייב הגעה למסלול האדום.<br><br>`;
        }

        response = `<strong>🧮 ניתוח המצב:</strong><br><br>` + groupWarning + warnings.join('<br><br>');

        if (needsRedPath) {
            response += `<br><br>🚨 <strong>החלטה:</strong> החריגה שצוינה מחייבת מעבר ב<strong>מסלול האדום 🔴</strong>. אי דיווח על מוצר שערכו מעל $200 (גם אם הבאתם אותו יחד) עלול לגרור קנסות כבדים והחרמה.`;
        } else {
            response += `<br><br>🟢 <strong>החלטה:</strong> על פי הנתונים, נראה שכל פריט בנפרד נמצא בטווח הפטור האישי. ניתן לעבור ב<strong>מסלול הירוק</strong>. שמרו קבלות לביקורת.`;
        }
    } else {
        // Simple Small Talk & FAQ Extensions
        if (query.includes('היי') || query.includes('שלום')) {
            response = 'שלום! 👋 אני עוזר המכס הווירטואלי שלך. תוכל לשאול אותי שאלות כמו: "קניתי אייפון ב-900 דולר" או "כמה אלכוהול מותר ל-3 אנשים?". מה תרצה לבדוק?';
        } else if (query.includes('מזומן') || query.includes('כסף') || query.includes('שקל') || query.includes('דולר')) {
            response = '💰 <strong>דיווח על מזומנים:</strong> חובה לדווח על הכנסת כספים בסכום של <strong>50,000 ₪ ומעלה</strong>. <br>⚠️ במעברים יבשתיים חובת הדיווח היא מעל <strong>12,000 ₪</strong> (למעט מעבר אלנבי).';
        } else if (query.includes('משפחה') || query.includes('ביחד') || query.includes('לאחד')) {
            response = '💡 <strong>איחוד פטורים:</strong> חשוב לדעת - <strong>לא ניתן לאחד פטורים!</strong> אם זוג קונה טלוויזיה ב-300 דולר, הם לא יכולים "לחבר" את ה-200 של כל אחד. הם ישלמו מס על כל ה-300 דולר. הפטור של 200$ תקף רק למוצרים שערכם הבודד פחות מ-200$.';
        } else if (query.includes('תודה')) {
            response = 'בשמח רבה! ברוכים השבים ארצה. ✈️ אם יש עוד משהו, אני כאן.';
        } else {
            response = 'אני מבין... כדי שאוכל לתת תשובה מדויקת, כדאי לציין מה קנית ובאיזה מחיר (למשל: "קניתי דייסון ב-400 יורו"). תוכל גם לעיין ב<a href=\"https://www.gov.il/BlobFolder/guide/customs-guide-for-returning-traveler/he/Guides_customs_Guides_customsreturningpassanger_new.pdf\" target=\"_blank\">מדריך הרשמי</a>.';
        }
    }

    addMessage(response, 'bot');
}
