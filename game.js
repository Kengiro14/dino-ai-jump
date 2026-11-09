/**
 * AI GESTURE JUMP : CHROME DINO RUNNER EDITION
 * Complete Game Engine, Pixel Art Sprite Generator, Web Audio Synthesizer,
 * Day/Night Cycle, and Teachable Machine AI Gesture Vision.
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
        "    XXXXXXXXXXXXX      ",
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

// Cached Offscreen Canvases for 60-120fps Rendering
const SpriteCache = {
    day: {},
    night: {},
    cloudDay: null,
    cloudNight: null
};

function initSpriteCache() {
    const pixelScale = 2;
    const colorDay = '#535353';
    const colorNight = '#e8eaed';
    const cloudColorDay = '#d3d3d3';
    const cloudColorNight = '#3c4043';

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

    // Custom Cloud Canvases
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
// 2. RETRO 8-BIT AUDIO SYNTHESIZER (WEB AUDIO API)
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
    } catch (e) {
        console.warn('Audio play failed', e);
    }
}

function playScoreSound() {
    if (!soundEnabled) return;
    try {
        const ctx = getAudioContext();
        // Tone 1
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

        // Tone 2
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
// 3. GAME ENGINE & LOGIC
// =========================================================
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const canvasContainer = document.getElementById('canvasContainer');
const hudScore = document.getElementById('hudScore');
const hudHiScore = document.getElementById('hudHiScore');
const gameStatusPill = document.getElementById('gameStatusPill');
const gameStatusText = document.getElementById('gameStatusText');

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 250;
const GROUND_Y = 215;

let isGameRunning = false;
let isGameOver = false;
let isPaused = false;
let animationFrameId = null;

let score = 0;
let highScore = parseInt(localStorage.getItem('chrome_dino_ai_hi_score') || '0', 10);
let baseSpeed = 6.5;
let currentSpeed = baseSpeed;
let groundOffset = 0;
let runFrameTick = 0;

// Milestone Flash Tracking
let scoreMilestoneFlashing = false;
let scoreFlashTimer = 0;

// Night Mode Cycle (every 700 points)
let isNightMode = false;
const stars = [];

for (let i = 0; i < 18; i++) {
    stars.push({
        x: Math.random() * CANVAS_WIDTH,
        y: 20 + Math.random() * 90,
        size: Math.random() > 0.6 ? 2 : 1,
        blinkSpeed: 0.02 + Math.random() * 0.04,
        alpha: Math.random()
    });
}

// Seamless Ground Pattern
const groundBumps = [];
for (let x = 0; x < 1600; x += 18) {
    const type = Math.floor(Math.random() * 6);
    groundBumps.push({ x, type });
}

// Clouds
const clouds = [
    { x: 200, y: 50, speedMult: 0.3 },
    { x: 500, y: 35, speedMult: 0.25 },
    { x: 750, y: 70, speedMult: 0.35 }
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
    legsFrame: 0 // 0 or 1
};

// Obstacles Array
let obstacles = [];
let nextObstacleDistance = 300;

function resetGame() {
    score = 0;
    currentSpeed = baseSpeed;
    groundOffset = 0;
    runFrameTick = 0;
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
    setGameStatus('running', 'PLAYING');
}

function updateScoreDisplay() {
    const formattedScore = String(Math.floor(score)).padStart(5, '0');
    const formattedHi = String(highScore).padStart(5, '0');
    hudScore.textContent = formattedScore;
    hudHiScore.textContent = `HI ${formattedHi}`;

    if (score > highScore) {
        highScore = Math.floor(score);
        localStorage.setItem('chrome_dino_ai_hi_score', highScore);
    }
}

function spawnObstacle() {
    // Determine available obstacle types based on score
    const types = ['cactusSmall1', 'cactusSmall2'];
    if (score > 150) types.push('cactusSmall3', 'cactusLarge1');
    if (score > 350) types.push('cactusLarge2');
    if (score > 400) types.push('pterodactyl');

    const chosen = types[Math.floor(Math.random() * types.length)];
    let obs = null;

    if (chosen === 'pterodactyl') {
        // Pterodactyl flying at 3 heights: low (must jump), mid (can duck or jump), high (walk under)
        const heights = [
            GROUND_Y - 32,       // Low (jump required)
            GROUND_Y - 55,       // Mid (duck to avoid)
            GROUND_Y - 80        // High (can run under)
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

    // Dynamic gap based on current speed
    const minGap = 240 + currentSpeed * 14;
    const randomJitter = Math.random() * 200;
    nextObstacleDistance = minGap + randomJitter;
}

// Jump Action Trigger (Unified for Keyboard, Touch & AI)
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

// Duck Action Trigger
function handleDuck(ducking) {
    if (!isGameRunning || isGameOver || isPaused) return;
    dino.isDucking = ducking;
    if (ducking && dino.isJumping) {
        // Fast drop when ducking in midair
        dino.dy += 8;
    }
}

// Game Over Handling
function handleGameOver() {
    isGameRunning = false;
    isGameOver = true;
    playHitSound();
    setGameStatus('gameover', 'GAME OVER');

    // Draw Final Crash Frame
    drawGameFrame();
}

// Set Stage Status Badge
function setGameStatus(state, label) {
    gameStatusPill.className = `status-pill ${state}`;
    gameStatusText.textContent = label;
}

// =========================================================
// 4. MAIN RENDERING LOOP
// =========================================================
function gameLoop() {
    if (!isGameRunning || isPaused) return;

    updateGamePhysics();
    drawGameFrame();

    animationFrameId = requestAnimationFrame(gameLoop);
}

function updateGamePhysics() {
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

    // Running Step Animation Toggle
    runFrameTick++;
    if (runFrameTick % 7 === 0) {
        dino.legsFrame = dino.legsFrame === 0 ? 1 : 0;
    }

    // Speed Acceleration (up to max speed 13.5)
    currentSpeed = Math.min(baseSpeed + (score * 0.0035), 13.5);

    // Ground Offset
    groundOffset = (groundOffset + currentSpeed) % 800;

    // Clouds Parallax
    clouds.forEach(cl => {
        cl.x -= currentSpeed * cl.speedMult;
        if (cl.x < -60) {
            cl.x = CANVAS_WIDTH + Math.random() * 80;
            cl.y = 25 + Math.random() * 65;
        }
    });

    // Night Mode Transition (every 700 points)
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

    // Obstacles Movement & Spawning
    nextObstacleDistance -= currentSpeed;
    if (nextObstacleDistance <= 0) {
        spawnObstacle();
    }

    for (let i = obstacles.length - 1; i >= 0; i--) {
        const obs = obstacles[i];
        obs.x -= currentSpeed;

        // Pterodactyl Wing Animation
        if (obs.type === 'pterodactyl') {
            obs.frameTick++;
            if (obs.frameTick % 10 === 0) {
                obs.frame = obs.frame === 0 ? 1 : 0;
            }
        }

        // Collision Check (Forgiving Pixel Bounding Boxes)
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

        // Remove Off-Screen Obstacles
        if (obs.x < -80) {
            obstacles.splice(i, 1);
        }
    }

    // Score Accumulation
    const prevScoreFloor = Math.floor(score);
    score += 0.15;
    const newScoreFloor = Math.floor(score);

    // Milestone Event every 100 points
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
// 5. DRAWING ROUTINES (CANVAS RENDERING)
// =========================================================
function drawGameFrame() {
    // Clear canvas
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    const palette = isNightMode ? SpriteCache.night : SpriteCache.day;
    const groundColor = isNightMode ? '#e8eaed' : '#535353';
    const textColor = isNightMode ? '#e8eaed' : '#535353';

    // 1. Draw Night Sky Features (Moon & Stars)
    if (isNightMode) {
        // Moon
        const moonSprite = palette.moon;
        ctx.drawImage(moonSprite, CANVAS_WIDTH - 120, 28);

        // Stars
        ctx.fillStyle = '#ffffff';
        stars.forEach(st => {
            st.alpha += st.blinkSpeed;
            const a = 0.35 + 0.65 * Math.abs(Math.sin(st.alpha));
            ctx.globalAlpha = a;
            ctx.fillRect(st.x, st.y, st.size, st.size);
        });
        ctx.globalAlpha = 1.0;
    }

    // 2. Draw Clouds
    const cloudSprite = isNightMode ? SpriteCache.cloudNight : SpriteCache.cloudDay;
    clouds.forEach(cl => {
        ctx.drawImage(cloudSprite, Math.round(cl.x), Math.round(cl.y));
    });

    // 3. Draw Ground Line & Texture
    ctx.fillStyle = groundColor;
    ctx.fillRect(0, GROUND_Y, CANVAS_WIDTH, 1.5);

    // Moving ground bumps
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

    // 4. Draw Obstacles
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

    // 5. Draw Dino Player
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

    // 6. Draw Game Over Overlay
    if (isGameOver) {
        // Pixel Game Over Text
        ctx.fillStyle = textColor;
        ctx.font = '700 18px "Press Start 2P", monospace';
        ctx.textAlign = 'center';
        ctx.fillText('G A M E   O V E R', CANVAS_WIDTH / 2, 100);

        // Circular Replay Button
        const restartSprite = palette.restart;
        const btnX = Math.round(CANVAS_WIDTH / 2 - restartSprite.width / 2);
        const btnY = 130;
        ctx.drawImage(restartSprite, btnX, btnY);

        ctx.font = '600 11px "Chakra Petch", sans-serif';
        ctx.fillText('PRESS SPACE OR TAP TO REPLAY', CANVAS_WIDTH / 2, 185);
    }

    // 7. Waiting Screen when Idle
    if (!isGameRunning && !isGameOver) {
        ctx.fillStyle = textColor;
        ctx.font = '700 15px "Press Start 2P", monospace';
        ctx.textAlign = 'center';
        ctx.fillText('PRESS SPACE OR JUMP TO START', CANVAS_WIDTH / 2, 110);

        ctx.font = '600 12px "Chakra Petch", sans-serif';
        ctx.fillText('AI GESTURE VISION READY • THAILAND x PHILIPPINES', CANVAS_WIDTH / 2, 140);
    }
}

// =========================================================
// 6. INPUT LISTENERS (KEYBOARD, TOUCH, CANVAS CLICK)
// =========================================================
window.addEventListener('keydown', (e) => {
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
    }
});

window.addEventListener('keyup', (e) => {
    if (e.code === 'ArrowDown' || e.code === 'KeyS') {
        handleDuck(false);
    }
});

// Canvas Click & Touch
canvas.addEventListener('click', (e) => {
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
    if (isPaused) {
        setGameStatus('paused', 'PAUSED');
        showToast('Game Paused');
    } else {
        setGameStatus('running', 'PLAYING');
        showToast('Resuming');
        gameLoop();
    }
}

// Sound Mute Toggle
function toggleMute() {
    soundEnabled = !soundEnabled;
    localStorage.setItem('dino_sound_enabled', soundEnabled);
    updateSoundUI();
    showToast(soundEnabled ? '🔊 Sound: ON' : '🔇 Sound: MUTED');
}

function updateSoundUI() {
    const soundBtn = document.getElementById('soundToggleBtn');
    if (soundBtn) {
        soundBtn.innerHTML = soundEnabled ? '🔊' : '🔇';
        soundBtn.title = soundEnabled ? 'Mute Sound (M)' : 'Unmute Sound (M)';
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
    }, 2200);
}

// =========================================================
// 7. TEACHABLE MACHINE AI VISION & WEBCAM INTEGRATION
// =========================================================
const DEFAULT_MODEL_URL = "https://teachablemachine.withgoogle.com/models/as_xUOVpNm/";

let tmModel = null;
let tmWebcam = null;
let maxPredictions = 0;
let isAiActive = false;
let isModelLoading = false;

// Edge detection debouncing state
let prevJumpDetected = false;
let jumpSensitivity = parseFloat(localStorage.getItem('dino_ai_threshold') || '0.75');

// UI Elements for AI
const btnStartAi = document.getElementById('btnStartAi');
const webcamContainer = document.getElementById('webcam-container');
const webcamViewport = document.getElementById('webcamViewport');
const camHudBadge = document.getElementById('camHudBadge');
const jumpFlashIndicator = document.getElementById('jumpFlashIndicator');
const sensitivitySlider = document.getElementById('sensitivitySlider');
const sensitivityValDisplay = document.getElementById('sensitivityVal');
const modelUrlInput = document.getElementById('modelUrlInput');
const btnUpdateModel = document.getElementById('btnUpdateModel');
const meterList = document.getElementById('meterList');

// Sensitivity Slider Event
if (sensitivitySlider) {
    sensitivitySlider.value = Math.round(jumpSensitivity * 100);
    sensitivityValDisplay.textContent = `${Math.round(jumpSensitivity * 100)}%`;
    sensitivitySlider.addEventListener('input', (e) => {
        jumpSensitivity = parseInt(e.target.value, 10) / 100;
        sensitivityValDisplay.textContent = `${e.target.value}%`;
        localStorage.setItem('dino_ai_threshold', jumpSensitivity);
    });
}

// Stored Model URL
const savedUrl = localStorage.getItem('dino_tm_model_url') || DEFAULT_MODEL_URL;
if (modelUrlInput) {
    modelUrlInput.value = savedUrl;
}

// Start AI Webcam Button Handler
async function initAI(customUrl) {
    if (isModelLoading) return;
    
    let targetUrl = customUrl || modelUrlInput.value.trim() || DEFAULT_MODEL_URL;
    if (!targetUrl.endsWith('/')) targetUrl += '/';

    isModelLoading = true;
    btnStartAi.disabled = true;
    btnStartAi.innerHTML = '⏳ Loading AI Model...';
    camHudBadge.innerHTML = '<span class="cam-dot"></span> LOADING';

    const modelURL = targetUrl + "model.json";
    const metadataURL = targetUrl + "metadata.json";

    try {
        // Load Teachable Machine Image Model
        tmModel = await tmImage.load(modelURL, metadataURL);
        maxPredictions = tmModel.getTotalClasses();

        // Setup Webcam
        const flip = true;
        tmWebcam = new tmImage.Webcam(240, 240, flip);
        await tmWebcam.setup();
        await tmWebcam.play();

        // Attach Webcam Canvas to Viewport
        webcamContainer.innerHTML = '';
        webcamContainer.appendChild(tmWebcam.canvas);

        webcamViewport.classList.add('active');
        camHudBadge.className = 'cam-hud-badge live';
        camHudBadge.innerHTML = '<span class="cam-dot"></span> LIVE VISION';

        btnStartAi.innerHTML = '✅ AI Camera Active';
        btnStartAi.classList.add('active');
        btnStartAi.disabled = false;

        localStorage.setItem('dino_tm_model_url', targetUrl);
        isAiActive = true;
        isModelLoading = false;

        // Create UI meters for classes
        setupMeters(tmModel.getClassLabels());

        showToast('AI Camera Connected! Jump to Play!');

        // Start prediction loop
        window.requestAnimationFrame(aiVisionLoop);

        // If game not yet started, kick off game
        if (!isGameRunning && !isGameOver) {
            resetGame();
            gameLoop();
        }

    } catch (error) {
        console.error('Failed to load Teachable Machine model', error);
        alert('Failed to connect to AI model. Please verify the URL: ' + targetUrl);
        btnStartAi.disabled = false;
        btnStartAi.innerHTML = '🚀 Start Webcam & AI';
        btnStartAi.classList.remove('active');
        camHudBadge.innerHTML = '<span class="cam-dot"></span> OFFLINE';
        isModelLoading = false;
        isAiActive = false;
    }
}

// Dynamic Meter Generator
function setupMeters(labels) {
    if (!meterList) return;
    meterList.innerHTML = '';

    labels.forEach(label => {
        const isJump = label.toLowerCase().includes('jump');
        const card = document.createElement('div');
        card.className = `meter-card ${isJump ? 'meter-jump' : 'meter-idle'}`;
        card.id = `meter_${label}`;

        card.innerHTML = `
            <div class="meter-labels">
                <span class="meter-class-name">
                    ${isJump ? '🦘' : '🧍'} ${label}
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

// Continuous AI Prediction Loop
async function aiVisionLoop() {
    if (!isAiActive) return;

    tmWebcam.update();
    await predictPose();
    window.requestAnimationFrame(aiVisionLoop);
}

// Predict classes and trigger Jump
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

        // Active class indicator
        if (card) {
            if (item.probability > 0.6) {
                card.classList.add('active-class');
            } else {
                card.classList.remove('active-class');
            }
        }
    }

    // Edge Detection Trigger: Trigger jump only on the RISING edge!
    const isJumpActive = jumpProb >= jumpSensitivity;

    if (isJumpActive && !prevJumpDetected) {
        // Trigger Jump Action!
        handleJump();

        // UI Glow Effects
        webcamViewport.classList.add('detected-jump');
        jumpFlashIndicator.classList.add('active');
        setTimeout(() => {
            webcamViewport.classList.remove('detected-jump');
            jumpFlashIndicator.classList.remove('active');
        }, 350);
    }

    prevJumpDetected = isJumpActive;
}

// Model URL Update Button
if (btnUpdateModel) {
    btnUpdateModel.addEventListener('click', () => {
        const url = modelUrlInput.value.trim();
        if (!url) {
            alert('Please enter a valid Teachable Machine URL');
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

// =========================================================
// 8. INITIALIZATION ON PAGE LOAD
// =========================================================
window.addEventListener('DOMContentLoaded', () => {
    initSpriteCache();
    updateScoreDisplay();
    updateSoundUI();

    // Render Initial Ready Screen
    drawGameFrame();
});
