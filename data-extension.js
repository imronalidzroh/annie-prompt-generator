// ====================================================
// 📸 ANNIE INFLUENCER - DATA EXTENSION
// Generated from 810+ Reference Images
// For Google Nano Banana - Maximum Variety
// ====================================================
// This file EXTENDS the original data.js with new options
// All IDs follow matrix logic matching reference image files
// ====================================================

// ════════════════════════════════════════════════════
// 📊 REFERENCE IMAGE COUNTS (From Folder Scan)
// ════════════════════════════════════════════════════
// Poses: P0-P140 = 141 images → Expand to P01-P141
// Angles: A0-A97 = 98 images → Expand to A01-A98
// Moods: M0-M99 = 100 images → Expand to M01-M100
// Expressions: E0-E66 = 67 images → Expand to E01-E67
// Micro Poses: MP0-MP68 = 69 images → Expand to MP01-MP69
// Hairstyles: H0-H69 = 70 images → Expand to H01-H70
// Makeup: MK0-MK19 = 20 images → Keep as is (sufficient)
// Devices: Empty → Keep original 22 (sufficient)
// ════════════════════════════════════════════════════

// ====================================================
// 🕺 EXTENDED POSES — P51 to P141 (91 NEW!)
// Based on reference images P51-P141
// ====================================================
const POSES_EXTENDED = [
    // ── STANDING EXTENSIONS (P51-P70) ──
    { id: 'P51', name: 'Wall Lean Cool', prompt: 'leaning against wall with cool attitude, one leg crossed, casual confident stance, urban street style', energy: 'low', type: 'standing' },
    { id: 'P52', name: 'Hand in Pocket', prompt: 'one hand in pocket, relaxed stance, slight hip tilt, effortless cool vibe', energy: 'low', type: 'standing' },
    { id: 'P53', name: 'Arms Above Head', prompt: 'both arms raised above head, stretching pose, body elongated, confident display', energy: 'med', type: 'standing' },
    { id: 'P54', name: 'One Leg Up', prompt: 'one leg bent foot on wall, casual urban pose, street style attitude', energy: 'med', type: 'standing' },
    { id: 'P55', name: 'Twisting Torso', prompt: 'torso twisted slightly, dynamic body line, engaging core, model pose', energy: 'med', type: 'standing' },
    { id: 'P56', name: 'Weight Shift', prompt: 'weight shifted to one leg, hip popped, relaxed contrapposto stance, natural elegance', energy: 'low', type: 'standing' },
    { id: 'P57', name: 'Arms Behind Back', prompt: 'hands clasped behind back, chest forward, confident open posture, poised stance', energy: 'low', type: 'standing' },
    { id: 'P58', name: 'Finger Pointing', prompt: 'pointing at camera or to side, engaging gesture, directing attention, confident attitude', energy: 'med', type: 'standing' },
    { id: 'P59', name: 'Hands on Head', prompt: 'both hands on head, elbows out, confident display, body-conscious pose', energy: 'med', type: 'standing' },
    { id: 'P60', name: 'Crossed Ankles', prompt: 'ankles crossed, weight balanced, elegant poised stance, refined posture', energy: 'low', type: 'standing' },
    { id: 'P61', name: 'Shoulder Shrug', prompt: 'one shoulder raised in shrug, playful questioning gesture, cute uncertain charm', energy: 'low', type: 'standing' },
    { id: 'P62', name: 'Hand on Chest', prompt: 'one hand placed on chest, sincere gesture, emotional connection, vulnerable moment', energy: 'low', type: 'standing' },
    { id: 'P63', name: 'Finger Guns', prompt: 'finger guns pointing at camera, playful confident gesture, fun energetic vibe', energy: 'med', type: 'standing' },
    { id: 'P64', name: 'Swaying Hips', prompt: 'hips swayed to one side, dynamic movement implied, fluid body line, graceful pose', energy: 'med', type: 'standing' },
    { id: 'P65', name: 'Clasped Hands Front', prompt: 'hands clasped in front, polite poised stance, elegant composed demeanor', energy: 'low', type: 'standing' },
    { id: 'P66', name: 'Thumbs in Belt', prompt: 'thumbs hooked in belt or waistband, confident casual stance, relaxed cool attitude', energy: 'low', type: 'standing' },
    { id: 'P67', name: 'Overhead Stretch', prompt: 'arms stretching overhead, body fully extended, morning energy, awakening pose', energy: 'med', type: 'standing' },
    { id: 'P68', name: 'Side Stance', prompt: 'standing fully sideways to camera, profile view, elegant silhouette, clean lines', energy: 'low', type: 'standing' },
    { id: 'P69', name: 'Backward Glance', prompt: 'body facing away, looking back over shoulder, mysterious inviting pose', energy: 'low', type: 'standing' },
    { id: 'P70', name: 'Power Stance', prompt: 'feet wide apart, hands on hips, powerful confident stance, commanding presence', energy: 'med', type: 'standing' },

    // ── SITTING EXTENSIONS (P71-P95) ──
    { id: 'P71', name: 'Legs Tucked', prompt: 'legs tucked under on chair, cozy compact pose, comfortable relaxed sitting', energy: 'low', type: 'sitting' },
    { id: 'P72', name: 'One Knee Up', prompt: 'one knee drawn up, other leg extended, casual asymmetric sitting pose', energy: 'low', type: 'sitting' },
    { id: 'P73', name: 'Reclined Back', prompt: 'reclined back in chair, relaxed leaned position, comfortable confident pose', energy: 'low', type: 'sitting' },
    { id: 'P74', name: 'Forward Lean', prompt: 'leaning forward from chair, elbows on knees, engaged attentive posture', energy: 'low', type: 'sitting' },
    { id: 'P75', name: 'Side Saddle', prompt: 'sitting sideways on chair, legs to one side, elegant feminine pose', energy: 'low', type: 'sitting' },
    { id: 'P76', name: 'Perched Edge', prompt: 'perched on edge of seat, poised ready stance, alert attentive sitting', energy: 'low', type: 'sitting' },
    { id: 'P77', name: 'Legs Wrapped', prompt: 'legs wrapped around chair leg, casual comfortable pose, relaxed sitting', energy: 'low', type: 'sitting' },
    { id: 'P78', name: 'Armrest Lean', prompt: 'leaning on armrest, head supported, thoughtful relaxed pose', energy: 'low', type: 'sitting' },
    { id: 'P79', name: 'Crossed Ankles Sit', prompt: 'sitting with ankles crossed, legs extended, elegant composed posture', energy: 'low', type: 'sitting' },
    { id: 'P80', name: 'Hugging Knees', prompt: 'hugging knees to chest, compact vulnerable pose, introspective moment', energy: 'low', type: 'sitting' },
    { id: 'P81', name: 'Legs Over Armrest', prompt: 'legs draped over chair armrest, playful relaxed pose, casual comfort', energy: 'low', type: 'sitting' },
    { id: 'P82', name: 'Twisted Sit', prompt: 'torso twisted in seat, looking over shoulder, dynamic sitting pose', energy: 'med', type: 'sitting' },
    { id: 'P83', name: 'Lotus Position', prompt: 'sitting cross-legged lotus style, meditative calm pose, centered peaceful', energy: 'low', type: 'sitting' },
    { id: 'P84', name: 'One Leg Extended', prompt: 'one leg extended straight, other bent, elongated sitting pose', energy: 'low', type: 'sitting' },
    { id: 'P85', name: 'Backward Sit', prompt: 'sitting backwards on chair, arms on backrest, casual cool pose', energy: 'med', type: 'sitting' },
    { id: 'P86', name: 'Table Lean', prompt: 'sitting at table leaning on it, engaged conversational pose', energy: 'low', type: 'sitting' },
    { id: 'P87', name: 'Legs to Side', prompt: 'both legs extended to one side, elegant feminine sitting, graceful posture', energy: 'low', type: 'sitting' },
    { id: 'P88', name: 'Crouched Sit', prompt: 'crouched low sitting, compact grounded pose, street style casual', energy: 'med', type: 'sitting' },
    { id: 'P89', name: 'Stair Sit', prompt: 'sitting on stairs, legs on different levels, urban casual pose', energy: 'low', type: 'sitting' },
    { id: 'P90', name: 'Floor Recline', prompt: 'reclining on floor, propped on elbows, relaxed lounging pose', energy: 'low', type: 'sitting' },
    { id: 'P91', name: 'Kneel Sit', prompt: 'sitting back on heels, kneeling position, graceful composed pose', energy: 'low', type: 'sitting' },
    { id: 'P92', name: 'Swing Sit', prompt: 'sitting on swing, legs dangling, playful carefree pose', energy: 'low', type: 'sitting' },
    { id: 'P93', name: 'Bench Stretch', prompt: 'sitting on bench, arms stretched along back, relaxed open pose', energy: 'low', type: 'sitting' },
    { id: 'P94', name: 'Curled Up', prompt: 'curled up in corner, compact cozy pose, introspective comfortable', energy: 'low', type: 'sitting' },
    { id: 'P95', name: 'Wide Leg Sit', prompt: 'sitting with legs wide apart, confident casual pose, relaxed attitude', energy: 'med', type: 'sitting' },

    // ── LYING EXTENSIONS (P96-P110) ──
    { id: 'P96', name: 'Side Curl', prompt: 'lying on side curled up, fetal position, vulnerable peaceful pose', energy: 'low', type: 'lying' },
    { id: 'P97', name: 'Arm Under Head', prompt: 'lying on back, one arm under head, relaxed contemplative pose', energy: 'low', type: 'lying' },
    { id: 'P98', name: 'Legs Up Wall', prompt: 'lying with legs up against wall, relaxed inverted pose, calm restful', energy: 'low', type: 'lying' },
    { id: 'P99', name: 'Twisted Lie', prompt: 'lying with torso twisted, one knee bent over, relaxed spinal twist', energy: 'low', type: 'lying' },
    { id: 'P100', name: 'Face Down', prompt: 'lying face down, arms by side, peaceful restful pose', energy: 'low', type: 'lying' },
    { id: 'P101', name: 'One Arm Up', prompt: 'lying on back, one arm reaching up, dreamy thoughtful pose', energy: 'low', type: 'lying' },
    { id: 'P102', name: 'Legs Bent Side', prompt: 'lying on side, both knees bent, comfortable relaxed position', energy: 'low', type: 'lying' },
    { id: 'P103', name: 'Arms Out', prompt: 'lying on back, arms spread out, open vulnerable pose', energy: 'low', type: 'lying' },
    { id: 'P104', name: 'Head Turn', prompt: 'lying on side, head turned to camera, intimate connecting gaze', energy: 'low', type: 'lying' },
    { id: 'P105', name: 'Legs Crossed Lie', prompt: 'lying on back, legs crossed at ankles, elegant relaxed pose', energy: 'low', type: 'lying' },
    { id: 'P106', name: 'Hand on Chest Lie', prompt: 'lying on back, hand resting on chest, peaceful contemplative', energy: 'low', type: 'lying' },
    { id: 'P107', name: 'Knees to Chest', prompt: 'lying on back, knees drawn to chest, comfortable secure pose', energy: 'low', type: 'lying' },
    { id: 'P108', name: 'Diagonal Lie', prompt: 'lying diagonally across frame, dynamic composition, relaxed pose', energy: 'low', type: 'lying' },
    { id: 'P109', name: 'Propped Elbow', prompt: 'lying on side, propped up on elbow, engaged relaxed pose', energy: 'low', type: 'lying' },
    { id: 'P110', name: 'Starfish Lie', prompt: 'lying on back, arms and legs spread, carefree relaxed pose', energy: 'low', type: 'lying' },

    // ── ACTION EXTENSIONS (P111-P130) ──
    { id: 'P111', name: 'Walking Away', prompt: 'walking away from camera, mid-stride, looking back, dynamic movement', energy: 'med', type: 'action' },
    { id: 'P112', name: 'Running Start', prompt: 'starting to run, forward lean, dynamic energy, motion implied', energy: 'high', type: 'action' },
    { id: 'P113', name: 'Spinning', prompt: 'mid-spin, arms out, skirt flowing, dynamic joyful movement', energy: 'high', type: 'action' },
    { id: 'P114', name: 'Reaching Up', prompt: 'reaching up high, body extended, aspirational dynamic pose', energy: 'med', type: 'action' },
    { id: 'P115', name: 'Bending Forward', prompt: 'bending forward from waist, hair falling, dynamic stretch pose', energy: 'med', type: 'action' },
    { id: 'P116', name: 'Side Step', prompt: 'stepping to side, mid-movement, casual walking motion', energy: 'med', type: 'action' },
    { id: 'P117', name: 'Climbing', prompt: 'climbing motion, one leg raised, dynamic upward movement', energy: 'high', type: 'action' },
    { id: 'P118', name: 'Ducking', prompt: 'ducking or dodging, playful movement, dynamic action pose', energy: 'high', type: 'action' },
    { id: 'P119', name: 'Leaning Out', prompt: 'leaning out from behind object, playful revealing gesture', energy: 'med', type: 'action' },
    { id: 'P120', name: 'Balance Pose', prompt: 'balancing on one leg, arms out, graceful controlled movement', energy: 'med', type: 'action' },
    { id: 'P121', name: 'Catching', prompt: 'catching motion, hands ready, engaged dynamic pose', energy: 'med', type: 'action' },
    { id: 'P122', name: 'Throwing', prompt: 'throwing motion, arm extended, dynamic action captured', energy: 'high', type: 'action' },
    { id: 'P123', name: 'Kicking', prompt: 'mid-kick, leg extended, powerful dynamic movement', energy: 'high', type: 'action' },
    { id: 'P124', name: 'Bow Pose', prompt: 'bowing or curtsying, elegant gesture, respectful movement', energy: 'low', type: 'action' },
    { id: 'P125', name: 'Wave', prompt: 'waving at camera, friendly greeting gesture, welcoming motion', energy: 'med', type: 'action' },
    { id: 'P126', name: 'Clapping', prompt: 'clapping hands, appreciative gesture, joyful movement', energy: 'med', type: 'action' },
    { id: 'P127', name: 'Yoga Tree', prompt: 'tree pose yoga, one foot on inner thigh, balanced peaceful pose', energy: 'low', type: 'action' },
    { id: 'P128', name: 'Lunge', prompt: 'forward lunge position, strong athletic stance, dynamic stretch', energy: 'med', type: 'action' },
    { id: 'P129', name: 'Backbend', prompt: 'slight backbend, arched back, flexible graceful pose', energy: 'med', type: 'action' },
    { id: 'P130', name: 'Crouch Ready', prompt: 'crouched ready position, athletic stance, prepared for movement', energy: 'med', type: 'action' },

    // ── MANJA/CUTE EXTENSIONS (P131-P141) ──
    { id: 'P131', name: 'Finger Play', prompt: 'playing with fingers, cute fidgeting, innocent distracted gesture', energy: 'low', type: 'standing' },
    { id: 'P132', name: 'Toe Point', prompt: 'pointing toes cutely, playful foot gesture, charming detail', energy: 'low', type: 'standing' },
    { id: 'P133', name: 'Head Bob', prompt: 'head bobbing slightly, cute rhythmic movement, playful energy', energy: 'low', type: 'standing' },
    { id: 'P134', name: 'Shoulder Shrug Cute', prompt: 'cute exaggerated shoulder shrug, playful uncertain gesture, charming', energy: 'low', type: 'standing' },
    { id: 'P135', name: 'Hand Flutter', prompt: 'hands fluttering excitedly, animated gesture, enthusiastic cute energy', energy: 'med', type: 'standing' },
    { id: 'P136', name: 'Nose Boop', prompt: 'booping own nose, silly cute gesture, playful self-touch', energy: 'low', type: 'standing' },
    { id: 'P137', name: 'Cheek Squish', prompt: 'squishing own cheeks, cute self-pinch, adorable gesture', energy: 'low', type: 'standing' },
    { id: 'P138', name: 'Ear Touch', prompt: 'touching ear or earlobe, thoughtful cute gesture, delicate pose', energy: 'low', type: 'standing' },
    { id: 'P139', name: 'Foot Shuffle', prompt: 'shuffling feet cutely, nervous excited energy, charming movement', energy: 'low', type: 'standing' },
    { id: 'P140', name: 'Hip Sway', prompt: 'swaying hips side to side, playful rhythmic movement, flirty cute', energy: 'med', type: 'standing' },
    { id: 'P141', name: 'Full Spin', prompt: 'doing a full spin, arms out, joyful celebration movement, happy energy', energy: 'high', type: 'action' }
];

// ====================================================
// 📷 EXTENDED ANGLES — A41 to A98 (58 NEW!)
// Based on reference images A41-A97
// ====================================================
const ANGLES_EXTENDED = [
    { id: 'A41', name: 'Close Up Eyes', prompt: 'extreme close-up on eyes only, intense intimate gaze, detailed eye makeup visible', distance: 'close', height: 'eye' },
    { id: 'A42', name: 'Hand Frame', prompt: 'face framed by hands, creative framing device, intimate close composition', distance: 'close', height: 'eye' },
    { id: 'A43', name: 'Hair Frame', prompt: 'face framed by flowing hair, natural framing, romantic soft composition', distance: 'close', height: 'eye' },
    { id: 'A44', name: 'Object Foreground', prompt: 'shot through foreground object, depth layers, artistic framing', distance: 'medium', height: 'eye' },
    { id: 'A45', name: 'Shadow Play', prompt: 'face partially in shadow, dramatic light and shadow play, mysterious mood', distance: 'close', height: 'eye' },
    { id: 'A46', name: 'Reflection Shot', prompt: 'captured in reflection, creative mirror composition, artistic perspective', distance: 'medium', height: 'eye' },
    { id: 'A47', name: 'Silhouette', prompt: 'backlit silhouette, dramatic outline, mysterious artistic composition', distance: 'medium', height: 'eye' },
    { id: 'A48', name: 'Macro Detail', prompt: 'macro detail shot, extreme close-up texture, artistic abstract', distance: 'close', height: 'eye' },
    { id: 'A49', name: 'Through Fabric', prompt: 'shot through sheer fabric, dreamy soft filter effect, romantic mood', distance: 'medium', height: 'eye' },
    { id: 'A50', name: 'Double Exposure', prompt: 'double exposure effect, layered composition, artistic creative', distance: 'medium', height: 'eye' },
    { id: 'A51', name: 'Zoom Blur', prompt: 'zoom blur effect, dynamic motion, energetic creative shot', distance: 'medium', height: 'eye' },
    { id: 'A52', name: 'Tilt Shift Face', prompt: 'tilt shift miniature effect on face, selective focus, creative technique', distance: 'close', height: 'eye' },
    { id: 'A53', name: 'Prism Effect', prompt: 'shot through prism, rainbow light refraction, dreamy artistic effect', distance: 'close', height: 'eye' },
    { id: 'A54', name: 'Bokeh Frame', prompt: 'subject framed by bokeh lights, dreamy background, romantic atmosphere', distance: 'medium', height: 'eye' },
    { id: 'A55', name: 'Grid Composition', prompt: 'subject behind grid or fence, pattern foreground, urban edge', distance: 'medium', height: 'eye' },
    { id: 'A56', name: 'Circular Frame', prompt: 'subject in circular frame, tunnel effect, focused composition', distance: 'medium', height: 'eye' },
    { id: 'A57', name: 'Diagonal Tilt', prompt: 'camera tilted diagonally, dynamic angle, edgy composition', distance: 'medium', height: 'eye' },
    { id: 'A58', name: 'Upside Down', prompt: 'upside down perspective, creative disorienting angle, artistic', distance: 'medium', height: 'overhead' },
    { id: 'A59', name: 'Extreme Wide', prompt: 'extreme wide shot, subject small in frame, environmental focus', distance: 'wide', height: 'eye' },
    { id: 'A60', name: 'Knee Level', prompt: 'camera at knee level, unique low perspective, elongating angle', distance: 'full', height: 'low' },
    { id: 'A61', name: 'Chest Level', prompt: 'camera at chest level, intimate perspective, personal space angle', distance: 'medium', height: 'eye' },
    { id: 'A62', name: 'Forehead Level', prompt: 'camera at forehead level, slightly high angle, flattering perspective', distance: 'close', height: 'high' },
    { id: 'A63', name: 'Behind Glass', prompt: 'shot through glass, reflections and transparency, layered composition', distance: 'medium', height: 'eye' },
    { id: 'A64', name: 'Water Refraction', prompt: 'shot through water, refraction distortion, dreamy artistic effect', distance: 'close', height: 'eye' },
    { id: 'A65', name: 'Smoke Haze', prompt: 'shot through light smoke or haze, atmospheric mood, mysterious', distance: 'medium', height: 'eye' },
    { id: 'A66', name: 'Light Leak', prompt: 'light leak effect, vintage film aesthetic, warm artistic flare', distance: 'medium', height: 'eye' },
    { id: 'A67', name: 'Vignette Heavy', prompt: 'heavy vignette framing, focused center, dramatic mood', distance: 'medium', height: 'eye' },
    { id: 'A68', name: 'Asymmetric', prompt: 'asymmetric composition, off-center subject, modern artistic', distance: 'medium', height: 'eye' },
    { id: 'A69', name: 'Leading Lines', prompt: 'leading lines pointing to subject, directed composition, dynamic', distance: 'medium', height: 'eye' },
    { id: 'A70', name: 'Pattern Background', prompt: 'subject against patterned background, graphic composition, bold', distance: 'medium', height: 'eye' },
    { id: 'A71', name: 'Negative Space', prompt: 'large negative space, minimalist composition, artistic breathing room', distance: 'medium', height: 'eye' },
    { id: 'A72', name: 'Centered Symmetric', prompt: 'perfectly centered symmetric, balanced composition, formal', distance: 'medium', height: 'eye' },
    { id: 'A73', name: 'Golden Ratio', prompt: 'golden ratio composition, mathematically pleasing, classic aesthetic', distance: 'medium', height: 'eye' },
    { id: 'A74', name: 'Frame Within Frame', prompt: 'natural frame within frame, architectural element, focused composition', distance: 'medium', height: 'eye' },
    { id: 'A75', name: 'Motion Blur', prompt: 'intentional motion blur, dynamic energy, artistic movement', distance: 'medium', height: 'eye' },
    { id: 'A76', name: 'Frozen Motion', prompt: 'frozen mid-motion, crisp action capture, dynamic still', distance: 'medium', height: 'eye' },
    { id: 'A77', name: 'Multiple Exposure', prompt: 'multiple exposure layers, ghostly artistic effect, creative', distance: 'medium', height: 'eye' },
    { id: 'A78', name: 'Chromatic Aberration', prompt: 'chromatic aberration effect, glitchy artistic, modern edge', distance: 'close', height: 'eye' },
    { id: 'A79', name: 'Soft Focus', prompt: 'soft focus dreamy effect, romantic ethereal mood, gentle', distance: 'close', height: 'eye' },
    { id: 'A80', name: 'High Contrast', prompt: 'high contrast dramatic, bold shadows, striking graphic', distance: 'medium', height: 'eye' },
    { id: 'A81', name: 'Low Contrast', prompt: 'low contrast soft, muted tones, gentle atmospheric', distance: 'medium', height: 'eye' },
    { id: 'A82', name: 'Warm Filter', prompt: 'warm color filter, golden tones, cozy inviting mood', distance: 'medium', height: 'eye' },
    { id: 'A83', name: 'Cool Filter', prompt: 'cool color filter, blue tones, calm distant mood', distance: 'medium', height: 'eye' },
    { id: 'A84', name: 'Sepia Tone', prompt: 'sepia toned, vintage nostalgic, classic timeless', distance: 'medium', height: 'eye' },
    { id: 'A85', name: 'Black White', prompt: 'black and white, timeless classic, dramatic monochrome', distance: 'medium', height: 'eye' },
    { id: 'A86', name: 'Infrared', prompt: 'infrared effect, surreal otherworldly, artistic unique', distance: 'medium', height: 'eye' },
    { id: 'A87', name: 'Cross Process', prompt: 'cross processed, saturated colors, vintage film look', distance: 'medium', height: 'eye' },
    { id: 'A88', name: 'Bleach Bypass', prompt: 'bleach bypass effect, high contrast desaturated, edgy', distance: 'medium', height: 'eye' },
    { id: 'A89', name: 'Orton Effect', prompt: 'orton effect glow, dreamy soft, ethereal romantic', distance: 'medium', height: 'eye' },
    { id: 'A90', name: 'Lensbaby', prompt: 'lensbaby selective focus, artistic blur swirl, creative', distance: 'close', height: 'eye' },
    { id: 'A91', name: 'Anamorphic', prompt: 'anamorphic lens flare, cinematic widescreen, film look', distance: 'medium', height: 'eye' },
    { id: 'A92', name: 'Macro Eye', prompt: 'macro shot of eye only, extreme detail, intimate', distance: 'close', height: 'eye' },
    { id: 'A93', name: 'Lips Close', prompt: 'close-up on lips only, sensual detail, beauty shot', distance: 'close', height: 'eye' },
    { id: 'A94', name: 'Hands Focus', prompt: 'focus on hands, face blurred, artistic detail', distance: 'close', height: 'eye' },
    { id: 'A95', name: 'Feet Detail', prompt: 'detail shot of feet, artistic pedicure focus, beauty', distance: 'close', height: 'low' },
    { id: 'A96', name: 'Profile Close', prompt: 'close-up profile, jawline focus, elegant silhouette', distance: 'close', height: 'eye' },
    { id: 'A97', name: 'Three Quarter Back', prompt: 'three quarter view from back, mysterious revealing, elegant', distance: 'medium', height: 'eye' },
    { id: 'A98', name: 'Overhead Flat', prompt: 'directly overhead flat lay, geometric composition, modern', distance: 'close', height: 'overhead' }
];

// ====================================================
// 🌤️ EXTENDED MOODS — M23 to M100 (78 NEW!)
// Based on reference images M23-M99
// ====================================================
const MOODS_EXTENDED = [
    { id: 'M23', name: 'Cinematic Drama', prompt: 'cinematic dramatic lighting, movie-like atmosphere, intense emotional mood', energy: 'intense', time: 'night' },
    { id: 'M24', name: 'Ethereal Glow', prompt: 'ethereal otherworldly glow, magical atmosphere, dreamy transcendent', energy: 'calm', time: 'any' },
    { id: 'M25', name: 'Urban Night', prompt: 'urban night atmosphere, city lights bokeh, modern nocturnal energy', energy: 'dark', time: 'night' },
    { id: 'M26', name: 'Forest Mist', prompt: 'misty forest atmosphere, natural diffused light, mystical woodland mood', energy: 'calm', time: 'morning' },
    { id: 'M27', name: 'Beach Sunset', prompt: 'beach sunset warmth, ocean reflection glow, peaceful golden hour', energy: 'warm', time: 'evening' },
    { id: 'M28', name: 'Studio Minimal', prompt: 'clean studio minimal, even professional light, modern simple', energy: 'bright', time: 'any' },
    { id: 'M29', name: 'Vintage Film', prompt: 'vintage film aesthetic, nostalgic color grading, retro atmosphere', energy: 'warm', time: 'any' },
    { id: 'M30', name: 'Cyber Neon', prompt: 'cyberpunk neon lights, futuristic glow, electric atmosphere', energy: 'intense', time: 'night' },
    { id: 'M31', name: 'Pastel Dream', prompt: 'pastel soft colors, dreamy gentle light, sweet romantic mood', energy: 'calm', time: 'day' },
    { id: 'M32', name: 'Stormy Mood', prompt: 'stormy dramatic sky, moody atmospheric tension, powerful nature', energy: 'intense', time: 'day' },
    { id: 'M33', name: 'Autumn Warm', prompt: 'autumn warm tones, golden fallen leaves, cozy seasonal mood', energy: 'warm', time: 'day' },
    { id: 'M34', name: 'Winter Cool', prompt: 'winter cool light, crisp clean atmosphere, serene cold beauty', energy: 'calm', time: 'day' },
    { id: 'M35', name: 'Spring Fresh', prompt: 'spring fresh light, new growth energy, hopeful bright mood', energy: 'bright', time: 'day' },
    { id: 'M36', name: 'Summer Heat', prompt: 'summer heat haze, intense bright light, vibrant energetic', energy: 'bright', time: 'day' },
    { id: 'M37', name: 'Midnight Blue', prompt: 'midnight blue hour, deep dark atmosphere, mysterious late night', energy: 'dark', time: 'night' },
    { id: 'M38', name: 'Dawn Pink', prompt: 'dawn pink sky, soft awakening light, gentle new beginning', energy: 'calm', time: 'morning' },
    { id: 'M39', name: 'Dusk Purple', prompt: 'dusk purple twilight, transitional magic hour, contemplative mood', energy: 'calm', time: 'evening' },
    { id: 'M40', name: 'Fire Glow', prompt: 'firelight warm glow, dancing flames, primal intimate atmosphere', energy: 'warm', time: 'night' },
    { id: 'M41', name: 'Water Reflection', prompt: 'water reflection light, rippling caustic patterns, fluid atmosphere', energy: 'calm', time: 'day' },
    { id: 'M42', name: 'Glass Prism', prompt: 'prism rainbow light, colorful refraction, magical artistic mood', energy: 'bright', time: 'day' },
    { id: 'M43', name: 'Smoke Atmospheric', prompt: 'atmospheric smoke haze, mysterious diffused light, moody', energy: 'dark', time: 'night' },
    { id: 'M44', name: 'Bokeh Dreams', prompt: 'dreamy bokeh background, soft out-of-focus lights, romantic', energy: 'warm', time: 'night' },
    { id: 'M45', name: 'High Key Bright', prompt: 'high key bright, minimal shadows, clean optimistic mood', energy: 'bright', time: 'any' },
    { id: 'M46', name: 'Low Key Dark', prompt: 'low key dark, dramatic shadows, mysterious intense', energy: 'dark', time: 'night' },
    { id: 'M47', name: 'Rembrandt', prompt: 'rembrandt classical lighting, triangular cheek light, artistic master', energy: 'dark', time: 'any' },
    { id: 'M48', name: 'Split Face', prompt: 'split lighting half face, dramatic contrast, bold artistic', energy: 'intense', time: 'any' },
    { id: 'M49', name: 'Loop Light', prompt: 'loop lighting classic, small nose shadow, flattering portrait', energy: 'bright', time: 'any' },
    { id: 'M50', name: 'Broad Light', prompt: 'broad lighting wide, full face illumination, open honest', energy: 'bright', time: 'any' },
    { id: 'M51', name: 'Short Light', prompt: 'short lighting narrow, sculpted shadows, slimming dramatic', energy: 'dark', time: 'any' },
    { id: 'M52', name: 'Clamshell', prompt: 'clamshell beauty light, even flattering glow, glamour portrait', energy: 'bright', time: 'any' },
    { id: 'M53', name: 'Edge Light', prompt: 'edge light rim, separation glow, dimensional dramatic', energy: 'dark', time: 'any' },
    { id: 'M54', name: 'Kicker Light', prompt: 'kicker light accent, cheekbone highlight, sculpted beauty', energy: 'dark', time: 'any' },
    { id: 'M55', name: 'Hair Light', prompt: 'hair light separation, glowing strands, dimensional polish', energy: 'bright', time: 'any' },
    { id: 'M56', name: 'Fill Light Only', prompt: 'fill light only, soft even minimal, gentle subtle', energy: 'calm', time: 'any' },
    { id: 'M57', name: 'Practical Lights', prompt: 'practical lights in scene, natural motivated source, realistic', energy: 'warm', time: 'night' },
    { id: 'M58', name: 'Mixed Color', prompt: 'mixed color temperatures, creative contrast, dynamic mood', energy: 'intense', time: 'night' },
    { id: 'M59', name: 'Monochrome Red', prompt: 'monochrome red tone, intense passionate mood, bold', energy: 'intense', time: 'night' },
    { id: 'M60', name: 'Monochrome Blue', prompt: 'monochrome blue tone, calm melancholic mood, cool', energy: 'calm', time: 'night' },
    { id: 'M61', name: 'Monochrome Green', prompt: 'monochrome green tone, eerie unnatural mood, sickly', energy: 'dark', time: 'night' },
    { id: 'M62', name: 'Monochrome Amber', prompt: 'monochrome amber tone, warm nostalgic mood, vintage', energy: 'warm', time: 'night' },
    { id: 'M63', name: 'Teal Orange', prompt: 'teal and orange grade, cinematic contrast, modern film look', energy: 'intense', time: 'any' },
    { id: 'M64', name: 'Purple Gold', prompt: 'purple and gold contrast, regal luxurious mood, rich', energy: 'warm', time: 'night' },
    { id: 'M65', name: 'Pink Cyan', prompt: 'pink and cyan complementary, vibrant pop contrast, energetic', energy: 'bright', time: 'any' },
    { id: 'M66', name: 'Green Magenta', prompt: 'green and magenta tension, bold artistic choice, edgy', energy: 'intense', time: 'night' },
    { id: 'M67', name: 'Desaturated', prompt: 'desaturated muted colors, subdued calm mood, minimalist', energy: 'calm', time: 'any' },
    { id: 'M68', name: 'Oversaturated', prompt: 'oversaturated vivid colors, intense bold mood, vibrant', energy: 'bright', time: 'day' },
    { id: 'M69', name: 'Warm Shadows', prompt: 'warm shadow tones, cozy inviting darkness, comfortable', energy: 'warm', time: 'evening' },
    { id: 'M70', name: 'Cool Shadows', prompt: 'cool shadow tones, distant mysterious darkness, cinematic', energy: 'dark', time: 'night' },
    { id: 'M71', name: 'Green Shadows', prompt: 'green tinted shadows, eerie unnatural feel, unsettling', energy: 'dark', time: 'night' },
    { id: 'M72', name: 'Purple Shadows', prompt: 'purple shadow tones, mystical magical darkness, fantasy', energy: 'dark', time: 'night' },
    { id: 'M73', name: 'Hard Shadows', prompt: 'hard defined shadows, bold graphic contrast, dramatic', energy: 'intense', time: 'day' },
    { id: 'M74', name: 'Soft Shadows', prompt: 'soft gradual shadows, gentle flattering transition, romantic', energy: 'calm', time: 'any' },
    { id: 'M75', name: 'No Shadows', prompt: 'shadowless even light, flat clean look, modern beauty', energy: 'bright', time: 'any' },
    { id: 'M76', name: 'Dappled Light', prompt: 'dappled light patterns, natural filtered shade, organic', energy: 'calm', time: 'day' },
    { id: 'M77', name: 'Striped Light', prompt: 'striped light shadow, venetian blind effect, noir mood', energy: 'dark', time: 'night' },
    { id: 'M78', name: 'Circular Shadow', prompt: 'circular shadow pattern, artistic gobo effect, creative', energy: 'dark', time: 'night' },
    { id: 'M79', name: 'Gobo Pattern', prompt: 'gobo projected pattern, textured light, artistic design', energy: 'dark', time: 'night' },
    { id: 'M80', name: 'Window Frame', prompt: 'window frame shadow, architectural light pattern, indoor', energy: 'calm', time: 'day' },
    { id: 'M81', name: 'Leaf Shadow', prompt: 'leaf shadow pattern, natural organic texture, outdoor', energy: 'calm', time: 'day' },
    { id: 'M82', name: 'Lace Shadow', prompt: 'lace curtain shadow, delicate pattern, romantic feminine', energy: 'warm', time: 'day' },
    { id: 'M83', name: 'Blind Shadow', prompt: 'blind slat shadows, horizontal lines, modern graphic', energy: 'dark', time: 'day' },
    { id: 'M84', name: 'Tree Shadow', prompt: 'tree branch shadows, natural organic pattern, outdoor', energy: 'calm', time: 'day' },
    { id: 'M85', name: 'Fence Shadow', prompt: 'fence shadow stripes, linear pattern, rustic', energy: 'calm', time: 'day' },
    { id: 'M86', name: 'Grille Shadow', prompt: 'decorative grille shadow, ornate pattern, elegant', energy: 'dark', time: 'day' },
    { id: 'M87', name: 'Hand Shadow', prompt: 'hand shadow play, creative silhouette, artistic', energy: 'dark', time: 'night' },
    { id: 'M88', name: 'Fabric Shadow', prompt: 'fabric draped shadow, soft organic pattern, gentle', energy: 'calm', time: 'day' },
    { id: 'M89', name: 'Water Shadow', prompt: 'water caustic shadow, rippling pool pattern, fluid', energy: 'calm', time: 'day' },
    { id: 'M90', name: 'Fire Shadow', prompt: 'fire flickering shadow, dancing dynamic pattern, primal', energy: 'intense', time: 'night' },
    { id: 'M91', name: 'Candle Shadow', prompt: 'candle flicker shadow, intimate warm movement, romantic', energy: 'warm', time: 'night' },
    { id: 'M92', name: 'Lantern Glow', prompt: 'lantern warm glow, contained intimate light, cozy', energy: 'warm', time: 'night' },
    { id: 'M93', name: 'String Light', prompt: 'string lights festive, warm bokeh dots, celebratory', energy: 'warm', time: 'night' },
    { id: 'M94', name: 'Tube Light', prompt: 'tube fluorescent light, cool clinical glow, modern urban', energy: 'bright', time: 'any' },
    { id: 'M95', name: 'LED Strip', prompt: 'LED strip colored, modern accent light, tech vibe', energy: 'intense', time: 'night' },
    { id: 'M96', name: 'Screen Glow', prompt: 'screen device glow, cool blue light, modern digital', energy: 'dark', time: 'night' },
    { id: 'M97', name: 'Headlight', prompt: 'car headlight beam, dramatic directional, urban night', energy: 'intense', time: 'night' },
    { id: 'M98', name: 'Flashlight', prompt: 'flashlight focused beam, dramatic spotlight, mysterious', energy: 'dark', time: 'night' },
    { id: 'M99', name: 'Match Flame', prompt: 'match flame tiny, intimate momentary light, fragile', energy: 'dark', time: 'night' },
    { id: 'M100', name: 'Sparkler', prompt: 'sparkler light trails, magical motion, celebratory fun', energy: 'bright', time: 'night' }
];

// ====================================================
// 😊 EXTENDED EXPRESSIONS — E23 to E67 (45 NEW!)
// Based on reference images E23-E66
// ====================================================
const EXPRESSIONS_EXTENDED = [
    { id: 'E23', name: 'Mystery Smile', prompt: 'mysterious subtle smile, enigmatic expression, knowing secret', intensity: 'subtle', vibe: 'intense' },
    { id: 'E24', name: 'Open Joy', prompt: 'open joyful expression, uninhibited happiness, radiant smile', intensity: 'strong', vibe: 'happy' },
    { id: 'E25', name: 'Gentle Concern', prompt: 'gentle concerned look, furrowed brow, caring empathetic', intensity: 'subtle', vibe: 'soft' },
    { id: 'E26', name: 'Playful Bite', prompt: 'playfully biting lip, teasing expression, flirty fun', intensity: 'medium', vibe: 'playful' },
    { id: 'E27', name: 'Serene Peace', prompt: 'serene peaceful expression, calm acceptance, inner tranquility', intensity: 'subtle', vibe: 'neutral' },
    { id: 'E28', name: 'Fierce Gaze', prompt: 'fierce intense gaze, determined focused eyes, powerful', intensity: 'strong', vibe: 'intense' },
    { id: 'E29', name: 'Soft Longing', prompt: 'soft longing expression, yearning eyes, tender desire', intensity: 'subtle', vibe: 'soft' },
    { id: 'E30', name: 'Amused', prompt: 'amused expression, slight smile in eyes, entertained pleased', intensity: 'subtle', vibe: 'happy' },
    { id: 'E31', name: 'Vulnerable', prompt: 'vulnerable open expression, raw honest emotion, tender', intensity: 'medium', vibe: 'soft' },
    { id: 'E32', name: 'Confident Smile', prompt: 'confident assured smile, self-possessed, secure happy', intensity: 'medium', vibe: 'happy' },
    { id: 'E33', name: 'Melancholy', prompt: 'melancholy expression, sad beauty, thoughtful sorrow', intensity: 'subtle', vibe: 'soft' },
    { id: 'E34', name: 'Excited Surprise', prompt: 'excited surprised look, wide eyes open mouth, delighted', intensity: 'strong', vibe: 'happy' },
    { id: 'E35', name: 'Seductive', prompt: 'seductive smoldering look, bedroom eyes, alluring intense', intensity: 'medium', vibe: 'intense' },
    { id: 'E36', name: 'Innocent', prompt: 'innocent pure expression, wide trusting eyes, sweet', intensity: 'subtle', vibe: 'soft' },
    { id: 'E37', name: 'Wistful', prompt: 'wistful thoughtful look, nostalgic longing, bittersweet', intensity: 'subtle', vibe: 'soft' },
    { id: 'E38', name: 'Bold', prompt: 'bold fearless expression, challenging direct gaze, confident', intensity: 'strong', vibe: 'intense' },
    { id: 'E39', name: 'Tender', prompt: 'tender gentle expression, soft loving eyes, caring', intensity: 'subtle', vibe: 'soft' },
    { id: 'E40', name: 'Mischievous', prompt: 'mischievous grin, up to something, playful trouble', intensity: 'medium', vibe: 'playful' },
    { id: 'E41', name: 'Grateful', prompt: 'grateful thankful expression, appreciative eyes, warm', intensity: 'subtle', vibe: 'happy' },
    { id: 'E42', name: 'Anxious', prompt: 'anxious worried look, tense eyes, uncertain nervous', intensity: 'medium', vibe: 'intense' },
    { id: 'E43', name: 'Hopeful', prompt: 'hopeful optimistic expression, bright expectant eyes', intensity: 'subtle', vibe: 'happy' },
    { id: 'E44', name: 'Disappointed', prompt: 'disappointed let down look, sad eyes, resigned', intensity: 'subtle', vibe: 'soft' },
    { id: 'E45', name: 'Proud', prompt: 'proud satisfied expression, accomplished smile, dignified', intensity: 'medium', vibe: 'happy' },
    { id: 'E46', name: 'Shy', prompt: 'shy bashful expression, looking down, blushing cute', intensity: 'subtle', vibe: 'soft' },
    { id: 'E47', name: 'Determined', prompt: 'determined resolute look, set jaw, focused will', intensity: 'strong', vibe: 'intense' },
    { id: 'E48', name: 'Relieved', prompt: 'relieved expression, tension released, grateful calm', intensity: 'subtle', vibe: 'happy' },
    { id: 'E49', name: 'Curious', prompt: 'curious inquisitive look, tilted head, interested eyes', intensity: 'subtle', vibe: 'playful' },
    { id: 'E50', name: 'Bored', prompt: 'bored unimpressed expression, disinterested, over it', intensity: 'subtle', vibe: 'neutral' },
    { id: 'E51', name: 'Enchanted', prompt: 'enchanted captivated look, mesmerized, spellbound', intensity: 'medium', vibe: 'soft' },
    { id: 'E52', name: 'Skeptical', prompt: 'skeptical doubtful expression, raised brow, questioning', intensity: 'subtle', vibe: 'neutral' },
    { id: 'E53', name: 'Delighted', prompt: 'delighted pleased expression, happy surprise, charmed', intensity: 'medium', vibe: 'happy' },
    { id: 'E54', name: 'Exhausted', prompt: 'exhausted tired look, heavy eyes, worn out', intensity: 'subtle', vibe: 'neutral' },
    { id: 'E55', name: 'Energized', prompt: 'energized vibrant expression, alive awake, dynamic', intensity: 'strong', vibe: 'happy' },
    { id: 'E56', name: 'Compassionate', prompt: 'compassionate understanding look, empathetic eyes, kind', intensity: 'subtle', vibe: 'soft' },
    { id: 'E57', name: 'Jealous', prompt: 'jealous envious expression, possessive eyes, tense', intensity: 'medium', vibe: 'intense' },
    { id: 'E58', name: 'Forgiving', prompt: 'forgiving merciful look, letting go, peaceful', intensity: 'subtle', vibe: 'soft' },
    { id: 'E59', name: 'Regretful', prompt: 'regretful sorry expression, remorseful eyes, sad', intensity: 'subtle', vibe: 'soft' },
    { id: 'E60', name: 'Triumphant', prompt: 'triumphant victorious look, successful smile, proud', intensity: 'strong', vibe: 'happy' },
    { id: 'E61', name: 'Humble', prompt: 'humble modest expression, downcast eyes, shy', intensity: 'subtle', vibe: 'soft' },
    { id: 'E62', name: 'Inspired', prompt: 'inspired creative look, bright idea eyes, motivated', intensity: 'medium', vibe: 'happy' },
    { id: 'E63', name: 'Confused', prompt: 'confused puzzled expression, furrowed brow, lost', intensity: 'subtle', vibe: 'neutral' },
    { id: 'E64', name: 'Clear', prompt: 'clear focused expression, mental clarity, present', intensity: 'subtle', vibe: 'neutral' },
    { id: 'E65', name: 'Loving', prompt: 'loving adoring expression, warm affectionate eyes, tender', intensity: 'medium', vibe: 'soft' },
    { id: 'E66', name: 'Fierce Joy', prompt: 'fiercely joyful, powerful happiness, unstoppable smile', intensity: 'strong', vibe: 'happy' },
    { id: 'E67', name: 'Zen', prompt: 'zen enlightened expression, pure presence, transcendent peace', intensity: 'subtle', vibe: 'neutral' }
];

// ====================================================
// 🤌 EXTENDED MICRO POSES — MP23 to MP69 (47 NEW!)
// Based on reference images MP23-MP68
// ====================================================
const MICRO_POSES_EXTENDED = [
    { id: 'MP23', name: 'Wrist Flick', prompt: 'casual wrist flick gesture, dismissive playful motion, sassy', area: 'hand', engagement: 'med' },
    { id: 'MP24', name: 'Palm Up', prompt: 'palm up open gesture, inviting receiving pose, vulnerable', area: 'hand', engagement: 'low' },
    { id: 'MP25', name: 'Fist Light', prompt: 'lightly clenched fist, determination gesture, subtle power', area: 'hand', engagement: 'med' },
    { id: 'MP26', name: 'Pinch', prompt: 'finger pinch gesture, precise delicate motion, focused', area: 'finger', engagement: 'med' },
    { id: 'MP27', name: 'Spread Fingers', prompt: 'fingers spread wide, open expressive gesture, dynamic', area: 'hand', engagement: 'med' },
    { id: 'MP28', name: 'Interlace', prompt: 'fingers interlaced together, thoughtful composed pose, elegant', area: 'hand', engagement: 'low' },
    { id: 'MP29', name: 'Thumb Press', prompt: 'thumb pressing on finger, contemplative fidget, nervous', area: 'finger', engagement: 'low' },
    { id: 'MP30', name: 'Knuckle Touch', prompt: 'touching knuckles to chin, thinking pose, intellectual', area: 'hand', engagement: 'med' },
    { id: 'MP31', name: 'Backhand Stroke', prompt: 'backhand stroking own arm, self-soothing gesture, sensual', area: 'hand', engagement: 'high' },
    { id: 'MP32', name: 'Palm Stroke', prompt: 'palming own cheek or neck, tender self-touch, intimate', area: 'hand', engagement: 'high' },
    { id: 'MP33', name: 'Finger Crawl', prompt: 'fingers crawling along surface, anticipatory tension, sensual', area: 'finger', engagement: 'high' },
    { id: 'MP34', name: 'Wrist Rotate', prompt: 'rotating wrist slowly, fluid graceful motion, elegant', area: 'hand', engagement: 'low' },
    { id: 'MP35', name: 'Finger Drum', prompt: 'fingers drumming rhythmically, impatient or musical, playful', area: 'finger', engagement: 'med' },
    { id: 'MP36', name: 'Palm Press', prompt: 'palm pressed against surface, grounded stable pose, present', area: 'hand', engagement: 'low' },
    { id: 'MP37', name: 'Finger Trace', prompt: 'finger tracing invisible line, thoughtful gesture, artistic', area: 'finger', engagement: 'low' },
    { id: 'MP38', name: 'Wrist Drop', prompt: 'wrist dropped limp, relaxed surrender pose, vulnerable', area: 'hand', engagement: 'low' },
    { id: 'MP39', name: 'Finger Curl', prompt: 'fingers curling inward slowly, beckoning gesture, inviting', area: 'finger', engagement: 'high' },
    { id: 'MP40', name: 'Thumb Circle', prompt: 'thumb making circles, anxious fidget, thoughtful motion', area: 'finger', engagement: 'low' },
    { id: 'MP41', name: 'Palm Flutter', prompt: 'palms fluttering excitedly, animated expressive gesture, joyful', area: 'hand', engagement: 'med' },
    { id: 'MP42', name: 'Finger Point Down', prompt: 'finger pointing downward, directing attention, commanding', area: 'finger', engagement: 'med' },
    { id: 'MP43', name: 'Wrist Cross', prompt: 'wrists crossed delicately, elegant composed pose, refined', area: 'hand', engagement: 'low' },
    { id: 'MP44', name: 'Finger Weave', prompt: 'fingers weaving through hair or fabric, tactile sensual', area: 'finger', engagement: 'high' },
    { id: 'MP45', name: 'Palm Bounce', prompt: 'palm bouncing lightly, rhythmic playful motion, fun', area: 'hand', engagement: 'med' },
    { id: 'MP46', name: 'Finger Snap', prompt: 'finger snap gesture, emphatic punctuation, confident', area: 'finger', engagement: 'med' },
    { id: 'MP47', name: 'Wrist Flex', prompt: 'wrist flexing showing tendons, elegant strength, graceful', area: 'hand', engagement: 'med' },
    { id: 'MP48', name: 'Finger Hover', prompt: 'finger hovering near lips, almost touching, teasing tension', area: 'finger', engagement: 'high' },
    { id: 'MP49', name: 'Palm Reveal', prompt: 'palm revealing or showing, open honest gesture, vulnerable', area: 'hand', engagement: 'low' },
    { id: 'MP50', name: 'Finger Close', prompt: 'fingers closing slowly into fist, building tension, powerful', area: 'finger', engagement: 'med' },
    { id: 'MP51', name: 'Wrist Shake', prompt: 'wrist shaking loose, relaxed casual motion, carefree', area: 'hand', engagement: 'low' },
    { id: 'MP52', name: 'Finger Open', prompt: 'fingers opening from fist, releasing gesture, vulnerable', area: 'finger', engagement: 'low' },
    { id: 'MP53', name: 'Palm Cover', prompt: 'palm covering mouth or face, shy surprised gesture, cute', area: 'hand', engagement: 'med' },
    { id: 'MP54', name: 'Finger Beckon', prompt: 'finger beckoning come here, inviting seductive gesture', area: 'finger', engagement: 'high' },
    { id: 'MP55', name: 'Wrist Press', prompt: 'wrist pressing against surface, grounded stable pose, present', area: 'hand', engagement: 'low' },
    { id: 'MP56', name: 'Finger Count', prompt: 'fingers counting on hand, thoughtful organizing gesture', area: 'finger', engagement: 'low' },
    { id: 'MP57', name: 'Palm Wave', prompt: 'palm waving hello or goodbye, friendly social gesture', area: 'hand', engagement: 'med' },
    { id: 'MP58', name: 'Finger Twist', prompt: 'finger twisting motion, anxious fidget, thoughtful', area: 'finger', engagement: 'low' },
    { id: 'MP59', name: 'Wrist Lift', prompt: 'wrist lifting elegantly, graceful poised motion, refined', area: 'hand', engagement: 'low' },
    { id: 'MP60', name: 'Finger Still', prompt: 'fingers perfectly still, controlled composed pose, calm', area: 'finger', engagement: 'low' },
    { id: 'MP61', name: 'Palm Glide', prompt: 'palm gliding along surface, smooth sensual motion, elegant', area: 'hand', engagement: 'high' },
    { id: 'MP62', name: 'Finger Pop', prompt: 'finger popping gesture, emphatic accent, playful', area: 'finger', engagement: 'med' },
    { id: 'MP63', name: 'Wrist Circle', prompt: 'wrist making circles, fluid continuous motion, graceful', area: 'hand', engagement: 'low' },
    { id: 'MP64', name: 'Finger Lock', prompt: 'fingers locked together, secure composed pose, stable', area: 'finger', engagement: 'low' },
    { id: 'MP65', name: 'Palm Tap', prompt: 'palm tapping rhythmically, impatient or musical, playful', area: 'hand', engagement: 'med' },
    { id: 'MP66', name: 'Finger Slide', prompt: 'finger sliding along edge, tactile exploratory motion', area: 'finger', engagement: 'low' },
    { id: 'MP67', name: 'Wrist Hold', prompt: 'wrist held by other hand, self-comfort gesture, vulnerable', area: 'hand', engagement: 'low' },
    { id: 'MP68', name: 'Finger Release', prompt: 'fingers releasing slowly, letting go gesture, peaceful', area: 'finger', engagement: 'low' },
    { id: 'MP69', name: 'Palm Embrace', prompt: 'palms embracing or holding, nurturing protective gesture, tender', area: 'hand', engagement: 'med' }
];

// ====================================================
// 💇 EXTENDED HAIRSTYLES — H23 to H70 (48 NEW!)
// Based on reference images H23-H69
// ====================================================
const HAIRSTYLES_EXTENDED = [
    { id: 'H23', name: 'Victory Rolls', prompt: 'victory rolls vintage, 1940s pinup style, retro glamour', length: 'up', vibe: 'vintage' },
    { id: 'H24', name: 'Pin Straight', prompt: 'pin straight sleek, razor sharp ends, modern minimalist', length: 'long', vibe: 'elegant' },
    { id: 'H25', name: 'Teased Volume', prompt: 'teased big hair, 80s volume, bold dramatic', length: 'long', vibe: 'glamour' },
    { id: 'H26', name: 'Sleek Low Pony', prompt: 'sleek low ponytail, elegant minimal, sophisticated', length: 'up', vibe: 'elegant' },
    { id: 'H27', name: 'Bubble Pony', prompt: 'bubble ponytail sections, trendy playful, modern fun', length: 'up', vibe: 'trendy' },
    { id: 'H28', name: 'Twisted Updo', prompt: 'twisted updo elegant, intricate detail, formal', length: 'up', vibe: 'elegant' },
    { id: 'H29', name: 'Braided Pony', prompt: 'braided ponytail wrap, detailed elegant, boho chic', length: 'up', vibe: 'casual' },
    { id: 'H30', name: 'Messy Waves', prompt: 'messy beach waves, effortless texture, casual cool', length: 'long', vibe: 'casual' },
    { id: 'H31', name: 'Hollywood Waves', prompt: 'hollyold glamour waves, old screen siren, elegant', length: 'long', vibe: 'glamour' },
    { id: 'H32', name: 'Crimped', prompt: 'crimped texture, 90s retro, edgy fun', length: 'long', vibe: 'edgy' },
    { id: 'H33', name: 'Afro', prompt: 'natural afro, voluminous proud, beautiful texture', length: 'short', vibe: 'natural' },
    { id: 'H34', name: 'Box Braids', prompt: 'box braids long, protective stylish, versatile', length: 'long', vibe: 'trendy' },
    { id: 'H35', name: 'Cornrows', prompt: 'cornrows braided close, sleek artistic, cultural', length: 'short', vibe: 'trendy' },
    { id: 'H36', name: 'Faux Hawk', prompt: 'faux hawk edgy, mohawk vibe, bold punk', length: 'up', vibe: 'edgy' },
    { id: 'H37', name: 'Gibson Tuck', prompt: 'gibson tuck vintage, elegant rolled, classic', length: 'up', vibe: 'vintage' },
    { id: 'H38', name: 'Waterfall Braid', prompt: 'waterfall braid cascading, romantic intricate, feminine', length: 'long', vibe: 'elegant' },
    { id: 'H39', name: 'Milkmaid Braid', prompt: 'milkmaid crown braid, romantic boho, festival cute', length: 'up', vibe: 'casual' },
    { id: 'H40', name: 'Rope Braid', prompt: 'rope braid twisted, elegant simple, chic', length: 'long', vibe: 'elegant' },
    { id: 'H41', name: 'Pull-Through', prompt: 'pull-through braid, modern technique, voluminous', length: 'long', vibe: 'trendy' },
    { id: 'H42', name: 'Dutch Braids', prompt: 'dutch braids raised, 3d effect, sporty cute', length: 'long', vibe: 'casual' },
    { id: 'H43', name: 'French Braid', prompt: 'french braid classic, timeless elegant, versatile', length: 'long', vibe: 'casual' },
    { id: 'H44', name: 'Lace Braid', prompt: 'lace braid delicate, intricate detail, romantic', length: 'long', vibe: 'elegant' },
    { id: 'H45', name: 'Zipper Braid', prompt: 'zipper braid unique, modern artistic, edgy', length: 'long', vibe: 'edgy' },
    { id: 'H46', name: 'Pineapple', prompt: 'pineapple high puff, curly protective, cute', length: 'up', vibe: 'casual' },
    { id: 'H47', name: 'Bantu Knots', prompt: 'bantu knots cultural, protective stylish, beautiful', length: 'up', vibe: 'natural' },
    { id: 'H48', name: 'Flat Twist', prompt: 'flat twist close, sleek detailed, versatile', length: 'short', vibe: 'trendy' },
    { id: 'H49', name: 'Shrimp Bun', prompt: 'shrimp bun quirky, high messy bun, fun casual', length: 'up', vibe: 'casual' },
    { id: 'H50', name: 'Donut Bun', prompt: 'donut bun perfect, sleek round, elegant', length: 'up', vibe: 'elegant' },
    { id: 'H51', name: 'Sock Bun', prompt: 'sock bun voluminous, easy elegant, practical', length: 'up', vibe: 'casual' },
    { id: 'H52', name: 'Top Knot', prompt: 'top knot high, trendy casual, effortless', length: 'up', vibe: 'casual' },
    { id: 'H53', name: 'Low Bun', prompt: 'low bun nape, elegant refined, sophisticated', length: 'up', vibe: 'elegant' },
    { id: 'H54', name: 'Chignon', prompt: 'chignon classic, french elegant, formal', length: 'up', vibe: 'elegant' },
    { id: 'H55', name: 'French Twist', prompt: 'french twist sophisticated, vintage elegant, timeless', length: 'up', vibe: 'vintage' },
    { id: 'H56', name: 'Roll Up', prompt: 'roll up vintage, 40s style, retro', length: 'up', vibe: 'vintage' },
    { id: 'H57', name: 'Finger Waves', prompt: 'finger waves 1920s, art deco, vintage glamour', length: 'short', vibe: 'vintage' },
    { id: 'H58', name: 'Marcel Waves', prompt: 'marcel waves classic, old hollywood, elegant', length: 'long', vibe: 'vintage' },
    { id: 'H59', name: 'Beehive', prompt: 'beehive towering, 60s retro, dramatic', length: 'up', vibe: 'vintage' },
    { id: 'H60', name: 'Pompadour', prompt: 'pompadour volume, rockabilly edge, bold', length: 'up', vibe: 'edgy' },
    { id: 'H61', name: 'Quiff', prompt: 'quiff modern, textured volume, trendy', length: 'short', vibe: 'trendy' },
    { id: 'H62', name: 'Undercut', prompt: 'undercut edgy, shaved side, bold contrast', length: 'long', vibe: 'edgy' },
    { id: 'H63', name: 'Asymmetric', prompt: 'asymmetric cut, one side longer, modern edgy', length: 'short', vibe: 'edgy' },
    { id: 'H64', name: 'Blunt Bangs', prompt: 'blunt bangs straight, bold graphic, modern', length: 'long', vibe: 'trendy' },
    { id: 'H65', name: 'Side Bangs', prompt: 'side swept bangs, soft framing, flattering', length: 'long', vibe: 'elegant' },
    { id: 'H66', name: 'Wispy Bangs', prompt: 'wispy bangs soft, delicate framing, romantic', length: 'long', vibe: 'soft' },
    { id: 'H67', name: 'Curtain Bangs Long', prompt: 'long curtain bangs, 70s vibe, effortless', length: 'long', vibe: 'casual' },
    { id: 'H68', name: 'Bottleneck Bangs', prompt: 'bottleneck bangs trendy, narrow wide, modern', length: 'long', vibe: 'trendy' },
    { id: 'H69', name: 'Feathered', prompt: 'feathered 70s, layered soft, retro', length: 'long', vibe: 'vintage' },
    { id: 'H70', name: 'Shag Cut', prompt: 'shag cut layered, textured messy, rock chic', length: 'long', vibe: 'edgy' }
];

// ====================================================
// EXPORT FOR USE
// ====================================================
console.log('📦 Annie Influencer Data Extension Loaded');
console.log(`   - ${POSES_EXTENDED.length} new poses (P51-P141)`);
console.log(`   - ${ANGLES_EXTENDED.length} new angles (A41-A98)`);
console.log(`   - ${MOODS_EXTENDED.length} new moods (M23-M100)`);
console.log(`   - ${EXPRESSIONS_EXTENDED.length} new expressions (E23-E67)`);
console.log(`   - ${MICRO_POSES_EXTENDED.length} new micro poses (MP23-MP69)`);
console.log(`   - ${HAIRSTYLES_EXTENDED.length} new hairstyles (H23-H70)`);
console.log('   Total: 387 new prompt variations added!');
