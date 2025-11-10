# SANDVAULT - Brand Identity & Implementation Guide

## Brand Overview
**Market:** United Arab Emirates (UAE) - HNWI/VVIP Segment
**Tone:** Private banking / Asset custody
**Positioning:** Discreet ultra-private deal execution for high net worth individuals and off-market transactions

## Brand Identity

### Color Palette
- **Primary:** Obsidian Black `#0B0B0B`
- **Secondary:** Vault Gold `#B8941E`
- **Accent:** Smoke Grey `#3D3D3D`
- **Background:** True Black `#000000`
- **Surface:** Deep Charcoal `#141414`
- **Highlight:** Matte Sand Gold `#C9A961`

### Typography
- **Headlines:** Inter (Black/Extra Bold weights only)
- **Body:** Inter (Regular/Medium)
- **Numbers:** Space Mono (for vault codes, amounts)
- **Arabic:** IBM Plex Sans Arabic (Bold weights)

### Visual Style
- Ultra dark vault spotlight aesthetic
- Deep shadows with hard directional lighting
- Rich metallic blacks
- Secrecy and discretion
- Extremely minimal copy
- Phantom/stealth imagery
- Private banking energy

## Image Generation Prompts

### Hero Image Prompt
```
"Exotic ultra luxury sedan partially revealed in ultra dark vault, hard directional spotlight, obsidian black palette, medium format Phase One IQ4 opulent editorial, high contrast Cooke S4i primes, no branding, no plates, no text, private banking energy, cinematic 16:9."
```

### Report Card Image Prompt
```
"Top-down render of exotic sedan in complete darkness with single spotlight revealing panels, vault gold panel accent lines, ultra high contrast, black velvet background, sophisticated shadow work, suitable for 1200×800."
```

### Landing Page Banner Prompt
```
"Abstract vault door mechanism in obsidian black with vault gold accents, extreme minimal, deep shadows, ultra premium, sized for 1920×400."
```

### Global Negative Prompt
```
"no logos, no license plates, no people, no cartoon style, no toy plastic look, no unrealistic CG lighting, no text overlays, no watermark, no bright colors, no daylight"
```

## Design Modifications from Boxcar Base

### Layout Changes
1. **Extreme minimalism** - reduce copy by 70%
2. **Ultra dark theme** - true black backgrounds
3. **Spotlight reveals** - content emerges from darkness
4. **Private sections** - password-protected areas
5. **Stealth navigation** - minimal, hidden until hover
6. **Full-screen takeovers** - immersive dark experiences

### Component Adjustments
- **Cards:** Near-invisible borders (vault gold at 10% opacity)
- **Buttons:** Minimal, flat, vault gold on hover
- **Forms:** Invisible inputs with gold underline on focus
- **Hero:** Full-black with single spotlight element
- **Icons:** Minimal line icons, vault gold
- **Badges:** Vault seal / private access symbols
- **Modals:** Full-screen dark overlays

### Ultra Dark Theme
```css
:root {
  --obsidian: #0B0B0B;
  --vault-gold: #B8941E;
  --smoke: #3D3D3D;
  --true-black: #000000;
  --deep-charcoal: #141414;
  --sand-gold: #C9A961;
  --gold-glow: rgba(184, 148, 30, 0.3);
}
```

### Spotlight Effect
```css
.spotlight-reveal {
  position: relative;
  background: radial-gradient(
    circle at 50% 30%,
    rgba(184, 148, 30, 0.1) 0%,
    transparent 50%
  );
}
```

## Content Tone & Copy

### Messaging (English)
- "Discreet. Absolute. Secure."
- "Private Automotive Intelligence"
- "Off-Market Acquisition Advisory"
- "HNWI Vehicle Assessment"

### Messaging (Arabic)
- "سرية. مطلقة. آمنة."
- "استشارات خاصة للمركبات الفاخرة"

### Voice Guidelines
- **Extreme brevity** - single words, short phrases
- **No marketing speak** - pure value statements
- **Confidential language** - "private", "discreet", "secure"
- **Banking terminology** - "custody", "vault", "deposit"
- **Exclusivity** - imply limited access
- **Trust through minimalism** - say less, mean more

### Example Copy (Before → After)
❌ "Welcome to SANDVAULT, your trusted partner for premium vehicle assessment services in the UAE!"

✅ "Discreet assessment. Private transactions."

## Core Functionality

### Request Flow (Stealth Mode)
1. **Private access** - invitation code or referral only (later)
2. User submits confidential link or brief (encrypted)
3. **Silent processing** - no status updates, single notification when ready
4. **Vault deposit** - higher minimums (20% standard)
5. **Encrypted reports** - password-protected PDFs
6. **Off-market sourcing** - dealer network, private sales
7. **Concierge bidding** - full discretion, no user action needed

### Supported Transactions
- Off-market private sales
- Embassy/diplomatic sales
- Estate liquidations
- Seized asset auctions
- Ultra-luxury imports
- Standard UAE platforms (discreetly)

### Pricing (AED) - Higher Tier
- **Remote Assessment:** 199 AED (premium service)
- **On-Site Pre-Purchase:** 499 AED (white-glove)
- **Off-Market Sourcing:** 999 AED + 20% deposit (mandatory)
- **Concierge Execution:** 2,500 AED + 20% deposit
- **Deposit:** 20% minimum (can go higher for exotic vehicles)

## Technical Implementation Priorities

### Phase 1 - Ultra Dark Identity
- [ ] Implement true black theme (#000000)
- [ ] Create vault gold accent system
- [ ] Add spotlight reveal animations
- [ ] Implement minimal navigation (hidden by default)
- [ ] Create vault door loading animation
- [ ] Generate ultra-dark hero imagery
- [ ] Design vault seal logo

### Phase 2 - Minimal UI
- [ ] Strip 70% of copy from templates
- [ ] Create invisible input components
- [ ] Design stealth navigation
- [ ] Implement full-screen modals
- [ ] Add subtle gold glow effects
- [ ] Create vault code typography (Space Mono)

### Phase 3 - Privacy & Security
- [ ] Implement request encryption
- [ ] Add password-protected reports
- [ ] Create private access codes
- [ ] Build referral/invitation system
- [ ] Add 2FA for high-value requests
- [ ] Implement secure file uploads

### Phase 4 - HNWI Features
- [ ] Concierge dashboard (ultra minimal)
- [ ] Off-market sourcing workflow
- [ ] Dealer network integration
- [ ] VIP chat (encrypted)
- [ ] Private WhatsApp line
- [ ] Calendar booking for in-person meetings

### Phase 5 - Premium UX
- [ ] Vault opening animations
- [ ] Spotlight scroll effects
- [ ] Gold shimmer micro-interactions
- [ ] Silent loading states (no spinners)
- [ ] Haptic feedback (mobile)
- [ ] Sound design (subtle vault clicks)

## File Structure Priority

```
sandvault/
├── app/
│   ├── (private)/         # Password-protected routes
│   │   ├── vault/
│   │   └── requests/
│   ├── layout.js          # Ultra dark theme
│   ├── page.js            # Minimal landing
│   └── globals.css        # Black/gold theme
├── components/
│   ├── vault/
│   │   ├── SpotlightReveal.js
│   │   ├── VaultDoor.js
│   │   └── GoldGlow.js
│   ├── minimal/
│   │   ├── StealthNav.js
│   │   ├── InvisibleInput.js
│   │   └── MinimalCard.js
│   └── ...
├── public/
│   ├── images/
│   │   ├── hero-sandvault-dark.jpg
│   │   ├── vault-seal.svg
│   │   └── spotlight-overlay.png
│   └── sounds/           # Optional vault sounds
│       └── vault-open.mp3
└── ...
```

## Minimal Copy Examples

### Homepage
**Hero:**
```
SANDVAULT
Discreet. Absolute. Secure.
[Access Vault]
```

**Features (3 words each):**
- Private Intelligence
- Off-Market Access
- HNWI Advisory

**Footer:**
```
Terms | Privacy | Contact
Dubai, UAE
```

### Request Form
```
Link or Brief: ___________
Contact (encrypted): ___________
[Submit Confidentially]
```

### Dashboard
```
Your Vault
─────────────
Active: 2
Pending: 1
Archived: 7
```

## RTL Considerations

- Full RTL support (Arabic HNWI market)
- Minimal copy makes translation easier
- Maintain dark aesthetic in RTL
- Mirror spotlight effects
- Test vault animations in RTL

## Animation Guidelines

### Vault Door Opening (Hero)
- Heavy, mechanical feel
- 1.5-2 second duration
- Sound effect (optional)
- Reveals content from darkness

### Spotlight Reveal
- Follow scroll position
- Smooth gradient transitions
- Content fades in at center
- 60fps performance critical

### Gold Glow
- Subtle pulsing (1% opacity variance)
- On hover: 300ms transition
- Never overwhelming
- Used sparingly (CTAs only)

## Next Steps
1. Install dependencies
2. Implement **true black theme** (#000000 everywhere)
3. Create spotlight reveal component
4. Generate ultra-dark imagery (vault aesthetic)
5. Strip copy to extreme minimum
6. Design vault seal logo (obsidian + gold)
7. Build invisible form inputs
8. Test dark mode on all devices
9. Add encryption for sensitive data
10. Create private access system

## Resources
- Fonts: Inter (all weights), Space Mono, IBM Plex Sans Arabic
- Icons: Lucide React (minimal line icons)
- Animations: Framer Motion (smooth, heavy)
- Encryption: crypto-js or similar
- Sound: Vault door sound effects (optional)
- Image Generation: Ultra-dark vault prompts above

## Security Considerations

### Data Handling
- Encrypt all request data at rest
- HTTPS only (strict)
- Password-protect reports
- Secure file uploads (encrypted)
- No analytics tracking (privacy first)
- Minimal logging

### Access Control
- Invitation-only access (Phase 2)
- 2FA for high-value requests
- IP whitelisting (optional)
- Private API keys
- Encrypted communications

## Differentiation from MAJAZ

| Aspect | MAJAZ | SANDVAULT |
|--------|-------|-----------|
| Audience | General UAE luxury | HNWI/VVIP only |
| Tone | Warm, welcoming | Cold, discreet |
| Copy | Rich, descriptive | Minimal, terse |
| Colors | Black/Gold/Ivory | Obsidian/Vault Gold |
| Lighting | Golden hour | Dark spotlight |
| Price | Standard (49 AED+) | Premium (199 AED+) |
| Access | Public | Private/invite |
| Features | Standard service | Off-market, concierge |

**SANDVAULT is not for everyone - this is intentional.**
