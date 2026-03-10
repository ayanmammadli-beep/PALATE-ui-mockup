PALATE — Revised Figma/Dev Prompt v2
What Changed

New Ratatouille color palette (warm, earthy, cinematic — not dark-tech)
Header: embedded YouTube video background, nav simplified and readable
PALATE wordmark: each letter a different palette color
Hero: much smaller, tighter
3D fork: interactive, cursor-reactive, with data point annotations, left-side panel layout


New Color Palette (Ratatouille-Pulled)
NameHexUsageWheat Gold#C4924APrimary accent, warm highlightBrick Red#B84C3ASecondary accent, heat/energySlate Blue#6A8591Cool contrast, data labelsNear Black#1C1612Background baseTerracotta#C4614AHover states, warmthCharcoal#3A3D42Muted UI, secondary textCream#F2E8D5Body textWarm White#EDE0C8Headlines
No more cold dark green. This palette is warm, earthy, ingredient-colored. Think the kitchen scenes in Ratatouille — copper pots, brick walls, wooden cutting boards, steam.

Typography (unchanged)

Display: Cormorant Garamond Light 300 + Italic
Body: Libre Baskerville
Labels: DM Mono Light


Section by Section

01 — Navigation
Much smaller and simpler than before.
Height: ~56px. Barely there.

Left: PALATE wordmark — each letter a different color, Cormorant Garamond Light, letter-spacing 0.3em, ~1.1rem

P — #C4924A (wheat gold)
A — #B84C3A (brick red)
L — #6A8591 (slate blue)
A — #C4614A (terracotta)
T — #EDE0C8 (warm white)
E — #C4924A (wheat gold)


Right: three links only — The Sense · The Fork · Waitlist — DM Mono 0.6rem, #6A8591, hover → wheat gold
Background: rgba(28,22,18,0.85) with backdrop blur
No giant nav. Floats over video.


02 — Hero (Compact — ~70vh max)
Not full viewport. Tighter. The video IS the hero.
Background: Embedded YouTube video

Embed a YouTube iframe (user inserts their Ratatouille clip URL)
Video: 100% width, fixed ~70vh height, object-fit: cover
Overlay: linear-gradient(to bottom, rgba(28,22,18,0.5) 0%, rgba(28,22,18,0.85) 80%, #1C1612 100%)
The video shows through warmly but content is readable

Centered text overlay on video (compact):
Eyebrow — DM Mono 0.6rem, #C4924A, letter-spacing 0.4em:
TASTE INTELLIGENCE
Headline — Cormorant Garamond Light Italic, ~3.5rem, #EDE0C8, line-height 1.1, max-width 600px centered:
"You have eaten your entire life without understanding why."
That's it. No nav links repeated. No giant type. Clean, restrained, cinematic.
Small scroll cue: thin line + DISCOVER in DM Mono 0.5rem, #C4924A

03 — The Invisible Sense
This section you already liked — keep the structure, update the colors.
Layout: Two columns. Left = text + stats. Right = concentric ring diagram.
Color updates:

Section eyebrow: #C4924A
Headline: #EDE0C8
Stat pill numbers: #B84C3A (brick red — punchy)
Stat pill borders: #C4924A at 25%
Ring 1 (outer): #C4924A gold — RETRONASAL OLFACTION
Ring 2 (middle): #6A8591 slate blue — TEXTURE + TEMPERATURE
Ring 3 (inner): #B84C3A brick red — TASTE RECEPTORS
Floating orbit labels: #6A8591
Body text: #F2E8D5
Background: #1C1612

Stat pills (3, horizontal row):

80% — retronasal contribution to flavor
~1,000 — VOC compounds in a single meal
100M — post-COVID smell disruption cases

Everything else from original prompt stays. Colors just warmer now.

04 — The Fork (Redesigned Layout)
This is the biggest structural change.
Layout: 50/50 horizontal split

Left half: 3D interactive fork
Right half: spec descriptions with annotated callouts


Left — The 3D Fork Panel
Background: #1C1612 with a very subtle warm radial glow behind fork — rgba(196,146,74,0.08) at center
The fork:

3D rendered, silver/chrome material, tines pointing upward
Not rotating — static upright position
Cursor-reactive: fork tilts/leans slightly toward wherever the cursor is on screen. As you move your mouse across the page, the fork leans in that direction — subtle, ~5–8 degree max tilt. Smooth spring physics.
Built in Spline (spline.design) — export as embed. Spline supports cursor-follow natively.
Size: tall, ~380px height, centered in its panel
Lighting: warm single source from upper-left. Fork has slight warm reflection catching the Ratatouille palette
Glow: faint #C4924A rim light on the fork silhouette — baked into the Spline scene or added as a CSS radial gradient layer behind the PNG

Data point pointers on the fork (4 total):
These are annotation lines extending from specific parts of the fork to small labels. Like a product diagram or exploded view in an editorial magazine.

Pointer 1 → Tines tip: thin line extending right, label:
MICRO-BIOSENSOR / Fat · Sugar · Acid on contact
Pointer 2 → Tine base/neck: line extending right:
THERMAL TIP / ±0.1°C surface temperature
Pointer 3 → Handle upper: line extending left:
PRESSURE ARRAY / 200Hz texture sampling
Pointer 4 → Handle base: line extending left:
BLE + CHARGING / Magnetic. Dishwasher-safe.

Pointer style: 1px line in #C4924A at 40% opacity, small circle dot at the fork contact point (3px, filled gold), label in DM Mono 0.55rem #6A8591 uppercase. On hover: line brightens to 100%, dot pulses, label shifts to #EDE0C8.

Right — Spec Panel
Background: #201A15 (slightly warmer than left)
Padding: generous, 48px
Top of panel:
Eyebrow DM Mono #C4924A: 02 — THE INSTRUMENT
Headline Cormorant Italic #EDE0C8, 2.8rem:
"A fork that understands what it touches."
Body Libre Baskerville, 1rem, #F2E8D5, line-height 1.85:

Every meal you've ever eaten has been a black box. You experienced it. You felt something. But the data vanished the moment you swallowed. The Palate Fork changes that. Four embedded sensors capture what the food is — its texture, temperature, chemical composition, and structure — before it ever reaches your mouth. Passively. Completely. Every single bite.

Divider: thin horizontal rule, #C4924A at 15%
Below divider — 4 spec blocks stacked:
Each block format:
[SENSOR NAME]  ←  DM Mono 0.6rem, #C4924A, uppercase
Description    ←  Libre Baskerville 0.9rem, #A89070 (warm muted)

PRESSURE ARRAY — 200Hz continuous sampling detects food resistance, density, and structural composition as the fork makes contact.
THERMAL TIP SENSOR — Reads surface temperature to ±0.1°C accuracy on first touch — before food reaches the mouth.
MICRO-BIOSENSOR — Detects fat, sugar, and acid concentrations on contact. The food's molecular fingerprint, captured before the first bite.
BLUETOOTH LE — Pairs wirelessly with the Palate app. Magnetic charging. Dishwasher-safe. Designed to vanish into a normal meal.

Closing italic line at bottom, Cormorant Light Italic, 1.2rem, #C4614A (terracotta):
"Every bite is a data point. You'll never notice."

05 — Waitlist CTA
Simple, warm, restrained.
Background: #1C1612
Thin terracotta rule top: #C4614A at 20%
Center:
Headline Cormorant Light, 2.2rem, #EDE0C8:
"Know your palate."
DM Mono label #C4924A, letter-spacing 0.3em:
JOIN THE WAITLIST
Input + button row:

Input: background #201A15, border #C4924A at 20%, placeholder DM Mono cream-muted
Button: #C4924A border + text, DM Mono uppercase REQUEST ACCESS
Hover: fills #C4924A, text goes #1C1612, glow rgba(196,146,74,0.3)

Footnote DM Mono 0.5rem #3A3D42:
No spam. First access to the curious.

06 — Footer
Minimal bar.

Left: PALATE multicolor wordmark (same as nav) micro-size + tagline DM Mono muted: "Taste intelligence. Passive. Personal. Precise."
Right: © 2025 Palate DM Mono #3A3D42
Background: #161210
Top rule: #C4924A at 10%


3D Fork Technical Notes (for dev handoff)
Tool: Spline (spline.design)

Build the fork model in Spline or import a fork OBJ/GLTF
Set up a "Follow Cursor" event in Spline — rotate the fork on Y and X axis by a small amount tracking mouse position
Export as Spline embed (<spline-viewer> web component) — drops directly into HTML
Keep background transparent so page background shows through
Bake warm single-source lighting into the scene
Add subtle #C4924A rim glow as an emissive material on fork edges

Annotation pointer lines:

These are HTML/CSS overlays on top of the Spline embed
Positioned absolutely relative to the fork container
Use CSS transform-origin and a small JS hook to nudge pointer positions slightly as fork tilts (so they stay attached to the right part of the fork during cursor movement)
OR: keep them static if Spline tilt is subtle enough that misalignment is invisible


Figma Component Checklist

 Nav — multicolor PALATE wordmark
 Hero — YouTube embed frame + text overlay
 Sense section — 2col, warm palette, ring diagram
 Stat pills (3)
 Fork 3D panel — Spline placeholder frame + pointer overlays
 Fork spec right panel
 Waitlist CTA block
 Footer bar
 Grain texture overlay
 Warm particle orbs for hero background


The One Thing To Not Lose

The fork is not centered on the page like a product hero shot. It lives on the left, in conversation with the specs on the right. It leans toward your cursor like it's curious about you. The pointers are calm and editorial — a diagram, not a billboard. The whole page should feel like a very expensive menu at a restaurant that takes flavor seriously.