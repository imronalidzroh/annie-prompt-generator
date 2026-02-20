// ====================================================
// 🍌 GEMINI NANO BANANA — ANNIE AI INFLUENCER v5.1
// Mode: Ultra-Realistic Smartphone Photo
// Priority: Reference Lock > Realism > Quality
// Creativity: Disabled
// ====================================================

// ─────────────────────────────────────
// 🔒 SYSTEM PROMPT (COPAS UTUH)
// ─────────────────────────────────────
const SYSTEM_PROMPT = `You generate realistic adult human photos based STRICTLY on user's uploaded reference photo.
This is a REFERENCE-LOCKED generation. DO NOT invent, stylize, or redesign anything.

🔒 REFERENCE LOCK RULES (HIGHEST PRIORITY):
User will upload a reference photo. You MUST copy from that photo:
1. FACE: Use EXACT face from uploaded reference. Same person, identical features, no morphing.
2. OUTFIT: Copy outfit EXACTLY from uploaded reference. No redesign, no censorship, no modification.
3. BACKGROUND: Use EXACT background from uploaded reference. No replacement, no modification.
4. POSE: Apply new pose while keeping face, outfit, and background 100% IDENTICAL to reference.

1. FACE LOCK (HIGHEST PRIORITY)
Use ONLY the user-provided 3×3 face reference from uploaded photo.
Face geometry is ABSOLUTELY LOCKED - no changes allowed.
Allowed expressions: from user selection only.
Makeup is allowed but must not change facial structure.
No face morphing, no beautification, no western features.

2. BODY & POSE LOGIC
Body shape: slim with full, round, prominent bust — this is LOCKED from reference
Cleavage must be visibly full, round, and prominent when costume allows.
Do NOT flatten or reduce the bust. Maintain curvy yet slim proportions
No exaggeration, no deformation, no plastic curves.

3. OUTFIT → BODY RULE (STRICT)
Outfit must be IDENTICAL to user's uploaded reference photo.
Body appearance must follow outfit behavior:
Open neckline → natural cleavage visible, perfectly round.
Closed outfit → bust covered but rounded.
Fabric reacts naturally (stretch, folds, gravity).
Outfit redesign or censorship forbidden.

4. BACKGROUND INTEGRATION
Use ONLY user's uploaded background from reference photo.
Subject must match: scale, perspective, color temperature.
Real contact shadows required. No cut-out or pasted look.

5. LIGHTING & CAMERA
Natural ambient lighting. Global illumination. Soft realistic shadows.
Camera style follows user device selection.
No studio lighting, no harsh flash.

6. OUTPUT QUALITY
Ultra-clear. No blur. No noise. RAW photo realism. HD 4K`;

// ─────────────────────────────────────
// 🔒 LOCKED IDENTITY (NEVER CHANGES)
// ─────────────────────────────────────
const LOCKED_IDENTITY = {
    face: "use attached 3×3 face reference from uploaded photo, face geometry absolutely locked, identical facial features, same person, natural Indonesian beauty, no changes allowed",
    body: "natural adult female anatomy, hourglass body shape, slim curvy figure, soft weighted realistic bust, full round naturally prominent bust, cleavage clearly visible round firm and prominently protruding, do not flatten or reduce bust volume, natural feminine curves",
    skin: "real human skin texture, natural Indonesian warm skin tone, natural skin pores, not plastic, not airbrushed",
    outfit: "outfit must be 100% identical to uploaded reference photo, no modification, no redesign, no censorship",
    background: "background must be 100% identical to uploaded reference photo, no replacement, no modification",
    rule: "face, outfit, and body NEVER change regardless of pose, expression, or camera angle - all locked to uploaded reference"
};

// ─────────────────────────────────────
// 🚫 GLOBAL NEGATIVE (ALWAYS ON)
// ─────────────────────────────────────
const GLOBAL_NEGATIVE = "face morphing, different face, face inconsistency, changed outfit, outfit modification, outfit redesign, outfit censorship, changed background, background replacement, background modification, double eyelid, high nose bridge, sharp jawline, V-shape face, western features, exaggerated body, bolt-on chest, flat chest, CGI, 3D render, illustration, plastic skin, doll face, beauty filter, heavy makeup, contouring, fake lashes, studio lighting, pasted background, noise, deformed hands, extra fingers, blurry face, blurry body, soft focus on subject, out of focus subject, motion blur on face, airbrushed skin, smooth skin without pores";

// 🚫 VIDEO NEGATIVE (ALWAYS ON)
const VIDEO_NEGATIVE = "face drift, face morphing, different face, changed outfit, outfit modification, changed background, background replacement, exaggerated motion, stiff animation, morphing body, bad hands, extra fingers, teleporting, jump cut, robotic movement, CGI look, plastic skin, blurry face, blurry body, soft focus on subject, out of focus subject, motion blur on face";

// ====================================================
// 📸 REFERENCE IMAGE HELPER (810+ Images)
// ====================================================
// Location: referensi/ folder
// Categories: poses, angles, devices, mood, expressions, micro-poses, hairstyles, makeup
const REF_BASE_PATH = 'referensi/';

function getRefImage(category, id) {
    const folderMap = {
        'P': 'poses', 'A': 'angles', 'D': 'devices', 'M': 'mood',
        'E': 'expressions', 'MP': 'micro-poses', 'H': 'hairstyles', 'MK': 'makeup'
    };
    const prefix = id.match(/^[A-Z]+/);
    if (!prefix) return null;
    const folder = folderMap[prefix[0]];
    return folder ? `${REF_BASE_PATH}${folder}/${id}.jpg` : null;
}

// ====================================================
// 📸 POSES — 50 Options (🔥 = High Engagement)
// Tags: energy (low/med/high), type (standing/sitting/lying/action)
// ====================================================
const POSES = [
    // ── STANDING (13) ──
    { id: 'P01', name: 'Standing Relax', prompt: 'standing relaxed, weight on one leg, soft inviting posture, eyes gazing at camera warmly', energy: 'low', type: 'standing' },
    { id: 'P02', name: 'Standing Confident', prompt: 'standing confident, shoulders back, commanding presence, direct captivating eye contact', energy: 'med', type: 'standing' },
    { id: 'P03', name: 'Hands on Hips', prompt: 'hands on hips with attitude, body angled toward camera, sassy confident allure', energy: 'med', type: 'standing' },
    { id: 'P04', name: 'Arms Crossed', prompt: 'arms crossed under bust, cool confident stance, smoldering gaze at camera', energy: 'low', type: 'standing' },
    { id: 'P05', name: 'Leaning Wall', prompt: 'leaning against wall casually, head tilted, soft bedroom eyes looking at viewer', energy: 'low', type: 'standing' },
    { id: 'P06', name: '🔥 Over Shoulder', prompt: 'looking over shoulder toward camera, teasing glance, back curves visible, magnetic pull', energy: 'low', type: 'standing' },
    { id: 'P07', name: '🔥 Hair Touch', prompt: 'one hand running through hair sensually, soft feminine gesture, eyes locked on camera, wind caressing hair', energy: 'low', type: 'standing' },
    { id: 'P08', name: 'Side Profile Stand', prompt: 'standing side profile, elegant silhouette, jawline and curves highlighted, serene gaze forward', energy: 'low', type: 'standing' },
    { id: 'P09', name: 'Back View', prompt: 'back facing camera, glancing over shoulder with soft smile, body curve silhouette, inviting mystery', energy: 'low', type: 'standing' },
    { id: 'P10', name: 'Hugging Self', prompt: 'arms wrapped around self tenderly, cozy intimate gesture, vulnerable soft gaze at camera', energy: 'low', type: 'standing' },
    { id: 'P11', name: '🔥 Leaning Forward', prompt: 'leaning forward toward camera, cleavage naturally visible, close intimate distance, eyes drawing viewer in', energy: 'low', type: 'standing' },
    { id: 'P12', name: 'Hip Pop', prompt: 'one hip popped out, hand on waist, model confidence, fierce alluring gaze at lens', energy: 'med', type: 'standing' },
    { id: 'P13', name: '🔥 Against Door Frame', prompt: 'leaning against door frame, one arm raised, body elongated, intimate bedroom energy, eyes inviting', energy: 'low', type: 'standing' },

    // ── SITTING (12) ──
    { id: 'P14', name: 'Sitting Casual', prompt: 'sitting casual on chair, relaxed legs, warm soft gaze at camera, approachable charm', energy: 'low', type: 'sitting' },
    { id: 'P15', name: '🔥 Sitting Cross Leg', prompt: 'sitting with legs crossed elegantly, leaning back confidently, knowing smile, captivating presence', energy: 'low', type: 'sitting' },
    { id: 'P16', name: 'Sitting Floor Cozy', prompt: 'sitting on floor, knees drawn up, cozy intimate, chin resting softly, warm doe eyes at camera', energy: 'low', type: 'sitting' },
    { id: 'P17', name: '🔥 Edge of Bed', prompt: 'sitting on edge of bed, leaning forward slightly, intimate and personal, soft inviting gaze, vulnerable beauty', energy: 'low', type: 'sitting' },
    { id: 'P18', name: 'Kneeling Graceful', prompt: 'kneeling on floor, graceful feminine pose, hands resting on thighs, gentle upward gaze', energy: 'low', type: 'sitting' },
    { id: 'P19', name: '🔥 Cafe Table', prompt: 'sitting at cafe table, chin on hand, warm smile at camera as if talking to someone special, lifestyle intimate', energy: 'low', type: 'sitting' },
    { id: 'P20', name: 'Eating Drinking', prompt: 'holding cup close to lips with soft smile, peeking over rim at camera, cozy lifestyle moment', energy: 'low', type: 'sitting' },
    { id: 'P21', name: 'Sitting Window Sill', prompt: 'sitting on window sill, legs drawn up, bathed in natural light, dreamy contemplative gaze', energy: 'low', type: 'sitting' },
    { id: 'P22', name: '🔥 Floor Legs Out', prompt: 'sitting on floor, legs extended forward, leaning back on hands, body fully displayed, confident inviting', energy: 'low', type: 'sitting' },
    { id: 'P23', name: 'Sitting Stool', prompt: 'perched on bar stool, legs crossed elegantly, urban chic, playful side-glance at camera', energy: 'low', type: 'sitting' },
    { id: 'P24', name: '🔥 Sofa Relax', prompt: 'lounging on sofa, body relaxed and inviting, one arm on headrest, soft come-hither gaze', energy: 'low', type: 'sitting' },
    { id: 'P25', name: 'Steps Sitting', prompt: 'sitting on outdoor steps, street style casual, chin up, cool confident aura, editorial presence', energy: 'low', type: 'sitting' },

    // ── LYING (5) ──
    { id: 'P26', name: '🔥 Laying Side', prompt: 'lying on side, head propped on hand, body curves highlighted, soft intimate gaze up at camera, magnetic', energy: 'low', type: 'lying' },
    { id: 'P27', name: '🔥 Laying Back Look Up', prompt: 'lying on back, looking up at camera with tender longing eyes, hair spread beautifully, deeply intimate', energy: 'low', type: 'lying' },
    { id: 'P28', name: 'Laying Stomach', prompt: 'lying on stomach, chin resting on hands, feet up playfully, cute flirty gaze at camera', energy: 'low', type: 'lying' },
    { id: 'P29', name: 'Bed Stretch', prompt: 'stretching in bed, arms above head, just woke up glow, vulnerable natural beauty, soft lazy smile', energy: 'low', type: 'lying' },
    { id: 'P30', name: '🔥 Laying Pillow Hug', prompt: 'lying down hugging pillow softly, cozy and personal, eyes looking at camera as if sharing a secret', energy: 'low', type: 'lying' },

    // ── ACTION / HIGH ENGAGEMENT (10) ──
    { id: 'P31', name: '🔥 Selfie Hold', prompt: 'holding phone for selfie, one arm extended, looking at phone camera with irresistible smile, relatable charm', energy: 'low', type: 'action' },
    { id: 'P32', name: '🔥 Mirror Selfie', prompt: 'taking mirror selfie, phone visible, full body mirror reflection, confident checking-self-out energy', energy: 'low', type: 'action' },
    { id: 'P33', name: 'Mirror Check', prompt: 'checking self in mirror, turning slightly, candid caught-in-the-moment beauty, natural grace', energy: 'low', type: 'action' },
    { id: 'P34', name: 'Stretching Up', prompt: 'arms stretching upward, body elongated, morning energy glow, carefree joyful spirit', energy: 'med', type: 'action' },
    { id: 'P35', name: '🔥 Dancing', prompt: 'mid-dance movement, dynamic body flow, pure joyful energy, infectious happiness radiating from smile', energy: 'high', type: 'action' },
    { id: 'P36', name: 'Walking Toward Cam', prompt: 'walking confidently toward camera, mid-stride, runway energy, commanding attention with every step', energy: 'med', type: 'action' },
    { id: 'P37', name: 'Crouching Street', prompt: 'crouching down, knees bent, street style attitude, eyes sharp and magnetic, urban queen energy', energy: 'med', type: 'action' },
    { id: 'P38', name: '🔥 Jumping Joy', prompt: 'mid-jump, feet off ground, arms up, pure unfiltered joy, contagious happy energy, genuine laughter', energy: 'high', type: 'action' },
    { id: 'P39', name: '🔥 Twirling Skirt', prompt: 'twirling in place, skirt or dress flowing dynamically, magical cinematic spin, radiant smile', energy: 'high', type: 'action' },
    { id: 'P40', name: '🔥 Hair Flip', prompt: 'dramatic hair flip in motion, hair flowing mid-air, fierce confident energy, show-stopping moment', energy: 'high', type: 'action' },

    // ── MANJA / CUTE / SPOILED (10) ──
    { id: 'P41', name: '🔥 Cheek Poke', prompt: 'poking own cheek with index finger, head tilted, cute playful "aegyo" pose, lips slightly pouted, irresistible charm', energy: 'low', type: 'standing' },
    { id: 'P42', name: '🔥 Reaching Hug', prompt: 'arms reaching out toward camera, wanting a hug, big puppy eyes, clingy girlfriend vibe, POV perspective', energy: 'med', type: 'standing' },
    { id: 'P43', name: 'Tugging Sleeve', prompt: 'shyly tugging at own sleeve or collar, looking up through lashes, nervous cute energy, soft vulnerability', energy: 'low', type: 'standing' },
    { id: 'P44', name: '🔥 Kitten Paws', prompt: 'hands curled like paws near face, playful kitten pose, wide innocent eyes, sweet and spoiled', energy: 'med', type: 'standing' },
    { id: 'P45', name: 'Whining Pout', prompt: 'exaggerated cute pout, stomping one foot slightly, "buy me this" expression, spoiled princess vibe', energy: 'med', type: 'standing' },
    { id: 'P46', name: 'Chin on Knees', prompt: 'sitting curled up with chin resting on knees, looking up with big eyes, small and protected, adorable', energy: 'low', type: 'sitting' },
    { id: 'P47', name: '🔥 Peekaboo', prompt: 'peeking from behind hands covering face, playful surprise, giggling expression, candid fun', energy: 'med', type: 'action' },
    { id: 'P48', name: 'Lap Pillow Demand', prompt: 'lying down patting space beside her, demanding a cuddle, sleepy spoiled look, intimate invitation', energy: 'low', type: 'lying' },
    { id: 'P49', name: 'Grumpy Cute', prompt: 'crossing arms with puffed cheeks, pretending to be mad, cute angry "hmph" face, wanting attention', energy: 'low', type: 'standing' },
    { id: 'P50', name: '🔥 Heart Cheeks', prompt: 'making heart shape with hands pressed against cheeks, squishing face slightly, ultimate cute gesture', energy: 'med', type: 'standing' }
];

// ====================================================
// 📷 CAMERA ANGLES — 35 Options (🔥 = High Engagement)
// Tags: distance (close/medium/full/wide), height (eye/high/low/overhead)
// ====================================================
const ANGLES = [
    // ── EYE LEVEL (10) ──
    { id: 'A01', name: 'Eye Level Medium', prompt: 'eye level, medium shot waist up', distance: 'medium', height: 'eye' },
    { id: 'A02', name: '🔥 Eye Level Close', prompt: 'eye level, close-up shoulders and face, intimate distance', distance: 'close', height: 'eye' },
    { id: 'A03', name: 'Eye Level Full', prompt: 'eye level, full body head to toe', distance: 'full', height: 'eye' },
    { id: 'A04', name: '🔥 3/4 Portrait', prompt: 'three quarter view, classic portrait 45 degree, most flattering angle', distance: 'close', height: 'eye' },
    { id: 'A05', name: 'Profile Side', prompt: 'side profile angle, silhouette perspective', distance: 'medium', height: 'eye' },
    { id: 'A06', name: '🔥 Over Shoulder POV', prompt: 'over the shoulder viewer perspective, POV feeling, immersive', distance: 'close', height: 'eye' },
    { id: 'A07', name: 'Extreme Close Face', prompt: 'extreme close-up on face only, beauty detail shot', distance: 'close', height: 'eye' },
    { id: 'A08', name: 'Knee Up Medium', prompt: 'medium shot from knees up, casual frame', distance: 'medium', height: 'eye' },
    { id: 'A09', name: 'Symmetric Center', prompt: 'perfectly centered symmetrical composition', distance: 'medium', height: 'eye' },
    { id: 'A10', name: '🔥 Rule of Thirds', prompt: 'subject placed off-center, rule of thirds composition, editorial', distance: 'medium', height: 'eye' },

    // ── HIGH ANGLE (7) ──
    { id: 'A11', name: '🔥 Selfie Angle Above', prompt: 'slightly above selfie angle, arm extended, flattering perspective', distance: 'close', height: 'high' },
    { id: 'A12', name: 'Above Medium Shot', prompt: 'slightly above angle, medium shot flattering, looking up', distance: 'medium', height: 'high' },
    { id: 'A13', name: '🔥 Bird Eye View', prompt: 'birds eye view, top down overhead angle, dramatic', distance: 'full', height: 'overhead' },
    { id: 'A14', name: '🔥 Looking Down Into', prompt: 'high angle looking down into subject, intimate overhead, eyes looking up', distance: 'close', height: 'overhead' },
    { id: 'A15', name: 'Staircase Above', prompt: 'shot from above on staircase, subject looking up, geometric', distance: 'full', height: 'overhead' },
    { id: 'A16', name: '🔥 Boyfriend POV', prompt: 'boyfriend perspective looking down at girlfriend, intimate POV from above', distance: 'close', height: 'high' },
    { id: 'A17', name: 'Drone Low Hover', prompt: 'drone level low hover, slightly elevated wide angle, cinematic', distance: 'wide', height: 'high' },

    // ── LOW ANGLE (6) ──
    { id: 'A18', name: '🔥 Low Angle Power', prompt: 'low angle looking up, powerful dominant perspective, legs visible', distance: 'full', height: 'low' },
    { id: 'A19', name: 'Low Angle Medium', prompt: 'low angle, waist up from below, dramatic', distance: 'medium', height: 'low' },
    { id: 'A20', name: 'Worm Eye View', prompt: 'worm eye view from ground level looking up, extreme drama', distance: 'full', height: 'low' },
    { id: 'A21', name: '🔥 Floor Level', prompt: 'camera on floor level, subject standing or walking, fashion editorial', distance: 'full', height: 'low' },
    { id: 'A22', name: 'Low Behind', prompt: 'low angle from behind, looking over shoulder down at camera', distance: 'medium', height: 'low' },
    { id: 'A23', name: '🔥 Shoe Level Street', prompt: 'ultra-low shoe level, street fashion perspective, urbancore', distance: 'full', height: 'low' },

    // ── CREATIVE / DYNAMIC (12) ──
    { id: 'A24', name: '🔥 Dutch Tilt', prompt: 'dutch angle tilted camera 15-30 degree, dynamic creative, edgy', distance: 'medium', height: 'eye' },
    { id: 'A25', name: '🔥 Through Window', prompt: 'shot through window or glass, voyeuristic intimate feel, reflections', distance: 'medium', height: 'eye' },
    { id: 'A26', name: 'Mirror Reflection', prompt: 'through mirror reflection, indirect angle, creative composition', distance: 'full', height: 'eye' },
    { id: 'A27', name: '🔥 Candid Behind', prompt: 'shot from behind at angle, candid unposed feel, natural moment', distance: 'medium', height: 'eye' },
    { id: 'A28', name: '🔥 Tight Crop Torso', prompt: 'tight crop from neck to waist, outfit and body detail focus', distance: 'close', height: 'eye' },
    { id: 'A29', name: 'Wide Establishing', prompt: 'wide establishing shot, subject in environment context, cinematic', distance: 'wide', height: 'eye' },
    { id: 'A30', name: '🔥 Between Objects', prompt: 'camera peaking between objects (plants/curtains/doorway), framed subject', distance: 'medium', height: 'eye' },
    { id: 'A31', name: 'Extreme Close Lips', prompt: 'extreme close-up on lips and chin area, beauty macro', distance: 'close', height: 'eye' },
    { id: 'A32', name: '🔥 Through Legs', prompt: 'creative shot framed through blurred foreground elements, depth layers', distance: 'medium', height: 'eye' },
    { id: 'A33', name: 'Split Body Crop', prompt: 'creative crop cutting out top of head, focus on eyes down to chest', distance: 'close', height: 'eye' },
    { id: 'A34', name: '🔥 Phone Screen POV', prompt: 'as if viewing through phone screen, UI elements implied, social media feel', distance: 'close', height: 'eye' },
    { id: 'A35', name: '🔥 Reflection Puddle', prompt: 'shot including reflection in water puddle or wet surface, artistic', distance: 'full', height: 'low' },

    // ── DYNAMIC / POV VARIATIONS (5) ──
    { id: 'A36', name: '🔥 Tilted High', prompt: 'high angle tilted 45 degrees, dynamic selfie style, emphasizing eyes and outfit', distance: 'close', height: 'high' },
    { id: 'A37', name: 'Wide Fisheye', prompt: 'fisheye lens effect, center distortion, 90s music video vibe, fun and edgy', distance: 'close', height: 'eye' },
    { id: 'A38', name: 'GoPro Chest', prompt: 'ultra-wide angle from chest height, immersive action cam look, candid reality', distance: 'medium', height: 'eye' },
    { id: 'A39', name: 'Backwards Selfie', prompt: 'shooting over own shoulder into a mirror, seeing phone screen and face output, meta composition', distance: 'medium', height: 'eye' },
    { id: 'A40', name: '🔥 Ground Up Skirt', prompt: 'camera placed on ground looking up at dress/skirt movement, dramatic fashion angle, swirling fabric', distance: 'full', height: 'low' }
];

// ====================================================
// 📱 DEVICES — 22 Options
// Tags: style (phone/dslr/mirrorless/action/film/cctv)
// ====================================================
const DEVICES = [
    { id: 'D01', name: 'iPhone 17 Pro Max', prompt: 'iPhone 17 Pro Max, 24mm wide lens, handheld candid', style: 'phone' },
    { id: 'D02', name: 'iPhone 16 Pro', prompt: 'iPhone 16 Pro, 24mm lens, natural smartphone photo', style: 'phone' },
    { id: 'D03', name: 'Samsung S25 Ultra', prompt: 'Samsung Galaxy S25 Ultra, 23mm wide lens, vivid color', style: 'phone' },
    { id: 'D04', name: 'Google Pixel 9 Pro', prompt: 'Google Pixel 9 Pro, natural processing, true-to-life color', style: 'phone' },
    { id: 'D05', name: 'Xiaomi 14 Ultra', prompt: 'Xiaomi 14 Ultra, Leica lens, warm natural tone', style: 'phone' },
    { id: 'D06', name: 'OPPO Find X8', prompt: 'OPPO Find X8, Hasselblad color, natural portrait', style: 'phone' },
    { id: 'D07', name: 'Canon EOS R5', prompt: 'Canon EOS R5, 85mm f/1.4 portrait lens, shallow depth', style: 'dslr' },
    { id: 'D08', name: 'Sony A7R V', prompt: 'Sony A7R V, 50mm f/1.2 GM lens, cinematic', style: 'mirrorless' },
    { id: 'D09', name: 'Nikon Z9', prompt: 'Nikon Z9, 35mm f/1.4 lens, editorial photography', style: 'mirrorless' },
    { id: 'D10', name: 'Fujifilm X-T5', prompt: 'Fujifilm X-T5, 56mm f/1.2, film simulation, warm vintage', style: 'mirrorless' },
    { id: 'D11', name: 'Leica M11', prompt: 'Leica M11, 50mm Summilux, classic rangefinder look', style: 'mirrorless' },
    { id: 'D12', name: 'Hasselblad X2D', prompt: 'Hasselblad X2D, medium format, extreme detail and clarity', style: 'mirrorless' },
    { id: 'D13', name: 'GoPro Hero 12', prompt: 'GoPro Hero 12, ultra wide fisheye, action cam POV', style: 'action' },
    { id: 'D14', name: 'DJI Pocket 3', prompt: 'DJI Pocket 3, stabilized handheld, vlog perspective', style: 'action' },
    { id: 'D15', name: 'Polaroid Now+', prompt: 'Polaroid instant camera, faded borders, retro feel', style: 'film' },
    { id: 'D16', name: 'Disposable Camera', prompt: 'disposable camera photo, flash pop, grain texture, 90s aesthetic', style: 'film' },
    { id: 'D17', name: 'Kodak Gold 200', prompt: 'shot on Kodak Gold 200 film, warm golden tones, film grain', style: 'film' },
    { id: 'D18', name: 'Fuji Superia 400', prompt: 'shot on Fuji Superia 400, cool tones, nostalgic film look', style: 'film' },
    { id: 'D19', name: 'CCTV/Security Cam', prompt: 'CCTV security camera angle, wide distortion, surveillance look', style: 'cctv' },
    { id: 'D20', name: 'Ring Doorbell', prompt: 'ring doorbell camera, wide angle, fisheye distortion from above', style: 'cctv' },
    { id: 'D21', name: 'Webcam Laptop', prompt: 'laptop webcam angle, slightly above, low quality casual', style: 'cctv' },
    { id: 'D22', name: 'Canon AE-1', prompt: 'Canon AE-1 35mm film, 50mm f/1.4, cinematic grain, classic analog', style: 'film' }
];

// ====================================================
// 🌤️ MOODS — 22 Options
// Tags: energy (calm/warm/bright/dark/intense), time (morning/day/evening/night/any)
// ====================================================
const MOODS = [
    { id: 'M00', name: '🔒 Follow Background', prompt: 'match lighting and color temperature exactly from the uploaded background image, read the ambient light direction shadows and tones from the scene, do not override with any artistic lighting, natural scene-accurate illumination', energy: 'any', time: 'any' },
    { id: 'M01', name: 'Warm Morning', prompt: 'warm morning light, gentle golden glow wrapping her softly, fresh intimate atmosphere, first light of day', energy: 'warm', time: 'morning' },
    { id: 'M02', name: 'Bright Daylight', prompt: 'bright natural daylight, clear sun highlighting every detail, vivid colors making her glow, alive and radiant', energy: 'bright', time: 'day' },
    { id: 'M03', name: 'Playful Sunny', prompt: 'playful sunny day, cheerful golden light dancing on skin, fun carefree energy, sun-kissed warmth', energy: 'bright', time: 'day' },
    { id: 'M04', name: 'Soft Overcast', prompt: 'soft overcast sky, diffused gentle light flattering every angle, muted romantic tones, effortless beauty', energy: 'calm', time: 'day' },
    { id: 'M05', name: 'Golden Hour', prompt: 'golden hour sunset, warm amber glow painting her skin gold, magic hour romance, breathtaking lighting', energy: 'warm', time: 'evening' },
    { id: 'M06', name: 'Soft Sunset', prompt: 'soft sunset colors, pastel pink orange sky behind her, romantic dreamy atmosphere, heart-melting beauty', energy: 'warm', time: 'evening' },
    { id: 'M07', name: 'Blue Hour', prompt: 'blue hour twilight, cool blue ambient creating mysterious allure, serene contemplative calm', energy: 'calm', time: 'evening' },
    { id: 'M08', name: 'Warm Ambient Glow', prompt: 'warm amber ambient glow, soft diffused light wrapping around subject, comfortable intimate lighting, personal moment feel', energy: 'warm', time: 'any' },
    { id: 'M09', name: 'Rainy Day', prompt: 'rainy day atmosphere, wet reflections adding depth, moody romantic overcast, contemplative beauty', energy: 'calm', time: 'day' },
    { id: 'M10', name: 'Chill Night', prompt: 'chill night atmosphere, dim ambient light creating intimate shadows, relaxed seductive vibe', energy: 'dark', time: 'night' },
    { id: 'M11', name: 'Neon Color Splash', prompt: 'colorful neon light reflections painting her face, electric pink blue green glow, vivid color contrast on skin, dramatic bold lighting', energy: 'intense', time: 'night' },
    { id: 'M12', name: 'Candlelight', prompt: 'candlelight warm glow, romantic flickering on skin, deeply intimate and personal, tender atmosphere', energy: 'warm', time: 'night' },
    { id: 'M13', name: 'Fairy Lights', prompt: 'fairy string lights bokeh, twinkling warm sparkles surrounding her, magical dreamy enchantment', energy: 'warm', time: 'night' },
    { id: 'M14', name: 'Moody Dark', prompt: 'moody dark atmosphere, deep dramatic shadows sculpting her features, mysterious intense contrast, cinematic', energy: 'dark', time: 'night' },
    { id: 'M15', name: 'Fresh Morning Dew', prompt: 'early morning dew, fresh crisp air, sunrise glow on dewy skin, new beginning energy, pure and alive', energy: 'calm', time: 'morning' },
    { id: 'M16', name: 'Vibrant Saturated', prompt: 'vibrant saturated bright light, vivid punchy colors, high color intensity, summer radiant warmth, lively energy', energy: 'bright', time: 'day' },
    { id: 'M17', name: 'Dreamy Haze', prompt: 'dreamy soft haze, ethereal glow wrapping her in light, lens flare magic, otherworldly beauty', energy: 'calm', time: 'any' },
    { id: 'M18', name: 'Even Soft Light', prompt: 'perfectly even soft lighting from all angles, no harsh shadows, every detail razor sharp, clean professional quality', energy: 'bright', time: 'any' },
    { id: 'M19', name: 'Directional Side Light', prompt: 'soft directional light from one side, gentle rays caressing her face, natural chiaroscuro, painting-like light quality', energy: 'warm', time: 'any' },
    { id: 'M20', name: 'Warm Pool Light', prompt: 'warm isolated pool of light in darkness, spotlight effect on subject, cinematic contrast, dramatic light and shadow', energy: 'dark', time: 'night' },
    { id: 'M21', name: 'Harsh Overhead', prompt: 'harsh overhead light casting sharp downward shadows, raw intense energy, strong contrast, powerful dramatic radiance', energy: 'intense', time: 'any' },
    { id: 'M22', name: 'Warm Tonal Ambient', prompt: 'warm tonal ambient lighting, soft golden undertones, cozy intimate atmosphere, gentle welcoming glow, romantic warmth', energy: 'warm', time: 'any' }
];

// ====================================================
// 😊 EXPRESSIONS — 22 Options
// Tags: intensity (subtle/medium/strong), vibe (happy/neutral/intense/soft/playful)
// ====================================================
const EXPRESSIONS = [
    { id: 'E01', name: 'Neutral Natural', prompt: 'neutral natural expression, calm knowing eyes looking through the lens, resting beauty, quiet magnetic presence', intensity: 'subtle', vibe: 'neutral' },
    { id: 'E02', name: 'Soft Smile', prompt: 'soft gentle smile, closed mouth, warm sparkling eyes that make the viewer feel seen, tenderly inviting', intensity: 'subtle', vibe: 'soft' },
    { id: 'E03', name: 'Big Smile', prompt: 'big genuine smile, teeth showing, eyes squinting with pure joy, warmth that melts hearts, contagious happiness', intensity: 'strong', vibe: 'happy' },
    { id: 'E04', name: 'Cute Shy', prompt: 'cute shy expression, slightly looking away then peeking back, bashful smile, irresistible innocent charm', intensity: 'subtle', vibe: 'soft' },
    { id: 'E05', name: 'Playful Wink', prompt: 'playful winking at camera, cheeky fun expression, as if sharing a private joke with the viewer', intensity: 'medium', vibe: 'playful' },
    { id: 'E06', name: 'Pouty Lips', prompt: 'slight pout, soft pouty lips, flirty bedroom eyes, teasing the viewer with subtle seduction', intensity: 'medium', vibe: 'playful' },
    { id: 'E07', name: 'Laughing', prompt: 'genuine laughing, eyes squinting from pure joy, candid happy moment, makes the viewer want to laugh too', intensity: 'strong', vibe: 'happy' },
    { id: 'E08', name: 'Surprised', prompt: 'surprised happy expression, wide sparkling eyes, cute open mouth, endearing genuine reaction', intensity: 'strong', vibe: 'happy' },
    { id: 'E09', name: 'Confident Smirk', prompt: 'confident smirk, one side lip raised, knowing look as if she holds a secret, powerful allure', intensity: 'medium', vibe: 'intense' },
    { id: 'E10', name: 'Dreamy Gaze', prompt: 'dreamy unfocused gaze, looking into distance with soft longing, lost in beautiful thoughts, ethereal beauty', intensity: 'subtle', vibe: 'soft' },
    { id: 'E11', name: 'Sultry Serious', prompt: 'sultry serious expression, intense direct eye contact that pins the viewer, smoldering magnetic energy, deeply captivating', intensity: 'medium', vibe: 'intense' },
    { id: 'E12', name: 'Fierce Determined', prompt: 'fierce determined look, strong jawline highlighted, focused piercing eyes, unstoppable queen energy', intensity: 'strong', vibe: 'intense' },
    { id: 'E13', name: 'Sleepy Soft', prompt: 'sleepy soft expression, half-lidded eyes, just woke up vulnerability, intimate morning beauty, tender and real', intensity: 'subtle', vibe: 'soft' },
    { id: 'E14', name: 'Excited Energy', prompt: 'excited energetic expression, bright wide eyes full of life, enthusiastic joy, radiating infectious positive energy', intensity: 'strong', vibe: 'happy' },
    { id: 'E15', name: 'Blowing Kiss', prompt: 'blowing a kiss directly at camera, lips puckered, hand near mouth, sending love through the lens', intensity: 'medium', vibe: 'playful' },
    { id: 'E16', name: 'Tongue Out', prompt: 'tongue sticking out slightly, playful silly charm, gen-z vibe, fun carefree personality shining through', intensity: 'medium', vibe: 'playful' },
    { id: 'E17', name: 'Biting Lip', prompt: 'gently biting lower lip, subtle flirty tension, eyes locked on camera with magnetic intensity, irresistible', intensity: 'medium', vibe: 'intense' },
    { id: 'E18', name: 'Relaxed Calm', prompt: 'relaxed calm expression, peaceful serene beauty, soft natural breathing, inner peace radiating outward', intensity: 'subtle', vibe: 'neutral' },
    { id: 'E19', name: 'Cool Unbothered', prompt: 'cool unbothered face, effortless attitude, nonchalant confidence that makes her even more attractive', intensity: 'subtle', vibe: 'neutral' },
    { id: 'E20', name: 'Thoughtful', prompt: 'thoughtful contemplative expression, deep soulful eyes, pensive beauty, as if pondering something meaningful', intensity: 'subtle', vibe: 'soft' },
    { id: 'E21', name: 'Sassy Attitude', prompt: 'sassy expression, eyebrow raised, confident attitude, playful challenge in her eyes, daring the viewer', intensity: 'medium', vibe: 'playful' },
    { id: 'E22', name: 'Cute Aegyo', prompt: 'cute aegyo expression, puppy eyes looking up, adorable face, innocent charm that steals hearts instantly', intensity: 'medium', vibe: 'soft' }
];

// ====================================================
// 🤌 MICRO POSES — 22 Options (🔥 = High Engagement)
// Subtle hand, neck, finger gestures that boost realism
// ====================================================
const MICRO_POSES = [
    { id: 'MP01', name: '🔥 Chin Rest', prompt: 'chin resting on hand, fingertips touching jawline softly, dreamy gaze through lashes at camera', area: 'hand', engagement: 'high' },
    { id: 'MP02', name: '🔥 Hair Tuck', prompt: 'tucking hair behind ear with delicate fingertips, revealing neck, shy flirty gesture', area: 'hand', engagement: 'high' },
    { id: 'MP03', name: '🔥 Lip Touch', prompt: 'index finger lightly touching lower lip, subtle seductive tension, eyes locked on viewer', area: 'finger', engagement: 'high' },
    { id: 'MP04', name: '🔥 Neck Touch', prompt: 'hand gently touching side of neck, head tilted exposing neckline, vulnerable sensual moment', area: 'neck', engagement: 'high' },
    { id: 'MP05', name: 'Collar Tug', prompt: 'fingers lightly tugging collar or neckline, teasing reveal, playful inviting gesture', area: 'hand', engagement: 'high' },
    { id: 'MP06', name: '🔥 Ring Play', prompt: 'fingers playing with ring slowly, subtle sensual fidgeting, contemplative allure', area: 'finger', engagement: 'high' },
    { id: 'MP07', name: 'Necklace Touch', prompt: 'fingers tracing necklace pendant gently, drawing eyes to collarbone and décolletage', area: 'finger', engagement: 'med' },
    { id: 'MP08', name: '🔥 Earring Touch', prompt: 'touching earring, head tilted to expose jawline and neck, elegant intimate detail', area: 'finger', engagement: 'high' },
    { id: 'MP09', name: 'Glasses Adjust', prompt: 'pushing glasses up with one finger, cute intellectual charm, peeking over frames', area: 'hand', engagement: 'med' },
    { id: 'MP10', name: '🔥 Strap Adjust', prompt: 'adjusting shoulder strap with fingertips, casual intimate gesture, skin revealed naturally', area: 'hand', engagement: 'high' },
    { id: 'MP11', name: 'Wrist Turn', prompt: 'subtle wrist turn, showing bracelet elegantly, graceful feminine detail, poised charm', area: 'hand', engagement: 'med' },
    { id: 'MP12', name: '🔥 Cheek Touch', prompt: 'palm resting on cheek tenderly, fingers spread softly, warm self-embrace, inviting vulnerability', area: 'hand', engagement: 'high' },
    { id: 'MP13', name: 'Nose Scrunch', prompt: 'cute nose scrunch, playful adorable micro expression, irresistible girl-next-door moment', area: 'face', engagement: 'med' },
    { id: 'MP14', name: '🔥 Jaw Clench', prompt: 'subtle jaw clench, sharp jawline highlighted, chiseled confident intensity, powerful femininity', area: 'face', engagement: 'high' },
    { id: 'MP15', name: 'Head Tilt', prompt: 'gentle head tilt to one side, curious flirty interest, as if listening closely to someone special', area: 'neck', engagement: 'med' },
    { id: 'MP16', name: '🔥 Shoulder Drop', prompt: 'one shoulder dropped revealing collarbone, relaxed asymmetric elegance, effortlessly seductive', area: 'neck', engagement: 'high' },
    { id: 'MP17', name: 'Nail Inspect', prompt: 'casually inspecting nails, nonchalant unbothered attitude, cool-girl confidence, aesthetic detail', area: 'finger', engagement: 'med' },
    { id: 'MP18', name: '🔥 Phone Grip', prompt: 'holding phone casually one-handed, thumb scrolling, relatable modern-girl energy, candid natural', area: 'hand', engagement: 'high' },
    { id: 'MP19', name: 'Cup Hold', prompt: 'holding coffee cup close to lips with both hands, cozy warmth, soft eyes peeking over cup at camera', area: 'hand', engagement: 'med' },
    { id: 'MP20', name: '🔥 Waist Hook', prompt: 'thumb hooked in waistband casually, hip tilted, cool effortless confidence, body-confident energy', area: 'hand', engagement: 'high' },
    { id: 'MP21', name: 'Eyebrow Raise', prompt: 'one eyebrow slightly raised, questioning playful look, daring the viewer, cheeky charm', area: 'face', engagement: 'med' },
    { id: 'MP22', name: '🔥 Finger Heart', prompt: 'korean finger heart gesture, thumb and index crossed cutely, sending love directly to viewer', area: 'finger', engagement: 'high' }
];

// ====================================================
// 💇‍♀️ HAIRSTYLES — 22 Options (🔥 = High Engagement)
// Varied styles that boost visual engagement
// ====================================================
const HAIRSTYLES = [
    { id: 'H01', name: '🔥 Loose Beach Waves', prompt: 'loose beach waves, natural effortless texture, wind-blown', length: 'long', vibe: 'casual' },
    { id: 'H02', name: 'Straight Sleek', prompt: 'straight sleek hair, shiny smooth, pin-straight', length: 'long', vibe: 'elegant' },
    { id: 'H03', name: '🔥 Messy Bun', prompt: 'messy bun top of head, loose strands framing face, effortless', length: 'up', vibe: 'casual' },
    { id: 'H04', name: '🔥 High Ponytail', prompt: 'high ponytail, sleek pulled back, face fully visible, sporty', length: 'up', vibe: 'sporty' },
    { id: 'H05', name: 'Low Ponytail', prompt: 'low ponytail at nape, elegant minimal, clean look', length: 'up', vibe: 'elegant' },
    { id: 'H06', name: '🔥 Curtain Bangs', prompt: 'curtain bangs framing face, middle-parted, trendy layered', length: 'long', vibe: 'trendy' },
    { id: 'H07', name: 'Side Sweep', prompt: 'side-swept hair, one side behind ear, asymmetric glamour', length: 'long', vibe: 'elegant' },
    { id: 'H08', name: '🔥 Wet Hair Look', prompt: 'wet hair look, slicked back, damp texture, edgy sensual', length: 'long', vibe: 'edgy' },
    { id: 'H09', name: 'Space Buns', prompt: 'double space buns on top, playful fun, gen-z style', length: 'up', vibe: 'playful' },
    { id: 'H10', name: '🔥 Hair Over Shoulder', prompt: 'all hair swept over one shoulder, neck exposed on other side', length: 'long', vibe: 'elegant' },
    { id: 'H11', name: 'Braided Crown', prompt: 'crown braid around head, bohemian elegant, romantic', length: 'up', vibe: 'elegant' },
    { id: 'H12', name: '🔥 Two Low Braids', prompt: 'two low braids, innocent cute, youthful natural', length: 'long', vibe: 'casual' },
    { id: 'H13', name: 'Sleek Bob', prompt: 'sleek chin-length bob, sharp clean cut, modern chic', length: 'short', vibe: 'trendy' },
    { id: 'H14', name: '🔥 Tousled Volume', prompt: 'tousled voluminous hair, big bouncy curls, glamorous body', length: 'long', vibe: 'glamour' },
    { id: 'H15', name: 'Half Up Half Down', prompt: 'half up half down style, top section clipped back, versatile', length: 'long', vibe: 'casual' },
    { id: 'H16', name: '🔥 Blowout Straight', prompt: 'fresh blowout, straight voluminous, salon-perfect bounce', length: 'long', vibe: 'glamour' },
    { id: 'H17', name: 'Pixie Cut', prompt: 'short pixie cut, face sculpting, bold confident', length: 'short', vibe: 'edgy' },
    { id: 'H18', name: '🔥 Loose Low Bun', prompt: 'loose low bun at nape, soft tendrils framing face, romantic', length: 'up', vibe: 'elegant' },
    { id: 'H19', name: 'Natural Curls', prompt: 'natural curly hair, defined ringlets, bouncy texture', length: 'long', vibe: 'casual' },
    { id: 'H20', name: '🔥 Hair Clip Accent', prompt: 'hair held back with decorative claw clip, trendy effortless', length: 'up', vibe: 'trendy' },
    { id: 'H21', name: 'Fishtail Braid', prompt: 'fishtail side braid, intricate textured, boho chic', length: 'long', vibe: 'casual' },
    { id: 'H22', name: '🔥 Wind Blown', prompt: 'hair blowing in wind, dynamic flowing movement, cinematic', length: 'long', vibe: 'edgy' }
];

// ====================================================
// 💄 MAKEUP — 22 Options (🔥 = High Engagement)
// Natural to glam, all enhance the captivating gaze
// ====================================================
const MAKEUP = [
    { id: 'MK01', name: '🔥 No Makeup Look', prompt: 'no makeup makeup look, bare skin glow, natural flush on cheeks, dewy fresh, effortlessly beautiful', style: 'natural' },
    { id: 'MK02', name: 'Soft Dewy', prompt: 'soft dewy skin, light tinted moisturizer, glossy lips, natural brow, skin-like finish', style: 'natural' },
    { id: 'MK03', name: '🔥 Glass Skin', prompt: 'Korean glass skin, luminous translucent glow, barely-there makeup, hydrated perfection', style: 'natural' },
    { id: 'MK04', name: '🔥 Sun-Kissed Glow', prompt: 'sun-kissed bronzer glow, warm golden highlighter, natural flush, beachy radiance', style: 'warm' },
    { id: 'MK05', name: 'Soft Matte', prompt: 'soft matte foundation, blurred pores, velvet finish, subtle contour, natural lips', style: 'natural' },
    { id: 'MK06', name: '🔥 Rosy Flush', prompt: 'rosy pink blush on cheeks, soft pink lips, innocent fresh glow, youthful charm', style: 'warm' },
    { id: 'MK07', name: '🔥 Cat Eye', prompt: 'sharp cat eye winged eyeliner, dramatic lash, defined brow, bold confident gaze', style: 'bold' },
    { id: 'MK08', name: 'Smokey Eye', prompt: 'smokey eye dark eyeshadow blend, smudged liner, dramatic depth, sultry mysterious', style: 'bold' },
    { id: 'MK09', name: '🔥 Soft Smokey', prompt: 'soft smokey eye with brown and gold tones, warm blend, approachable yet seductive', style: 'warm' },
    { id: 'MK10', name: '🔥 Red Lip Classic', prompt: 'classic red lipstick, clean skin, minimal eye makeup, timeless allure, bold confident', style: 'bold' },
    { id: 'MK11', name: 'Nude Lip Natural', prompt: 'nude lip color matching skin tone, soft liner, natural understated beauty', style: 'natural' },
    { id: 'MK12', name: '🔥 Berry Lips', prompt: 'deep berry lip color, slight stain effect, moody romantic, mysterious allure', style: 'bold' },
    { id: 'MK13', name: 'Glossy Lip', prompt: 'high-shine glossy lips, juicy wet look, plump lip effect, youthful fresh', style: 'warm' },
    { id: 'MK14', name: '🔥 Highlighted Glow', prompt: 'intense highlighter on cheekbones and nose bridge, golden shimmer, editorial glow', style: 'warm' },
    { id: 'MK15', name: 'Soft Contour', prompt: 'soft natural contour, sculpted cheekbones, slim nose, defined jawline, subtle', style: 'natural' },
    { id: 'MK16', name: '🔥 Latte Makeup', prompt: 'latte makeup trend, warm brown tones, coffee-colored lips and eyes, cozy chic aesthetic', style: 'warm' },
    { id: 'MK17', name: 'Peachy Fresh', prompt: 'peachy fresh tones, coral blush, peach lip, warm golden undertone, sweet vibrant', style: 'warm' },
    { id: 'MK18', name: '🔥 Doe Eyes', prompt: 'doe eye makeup, rounded liner, big eye effect, elongated lashes, innocent captivating gaze', style: 'bold' },
    { id: 'MK19', name: 'Freckle Cute', prompt: 'faux freckles scattered on nose and cheeks, natural sun-spotted, girl-next-door charm', style: 'natural' },
    { id: 'MK20', name: '🔥 Editorial Glam', prompt: 'editorial glam makeup, sculpted contour, dramatic eye, defined brow, red carpet ready', style: 'bold' },
    { id: 'MK21', name: 'Clean Girl', prompt: 'clean girl aesthetic, slicked brow, tinted lip, minimal base, effortless put-together', style: 'natural' },
    { id: 'MK22', name: '🔥 Glazed Donut', prompt: 'glazed donut skin, extreme dewy luminous finish, wet-look highlight, plump glossy lips, ethereal', style: 'warm' }
];

// ====================================================
// 🎬 VIDEO MOTION — Natural motion only (no background/outfit)
// Focus: engagement, natural human motion, not AI-looking
// ====================================================
const VIDEO_MOTION_MAP = {
    standing_low: { motion: 'gentle breathing chest rise, subtle weight shift between feet, natural blink rhythm, micro head adjustment' },
    standing_med: { motion: 'slow confident body sway, natural hip shift, shoulders rolling subtly, head turning smoothly' },
    standing_high: { motion: 'dynamic full body movement, hair bouncing with motion, natural momentum and follow-through, fabric reacting to movement' },
    sitting_low: { motion: 'gentle breathing, relaxed micro-fidgeting, small finger movements, natural eye scan' },
    sitting_med: { motion: 'casual posture adjustment, crossing/uncrossing legs naturally, leaning shift, expressive hand gesture' },
    sitting_high: { motion: 'animated upper body movement, enthusiastic hand gestures, bouncy energy, natural laugh motion' },
    lying_low: { motion: 'slow breathing with chest/belly rise, gentle eye flutter, soft finger curl, dreamy slow blink' },
    lying_med: { motion: 'gentle body roll, stretching motion, reaching hand, adjusting position naturally' },
    lying_high: { motion: 'playful kick, tossing and turning, pillow grab, energetic roll with natural momentum' },
    action_low: { motion: 'casual phone tap, gentle mirror glance, slow natural turn, relaxed arm swing' },
    action_med: { motion: 'confident stride with hip sway, natural arm swing, runway-like smooth motion' },
    action_high: { motion: 'full dynamic movement — spinning, jumping, dancing with natural momentum and hair whip, clothing flow' }
};

const MICRO_MOTION_MAP = {
    hand: 'subtle hand repositioning, natural finger curl and extend, soft wrist rotation',
    finger: 'tiny finger fidgeting, delicate touch gesture, natural fingertip movement',
    neck: 'gentle neck stretch, subtle head tilt shift, natural swallow motion',
    face: 'natural micro-expression shift, subtle eye movement, breathing rhythm visible'
};

function getVideoMotion(poseId, microPoseId) {
    const pose = POSES.find(p => p.id === poseId);
    if (!pose) return { motion: VIDEO_MOTION_MAP.standing_low.motion, micro: '' };
    const key = `${pose.type}_${pose.energy}`;
    const base = VIDEO_MOTION_MAP[key] || VIDEO_MOTION_MAP.standing_low;

    let micro = '';
    if (microPoseId) {
        const mp = MICRO_POSES.find(m => m.id === microPoseId);
        if (mp) micro = MICRO_MOTION_MAP[mp.area] || '';
    }

    return { motion: base.motion, micro };
}

// ====================================================
// 🧩 COMPATIBILITY MATRIX
// ====================================================

// Pose ↔ Angle compatibility
const POSE_ANGLE_COMPAT = {
    lying: ['A07', 'A11', 'A12', 'A13', 'A14', 'A15', 'A28', 'A31', 'A33', 'A36', 'A37'],
    sitting: ['A01', 'A02', 'A04', 'A05', 'A06', 'A07', 'A08', 'A09', 'A10', 'A11', 'A12', 'A14', 'A16', 'A24', 'A25', 'A26', 'A27', 'A28', 'A30', 'A33', 'A34', 'A36', 'A37', 'A38', 'A39'],
    standing: ['A01', 'A02', 'A03', 'A04', 'A05', 'A06', 'A08', 'A09', 'A10', 'A11', 'A12', 'A17', 'A18', 'A19', 'A20', 'A21', 'A22', 'A23', 'A24', 'A25', 'A26', 'A27', 'A28', 'A29', 'A30', 'A32', 'A33', 'A34', 'A35', 'A36', 'A37', 'A38', 'A39', 'A40'],
    action: ['A01', 'A03', 'A06', 'A08', 'A10', 'A17', 'A18', 'A19', 'A20', 'A21', 'A23', 'A24', 'A26', 'A27', 'A29', 'A32', 'A34', 'A35', 'A36', 'A37', 'A38', 'A40']
};

// Mood ↔ Expression compatibility
const MOOD_EXPR_COMPAT = {
    calm: ['E01', 'E02', 'E04', 'E10', 'E13', 'E18', 'E19', 'E20'],
    warm: ['E01', 'E02', 'E03', 'E04', 'E07', 'E10', 'E13', 'E15', 'E18', 'E20', 'E22'],
    bright: ['E02', 'E03', 'E05', 'E07', 'E08', 'E14', 'E15', 'E16', 'E21'],
    dark: ['E01', 'E06', 'E09', 'E10', 'E11', 'E12', 'E17', 'E18', 'E19'],
    intense: ['E03', 'E05', 'E08', 'E09', 'E11', 'E12', 'E14', 'E16', 'E17', 'E21']
};

// Device ↔ Mood compatibility
const DEVICE_MOOD_COMPAT = {
    phone: ['M01', 'M02', 'M03', 'M04', 'M05', 'M06', 'M07', 'M08', 'M09', 'M10', 'M11', 'M12', 'M13', 'M15', 'M16', 'M17', 'M19', 'M22'],
    dslr: ['M01', 'M02', 'M03', 'M04', 'M05', 'M06', 'M07', 'M08', 'M09', 'M15', 'M16', 'M17', 'M18', 'M19', 'M22'],
    mirrorless: ['M01', 'M02', 'M03', 'M04', 'M05', 'M06', 'M07', 'M08', 'M09', 'M14', 'M15', 'M16', 'M17', 'M18', 'M19', 'M22'],
    action: ['M02', 'M03', 'M05', 'M11', 'M16', 'M21'],
    film: ['M01', 'M04', 'M05', 'M06', 'M07', 'M08', 'M09', 'M12', 'M13', 'M15', 'M17', 'M19', 'M22'],
    cctv: ['M08', 'M10', 'M11', 'M14', 'M20']
};

// ====================================================
// 🔧 COMPATIBILITY CHECKER
// ====================================================
function isAngleCompatible(poseId, angleId) {
    const pose = POSES.find(p => p.id === poseId);
    if (!pose) return true;
    const compatList = POSE_ANGLE_COMPAT[pose.type];
    if (!compatList) return true;
    return compatList.includes(angleId);
}

function isExpressionCompatible(moodId, exprId) {
    const mood = MOODS.find(m => m.id === moodId);
    if (!mood) return true;
    const compatList = MOOD_EXPR_COMPAT[mood.energy];
    if (!compatList) return true;
    return compatList.includes(exprId);
}

function isMoodCompatible(deviceId, moodId) {
    const device = DEVICES.find(d => d.id === deviceId);
    if (!device) return true;
    const compatList = DEVICE_MOOD_COMPAT[device.style];
    if (!compatList) return true;
    return compatList.includes(moodId);
}

// ====================================================
// 🆕 EXTENDED COMPATIBILITY MATRICES
// ====================================================

// Device ↔ Angle compatibility (e.g., CCTV can't selfie, GoPro can't do telephoto)
const DEVICE_ANGLE_COMPAT = {
    phone: ['A01', 'A02', 'A03', 'A04', 'A05', 'A06', 'A07', 'A08', 'A09', 'A10', 'A11', 'A12', 'A16', 'A24', 'A25', 'A26', 'A27', 'A28', 'A30', 'A33', 'A34', 'A36', 'A37', 'A39'],
    dslr: ['A01', 'A02', 'A03', 'A04', 'A05', 'A06', 'A07', 'A08', 'A09', 'A10', 'A12', 'A18', 'A19', 'A20', 'A21', 'A22', 'A23', 'A24', 'A25', 'A26', 'A27', 'A28', 'A29', 'A30', 'A31', 'A32', 'A33', 'A35', 'A40'],
    mirrorless: ['A01', 'A02', 'A03', 'A04', 'A05', 'A06', 'A07', 'A08', 'A09', 'A10', 'A12', 'A18', 'A19', 'A20', 'A21', 'A22', 'A23', 'A24', 'A25', 'A26', 'A27', 'A28', 'A29', 'A30', 'A31', 'A32', 'A33', 'A35', 'A40'],
    action: ['A03', 'A06', 'A08', 'A11', 'A17', 'A18', 'A20', 'A21', 'A23', 'A29', 'A34', 'A36', 'A37', 'A38', 'A40'],
    film: ['A01', 'A02', 'A03', 'A04', 'A05', 'A07', 'A08', 'A09', 'A10', 'A12', 'A24', 'A25', 'A26', 'A27', 'A28', 'A29', 'A30', 'A31', 'A33', 'A35'],
    cctv: ['A13', 'A14', 'A15', 'A17', 'A20', 'A29', 'A38']
};

// Pose ↔ Micro Pose compatibility (e.g., lying can't do waist hook, sitting can't do shoulder drop easily)
const POSE_MICRO_COMPAT = {
    standing: ['MP01', 'MP02', 'MP03', 'MP04', 'MP05', 'MP06', 'MP07', 'MP08', 'MP09', 'MP10', 'MP11', 'MP12', 'MP13', 'MP14', 'MP15', 'MP16', 'MP17', 'MP18', 'MP19', 'MP20', 'MP21', 'MP22'],
    sitting: ['MP01', 'MP02', 'MP03', 'MP04', 'MP06', 'MP07', 'MP08', 'MP09', 'MP11', 'MP12', 'MP13', 'MP14', 'MP15', 'MP17', 'MP18', 'MP19', 'MP21', 'MP22'],
    lying: ['MP01', 'MP02', 'MP03', 'MP04', 'MP06', 'MP07', 'MP12', 'MP13', 'MP15', 'MP21'],
    action: ['MP02', 'MP04', 'MP13', 'MP14', 'MP15', 'MP16', 'MP18', 'MP20', 'MP21']
};

// Mood ↔ Makeup compatibility (e.g., dark moody scenes ≠ bright peachy makeup)
const MOOD_MAKEUP_COMPAT = {
    calm: ['MK01', 'MK02', 'MK03', 'MK05', 'MK06', 'MK11', 'MK13', 'MK15', 'MK17', 'MK19', 'MK21'],
    warm: ['MK01', 'MK02', 'MK03', 'MK04', 'MK05', 'MK06', 'MK09', 'MK11', 'MK13', 'MK14', 'MK15', 'MK16', 'MK17', 'MK19', 'MK21', 'MK22'],
    bright: ['MK01', 'MK02', 'MK03', 'MK04', 'MK06', 'MK07', 'MK10', 'MK13', 'MK14', 'MK16', 'MK17', 'MK18', 'MK20', 'MK22'],
    dark: ['MK05', 'MK07', 'MK08', 'MK09', 'MK10', 'MK12', 'MK15', 'MK18', 'MK20'],
    intense: ['MK07', 'MK08', 'MK09', 'MK10', 'MK12', 'MK14', 'MK18', 'MK20']
};

// Hairstyle ↔ Angle compatibility (e.g., updos look bad from overhead, short hair can't do "hair over shoulder")
const HAIR_ANGLE_COMPAT = {
    long: ['A01', 'A02', 'A03', 'A04', 'A05', 'A06', 'A07', 'A08', 'A09', 'A10', 'A11', 'A12', 'A13', 'A14', 'A16', 'A18', 'A19', 'A20', 'A21', 'A22', 'A23', 'A24', 'A25', 'A26', 'A27', 'A28', 'A29', 'A30', 'A31', 'A32', 'A33', 'A34', 'A35', 'A36', 'A37', 'A38', 'A39', 'A40'],
    short: ['A01', 'A02', 'A03', 'A04', 'A05', 'A06', 'A07', 'A08', 'A09', 'A10', 'A11', 'A12', 'A13', 'A14', 'A16', 'A18', 'A19', 'A24', 'A25', 'A26', 'A27', 'A28', 'A29', 'A30', 'A33', 'A34', 'A36', 'A37', 'A38'],
    up: ['A01', 'A02', 'A03', 'A04', 'A05', 'A06', 'A07', 'A08', 'A09', 'A10', 'A11', 'A12', 'A16', 'A18', 'A19', 'A21', 'A22', 'A24', 'A25', 'A26', 'A27', 'A28', 'A29', 'A30', 'A31', 'A33', 'A34', 'A36', 'A38', 'A39']
};

// ─── NEW CHECKER FUNCTIONS ───

function isDeviceAngleCompatible(deviceId, angleId) {
    const device = DEVICES.find(d => d.id === deviceId);
    if (!device) return true;
    const compatList = DEVICE_ANGLE_COMPAT[device.style];
    if (!compatList) return true;
    return compatList.includes(angleId);
}

function isPoseMicroCompatible(poseId, microId) {
    const pose = POSES.find(p => p.id === poseId);
    if (!pose) return true;
    const compatList = POSE_MICRO_COMPAT[pose.type];
    if (!compatList) return true;
    return compatList.includes(microId);
}

function isMoodMakeupCompatible(moodId, makeupId) {
    const mood = MOODS.find(m => m.id === moodId);
    if (!mood) return true;
    if (mood.energy === 'any') return true; // "Follow Background" is universal
    const compatList = MOOD_MAKEUP_COMPAT[mood.energy];
    if (!compatList) return true;
    return compatList.includes(makeupId);
}

function isHairAngleCompatible(hairId, angleId) {
    const hair = HAIRSTYLES.find(h => h.id === hairId);
    if (!hair) return true;
    const compatList = HAIR_ANGLE_COMPAT[hair.length];
    if (!compatList) return true;
    return compatList.includes(angleId);
}

console.log(`✅ Nano Banana v5.3 Loaded — ${POSES.length} Poses, ${ANGLES.length} Angles, ${DEVICES.length} Devices, ${MOODS.length} Moods, ${EXPRESSIONS.length} Expressions, ${MICRO_POSES.length} Micro Poses, ${HAIRSTYLES.length} Hairstyles, ${MAKEUP.length} Makeup`);

// ====================================================
// 🎭 COSPLAY ANIME SYSTEM — Nano Banana v5.3
// Mode: Anime Cosplay Photo (Face Merge + Character)
// ====================================================

const COSPLAY_SYSTEM_PROMPT = `CRITICAL: OUTPUT MUST BE A PHOTOREALISTIC PHOTOGRAPH. NOT AN ILLUSTRATION.

You will receive 3 images:
1. FACE REFERENCE (3×3 grid) → This is the REAL HUMAN subject
2. ANIME CHARACTER IMAGE → This is ONLY a costume design reference. Do NOT copy its art style.
3. BACKGROUND IMAGE → The real scene

⚠️ THE ANIME IMAGE IS NOT A STYLE GUIDE. IT IS A COSTUME BLUEPRINT ONLY.
Extract ONLY: costume design, colors, accessories, hairstyle, props.
IGNORE: its art style, rendering, shading, line art, colors palette, 2D look.

MANDATORY OUTPUT STYLE:
– Real photograph taken by a DSLR camera
– Real human skin with visible pores, natural skin texture
– Real fabric materials (silk, leather, cotton, metal, etc.)
– Real-world lighting with natural shadows
– The final image must be indistinguishable from a real cosplay photoshoot photo

DO NOT:
– Create anime, manga, or illustrated output
– Use cel-shading, flat coloring, or bold outlines
– Render in 2D, 2.5D, or any illustrated style
– Make the skin look smooth/painted/airbrushed like anime
– Copy the visual rendering style from the anime reference image

FACE RULES (HIGHEST PRIORITY — NON-NEGOTIABLE):
– Use the face reference grid as the ONLY face source
– Face geometry is ABSOLUTELY LOCKED — every facial landmark must match:
  jawline shape, nose bridge & tip, eye spacing & shape, eyelid type, lip shape & thickness,
  cheekbones, forehead size, face width, chin shape
– The output face MUST be recognizable as the EXACT same person — if not, output is REJECTED
– Eye shape and eyelid type: LOCKED from reference. Do NOT change to double eyelid or enlarge eyes
– Skin tone and texture: LOCKED from reference — same skin color, same skin features
– No beautification, no smoothing, no slimming, no face morphing
– No western features, no Korean/Chinese beauty filter
– Do NOT let the anime character's face influence the output face in ANY way
– The anime image has NO authority over facial features — costume ONLY

BODY SHAPE RULES:
– Body shape: slim with full, round, prominent bust — this is LOCKED from reference
– Cleavage must be visibly full, round, and naturally prominent when costume allows
– Do NOT flatten, reduce, or minimize the bust
– Maintain curvy yet slim body proportions consistently
– Real body physics — natural weight and volume on bust and curves

COSTUME RULES:
– Recreate the anime costume as REAL-WORLD cosplay materials
– Real fabric textures, real stitching, real metal accessories
– Colors match the character reference but rendered as real materials
– Wig/hair adapted as a real cosplay wig

BACKGROUND RULES:
– Use the background image as a real scene
– Subject integrated naturally with correct scale and perspective
– Real contact shadows on the ground
– No cut-out or pasted look

OUTPUT: ONE single photorealistic photograph. Ultra-sharp. High detail.
It must look like a professional cosplay photoshoot — NOT digital art.

FINAL CHECK: Compare the output face against the 3×3 face grid.
If the face identity does not match, REGENERATE.`;

const SHADOW_SYSTEM_PROMPT = `The uploaded background reference is the only lighting authority.
Do not create or modify lighting conditions.
Match the exact ambient light direction, softness, intensity, and color temperature from the background.
Do NOT render any visible person, face, head, or body.
Only render a realistic human shadow and costume pieces on the floor.`;

// ─────────────────────────────────────
// 🎨 COSPLAY STYLES — 10 Options
// ─────────────────────────────────────
const COSPLAY_STYLES = [
    { id: 'CS01', name: 'Realistic Cosplay', prompt: 'photorealistic cosplay, real fabric costume, practical props, convention-quality cosplay, ultra-realistic rendering, real-world materials and textures' },
    { id: 'CS02', name: '2.5D Semi-Anime', prompt: '2.5D rendering style, halfway between photo and anime, soft cell shading with realistic skin texture, anime-influenced coloring on real face, smooth blended style' },
    { id: 'CS03', name: 'Full Anime', prompt: 'full anime art style, clean cel shading, bold outlines, vibrant anime colors, anime eyes and proportions applied to real face structure, manga-quality rendering' },
    { id: 'CS04', name: 'Genshin Impact Style', prompt: 'Genshin Impact game render style, 3D anime cel-shaded look, glowing effects on accessories, fantasy RPG aesthetic, vibrant saturated colors, elemental glow effects' },
    { id: 'CS05', name: 'Studio Ghibli', prompt: 'Studio Ghibli watercolor style, soft hand-painted look, gentle pastel tones, warm nostalgic atmosphere, Miyazaki-inspired rendering, dreamy gentle quality' },
    { id: 'CS06', name: 'Makoto Shinkai', prompt: 'Makoto Shinkai cinematic anime style, hyper-detailed backgrounds, dramatic lighting rays, photorealistic environmental detail with anime character rendering, Your Name aesthetic' },
    { id: 'CS07', name: 'Cyberpunk Anime', prompt: 'cyberpunk anime style, neon-lit futuristic rendering, holographic effects, tech-enhanced costume details, dark sci-fi atmosphere with vibrant neon accents' },
    { id: 'CS08', name: 'Chibi Cute', prompt: 'chibi style rendering, cute exaggerated proportions, big head small body, adorable simplified features, kawaii aesthetic, pastel soft colors' },
    { id: 'CS09', name: 'Dark Fantasy', prompt: 'dark fantasy anime style, dramatic gothic rendering, deep shadows and rich dark colors, ornate detailed costume rendering, epic fantasy atmosphere' },
    { id: 'CS10', name: 'Watercolor Soft', prompt: 'soft watercolor anime style, delicate brush strokes, translucent color layers, ethereal dreamy quality, artistic hand-painted feel, gentle flowing aesthetics' }
];

console.log(`🎭 Cosplay Module Loaded — ${COSPLAY_STYLES.length} Styles`);

// ─────────────────────────────────────
// 🕺 COSPLAY EXTRA POSE — Prepended to POSES in cosplay.html
// ─────────────────────────────────────
const COSPLAY_EXTRA_POSE = { id: 'CP00', name: '🔥 Follow Character Pose', prompt: 'replicate the exact pose from the character reference image, match arm position, leg stance, head tilt, and body angle naturally, human-realistic weight distribution, natural gravity on fabric and hair, no stiff or puppet-like posing, organic natural adaptation of the anime pose to real human anatomy' };

// ─────────────────────────────────────
// 🎬 COSPLAY SCENE PRESETS — Special Composition Modes
// ─────────────────────────────────────
const COSPLAY_PRESETS = [
    { id: 'SPR01', name: 'Normal Scene', prompt: 'standard cosplay photo composition, character in costume standing or posing naturally in the scene, full costume visible, clean composition', refImage: getRefImage('SPR', 'SPR01') },
    { id: 'SPR02', name: '🔥 Silhouette Shadow', prompt: 'the person is NOT visible in the frame at all, do NOT show any person or face or body in the image, the photo shows ONLY two things: (1) a dramatic full body shadow silhouette cast onto a clean light colored wall showing a confident feminine pose with hand on hip and (2) the complete cosplay costume from the character reference scattered and piled on the floor at the base of the shadow including wig headpiece dress accessories props and shoes all laid out naturally as if the person just undressed off camera, the shadow implies the person is standing just outside the frame behind the camera, the wall is clean and light so the shadow is clearly visible, indoor setting with strong single directional light, the composition tells a story without showing the actual person, artistic conceptual cosplay photography, no person visible no face visible only shadow and costume', refImage: getRefImage('SPR', 'SPR02') },
    { id: 'SPR03', name: 'Transformation Split', prompt: 'split composition showing transformation, one half shows the real person, other half shows the cosplay character version, dramatic transition effect in the middle, before-and-after energy', refImage: getRefImage('SPR', 'SPR03') },
    { id: 'SPR04', name: 'Power Pose Action', prompt: 'dynamic action pose composition, character in an iconic power moment from the anime, dramatic wind effect on hair and costume, energy particles or aura matching the character abilities, cinematic action shot', refImage: getRefImage('SPR', 'SPR04') },
    { id: 'SPR05', name: 'Mirror Reflection', prompt: 'mirror reflection composition, character looking into a mirror where the reflection shows the original anime character, blending reality and anime, artistic duality concept, the cosplayer on one side and the anime version reflected', refImage: getRefImage('SPR', 'SPR05') }
];

// ====================================================
// 📸 AUTO-ADD REFERENCE IMAGES TO ALL DATA
// ====================================================
// This function adds refImage property to all items that don't have it
function addRefImagesToData() {
    const arrays = [
        { arr: POSES, prefix: 'P', name: 'Poses' },
        { arr: ANGLES, prefix: 'A', name: 'Angles' },
        { arr: DEVICES, prefix: 'D', name: 'Devices' },
        { arr: MOODS, prefix: 'M', name: 'Moods' },
        { arr: EXPRESSIONS, prefix: 'E', name: 'Expressions' },
        { arr: MICRO_POSES, prefix: 'MP', name: 'Micro Poses' },
        { arr: HAIRSTYLES, prefix: 'H', name: 'Hairstyles' },
        { arr: MAKEUP, prefix: 'MK', name: 'Makeup' },
        { arr: COSPLAY_STYLES, prefix: 'CS', name: 'Cosplay Styles' }
    ];

    let total = 0;
    arrays.forEach(({ arr, prefix, name }) => {
        arr.forEach(item => {
            if (!item.refImage) {
                item.refImage = getRefImage(prefix, item.id);
                total++;
            }
        });
        console.log(`   - ${name}: ${arr.length} items`);
    });

    return total;
}

// Auto-execute on load
const refCount = addRefImagesToData();
console.log('✅ Reference images auto-added to all data arrays');
console.log(`   Total: ${refCount} refImage properties added`);
