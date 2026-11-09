/**
 * DINO AI JUMP : CHROME RUNNER EDITION
 * Modern Minimalist Design System, Dual Switch Controls (Language & Theme),
 * Expanded 16:9 Webcam Vision, 30s Escalating Speed Challenge,
 * Player 1-10 Dropdown & Temporary Session Scoreboards.
 */

// =========================================================
// 1. SPRITE PATTERNS (AUTHENTIC CHROME DINO PIXEL MAPS)
// =========================================================
const SPRITE_PATTERNS = {
    dinoStand: [
        "            XXXXXXXX ",
        "           XXXXXXXXXX",
        "           XX XXXXXXX",
        "           XXXXXXXXXX",
        "           XXXXXX    ",
        "           XXXXXXXX  ",
        "X         XXXXXXXX   ",
        "XX       XXXXXXXXX   ",
        "XXX     XXXXXXXXXX   ",
        "XXXX   XXXXXXXXXXX   ",
        "XXXXXXXXXXXXXXXXXX   ",
        " XXXXXXXXXXXXXXXXX   ",
        "  XXXXXXXXXXXXXXXX   ",
        "   XXXXXXXXXXXXXX    ",
        "    XXXXXXXXXXXX     ",
        "     XXXXXXXXXX      ",
        "      XXXXXXXX       ",
        "      XXXX XXX       ",
        "      XX    XX       ",
        "      XX    XX       ",
        "      XX    XX       ",
        "      XXX   XXX      "
    ],
    dinoRun1: [
        "            XXXXXXXX ",
        "           XXXXXXXXXX",
        "           XX XXXXXXX",
        "           XXXXXXXXXX",
        "           XXXXXX    ",
        "           XXXXXXXX  ",
        "X         XXXXXXXX   ",
        "XX       XXXXXXXXX   ",
        "XXX     XXXXXXXXXX   ",
        "XXXX   XXXXXXXXXXX   ",
        "XXXXXXXXXXXXXXXXXX   ",
        " XXXXXXXXXXXXXXXXX   ",
        "  XXXXXXXXXXXXXXXX   ",
        "   XXXXXXXXXXXXXX    ",
        "    XXXXXXXXXXXX     ",
        "     XXXXXXXXXX      ",
        "      XXXXXXXX       ",
        "      XXXX XXX       ",
        "      XX     XX      ",
        "      XX     XX      ",
        "       XX     XX     ",
        "              XXX    "
    ],
    dinoRun2: [
        "            XXXXXXXX ",
        "           XXXXXXXXXX",
        "           XX XXXXXXX",
        "           XXXXXXXXXX",
        "           XXXXXX    ",
        "           XXXXXXXX  ",
        "X         XXXXXXXX   ",
        "XX       XXXXXXXXX   ",
        "XXX     XXXXXXXXXX   ",
        "XXXX   XXXXXXXXXXX   ",
        "XXXXXXXXXXXXXXXXXX   ",
        " XXXXXXXXXXXXXXXXX   ",
        "  XXXXXXXXXXXXXXXX   ",
        "   XXXXXXXXXXXXXX    ",
        "    XXXXXXXXXXXX     ",
        "     XXXXXXXXXX      ",
        "      XXXXXXXX       ",
        "      XXXX XXX       ",
        "       XX   XX       ",
        "       XX   XX       ",
        "       XX            ",
        "       XXX           "
    ],
    dinoJump: [
        "            XXXXXXXX ",
        "           XXXXXXXXXX",
        "           XX XXXXXXX",
        "           XXXXXXXXXX",
        "           XXXXXX    ",
        "           XXXXXXXX  ",
        "X         XXXXXXXX   ",
        "XX       XXXXXXXXX   ",
        "XXX     XXXXXXXXXX   ",
        "XXXX   XXXXXXXXXXX   ",
        "XXXXXXXXXXXXXXXXXX   ",
        " XXXXXXXXXXXXXXXXX   ",
        "  XXXXXXXXXXXXXXXX   ",
        "   XXXXXXXXXXXXXX    ",
        "    XXXXXXXXXXXX     ",
        "     XXXXXXXXXX      ",
        "      XXXXXXXX       ",
        "      XXXX XXX       ",
        "      XX    XX       ",
        "      XX    XX       ",
        "       X     X       ",
        "                     "
    ],
    dinoCrash: [
        "            XXXXXXXX ",
        "           XXXXXXXXXX",
        "           XX XXXXXXX",
        "           XXXX XXXXX",
        "           XXXXXX    ",
        "           XXXXXXXX  ",
        "X         XXXXXXXX   ",
        "XX       XXXXXXXXX   ",
        "XXX     XXXXXXXXXX   ",
        "XXXX   XXXXXXXXXXX   ",
        "XXXXXXXXXXXXXXXXXX   ",
        " XXXXXXXXXXXXXXXXX   ",
        "  XXXXXXXXXXXXXXXX   ",
        "   XXXXXXXXXXXXXX    ",
        "    XXXXXXXXXXXX     ",
        "     XXXXXXXXXX      ",
        "      XXXXXXXX       ",
        "      XXXX XXX       ",
        "      XX    XX       ",
        "      XX    XX       ",
        "      XX    XX       ",
        "      XXX   XXX      "
    ],
    dinoDuck1: [
        "                XXXXXXXXXXXXX",
        "               XXXXXXXXXXXXXX",
        "               XX XXXXXXXXXXX",
        "               XXXXXXXXXXXXXX",
        "               XXXXXXXXXXXXXX",
        "X             XXXXXXXXXXXX   ",
        "XX           XXXXXXXXXXXX    ",
        "XXX         XXXXXXXXX        ",
        "XXXXXXXXXXXXXXXXXXXXX        ",
        " XXXXXXXXXXXXXXXXXXX         ",
        "  XXXXXXXXXXXXXXXXX          ",
        "   XXXXXXXXXXXXXXX           ",
        "    XXXXX   XXXXX            ",
        "    XX       XX              ",
        "    XX        XX             ",
        "    XXX        XXX           "
    ],
    dinoDuck2: [
        "                XXXXXXXXXXXXX",
        "               XXXXXXXXXXXXXX",
        "               XX XXXXXXXXXXX",
        "               XXXXXXXXXXXXXX",
        "               XXXXXXXXXXXXXX",
        "X             XXXXXXXXXXXX   ",
        "XX           XXXXXXXXXXXX    ",
        "XXX         XXXXXXXXX        ",
        "XXXXXXXXXXXXXXXXXXXXX        ",
        " XXXXXXXXXXXXXXXXXXX         ",
        "  XXXXXXXXXXXXXXXXX          ",
        "   XXXXXXXXXXXXXXX           ",
        "    XXXXX   XXXXX            ",
        "     XX       XX             ",
        "     XX       XX             ",
        "     XXX      XXX            "
    ],
    cactusSmall1: [
        "   XX   ",
        "   XX   ",
        " X XX   ",
        " X XX X ",
        " X XX X ",
        " XXXXXX ",
        "   XX   ",
        "   XX   ",
        "   XX   ",
        "   XX   ",
        "   XX   ",
        "   XX   ",
        "   XX   ",
        "   XX   ",
        "   XX   "
    ],
    cactusSmall2: [
        "   XX        XX   ",
        "   XX        XX   ",
        " X XX      X XX   ",
        " X XX X    X XX X ",
        " X XX X    X XX X ",
        " XXXXXX    XXXXXX ",
        "   XX        XX   ",
        "   XX        XX   ",
        "   XX        XX   ",
        "   XX        XX   ",
        "   XX        XX   ",
        "   XX        XX   ",
        "   XX        XX   ",
        "   XX        XX   ",
        "   XX        XX   "
    ],
    cactusSmall3: [
        "   XX        XX        XX   ",
        "   XX        XX        XX   ",
        " X XX      X XX      X XX   ",
        " X XX X    X XX X    X XX X ",
        " X XX X    X XX X    X XX X ",
        " XXXXXX    XXXXXX    XXXXXX ",
        "   XX        XX        XX   ",
        "   XX        XX        XX   ",
        "   XX        XX        XX   ",
        "   XX        XX        XX   ",
        "   XX        XX        XX   ",
        "   XX        XX        XX   ",
        "   XX        XX        XX   ",
        "   XX        XX        XX   ",
        "   XX        XX        XX   "
    ],
    cactusLarge1: [
        "    XXX    ",
        "    XXX    ",
        "    XXX    ",
        " XX XXX    ",
        " XX XXX XX ",
        " XX XXX XX ",
        " XX XXX XX ",
        " XXXXXX XX ",
        "    XXX XX ",
        "    XXXXXX ",
        "    XXX    ",
        "    XXX    ",
        "    XXX    ",
        "    XXX    ",
        "    XXX    ",
        "    XXX    ",
        "    XXX    ",
        "    XXX    ",
        "    XXX    ",
        "    XXX    ",
        "    XXX    ",
        "    XXX    ",
        "    XXX    "
    ],
    cactusLarge2: [
        "    XXX            XXX    ",
        "    XXX            XXX    ",
        "    XXX            XXX    ",
        " XX XXX         XX XXX    ",
        " XX XXX XX      XX XXX XX ",
        " XX XXX XX      XX XXX XX ",
        " XX XXX XX      XX XXX XX ",
        " XXXXXX XX      XXXXXX XX ",
        "    XXX XX         XXX XX ",
        "    XXXXXX         XXXXXX ",
        "    XXX            XXX    ",
        "    XXX            XXX    ",
        "    XXX            XXX    ",
        "    XXX            XXX    ",
        "    XXX            XXX    ",
        "    XXX            XXX    ",
        "    XXX            XXX    ",
        "    XXX            XXX    ",
        "    XXX            XXX    ",
        "    XXX            XXX    ",
        "    XXX            XXX    ",
        "    XXX            XXX    ",
        "    XXX            XXX    "
    ],
    pterodactyl1: [
        "              XXXXX    ",
        "              XXXXXX   ",
        "              XXXXXXX  ",
        "    X         XXXXXXXX ",
        "   XX        XXXXXXXXXX",
        "  XXX       XXXXXXXXXXX",
        "  XXXXXXXXXXXXXXXXXXXXX",
        "   XXXXXXXXXXXXXXXXXXX ",
        "    XXXXXXXXXXXXXXXXX  ",
        "     XXXXXXXXXXXXXXX   ",
        "      XXXXXXXXXXXX     ",
        "       XXXXXX          ",
        "        XXXX           ",
        "        XXXX           ",
        "         XX            "
    ],
    pterodactyl2: [
        "              XXXXX    ",
        "              XXXXXX   ",
        "              XXXXXXX  ",
        "              XXXXXXXX ",
        "             XXXXXXXXXX",
        "            XXXXXXXXXXX",
        "  XXXXXXXXXXXXXXXXXXXXX",
        "  XXXXXXXXXXXXXXXXXXXX ",
        "  XXXXXXXXXXXXXXXXXXX  ",
        "   XXXXXXXXXXXXXXXXX   ",
        "    XXXXXXXXXXXXXXX    ",
        "    XXXXXXXXXXXXBrowse     ",
        "   XXXXX  XXXXX        ",
        "  XXXX      XXXX       ",
        "  XX          XX       "
    ],
    cloud: [
        "          XXXX          ",
        "       XXXXXXXXXX       ",
        "     XXXXXXXXXXXXXX     ",
        "   XXXXXXXXXXXXXXXXXX   ",
        " XXXXXXXXXXXXXXXXXXXXXX ",
        "XXXXXXXXXXXXXXXXXXXXXXXX",
        " XXXXXXXXXXXXXXXXXXXXXX "
    ],
    moon: [
        "     XXXXXX     ",
        "   XXXXXXXXXX   ",
        "  XXXXX    XXX  ",
        " XXXXX      XX  ",
        " XXXX       XX  ",
        " XXXX           ",
        " XXXX           ",
        " XXXX       XX  ",
        " XXXXX      XX  ",
        "  XXXXX    XXX  ",
        "   XXXXXXXXXX   ",
        "     XXXXXX     "
    ],
    restart: [
        "      XXXXXXXX      ",
        "    XXXXXXXXXXXX    ",
        "   XXXX      XXXX   ",
        "  XXX          XXX  ",
        " XXX    XXXX    XXX ",
        " XXX   XXXXXX   XXX ",
        " XXX  XXXXXXXX      ",
        " XXX  XXXXXXXX      ",
        "  XXX  XXXXXX  XXX  ",
        "   XXXX  XX   XXXX  ",
        "    XXXXXXXXXXXX    ",
        "      XXXXXXXX      ",
        "          XX        ",
        "         XXXX       ",
        "        XXXXXX      "
    ]
};

// Cached Offscreen Canvases for High-Performance Pixel Rendering
const SpriteCache = {
    day: {},
    night: {},
    cloudDay: null,
    cloudNight: null
};

function initSpriteCache() {
    const pixelScale = 2;
    const colorDay = '#1e293b'; // Slate 800 - crisp on white background
    const colorNight = '#f8fafc'; // Crisp off-white for dark mode/night
    const cloudColorDay = '#cbd5e1';
    const cloudColorNight = '#334155';

    for (const [key, rows] of Object.entries(SPRITE_PATTERNS)) {
        const width = Math.max(...rows.map(r => r.length));
        const height = rows.length;

        // Day Sprite
        const cDay = document.createElement('canvas');
        cDay.width = width * pixelScale;
        cDay.height = height * pixelScale;
        const ctxDay = cDay.getContext('2d');
        ctxDay.fillStyle = colorDay;

        // Night Sprite
        const cNight = document.createElement('canvas');
        cNight.width = width * pixelScale;
        cNight.height = height * pixelScale;
        const ctxNight = cNight.getContext('2d');
        ctxNight.fillStyle = colorNight;

        for (let y = 0; y < height; y++) {
            const row = rows[y];
            for (let x = 0; x < row.length; x++) {
                if (row[x] === 'X') {
                    ctxDay.fillRect(x * pixelScale, y * pixelScale, pixelScale, pixelScale);
                    ctxNight.fillRect(x * pixelScale, y * pixelScale, pixelScale, pixelScale);
                }
            }
        }

        SpriteCache.day[key] = cDay;
        SpriteCache.night[key] = cNight;
    }

    // Cloud Canvases
    const cloudRows = SPRITE_PATTERNS.cloud;
    const cW = Math.max(...cloudRows.map(r => r.length)) * pixelScale;
    const cH = cloudRows.length * pixelScale;

    const clDay = document.createElement('canvas');
    clDay.width = cW; clDay.height = cH;
    const clDayCtx = clDay.getContext('2d');
    clDayCtx.fillStyle = cloudColorDay;

    const clNight = document.createElement('canvas');
    clNight.width = cW; clNight.height = cH;
    const clNightCtx = clNight.getContext('2d');
    clNightCtx.fillStyle = cloudColorNight;

    for (let y = 0; y < cloudRows.length; y++) {
        const row = cloudRows[y];
        for (let x = 0; x < row.length; x++) {
            if (row[x] === 'X') {
                clDayCtx.fillRect(x * pixelScale, y * pixelScale, pixelScale, pixelScale);
                clNightCtx.fillRect(x * pixelScale, y * pixelScale, pixelScale, pixelScale);
            }
        }
    }
    SpriteCache.cloudDay = clDay;
    SpriteCache.cloudNight = clNight;
}

// =========================================================
// 2. BILINGUAL DICTIONARY & LOCALIZATION (TH / EN)
// =========================================================
let currentLang = localStorage.getItem('dino_lang') || 'th';

const I18N = {
    th: {
        appBadge: "AI GESTURE VISION • THAILAND x SINGAPORE",
        appTitle: "DINO AI JUMP",
        appSubtitle: "เกมวิ่งกระโดดสไตล์ Chrome Dino สั่งการด้วย AI Vision",
        appHighlight: "กระโดดตัวจริง = ไดโนเสาร์กระโดด!",
        statusReady: "READY",
        statusRunning: "PLAYING",
        statusPaused: "PAUSED",
        statusGameOver: "GAME OVER",
        levelText: "LEVEL",
        nextBoost: "Next",
        soundOn: "เปิด/ปิดเสียง (M)",
        soundOff: "ปิดเสียง (M)",
        fullscreen: "ขยายเต็มหน้าจอ (16:9 Fullscreen)",
        exitFullscreen: "ออกจากเต็มหน้าจอ (Exit Fullscreen)",
        hintSpace: "กระโดด",
        hintDuck: "หมอบหลบ",
        hintPause: "หยุดชั่วคราว",
        hintSound: "เปิด/ปิดเสียง",
        hintRestart: "เริ่มใหม่",
        hintFullscreen: "เต็มหน้าจอ",
        aiColTitle: "AI Vision & Control",
        camFps: "AI 30 FPS",
        camStandby: "STANDBY",
        camLive: "LIVE VISION",
        camOffline: "OFFLINE",
        camPrompt: "คลิกปุ่ม <b>Start Webcam & AI</b><br>เพื่อเปิดกล้องตรวจจับท่าทาง",
        jumpDetected: "⚡ JUMP DETECTED!",
        meterIdle: "🧍 แสดงท่าทางเพื่อวิ่ง",
        meterJump: "🦘 แสดงท่าทางเพื่อกระโดด",
        btnStartAi: "Start Webcam & AI",
        btnAiActive: "AI Camera Active",
        btnLoadingAi: "Loading AI Model...",
        btnJumpManual: "กระโดด (Jump)",
        btnPause: "พักเกม",
        btnResume: "เล่นต่อ",
        btnRestart: "เริ่มใหม่",
        activePlayerLabel: "ผู้เล่นปัจจุบัน:",
        sensitivityLabel: "⚡ ความไว AI (Sensitivity):",
        modelSummary: "🔗 ตั้งค่า Teachable Machine Model",
        modelPlaceholder: "วาง URL โมเดล Teachable Machine...",
        btnUpdateModel: "เชื่อมต่อ",
        scoreboardTitle: "📊 ตารางบันทึกคะแนนและสถิติ (Scoreboard)",
        scoreboardSubtitle: "เก็บบันทึกคะแนนแต่ละรอบ รวมคะแนนรายบุคคลและคะแนนรวมทั้งหมด (บันทึกชั่วคราวในรอบเซสชัน รีเซ็ตเมื่อรีเฟรชหน้าเว็บ)",
        btnClearRecords: "🗑️ ล้างประวัติทั้งหมด",
        kpiHighScore: "คะแนนสูงสุดในเซสชัน",
        kpiGrandTotal: "คะแนนรวมผู้เล่นทุกคน",
        kpiTotalRounds: "จำนวนรอบที่เล่นทั้งหมด",
        kpiActivePlayer: "ผู้เล่นปัจจุบัน",
        roundsUnit: "รอบ",
        selectPlayerLabel: "👤 เลือกผู้เล่น (Player 1-10):",
        tableIndividualTitle: "👤 สรุปคะแนนรายบุคคล (Individual Totals)",
        tableRoundTitle: "📜 ประวัติการเล่นแต่ละรอบ (Round History)",
        thPlayer: "ผู้เล่น",
        thRounds: "จำนวนรอบ",
        thBestScore: "คะแนนสูงสุด",
        thTotalScore: "คะแนนรวมสะสม",
        thAvgScore: "คะแนนเฉลี่ย",
        thStatus: "สถานะ",
        thRoundNum: "รอบที่",
        thRoundPlayer: "ผู้เล่น",
        thRoundScore: "คะแนนรอบนี้",
        thSpeedLevel: "ระดับความเร็ว",
        thSurvivalTime: "เวลาที่รอด",
        thTimestamp: "เวลาบันทึก",
        statusActive: "กำลังเล่น",
        statusStandby: "รอเล่น",
        emptyHistory: "ยังไม่มีประวัติการเล่นในเซสชันนี้ — เริ่มเล่นเพื่อบันทึกคะแนนรอบแรก!",
        footerText: "AI Gesture Dino Jump • Designed for Classroom & Workshop Interactions • Thailand 🇹🇭 x Singapore 🇸🇬",
        canvasStart: "PRESS SPACEBAR OR JUMP TO START",
        canvasSubtitle: "AI GESTURE VISION READY • THAILAND x SINGAPORE",
        canvasGameOver: "G A M E   O V E R",
        canvasReplay: "PRESS SPACEBAR OR TAP TO REPLAY",
        toastPaused: "⏸️ พักเกม",
        toastResumed: "▶️ เล่นต่อ",
        toastSoundOn: "🔊 เสียง: เปิด (ON)",
        toastSoundOff: "🔇 เสียง: ปิด (MUTED)",
        toastSpeedUp: "⚡ LEVEL {level}! ความเร็วไดโนเสาร์เพิ่มขึ้น!",
        toastPlayerSwitched: "👤 สลับไปยังผู้เล่น: {player}",
        toastCamConnected: "📷 เชื่อมต่อกล้อง AI สำเร็จ! กระโดดเพื่อเริ่มเล่น!",
        toastClearConfirm: "คุณต้องการล้างประวัติคะแนนในรอบเซสชันนี้ทั้งหมดใช่หรือไม่?",
        toastCleared: "🗑️ ล้างประวัติคะแนนเรียบร้อยแล้ว",
        toastRoundRecorded: "🏆 บันทึกคะแนนรอบที่ {round}: {score} แต้ม ({player})"
    },
    en: {
        appBadge: "AI GESTURE VISION • THAILAND x SINGAPORE",
        appTitle: "DINO AI JUMP",
        appSubtitle: "Chrome Dino AI Gesture Runner powered by Teachable Machine",
        appHighlight: "Real jump = Dino jumps in game!",
        statusReady: "READY",
        statusRunning: "PLAYING",
        statusPaused: "PAUSED",
        statusGameOver: "GAME OVER",
        levelText: "LEVEL",
        nextBoost: "Next",
        soundOn: "Mute Sound (M)",
        soundOff: "Unmute Sound (M)",
        fullscreen: "Fullscreen (16:9 Fullscreen)",
        exitFullscreen: "Exit Fullscreen (Exit Fullscreen)",
        hintSpace: "Jump",
        hintDuck: "Duck",
        hintPause: "Pause",
        hintSound: "Sound",
        hintRestart: "Restart",
        hintFullscreen: "Fullscreen",
        aiColTitle: "AI Vision & Control",
        camFps: "AI 30 FPS",
        camStandby: "STANDBY",
        camLive: "LIVE VISION",
        camOffline: "OFFLINE",
        camPrompt: "Click <b>Start Webcam & AI</b><br>to enable gesture camera",
        jumpDetected: "⚡ JUMP DETECTED!",
        meterIdle: "🧍 Pose to Run",
        meterJump: "🦘 Pose to Jump",
        btnStartAi: "Start Webcam & AI",
        btnAiActive: "AI Camera Active",
        btnLoadingAi: "Loading AI Model...",
        btnJumpManual: "Jump",
        btnPause: "Pause",
        btnResume: "Resume",
        btnRestart: "Restart",
        activePlayerLabel: "Active Player:",
        sensitivityLabel: "⚡ AI Sensitivity:",
        modelSummary: "🔗 Teachable Machine Model URL",
        modelPlaceholder: "Paste Teachable Machine model URL...",
        btnUpdateModel: "Connect",
        scoreboardTitle: "📊 Scoreboard & Session Records",
        scoreboardSubtitle: "Tracks round scores, individual aggregates, and total session score (Temporary session storage, resets on page refresh)",
        btnClearRecords: "🗑️ Clear All Records",
        kpiHighScore: "Session High Score",
        kpiGrandTotal: "Grand Total Score",
        kpiTotalRounds: "Total Rounds Played",
        kpiActivePlayer: "Active Player",
        roundsUnit: "rounds",
        selectPlayerLabel: "👤 Select Player (Player 1-10):",
        tableIndividualTitle: "👤 Individual Player Summary",
        tableRoundTitle: "📜 Round-by-Round History",
        thPlayer: "Player",
        thRounds: "Rounds",
        thBestScore: "Best Score",
        thTotalScore: "Total Score",
        thAvgScore: "Avg Score",
        thStatus: "Status",
        thRoundNum: "Round #",
        thRoundPlayer: "Player",
        thRoundScore: "Score",
        thSpeedLevel: "Speed Level",
        thSurvivalTime: "Survival Time",
        thTimestamp: "Time Recorded",
        statusActive: "Active",
        statusStandby: "Standby",
        emptyHistory: "No games recorded in this session yet — play a round to start tracking!",
        footerText: "AI Gesture Dino Jump • Designed for Classroom & Workshop Interactions • Thailand 🇹🇭 x Singapore 🇸🇬",
        canvasStart: "PRESS SPACEBAR OR JUMP TO START",
        canvasSubtitle: "AI GESTURE VISION READY • THAILAND x SINGAPORE",
        canvasGameOver: "G A M E   O V E R",
        canvasReplay: "PRESS SPACEBAR OR TAP TO REPLAY",
        toastPaused: "⏸️ Game Paused",
        toastResumed: "▶️ Resuming Game",
        toastSoundOn: "🔊 Sound: ON",
        toastSoundOff: "🔇 Sound: MUTED",
        toastSpeedUp: "⚡ LEVEL {level}! Dino speed increased!",
        toastPlayerSwitched: "👤 Switched to: {player}",
        toastCamConnected: "📷 AI Camera Connected! Jump to play!",
        toastClearConfirm: "Are you sure you want to clear all session records?",
        toastCleared: "🗑️ All session records cleared",
        toastRoundRecorded: "🏆 Round #{round} recorded: {score} pts ({player})"
    }
};

function setLanguage(lang) {
    currentLang = (lang === 'en') ? 'en' : 'th';
    localStorage.setItem('dino_lang', currentLang);

    // Update Language Switch UI
    const langSwitch = document.getElementById('langSwitch');
    const langLabelTh = document.getElementById('langSwitchLabelTh');
    const langLabelEn = document.getElementById('langSwitchLabelEn');

    if (langSwitch) {
        langSwitch.checked = (currentLang === 'en');
    }
    if (langLabelTh && langLabelEn) {
        langLabelTh.classList.toggle('active', currentLang === 'th');
        langLabelEn.classList.toggle('active', currentLang === 'en');
    }

    const t = I18N[currentLang];

    // Header
    const appBadge = document.getElementById('appBadgeText');
    if (appBadge) appBadge.textContent = t.appBadge;
    const appTitle = document.getElementById('appTitleText');
    if (appTitle) appTitle.textContent = t.appTitle;
    const appSub = document.getElementById('appSubtitleText');
    if (appSub) appSub.textContent = t.appSubtitle;
    const appHigh = document.getElementById('appHighlightText');
    if (appHigh) appHigh.textContent = t.appHighlight;

    // Hints
    const hintSpace = document.getElementById('hintSpaceText');
    if (hintSpace) hintSpace.textContent = t.hintSpace;
    const hintDuck = document.getElementById('hintDuckText');
    if (hintDuck) hintDuck.textContent = t.hintDuck;
    const hintPause = document.getElementById('hintPauseText');
    if (hintPause) hintPause.textContent = t.hintPause;
    const hintSound = document.getElementById('hintSoundText');
    if (hintSound) hintSound.textContent = t.hintSound;
    const hintRestart = document.getElementById('hintRestartText');
    if (hintRestart) hintRestart.textContent = t.hintRestart;
    const hintFullscreen = document.getElementById('hintFullscreenText');
    if (hintFullscreen) hintFullscreen.textContent = t.hintFullscreen;

    // AI Controls
    const aiColTitle = document.getElementById('aiColTitleText');
    if (aiColTitle) aiColTitle.textContent = t.aiColTitle;
    const camPrompt = document.getElementById('camPromptText');
    if (camPrompt) camPrompt.innerHTML = t.camPrompt;
    const jumpFlash = document.getElementById('jumpFlashIndicator');
    if (jumpFlash) jumpFlash.textContent = t.jumpDetected;

    // Meters labels
    const meterIdle = document.getElementById('meterName_Idle');
    if (meterIdle) meterIdle.textContent = t.meterIdle;
    const meterJump = document.getElementById('meterName_Jump');
    if (meterJump) meterJump.textContent = t.meterJump;

    // Buttons
    const btnStartAiText = document.getElementById('btnStartAiText');
    if (btnStartAiText && !isAiActive) btnStartAiText.textContent = t.btnStartAi;
    const btnJumpManual = document.getElementById('btnJumpManualText');
    if (btnJumpManual) btnJumpManual.textContent = t.btnJumpManual;
    const pauseBtnText = document.getElementById('pauseBtnText');
    if (pauseBtnText) pauseBtnText.textContent = isPaused ? t.btnResume : t.btnPause;
    const restartBtnText = document.getElementById('restartBtnText');
    if (restartBtnText) restartBtnText.textContent = t.btnRestart;

    // Active player & sensitivity
    const activePlayerLabel = document.getElementById('activePlayerLabelText');
    if (activePlayerLabel) activePlayerLabel.textContent = t.activePlayerLabel;
    const sensitivityLabel = document.getElementById('sensitivityLabelText');
    if (sensitivityLabel) sensitivityLabel.innerHTML = `<span>${t.sensitivityLabel}</span>`;
    const modelSummary = document.getElementById('modelSummaryText');
    if (modelSummary) modelSummary.textContent = t.modelSummary;
    const modelInput = document.getElementById('modelUrlInput');
    if (modelInput) modelInput.placeholder = t.modelPlaceholder;
    const btnUpdateModel = document.getElementById('btnUpdateModelText');
    if (btnUpdateModel) btnUpdateModel.textContent = t.btnUpdateModel;

    // Scoreboard
    const sbTitle = document.getElementById('scoreboardTitleText');
    if (sbTitle) sbTitle.textContent = t.scoreboardTitle;
    const sbSub = document.getElementById('scoreboardSubtitleText');
    if (sbSub) sbSub.textContent = t.scoreboardSubtitle;
    const btnClearRecords = document.getElementById('btnClearRecordsText');
    if (btnClearRecords) btnClearRecords.textContent = t.btnClearRecords;

    const kpiHigh = document.getElementById('kpiHighScoreLabel');
    if (kpiHigh) kpiHigh.textContent = t.kpiHighScore;
    const kpiGrand = document.getElementById('kpiGrandTotalLabel');
    if (kpiGrand) kpiGrand.textContent = t.kpiGrandTotal;
    const kpiRounds = document.getElementById('kpiTotalRoundsLabel');
    if (kpiRounds) kpiRounds.textContent = t.kpiTotalRounds;
    const kpiActive = document.getElementById('kpiActivePlayerLabel');
    if (kpiActive) kpiActive.textContent = t.kpiActivePlayer;

    const selectPlayerLabel = document.getElementById('selectPlayerLabelText');
    if (selectPlayerLabel) selectPlayerLabel.textContent = t.selectPlayerLabel;

    const tableIndTitle = document.getElementById('tableIndividualTitleText');
    if (tableIndTitle) tableIndTitle.textContent = t.tableIndividualTitle;
    const tableRoundTitle = document.getElementById('tableRoundTitleText');
    if (tableRoundTitle) tableRoundTitle.textContent = t.tableRoundTitle;

    // Table Headers
    const thPlayer = document.getElementById('thPlayer');
    if (thPlayer) thPlayer.textContent = t.thPlayer;
    const thRounds = document.getElementById('thRounds');
    if (thRounds) thRounds.textContent = t.thRounds;
    const thBest = document.getElementById('thBestScore');
    if (thBest) thBest.textContent = t.thBestScore;
    const thTotal = document.getElementById('thTotalScore');
    if (thTotal) thTotal.textContent = t.thTotalScore;
    const thAvg = document.getElementById('thAvgScore');
    if (thAvg) thAvg.textContent = t.thAvgScore;
    const thStatus = document.getElementById('thStatus');
    if (thStatus) thStatus.textContent = t.thStatus;

    const thRoundNum = document.getElementById('thRoundNum');
    if (thRoundNum) thRoundNum.textContent = t.thRoundNum;
    const thRoundPlayer = document.getElementById('thRoundPlayer');
    if (thRoundPlayer) thRoundPlayer.textContent = t.thRoundPlayer;
    const thRoundScore = document.getElementById('thRoundScore');
    if (thRoundScore) thRoundScore.textContent = t.thRoundScore;
    const thSpeed = document.getElementById('thSpeedLevel');
    if (thSpeed) thSpeed.textContent = t.thSpeedLevel;
    const thSurv = document.getElementById('thSurvivalTime');
    if (thSurv) thSurv.textContent = t.thSurvivalTime;
    const thTime = document.getElementById('thTimestamp');
    if (thTime) thTime.textContent = t.thTimestamp;

    const footer = document.getElementById('footerText');
    if (footer) footer.textContent = t.footerText;

    updateEscalationDisplay();
    renderScoreboards();
    drawGameFrame();
}

// =========================================================
// 3. THEME SYSTEM (DARK & LIGHT MODE SWITCH)
// =========================================================
let currentTheme = localStorage.getItem('dino_theme') || 'light';

function setTheme(theme) {
    currentTheme = (theme === 'dark') ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('dino_theme', currentTheme);

    const themeSwitch = document.getElementById('themeSwitch');
    const themeIconLight = document.getElementById('themeIconLight');
    const themeIconDark = document.getElementById('themeIconDark');

    if (themeSwitch) {
        themeSwitch.checked = (currentTheme === 'dark');
    }
    if (themeIconLight && themeIconDark) {
        themeIconLight.classList.toggle('active', currentTheme === 'light');
        themeIconDark.classList.toggle('active', currentTheme === 'dark');
    }

    drawGameFrame();
    showToast(currentTheme === 'dark' ? '🌙 Dark Mode Active' : '☀️ Light Mode Active');
}

// =========================================================
// 4. RETRO 8-BIT AUDIO SYNTHESIZER (WEB AUDIO API)
// =========================================================
let audioCtx = null;
let soundEnabled = localStorage.getItem('dino_sound_enabled') !== 'false';

function getAudioContext() {
    if (!audioCtx) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
}

function playJumpSound() {
    if (!soundEnabled) return;
    try {
        const ctx = getAudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(160, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(580, ctx.currentTime + 0.12);
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.12);
    } catch (e) {}
}

function playScoreSound() {
    if (!soundEnabled) return;
    try {
        const ctx = getAudioContext();
        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1.type = 'square';
        osc1.frequency.setValueAtTime(780, ctx.currentTime);
        gain1.gain.setValueAtTime(0.12, ctx.currentTime);
        gain1.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);
        osc1.connect(gain1);
        gain1.connect(ctx.destination);
        osc1.start();
        osc1.stop(ctx.currentTime + 0.08);

        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = 'square';
        osc2.frequency.setValueAtTime(1180, ctx.currentTime + 0.09);
        gain2.gain.setValueAtTime(0.12, ctx.currentTime + 0.09);
        gain2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.22);
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.start(ctx.currentTime + 0.09);
        osc2.stop(ctx.currentTime + 0.22);
    } catch (e) {}
}

function playLevelUpSound() {
    if (!soundEnabled) return;
    try {
        const ctx = getAudioContext();
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.07);
            gain.gain.setValueAtTime(0.12, ctx.currentTime + idx * 0.07);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + idx * 0.07 + 0.14);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(ctx.currentTime + idx * 0.07);
            osc.stop(ctx.currentTime + idx * 0.07 + 0.14);
        });
    } catch (e) {}
}

function playHitSound() {
    if (!soundEnabled) return;
    try {
        const ctx = getAudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(140, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(40, ctx.currentTime + 0.25);
        gain.gain.setValueAtTime(0.18, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.25);
    } catch (e) {}
}

// =========================================================
// 5. GAME ENGINE, PHYSICS & 30-SEC SPEED ESCALATION
// =========================================================
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const canvasContainer = document.getElementById('canvasContainer');
const hudScore = document.getElementById('hudScore');
const hudHiScore = document.getElementById('hudHiScore');
const hudPlayerName = document.getElementById('hudPlayerName');
const gameStatusPill = document.getElementById('gameStatusPill');
const gameStatusText = document.getElementById('gameStatusText');

const levelText = document.getElementById('levelText');
const timerText = document.getElementById('timerText');
const nextBoostText = document.getElementById('nextBoostText');
const levelUpBanner = document.getElementById('levelUpBanner');
const levelUpBannerText = document.getElementById('levelUpBannerText');

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 260;
const GROUND_Y = 225;

let isGameRunning = false;
let isGameOver = false;
let isPaused = false;
let animationFrameId = null;

let score = 0;
let sessionHighScore = 0;
let baseSpeed = 6.2;
let currentSpeed = baseSpeed;
let groundOffset = 0;
let runFrameTick = 0;

// 30-Second Escalation & Timing System
let roundElapsedTime = 0;
let lastFrameTime = 0;
let currentLevel = 1;

// Milestone Flash
let scoreMilestoneFlashing = false;
let scoreFlashTimer = 0;

// Night Mode Cycle (every 700 points)
let isNightMode = false;
const stars = [];

for (let i = 0; i < 22; i++) {
    stars.push({
        x: Math.random() * CANVAS_WIDTH,
        y: 15 + Math.random() * 100,
        size: Math.random() > 0.6 ? 2 : 1,
        blinkSpeed: 0.02 + Math.random() * 0.04,
        alpha: Math.random()
    });
}

// Ground bumps
const groundBumps = [];
for (let x = 0; x < 1600; x += 18) {
    const type = Math.floor(Math.random() * 6);
    groundBumps.push({ x, type });
}

// Clouds
const clouds = [
    { x: 180, y: 45, speedMult: 0.28 },
    { x: 480, y: 32, speedMult: 0.22 },
    { x: 740, y: 65, speedMult: 0.32 }
];

// Dino Player State
const dino = {
    x: 55,
    y: GROUND_Y - 44,
    width: 42,
    height: 44,
    duckWidth: 58,
    duckHeight: 32,
    dy: 0,
    gravity: 0.62,
    jumpPower: -11.5,
    isJumping: false,
    isDucking: false,
    legsFrame: 0
};

// Obstacles Array
let obstacles = [];
let nextObstacleDistance = 350;

function resetGame() {
    score = 0;
    roundElapsedTime = 0;
    currentLevel = 1;
    currentSpeed = baseSpeed;
    groundOffset = 0;
    runFrameTick = 0;
    lastFrameTime = performance.now();

    dino.y = GROUND_Y - dino.height;
    dino.dy = 0;
    dino.isJumping = false;
    dino.isDucking = false;
    dino.legsFrame = 0;
    obstacles = [];
    nextObstacleDistance = 350;
    isNightMode = false;
    canvasContainer.classList.remove('night-mode');

    isGameOver = false;
    isGameRunning = true;
    isPaused = false;

    updateScoreDisplay();
    updateEscalationDisplay();
    setGameStatus('running', I18N[currentLang].statusRunning);
    updatePauseButtonUI();
}

function updateScoreDisplay() {
    const formattedScore = String(Math.floor(score)).padStart(5, '0');
    const formattedHi = String(sessionHighScore).padStart(5, '0');
    hudScore.textContent = formattedScore;
    hudHiScore.textContent = `HI ${formattedHi}`;

    if (score > sessionHighScore) {
        sessionHighScore = Math.floor(score);
    }
}

function updateEscalationDisplay() {
    const t = I18N[currentLang];
    if (levelText) {
        levelText.textContent = `${t.levelText} ${currentLevel}`;
    }

    if (timerText) {
        const mins = String(Math.floor(roundElapsedTime / 60)).padStart(2, '0');
        const secs = String(Math.floor(roundElapsedTime % 60)).padStart(2, '0');
        timerText.textContent = `${mins}:${secs}`;
    }

    if (nextBoostText) {
        const secondsUntilNext = 30 - (Math.floor(roundElapsedTime) % 30);
        nextBoostText.textContent = `${t.nextBoost}: ${secondsUntilNext}s`;
    }
}

function triggerLevelUp() {
    playLevelUpSound();
    const t = I18N[currentLang];
    showLevelUpBanner(`SPEED UP! LEVEL ${currentLevel}`);
    showToast(t.toastSpeedUp.replace('{level}', currentLevel));
}

function showLevelUpBanner(text) {
    if (!levelUpBanner || !levelUpBannerText) return;
    levelUpBannerText.textContent = text;
    levelUpBanner.classList.remove('show');
    void levelUpBanner.offsetWidth;
    levelUpBanner.classList.add('show');
    setTimeout(() => {
        levelUpBanner.classList.remove('show');
    }, 1800);
}

function spawnObstacle() {
    const types = ['cactusSmall1', 'cactusSmall2'];
    if (score > 120 || currentLevel >= 2) types.push('cactusSmall3', 'cactusLarge1');
    if (score > 280 || currentLevel >= 3) types.push('cactusLarge2');
    if (score > 350 || currentLevel >= 3) types.push('pterodactyl');

    const chosen = types[Math.floor(Math.random() * types.length)];
    let obs = null;

    if (chosen === 'pterodactyl') {
        const heights = [
            GROUND_Y - 32, // Low
            GROUND_Y - 55, // Mid
            GROUND_Y - 80  // High
        ];
        const flyY = heights[Math.floor(Math.random() * heights.length)];
        obs = {
            type: 'pterodactyl',
            x: CANVAS_WIDTH + 20,
            y: flyY,
            width: 46,
            height: 30,
            frame: 0,
            frameTick: 0
        };
    } else {
        const sprite = SpriteCache.day[chosen];
        obs = {
            type: chosen,
            x: CANVAS_WIDTH + 20,
            y: GROUND_Y - sprite.height,
            width: sprite.width,
            height: sprite.height
        };
    }

    obstacles.push(obs);

    const minGap = 220 + currentSpeed * 12;
    const randomJitter = Math.random() * 190;
    nextObstacleDistance = minGap + randomJitter;
}

// Unified Jump Action
function handleJump() {
    getAudioContext();

    if (isGameOver) {
        resetGame();
        if (!animationFrameId) gameLoop();
        return;
    }

    if (!isGameRunning) {
        resetGame();
        gameLoop();
        playJumpSound();
        return;
    }

    if (isPaused) return;

    if (!dino.isJumping) {
        dino.dy = dino.jumpPower;
        dino.isJumping = true;
        dino.isDucking = false;
        playJumpSound();
    }
}

// Unified Duck Action
function handleDuck(ducking) {
    if (!isGameRunning || isGameOver || isPaused) return;
    dino.isDucking = ducking;
    if (ducking && dino.isJumping) {
        dino.dy += 8;
    }
}

// Game Over Handling
function handleGameOver() {
    isGameRunning = false;
    isGameOver = true;
    playHitSound();
    setGameStatus('gameover', I18N[currentLang].statusGameOver);

    recordRoundScore({
        player: currentPlayer,
        score: Math.floor(score),
        duration: Math.floor(roundElapsedTime),
        level: currentLevel,
        speed: currentSpeed.toFixed(1)
    });

    drawGameFrame();
}

function setGameStatus(state, label) {
    gameStatusPill.className = `status-pill ${state}`;
    gameStatusText.textContent = label;
}

// =========================================================
// 6. MAIN RENDERING LOOP
// =========================================================
function gameLoop() {
    if (!isGameRunning || isPaused) return;

    const now = performance.now();
    const dt = Math.min((now - lastFrameTime) / 1000, 0.1);
    lastFrameTime = now;

    updateGamePhysics(dt);
    drawGameFrame();

    animationFrameId = requestAnimationFrame(gameLoop);
}

function updateGamePhysics(dt) {
    roundElapsedTime += dt;

    // Check 30-Second Speed Escalation
    const calculatedLevel = Math.floor(roundElapsedTime / 30) + 1;
    if (calculatedLevel > currentLevel) {
        currentLevel = calculatedLevel;
        triggerLevelUp();
    }

    // Dynamic Speed Escalation
    currentSpeed = baseSpeed + (currentLevel - 1) * 1.25 + Math.min(score * 0.0012, 3.0);
    updateEscalationDisplay();

    // Dino Jump / Fall Physics
    if (dino.isJumping) {
        dino.dy += dino.gravity;
        dino.y += dino.dy;

        const currentStandY = GROUND_Y - dino.height;
        if (dino.y >= currentStandY) {
            dino.y = currentStandY;
            dino.dy = 0;
            dino.isJumping = false;
        }
    } else {
        dino.y = dino.isDucking ? (GROUND_Y - dino.duckHeight) : (GROUND_Y - dino.height);
    }

    // Running animation
    runFrameTick++;
    if (runFrameTick % 7 === 0) {
        dino.legsFrame = dino.legsFrame === 0 ? 1 : 0;
    }

    groundOffset = (groundOffset + currentSpeed) % 800;

    // Clouds
    clouds.forEach(cl => {
        cl.x -= currentSpeed * cl.speedMult;
        if (cl.x < -60) {
            cl.x = CANVAS_WIDTH + Math.random() * 80;
            cl.y = 25 + Math.random() * 65;
        }
    });

    // Night Mode Transition
    const cycle = Math.floor(score / 700);
    const night = (cycle % 2 === 1);
    if (night !== isNightMode) {
        isNightMode = night;
        if (isNightMode) {
            canvasContainer.classList.add('night-mode');
        } else {
            canvasContainer.classList.remove('night-mode');
        }
    }

    // Obstacles
    nextObstacleDistance -= currentSpeed;
    if (nextObstacleDistance <= 0) {
        spawnObstacle();
    }

    for (let i = obstacles.length - 1; i >= 0; i--) {
        const obs = obstacles[i];
        obs.x -= currentSpeed;

        if (obs.type === 'pterodactyl') {
            obs.frameTick++;
            if (obs.frameTick % 10 === 0) {
                obs.frame = obs.frame === 0 ? 1 : 0;
            }
        }

        const dW = dino.isDucking ? dino.duckWidth : dino.width;
        const dH = dino.isDucking ? dino.duckHeight : dino.height;
        const padX = 6;
        const padY = 5;

        if (
            dino.x + padX < obs.x + obs.width - padX &&
            dino.x + dW - padX > obs.x + padX &&
            dino.y + padY < obs.y + obs.height - padY &&
            dino.y + dH - padY > obs.y + padY
        ) {
            handleGameOver();
            return;
        }

        if (obs.x < -80) {
            obstacles.splice(i, 1);
        }
    }

    // Score Accumulation
    const prevScoreFloor = Math.floor(score);
    score += 0.15;
    const newScoreFloor = Math.floor(score);

    if (newScoreFloor > 0 && Math.floor(newScoreFloor / 100) > Math.floor(prevScoreFloor / 100)) {
        playScoreSound();
        triggerScoreMilestoneFlash();
    }

    updateScoreDisplay();
}

function triggerScoreMilestoneFlash() {
    hudScore.classList.add('flash');
    scoreMilestoneFlashing = true;
    clearTimeout(scoreFlashTimer);
    scoreFlashTimer = setTimeout(() => {
        hudScore.classList.remove('flash');
        scoreMilestoneFlashing = false;
    }, 1800);
}

// =========================================================
// 7. CANVAS DRAWING (ADAPTS TO DARK/LIGHT THEME & BILINGUAL)
// =========================================================
function drawGameFrame() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    const isThemeDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const effectiveNight = isNightMode || isThemeDark;

    const palette = effectiveNight ? SpriteCache.night : SpriteCache.day;
    const groundColor = effectiveNight ? '#cbd5e1' : '#334155';
    const textColor = effectiveNight ? '#f8fafc' : '#0f172a';
    const t = I18N[currentLang];

    // 1. Night Sky (Moon & Stars)
    if (isNightMode) {
        const moonSprite = palette.moon;
        ctx.drawImage(moonSprite, CANVAS_WIDTH - 120, 28);

        ctx.fillStyle = '#ffffff';
        stars.forEach(st => {
            st.alpha += st.blinkSpeed;
            const a = 0.35 + 0.65 * Math.abs(Math.sin(st.alpha));
            ctx.globalAlpha = a;
            ctx.fillRect(st.x, st.y, st.size, st.size);
        });
        ctx.globalAlpha = 1.0;
    }

    // 2. Clouds
    const cloudSprite = effectiveNight ? SpriteCache.cloudNight : SpriteCache.cloudDay;
    clouds.forEach(cl => {
        ctx.drawImage(cloudSprite, Math.round(cl.x), Math.round(cl.y));
    });

    // 3. Ground Line & Texture
    ctx.fillStyle = groundColor;
    ctx.fillRect(0, GROUND_Y, CANVAS_WIDTH, 1.5);

    groundBumps.forEach(b => {
        const drawX = ((b.x - groundOffset) % 1600 + 1600) % 1600 - 800;
        if (drawX >= -20 && drawX <= CANVAS_WIDTH + 20) {
            if (b.type === 1) {
                ctx.fillRect(drawX, GROUND_Y + 4, 3, 2);
            } else if (b.type === 2) {
                ctx.fillRect(drawX, GROUND_Y + 7, 6, 2);
                ctx.fillRect(drawX + 8, GROUND_Y + 9, 3, 2);
            } else if (b.type === 3) {
                ctx.fillRect(drawX, GROUND_Y + 3, 2, 3);
                ctx.fillRect(drawX + 3, GROUND_Y + 2, 2, 4);
                ctx.fillRect(drawX + 6, GROUND_Y + 3, 2, 3);
            } else if (b.type === 4) {
                ctx.fillRect(drawX, GROUND_Y + 12, 4, 2);
            }
        }
    });

    // 4. Obstacles
    obstacles.forEach(obs => {
        if (obs.type === 'pterodactyl') {
            const pSprite = obs.frame === 0 ? palette.pterodactyl1 : palette.pterodactyl2;
            ctx.drawImage(pSprite, Math.round(obs.x), Math.round(obs.y));
        } else {
            const sprite = palette[obs.type];
            if (sprite) {
                ctx.drawImage(sprite, Math.round(obs.x), Math.round(obs.y));
            }
        }
    });

    // 5. Dino Player
    let dinoSprite;
    if (isGameOver) {
        dinoSprite = palette.dinoCrash;
    } else if (dino.isJumping) {
        dinoSprite = palette.dinoJump;
    } else if (dino.isDucking) {
        dinoSprite = dino.legsFrame === 0 ? palette.dinoDuck1 : palette.dinoDuck2;
    } else if (!isGameRunning) {
        dinoSprite = palette.dinoStand;
    } else {
        dinoSprite = dino.legsFrame === 0 ? palette.dinoRun1 : palette.dinoRun2;
    }

    ctx.drawImage(dinoSprite, Math.round(dino.x), Math.round(dino.y));

    // 6. Game Over Overlay
    if (isGameOver) {
        ctx.fillStyle = textColor;
        ctx.font = '700 18px "Press Start 2P", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(t.canvasGameOver, CANVAS_WIDTH / 2, 95);

        const restartSprite = palette.restart;
        const btnX = Math.round(CANVAS_WIDTH / 2 - restartSprite.width / 2);
        const btnY = 120;
        ctx.drawImage(restartSprite, btnX, btnY);

        ctx.font = '700 14px "Chakra Petch", sans-serif';
        ctx.fillText(t.canvasReplay, CANVAS_WIDTH / 2, 180);
    }

    // 7. Ready / Waiting Screen
    if (!isGameRunning && !isGameOver) {
        ctx.fillStyle = textColor;
        ctx.font = '700 15px "Press Start 2P", monospace';
        ctx.textAlign = 'center';
        ctx.fillText(t.canvasStart, CANVAS_WIDTH / 2, 105);

        ctx.font = '600 13px "Chakra Petch", sans-serif';
        ctx.fillText(t.canvasSubtitle, CANVAS_WIDTH / 2, 140);
    }
}

// =========================================================
// 8. PLAYER 1-10 DROPDOWN & TEMPORARY SCOREBOARDS
// =========================================================
const PLAYERS = [
    'Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5',
    'Player 6', 'Player 7', 'Player 8', 'Player 9', 'Player 10'
];

let currentPlayer = 'Player 1';
let roundHistory = [];

function setCurrentPlayer(name) {
    if (!PLAYERS.includes(name)) return;
    currentPlayer = name;

    if (hudPlayerName) {
        hudPlayerName.textContent = name;
    }
    const kpiActivePlayer = document.getElementById('kpiActivePlayer');
    if (kpiActivePlayer) {
        kpiActivePlayer.textContent = name;
    }

    const selRight = document.getElementById('playerSelect');
    if (selRight && selRight.value !== name) selRight.value = name;

    const selScoreboard = document.getElementById('scoreboardPlayerSelect');
    if (selScoreboard && selScoreboard.value !== name) selScoreboard.value = name;

    const buttons = document.querySelectorAll('.player-num-btn');
    buttons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.player === name);
    });

    renderScoreboards();
    showToast(I18N[currentLang].toastPlayerSwitched.replace('{player}', name));
}

function recordRoundScore(data) {
    const record = {
        roundNum: roundHistory.length + 1,
        player: data.player,
        score: data.score,
        duration: data.duration,
        level: data.level,
        speed: data.speed,
        timeStr: new Date().toLocaleTimeString(currentLang === 'th' ? 'th-TH' : 'en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    };

    roundHistory.unshift(record);
    renderScoreboards();

    const t = I18N[currentLang];
    showToast(
        t.toastRoundRecorded
            .replace('{round}', record.roundNum)
            .replace('{score}', record.score)
            .replace('{player}', record.player)
    );
}

function clearSessionRecords() {
    const t = I18N[currentLang];
    if (confirm(t.toastClearConfirm)) {
        roundHistory = [];
        sessionHighScore = 0;
        updateScoreDisplay();
        renderScoreboards();
        showToast(t.toastCleared);
    }
}

function initPlayerSelectors() {
    // 1. Right Panel Dropdown
    const selRight = document.getElementById('playerSelect');
    if (selRight) {
        selRight.innerHTML = PLAYERS.map(p =>
            `<option value="${p}" ${p === currentPlayer ? 'selected' : ''}>${p}</option>`
        ).join('');

        selRight.addEventListener('change', (e) => {
            setCurrentPlayer(e.target.value);
        });
    }

    // 2. Scoreboard Section Dropdown
    const selScoreboard = document.getElementById('scoreboardPlayerSelect');
    if (selScoreboard) {
        selScoreboard.innerHTML = PLAYERS.map(p =>
            `<option value="${p}" ${p === currentPlayer ? 'selected' : ''}>${p}</option>`
        ).join('');

        selScoreboard.addEventListener('change', (e) => {
            setCurrentPlayer(e.target.value);
        });
    }

    // 3. Quick Numbered Buttons (1 to 10)
    const quickBox = document.getElementById('playerQuickButtons');
    if (quickBox) {
        quickBox.innerHTML = PLAYERS.map((p, idx) => `
            <button type="button" class="player-num-btn ${p === currentPlayer ? 'active' : ''}"
                data-player="${p}" title="${p}">
                ${idx + 1}
            </button>
        `).join('');

        quickBox.addEventListener('click', (e) => {
            const btn = e.target.closest('.player-num-btn');
            if (btn && btn.dataset.player) {
                setCurrentPlayer(btn.dataset.player);
            }
        });
    }
}

function renderScoreboards() {
    const t = I18N[currentLang];

    const grandTotalScore = roundHistory.reduce((sum, r) => sum + r.score, 0);
    const totalRounds = roundHistory.length;
    const maxScore = roundHistory.length > 0 ? Math.max(...roundHistory.map(r => r.score)) : 0;

    const kpiHighScore = document.getElementById('kpiHighScore');
    const kpiGrandTotal = document.getElementById('kpiGrandTotal');
    const kpiTotalRounds = document.getElementById('kpiTotalRounds');
    const kpiActivePlayer = document.getElementById('kpiActivePlayer');

    if (kpiHighScore) kpiHighScore.textContent = maxScore.toLocaleString();
    if (kpiGrandTotal) kpiGrandTotal.textContent = grandTotalScore.toLocaleString();
    if (kpiTotalRounds) kpiTotalRounds.textContent = `${totalRounds} ${t.roundsUnit}`;
    if (kpiActivePlayer) kpiActivePlayer.textContent = currentPlayer;

    const playerCountBadge = document.getElementById('playerCountBadge');
    if (playerCountBadge) playerCountBadge.textContent = `10 Players`;
    const roundCountBadge = document.getElementById('roundCountBadge');
    if (roundCountBadge) roundCountBadge.textContent = `${totalRounds} ${t.roundsUnit}`;

    // 2. Render Individual Player Summary Table for Player 1 - 10
    const playerSummaryBody = document.getElementById('playerSummaryTableBody');
    if (playerSummaryBody) {
        const playerStats = PLAYERS.map(p => {
            const pRounds = roundHistory.filter(r => r.player === p);
            const count = pRounds.length;
            const pTotal = pRounds.reduce((sum, r) => sum + r.score, 0);
            const pBest = count > 0 ? Math.max(...pRounds.map(r => r.score)) : 0;
            const pAvg = count > 0 ? Math.round(pTotal / count) : 0;
            return {
                name: p,
                rounds: count,
                best: pBest,
                total: pTotal,
                avg: pAvg,
                isCurrent: p === currentPlayer
            };
        });

        playerSummaryBody.innerHTML = playerStats.map(s => `
            <tr class="${s.isCurrent ? 'active-row' : ''}">
                <td>
                    <b>👤 ${s.name}</b>
                    ${s.isCurrent ? `<span class="status-badge current" style="margin-left: 8px;">${t.statusActive}</span>` : ''}
                </td>
                <td class="text-center">${s.rounds}</td>
                <td class="text-right score-bold">${s.best.toLocaleString()}</td>
                <td class="text-right score-bold" style="color: #059669;">${s.total.toLocaleString()}</td>
                <td class="text-right">${s.avg.toLocaleString()}</td>
                <td class="text-center">
                    <span class="status-badge ${s.isCurrent ? 'current' : 'waiting'}">
                        ${s.isCurrent ? t.statusActive : t.statusStandby}
                    </span>
                </td>
            </tr>
        `).join('');
    }

    // 3. Render Round-by-Round History Table
    const roundHistoryBody = document.getElementById('roundHistoryTableBody');
    if (roundHistoryBody) {
        if (roundHistory.length === 0) {
            roundHistoryBody.innerHTML = `
                <tr>
                    <td colspan="6" class="empty-state">
                        ${t.emptyHistory}
                    </td>
                </tr>
            `;
        } else {
            roundHistoryBody.innerHTML = roundHistory.map(r => `
                <tr>
                    <td class="text-center"><b>#${r.roundNum}</b></td>
                    <td>👤 ${r.player}</td>
                    <td class="text-right score-bold">${r.score.toLocaleString()}</td>
                    <td class="text-center">
                        <span class="status-badge current">Level ${r.level}</span>
                    </td>
                    <td class="text-center">⏱️ ${Math.floor(r.duration / 60)}m ${r.duration % 60}s</td>
                    <td class="text-right" style="color: var(--text-muted); font-size: 12px;">${r.timeStr}</td>
                </tr>
            `).join('');
        }
    }
}

// =========================================================
// 9. CONTROLS, FULLSCREEN & KEYBOARD HANDLERS
// =========================================================
function toggleFullscreen() {
    const arena = document.getElementById('arenaContainer');
    if (!arena) return;

    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
        if (arena.requestFullscreen) {
            arena.requestFullscreen();
        } else if (arena.webkitRequestFullscreen) {
            arena.webkitRequestFullscreen();
        } else if (arena.msRequestFullscreen) {
            arena.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}

function handleFullscreenChange() {
    const isFull = !!(document.fullscreenElement || document.webkitFullscreenElement);
    const fsBtn = document.getElementById('fullscreenBtn');
    const arena = document.getElementById('arenaContainer');
    const t = I18N[currentLang];

    if (fsBtn) {
        fsBtn.innerHTML = isFull ? '🗗' : '⛶';
        fsBtn.title = isFull ? t.exitFullscreen : t.fullscreen;
    }

    if (arena) {
        arena.classList.toggle('fullscreen-mode', isFull);
    }
    showToast(isFull ? '🖥️ Fullscreen Mode Active' : '🖥️ Exited Fullscreen');
}

document.addEventListener('fullscreenchange', handleFullscreenChange);
document.addEventListener('webkitfullscreenchange', handleFullscreenChange);

// Keyboard controls
window.addEventListener('keydown', (e) => {
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT')) {
        return;
    }

    if (e.code === 'Space' || e.code === 'ArrowUp' || e.code === 'KeyW') {
        e.preventDefault();
        handleJump();
    } else if (e.code === 'ArrowDown' || e.code === 'KeyS') {
        e.preventDefault();
        handleDuck(true);
    } else if (e.code === 'KeyP') {
        togglePause();
    } else if (e.code === 'KeyM') {
        toggleMute();
    } else if (e.code === 'KeyR') {
        resetGame();
        if (!animationFrameId) gameLoop();
    } else if (e.code === 'KeyF') {
        toggleFullscreen();
    }
});

window.addEventListener('keyup', (e) => {
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT')) return;
    if (e.code === 'ArrowDown' || e.code === 'KeyS') {
        handleDuck(false);
    }
});

// Canvas Click & Touch
canvas.addEventListener('click', () => {
    handleJump();
});

canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    handleJump();
}, { passive: false });

// Pause Toggle
function togglePause() {
    if (!isGameRunning || isGameOver) return;
    isPaused = !isPaused;
    updatePauseButtonUI();

    const t = I18N[currentLang];
    if (isPaused) {
        setGameStatus('paused', t.statusPaused);
        showToast(t.toastPaused);
    } else {
        lastFrameTime = performance.now();
        setGameStatus('running', t.statusRunning);
        showToast(t.toastResumed);
        gameLoop();
    }
}

function updatePauseButtonUI() {
    const pauseBtn = document.getElementById('pauseBtn');
    const pauseBtnText = document.getElementById('pauseBtnText');
    const pauseBtnIcon = document.getElementById('pauseBtnIcon');
    const t = I18N[currentLang];

    if (pauseBtn && pauseBtnText && pauseBtnIcon) {
        if (isPaused) {
            pauseBtn.classList.add('is-paused');
            pauseBtnIcon.textContent = '▶️';
            pauseBtnText.textContent = t.btnResume;
        } else {
            pauseBtn.classList.remove('is-paused');
            pauseBtnIcon.textContent = '⏸️';
            pauseBtnText.textContent = t.btnPause;
        }
    }
}

// Sound Mute Toggle
function toggleMute() {
    soundEnabled = !soundEnabled;
    localStorage.setItem('dino_sound_enabled', soundEnabled);
    updateSoundUI();
    const t = I18N[currentLang];
    showToast(soundEnabled ? t.toastSoundOn : t.toastSoundOff);
}

function updateSoundUI() {
    const soundBtn = document.getElementById('soundToggleBtn');
    const t = I18N[currentLang];
    if (soundBtn) {
        soundBtn.innerHTML = soundEnabled ? '🔊' : '🔇';
        soundBtn.title = soundEnabled ? t.soundOff : t.soundOn;
        if (soundEnabled) {
            soundBtn.classList.add('active');
        } else {
            soundBtn.classList.remove('active');
        }
    }
}

// Toast helper
let toastTimeout = null;
function showToast(msg) {
    let toast = document.getElementById('toastMsg');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toastMsg';
        toast.className = 'toast-msg';
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 2400);
}

// =========================================================
// 10. TEACHABLE MACHINE AI VISION & 16:9 EXPANDED WEBCAM
// =========================================================
const DEFAULT_MODEL_URL = "https://teachablemachine.withgoogle.com/models/as_xUOVpNm/";

let tmModel = null;
let tmWebcam = null;
let maxPredictions = 0;
let isAiActive = false;
let isModelLoading = false;

let prevJumpDetected = false;
let jumpSensitivity = parseFloat(localStorage.getItem('dino_ai_threshold') || '0.75');

// UI Elements for AI
const btnStartAi = document.getElementById('btnStartAi');
const btnStartAiText = document.getElementById('btnStartAiText');
const webcamContainer = document.getElementById('webcam-container');
const webcamViewport = document.getElementById('webcamViewport');
const camHudBadge = document.getElementById('camHudBadge');
const camStatusText = document.getElementById('camStatusText');
const jumpFlashIndicator = document.getElementById('jumpFlashIndicator');
const sensitivitySlider = document.getElementById('sensitivitySlider');
const sensitivityValDisplay = document.getElementById('sensitivityVal');
const modelUrlInput = document.getElementById('modelUrlInput');
const btnUpdateModel = document.getElementById('btnUpdateModel');
const meterList = document.getElementById('meterList');

// Sensitivity Slider Event
if (sensitivitySlider) {
    sensitivitySlider.value = Math.round(jumpSensitivity * 100);
    if (sensitivityValDisplay) sensitivityValDisplay.textContent = `${Math.round(jumpSensitivity * 100)}%`;
    sensitivitySlider.addEventListener('input', (e) => {
        jumpSensitivity = parseInt(e.target.value, 10) / 100;
        if (sensitivityValDisplay) sensitivityValDisplay.textContent = `${e.target.value}%`;
        localStorage.setItem('dino_ai_threshold', jumpSensitivity);
    });
}

// Stored Model URL
const savedUrl = localStorage.getItem('dino_tm_model_url') || DEFAULT_MODEL_URL;
if (modelUrlInput) {
    modelUrlInput.value = savedUrl;
}

// Start AI Webcam (Expanded 16:9 Viewport)
async function initAI(customUrl) {
    if (isModelLoading) return;

    let targetUrl = customUrl || (modelUrlInput ? modelUrlInput.value.trim() : '') || DEFAULT_MODEL_URL;
    if (!targetUrl.endsWith('/')) targetUrl += '/';

    isModelLoading = true;
    const t = I18N[currentLang];
    if (btnStartAi) {
        btnStartAi.disabled = true;
        if (btnStartAiText) btnStartAiText.textContent = t.btnLoadingAi;
    }
    if (camStatusText) camStatusText.textContent = 'LOADING';

    const modelURL = targetUrl + "model.json";
    const metadataURL = targetUrl + "metadata.json";

    try {
        tmModel = await tmImage.load(modelURL, metadataURL);
        maxPredictions = tmModel.getTotalClasses();

        // Setup Webcam in 16:9 Aspect Ratio (320x180), Mirrored
        const flip = true;
        tmWebcam = new tmImage.Webcam(320, 180, flip);
        await tmWebcam.setup();
        await tmWebcam.play();

        webcamContainer.innerHTML = '';
        webcamContainer.appendChild(tmWebcam.canvas);

        webcamViewport.classList.add('active');
        camHudBadge.className = 'cam-hud-badge live';
        if (camStatusText) camStatusText.textContent = t.camLive;

        if (btnStartAi) {
            if (btnStartAiText) btnStartAiText.textContent = t.btnAiActive;
            btnStartAi.classList.add('active');
            btnStartAi.disabled = false;
        }

        localStorage.setItem('dino_tm_model_url', targetUrl);
        isAiActive = true;
        isModelLoading = false;

        setupMeters(tmModel.getClassLabels());
        showToast(t.toastCamConnected);

        window.requestAnimationFrame(aiVisionLoop);

        if (!isGameRunning && !isGameOver) {
            resetGame();
            gameLoop();
        }

    } catch (error) {
        console.error('Failed to load Teachable Machine model', error);
        alert((currentLang === 'th' ? 'ไม่สามารถเชื่อมต่อโมเดล AI ได้ โปรดตรวจสอบ URL: ' : 'Failed to connect to AI model: ') + targetUrl);
        if (btnStartAi) {
            btnStartAi.disabled = false;
            if (btnStartAiText) btnStartAiText.textContent = t.btnStartAi;
            btnStartAi.classList.remove('active');
        }
        if (camHudBadge) camHudBadge.className = 'cam-hud-badge';
        if (camStatusText) camStatusText.textContent = t.camOffline;
        isModelLoading = false;
        isAiActive = false;
    }
}

function setupMeters(labels) {
    if (!meterList) return;
    meterList.innerHTML = '';
    const t = I18N[currentLang];

    labels.forEach(label => {
        const isJump = label.toLowerCase().includes('jump');
        const card = document.createElement('div');
        card.className = `meter-card ${isJump ? 'meter-jump' : 'meter-idle'}`;
        card.id = `meter_${label}`;

        const localizedName = isJump ? t.meterJump : t.meterIdle;

        card.innerHTML = `
            <div class="meter-labels">
                <span class="meter-class-name" id="meterName_${label}">
                    ${localizedName}
                </span>
                <span class="meter-pct" id="val_${label}">0%</span>
            </div>
            <div class="meter-bar-track">
                <div class="meter-bar-fill" id="bar_${label}"></div>
            </div>
        `;
        meterList.appendChild(card);
    });
}

async function aiVisionLoop() {
    if (!isAiActive) return;

    tmWebcam.update();
    await predictPose();
    window.requestAnimationFrame(aiVisionLoop);
}

async function predictPose() {
    if (!tmModel || !tmWebcam.canvas) return;

    const prediction = await tmModel.predict(tmWebcam.canvas);
    let jumpProb = 0;

    for (let i = 0; i < maxPredictions; i++) {
        const item = prediction[i];
        const pct = Math.round(item.probability * 100);
        const bar = document.getElementById(`bar_${item.className}`);
        const val = document.getElementById(`val_${item.className}`);
        const card = document.getElementById(`meter_${item.className}`);

        if (bar && val) {
            bar.style.width = `${pct}%`;
            val.textContent = `${pct}%`;
        }

        if (item.className.toLowerCase() === 'jump') {
            jumpProb = item.probability;
        }

        if (card) {
            if (item.probability > 0.6) {
                card.classList.add('active-class');
            } else {
                card.classList.remove('active-class');
            }
        }
    }

    const isJumpActive = jumpProb >= jumpSensitivity;

    if (isJumpActive && !prevJumpDetected) {
        handleJump();

        webcamViewport.classList.add('detected-jump');
        if (jumpFlashIndicator) jumpFlashIndicator.classList.add('active');
        setTimeout(() => {
            webcamViewport.classList.remove('detected-jump');
            if (jumpFlashIndicator) jumpFlashIndicator.classList.remove('active');
        }, 350);
    }

    prevJumpDetected = isJumpActive;
}

// =========================================================
// 11. EVENT LISTENERS & INITIALIZATION
// =========================================================
// Dual Switches: Language Toggle Switch
const langSwitch = document.getElementById('langSwitch');
const langLabelTh = document.getElementById('langSwitchLabelTh');
const langLabelEn = document.getElementById('langSwitchLabelEn');

if (langSwitch) {
    langSwitch.addEventListener('change', () => {
        setLanguage(langSwitch.checked ? 'en' : 'th');
    });
}
if (langLabelTh) {
    langLabelTh.addEventListener('click', () => setLanguage('th'));
}
if (langLabelEn) {
    langLabelEn.addEventListener('click', () => setLanguage('en'));
}

// Dual Switches: Theme Toggle Switch (Dark / Light Mode)
const themeSwitch = document.getElementById('themeSwitch');
const themeIconLight = document.getElementById('themeIconLight');
const themeIconDark = document.getElementById('themeIconDark');

if (themeSwitch) {
    themeSwitch.addEventListener('change', () => {
        setTheme(themeSwitch.checked ? 'dark' : 'light');
    });
}
if (themeIconLight) {
    themeIconLight.addEventListener('click', () => setTheme('light'));
}
if (themeIconDark) {
    themeIconDark.addEventListener('click', () => setTheme('dark'));
}

// Clear Records Button
const btnClearRecords = document.getElementById('btnClearRecords');
if (btnClearRecords) {
    btnClearRecords.addEventListener('click', clearSessionRecords);
}

// Fullscreen Button
const fullscreenBtn = document.getElementById('fullscreenBtn');
if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', toggleFullscreen);
}

// Model URL Update Button
if (btnUpdateModel) {
    btnUpdateModel.addEventListener('click', () => {
        const url = modelUrlInput.value.trim();
        if (!url) {
            alert(currentLang === 'th' ? 'โปรดใส่ URL ของโมเดล Teachable Machine' : 'Please enter a valid Teachable Machine URL');
            return;
        }
        initAI(url);
    });
}

// Start AI Button
if (btnStartAi) {
    btnStartAi.addEventListener('click', () => {
        initAI();
    });
}

// Sound Toggle Button
const soundToggleBtn = document.getElementById('soundToggleBtn');
if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', toggleMute);
}

// Pause Toggle Button
const pauseBtn = document.getElementById('pauseBtn');
if (pauseBtn) {
    pauseBtn.addEventListener('click', togglePause);
}

// Restart Button
const restartBtn = document.getElementById('restartBtn');
if (restartBtn) {
    restartBtn.addEventListener('click', () => {
        resetGame();
        if (!animationFrameId) gameLoop();
    });
}

// DOM Ready Initialization
window.addEventListener('DOMContentLoaded', () => {
    initSpriteCache();
    initPlayerSelectors();
    setTheme(currentTheme);
    setLanguage(currentLang);
    updateScoreDisplay();
    updateEscalationDisplay();
    updateSoundUI();
    updatePauseButtonUI();
    renderScoreboards();

    drawGameFrame();
});
