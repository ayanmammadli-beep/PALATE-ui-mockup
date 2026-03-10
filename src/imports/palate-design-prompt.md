PALATE — Figma Design Prompt (Revised)
The One Page
Short. Dense. Cinematic. It tells you the science, shows you the fork, and leaves. No fluff, no about page, no excess sections. The page has exactly four acts: the hook, the science, the fork, the specs.

Brand Identity
Typefaces

Display: Cormorant Garamond Light 300 + Light Italic — aristocratic, sensory
Body: Libre Baskerville — warm, readable
Labels/UI: DM Mono Light — clinical precision

Color Palette

Background: #080A06
Background card: #0D1009
Gold: #C9A84C
Gold dim: #8A6E2F
Cream: #F0E8D0
Cream muted: #A89878
Green glow: #6AAD3F
Charcoal: #4A4A3A

Grain overlay — SVG film grain at 5% opacity, fixed, over everything. Non-negotiable for the premium feel.
Implicit Ratatouille texture — thinly sliced vegetable cross-sections (tomato, lemon, fennel) as SVG line art, 8–12% opacity, scattered in hero and footer backgrounds only. Never obvious. Background furniture only.

Page Structure

01 — Navigation (Fixed, Minimal)

Left: PALATE — Cormorant Garamond Light, letter-spacing 0.35em. The A in gold #C9A84C
Right: three links in DM Mono 0.6rem uppercase — The Sense / The Hardware / Early Access
Background: gradient #080A06 → transparent downward, 80px tall
Link hover: transition to gold + text-shadow: 0 0 20px rgba(201,168,76,0.5)


02 — Hero (Full viewport height)
Purpose: Hook them in three lines. Don't explain yet.
Background:

Base #080A06
Radial warm gradient bleeding from center, very subtle
4–5 scattered particle orbs (blurred circles, 60–100px, gold/green, 6–10% opacity)
Vegetable SVG cross-sections at 10% opacity, rotated, in corners and edges only
Bottom fade to #080A06 so it bleeds into next section

Content, centered vertically and horizontally:
Eyebrow (DM Mono, 0.6rem, gold, letter-spacing 0.4em):
TASTE INTELLIGENCE
Title (Cormorant Garamond Light, ~10–11rem, line-height 0.88):
You have eaten
your entire life
without understanding why.
First two lines in #F0E8D0, last line in gold italic.
Subline (Libre Baskerville italic, 1rem, cream-muted, max-width 440px, centered):
"Flavor is not taste. It is a biological construction — assembled in real time from six simultaneous sensory streams. Palate makes it visible."
Scroll indicator: 40px thin vertical line, gold, slow pulse downward + SCROLL in DM Mono 0.5rem below
Stagger all elements in with fade-up, 200ms delay between each.

03 — The Science (The Sense Being Tracked)
Layout: Full-width section, max-width 1100px centered, two columns — left body text, right visual diagram.
Eyebrow: 01 — THE INVISIBLE SENSE
Left column headline (Cormorant Light, 3rem):
"80% of what you call taste is actually smell."
Left body (Libre Baskerville, 1rem, line-height 1.9, cream-muted):

When you bite into food, your tongue registers only five signals: sweet, salty, sour, bitter, umami. The richness — the specificity of flavor — happens entirely elsewhere.
As you chew, aromatic molecules travel upward through the nasopharynx, the passage connecting your mouth to your nose. This retrograde pathway is called retronasal olfaction, and it is the dominant engine of flavor perception. Gordon Shepherd's Neurogastronomy (2012) established that the brain's flavor construction is primarily olfactory, not gustatory.
Palate captures this pathway directly — passively, continuously, and without any input from you.

Three inline stat pills below the body (horizontal row, DM Mono 0.6rem):

80% — retronasal contribution to flavor
~1,000 — distinct VOC compounds in a single meal
100M — people with post-COVID smell disruption, no recovery tool

Each pill: dark background, 1px gold border at 15%, gold number, cream label. Hover: border brightens, soft gold glow.

Right column — Concentric Ring Diagram:
Three nested circles, centered in column:

Outer ring (gold, 1px border, faint fill): labeled RETRONASAL OLFACTION
Middle ring (green, 1px border): labeled TEXTURE + TEMPERATURE
Inner ring (warm red, 1px border): labeled TASTE RECEPTORS
Center (tiny italic DM Mono): "the constructed experience"

Six floating micro-labels orbit the rings (DM Mono 0.5rem, cream-muted):
VOC Compounds · Thermal Sensing · Texture / Pressure · Saliva Chemistry · Memory Association · Emotional State
Each ring hover: brightens + outer glow in its own color.

04 — The Fork (Hero Hardware Moment)
This is the centrepiece of the page. It gets the most space and the most drama.
Full-width dark section, slightly lighter than hero — #0C0F09
Layout: Three zones stacked vertically, centered.

Zone A — Intro label (centered):
Eyebrow DM Mono: 02 — THE INSTRUMENT
Headline Cormorant Light italic, 3.5rem:
"A fork that understands what it touches."

Zone B — The 3D Fork (centerpiece):
A single silver fork, photorealistic or high-fidelity 3D render.

Standing upright, tines pointing up
Slowly rotating on its vertical axis — full 360°, loop, approx 8–12 second cycle
Material: brushed/polished silver, cool-toned, slight reflectivity
Lighting: dramatic single-source from above-left, deep shadow on right side
Background: pure #080A06, no floor, no surface — fork floats in void
Subtle gold rim glow around the fork silhouette — box-shadow equivalent, as if the fork radiates faint warmth
On hover: rotation speeds up slightly, glow intensifies
Size on page: tall, prominent — at least 400px height in the layout. This is not an icon. It is a statement.

In Figma: place a 3D fork render PNG with transparent background. Add a radial gradient layer behind it in gold/green at 8% opacity to simulate the glow. You can use Spline or Blender to export the rotating version for the live site.

Zone C — Fork Specs (below the fork):
Two-column grid, centered, max-width 700px:
Left column:
PRESSURE ARRAY
200Hz texture sampling
Detects resistance, density,
and structural composition
as the fork meets food.
Right column:
THERMAL TIP SENSOR
±0.1°C accuracy
Reads surface temperature
on contact — before the food
reaches your mouth.
Left column:
MICRO-BIOSENSOR
Fat · Sugar · Acid detection
Reads chemical composition
on first contact. Your food's
molecular fingerprint.
Right column:
BLUETOOTH LE
Magnetic charging
Dishwasher-safe housing.
Designed to disappear
into a normal meal.
Each spec block: DM Mono label in gold 0.6rem uppercase, body in Libre Baskerville 0.85rem cream-muted. No borders, no cards — just clean typographic grid. On hover each block: faint gold left border slides in (2px, animated), text brightens slightly.

Below the spec grid — one closing line, centered, Cormorant Light italic, 1.4rem, cream-muted:
"Every bite is a data point. You never have to think about it."

05 — Early Access (Closing CTA)
Minimal. Full-width. Dark.
Center content:
Headline Cormorant Light, 2.5rem:
"Know your palate."
Subline DM Mono 0.65rem, gold, letter-spacing 0.3em:
JOIN THE WAITLIST
Email input field + button:

Input: dark fill #0D1009, 1px gold border at 20%, placeholder in DM Mono cream-muted — "your@email.com"
Button: outlined gold, DM Mono uppercase REQUEST ACCESS
Button hover: fills gold, text goes dark, outer glow

Small note below in DM Mono 0.5rem muted:
No spam. First access goes to the curious.

06 — Footer
Minimal bar, not a full section.

Thin gold rule top, 15% opacity
Left: PALATE wordmark micro-size + "Taste intelligence. Passive. Personal. Precise." — DM Mono muted
Right: © 2025 Palate — DM Mono muted
Background scattered veggie SVGs at 5% opacity


Global Hover Rules

All transitions: 0.3–0.5s ease
Cards/blocks: border opacity increases + soft outer glow
Text links: shift to gold + faint text-shadow
Buttons: fill slides from left via pseudo-element, text inverts
Fork: rotation accelerates + glow intensifies
Never jarring. Always felt, not seen.


Decorative SVGs to Build

Tomato cross-section — concentric irregular circles, 6 seed pockets
Lemon slice — radial segments, oval outer edge
Fennel bulb — nested irregular ovals
All: line art only, no fill, gold or green stroke at 1px, used at 8–12% opacity in backgrounds


Figma Component Checklist

 Nav bar + hover states
 Hero text stack + particle orbs
 Stat pills (3 variants)
 Concentric ring diagram + hover states
 3D fork render frame + glow layer
 Fork spec grid (4 blocks)
 Email CTA block
 Footer bar
 Veggie SVG set (3 types)
 Grain texture overlay (fixed layer)
 Particle orb set (5–6 blurred circles)


One Design Principle to Hold Onto

The fork is not a product photo. It is the protagonist. Everything before it is the argument for why it needs to exist. Everything after it is the invitation to own one. The page should feel like walking into a restaurant you cannot afford yet — and deciding you will come back.