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
        title: 'הלבשה, הנהלה וקוסמטיקה',
        body: `כמויות מסוג זה נכללות בפטור הכולל של עד $200 (ביחד עם שאר הפריטים).
            <ul>
                <li>מותר להביא בגדים, נעליים ומוצרים קוסמטיים אשר <strong>אינם חורגים מהכמות הסבירה והמקובלת לשימוש אישי של הנוסע</strong>.</li>
            </ul>
            <div class="example-box">
                <strong>💡 דוגמה:</strong><br>
                אם המזוודה שלכם מכילה 15 חולצות חדשות וזהות, הדבר מעלה חשד לייבוא מסחרי. יש לעבור במסלול האדום להצהרה, גם אם העלות לא עוברת את הרף.
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
    }
};

const modal = document.getElementById('infoModal');

function openModal(type) {
    const data = modalData[type];
    if (!data) return;

    document.getElementById('modalIcon').innerHTML = data.icon;
    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalBody').innerHTML = data.body;

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

    setTimeout(() => processBotResponse(text), 600);
}

function sendUserMsg() {
    const text = chatInput.value.trim();
    if (text) {
        addMessage(text, 'user');
        chatInput.value = '';

        // Show typing indicator or delay response
        setTimeout(() => processBotResponse(text), 600);
    }
}

function processBotResponse(text) {
    const query = text.toLowerCase();
    let response = '';

    // --- Core Logic State ---
    let isCustomQuery = false;
    let warnings = [];
    let needsRedPath = false;

    // --- IDENTIFY CONTEXT: People ---
    const peopleMatch = query.match(/(\d+)\s*(אנשים|נוסעים|חברים|בני משפחה)|אנחנו\s*(\d+)/);
    let numPeople = 1;
    if (peopleMatch) {
        numPeople = parseInt(peopleMatch[1] || peopleMatch[3]);
    } else if (query.includes('אנחנו') || query.includes('קנינו') || query.includes('הבאנו')) {
        numPeople = 2; // Assume at least a couple if they use plural "We"
    }

    // --- CALCULATION: Cigarettes / Tobacco ---
    const cigarettesMatch = query.match(/(\d+)\s*(פאקטים|פאקט|סיגריות|קופסאות)/);
    const tobaccoMatch = query.match(/(\d+)\s*(גרם|ג'|ק"ג|קילו)\s*(טבק)/) || query.match(/(טבק)/);

    if (cigarettesMatch || tobaccoMatch) {
        isCustomQuery = true;
        let cartons = 0;
        if (query.includes('פאקט')) {
            cartons = parseInt(cigarettesMatch ? cigarettesMatch[1] : 0);
        } else if (query.includes('סיגריות')) {
            const count = parseInt(cigarettesMatch ? cigarettesMatch[1] : 0);
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
                alc += `<br>⚠️ <strong>לתשומת לבכם (${numPeople} אנשים):</strong> הפטור הוא אישי. <strong>חל איסור על איחוד פטורים.</strong> כל אחד חייב לשאת את הכמות שלו בנפרד בכבודתו.`;
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
    const clothesMatch = query.match(/(\d+)\s*(חולצות|מכנסיים|נעליים|בגדים|פריטים)/);
    if (clothesMatch) {
        isCustomQuery = true;
        const count = parseInt(clothesMatch[1]);
        const type = clothesMatch[2];
        if (count > 10) {
            warnings.push(`👕 <strong>כמות ${type}:</strong> הבאת ${count} יחידות. המכס בודק האם הכמות סבירה לשימוש אישי. מעל 12-15 יחידות זהות עלול לעורר חשד לייבוא מסחרי. אם אלו פריטים זהים באריזה, חובה להצהיר.`);
            if (count > 20) needsRedPath = true;
        } else {
            warnings.push(`👕 <strong>כמות ${type}:</strong> ${count} יחידות נחשבות לכמות סבירה לשימוש אישי שנמצאת בפטור.`);
        }
    }

    // --- FINAL RESPONSE ASSEMBLY ---
    if (isCustomQuery && warnings.length > 0) {
        let groupWarning = '';
        if (numPeople > 1) {
            groupWarning = `👨‍👩‍👧‍👦 <strong>לתשומת לבכם (קבוצה של ${numPeople}):</strong> הפטור ממכס הוא <strong>אישי בלבד ($200 לנוסע)</strong>. <br>⚠️ <strong>חשוב מאוד:</strong> לא ניתן לאחד או "לחבר" פטורים של מספר אנשים כדי לקבל פטור על מוצר אחד שערכו מעל $200. כל מוצר שחורג מהסכום האישי מחייב הצהרה.<br><br>`;
        }

        response = `<strong>🧮 ניתוח הצהרה:</strong><br><br>` + groupWarning + warnings.join('<br><br>');

        if (needsRedPath) {
            response += `<br><br>🚨 <strong>החלטה:</strong> החריגה שצוינה מחייבת מעבר ב<strong>מסלול האדום 🔴</strong>. אי דיווח על מוצר שערכו מעל $200 (גם אם הבאתם אותו יחד) עלול לגרור קנסות כבדים והחרמה.`;
        } else {
            response += `<br><br>🟢 <strong>החלטה:</strong> על פי הנתונים, נראה שכל פריט בנפרד נמצא בטווח הפטור האישי. ניתן לעבור ב<strong>מסלול הירוק</strong>. שמרו קבלות לביקורת.`;
        }
    } else {
        // Simple Small Talk & FAQ Extensions
        if (query.includes('היי') || query.includes('שלום')) {
            response = 'שלום! 👋 אני עוזר המכס הווירטואלי שלך. תוכל לשאול אותי שאלות כמו: "קניתי אייפון ב-900 דולר" או "כמה אלכוהול מותר ל-3 אנשים?". מה תרצה לבדוק?';
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
