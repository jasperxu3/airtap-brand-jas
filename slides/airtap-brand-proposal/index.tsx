import type { CSSProperties, ReactNode } from 'react';
import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import webHero from './assets/v6/web-hero.png';
import heroBackground from './assets/v2/hero-background.png';
import webDetails from './assets/v7/web-section-one.png';
import headphones from './assets/v2/blue-headphones.png';
import fontRegular from './assets/dm-sans-400.ttf';
import fontMedium from './assets/dm-sans-500.ttf';
import fontBold from './assets/dm-sans-700.ttf';

const fontId = 'osd-webfont-airtap-brand-proposal';
if (typeof document !== 'undefined' && !document.getElementById(fontId)) {
  const style = document.createElement('style');
  style.id = fontId;
  style.textContent = `@font-face{font-family:AirtapDM;src:url('${fontRegular}') format('truetype');font-weight:400;font-display:swap}@font-face{font-family:AirtapDM;src:url('${fontMedium}') format('truetype');font-weight:500;font-display:swap}@font-face{font-family:AirtapDM;src:url('${fontBold}') format('truetype');font-weight:700;font-display:swap}`;
  document.head.appendChild(style);
}

export const design: DesignSystem = {
  palette: { bg: '#FAF9F6', text: '#161A18', accent: '#31594B' },
  fonts: { display: 'AirtapDM, sans-serif', body: 'AirtapDM, sans-serif' },
  typeScale: { hero: 156, body: 36 },
  radius: 22,
};

const C = { bg: 'var(--osd-bg)', ink: 'var(--osd-text)', green: 'var(--osd-accent)', muted: '#6B6C69', pale: '#E4F1E8', beige: '#E9DFD1', line: '#DEDCD5', white: '#FFFFFF', dark: '#0D1620' };
const A = {
  views: new URL('./assets/ip-three-views.png', import.meta.url).href,
  friendly: new URL('./assets/v2/ip-friendly.png', import.meta.url).href,
  wink: new URL('./assets/v2/ip-wink.png', import.meta.url).href,
  happy: new URL('./assets/v2/ip-happy.png', import.meta.url).href,
  focused: new URL('./assets/v2/ip-focused.png', import.meta.url).href,
  thinking: new URL('./assets/v2/ip-thinking.png', import.meta.url).href,
  surprised: new URL('./assets/v2/ip-surprised.png', import.meta.url).href,
  excited: new URL('./assets/v2/ip-excited.png', import.meta.url).href,
  reassured: new URL('./assets/v2/ip-reassured.png', import.meta.url).href,
  cap: new URL('./assets/v2/ip-cap.png', import.meta.url).href,
  headphones: new URL('./assets/v2/ip-headphones.png', import.meta.url).href,
  star: new URL('./assets/v2/ip-star.png', import.meta.url).href,
  heart: new URL('./assets/v2/ip-heart.png', import.meta.url).href,
  before: new URL('./assets/v5/mood-natural-pause.png', import.meta.url).href,
  after: new URL('./assets/v3/mood-at-ease.png', import.meta.url).href,
  shopping: new URL('./assets/v3/scene-curious.png', import.meta.url).href,
  dinner: new URL('./assets/v5/scene-dinner-original-silhouette.png', import.meta.url).href,
  offers: new URL('./assets/v3/scene-delight.png', import.meta.url).href,
};

const Canvas = ({ children, bg = C.bg }: { children: ReactNode; bg?: string }) => <section data-airtap-page style={{ position: 'relative', width: '100%', height: '100%', boxSizing: 'border-box', background: bg, color: C.ink, fontFamily: 'var(--osd-font-body)' }}>{children}</section>;
const Box = ({ children, x, y, w, h, style }: { children: ReactNode; x: number; y: number; w: number; h?: number; style?: CSSProperties }) => <div style={{ position: 'absolute', left: x, top: y, width: w, height: h, ...style }}>{children}</div>;
const Eyebrow = ({ children, color = C.green }: { children: ReactNode; color?: string }) => <div style={{ color, fontSize: 24, fontWeight: 500, letterSpacing: 3.5, textTransform: 'uppercase', marginBottom: 24 }}>{children}</div>;
const Title = ({ children, size = 88, style }: { children: ReactNode; size?: number; style?: CSSProperties }) => <h1 style={{ fontFamily: 'var(--osd-font-display)', fontSize: size, fontWeight: 500, lineHeight: 1.07, letterSpacing: -3.5, margin: 0, ...style }}>{children}</h1>;
const Body = ({ children, size = 36, style }: { children: ReactNode; size?: number; style?: CSSProperties }) => <p style={{ margin: 0, fontSize: size, lineHeight: 1.45, color: C.muted, ...style }}>{children}</p>;
const Photo = ({ src, alt, style, fit = 'cover' }: { src: string; alt: string; style?: CSSProperties; fit?: 'cover' | 'contain' }) => <img src={src} alt={alt} draggable={false} style={{ width: '100%', height: '100%', objectFit: fit, display: 'block', ...style }} />;
const Pill = ({ children, solid = false }: { children: ReactNode; solid?: boolean }) => <span style={{ display: 'inline-flex', alignItems: 'center', padding: '15px 26px', borderRadius: 100, fontSize: 27, color: solid ? C.white : C.green, background: solid ? C.green : C.pale, whiteSpace: 'nowrap' }}>{children}</span>;
const Rule = () => <div style={{ height: 1, background: C.line }} />;
const Card = ({ children, style }: { children: ReactNode; style?: CSSProperties }) => <div style={{ background: C.white, border: `1px solid ${C.line}`, borderRadius: 22, padding: 32, boxSizing: 'border-box', boxShadow: '0 12px 36px rgba(22,26,24,.045)', ...style }}>{children}</div>;
const BrowserWindow = ({ children, label = 'Airtap · Website preview' }: { children: ReactNode; label?: string }) => <div style={{ height: '100%', border: `1px solid ${C.line}`, borderRadius: 20, overflow: 'hidden', background: C.bg, boxShadow: '0 22px 60px rgba(22,26,24,.10)', display: 'flex', flexDirection: 'column' }}><div style={{ height: 54, flexShrink: 0, borderBottom: `1px solid ${C.line}`, background: '#F0EFEB', display: 'flex', alignItems: 'center', padding: '0 22px', gap: 10 }}><span style={{ width: 12, height: 12, borderRadius: 10, background: '#D6A99E' }} /><span style={{ width: 12, height: 12, borderRadius: 10, background: '#DDCAA0' }} /><span style={{ width: 12, height: 12, borderRadius: 10, background: '#B5C8B8' }} /><div style={{ background: '#FAF9F6', border: `1px solid ${C.line}`, borderRadius: 7, marginLeft: 42, width: '66%', padding: '5px 20px', textAlign: 'center', color: C.muted, fontSize: 20 }}>{label}</div></div><div style={{ flex: 1, minHeight: 0 }}>{children}</div></div>;
const MascotTile = ({ src, label, detail, compact = false }: { src: string; label: string; detail?: string; compact?: boolean }) => <div style={{ textAlign: 'center' }}><div style={{ height: compact ? 230 : 238 }}><Photo src={src} alt={`Airtap ${label.toLowerCase()} character`} fit="contain" /></div><h2 style={{ margin: '8px 0 5px', fontSize: compact ? 26 : 30, fontWeight: 500 }}>{label}</h2>{detail && <Body size={24}>{detail}</Body>}</div>;

const Cover: Page = () => <Canvas>
  <Box x={0} y={0} w={1920} h={1080}><Photo src={heroBackground} alt="Airtap among everyday essentials in a warm, sunlit setting" style={{ objectPosition: 'center 30%' }} /></Box>
  <Box x={120} y={56} w={350}><div style={{ fontSize: 40, fontWeight: 700, letterSpacing: -1.7 }}>Airtap</div></Box>
  <Box x={220} y={136} w={1480} style={{ textAlign: 'center' }}>
    <div style={{ fontSize: 24, letterSpacing: 4, fontWeight: 500, marginBottom: 22 }}>YOUR PERSONAL AGENT</div>
    <Title size={100} style={{ fontWeight: 700, lineHeight: 1.01, letterSpacing: -5 }}>Same task. Same old trap.<br />Hand it to Airtap.</Title>
    <Body size={30} style={{ color: C.muted, maxWidth: 1060, margin: '24px auto 0', lineHeight: 1.35 }}>Airtap takes on the repetitive checking, filling, and follow-ups behind everyday plans.</Body>
  </Box>
</Canvas>;

const Friction: Page = () => <Canvas>
  <Box x={940} y={0} w={980} h={984}><Photo src={A.before} alt="Airtap resting naturally on a linen sofa seat against a green cushion, with the original front-view silhouette and thumb on the viewer's right" /></Box>
  <Box x={120} y={135} w={720}><Eyebrow>The everyday tension</Eyebrow><Title>Small tasks.<br />Stacks of taps.</Title><Body style={{ marginTop: 42 }}>Repeated checks are the tension this direction makes visible. Search, check, and compare turn a familiar goal into a stack worth handing off.</Body></Box>
  <Box x={120} y={820} w={730}><Rule /><div style={{ display: 'flex', gap: 16, marginTop: 35 }}><Pill>Search</Pill><Pill>Check</Pill><Pill>Compare</Pill></div></Box>
</Canvas>;

const Insight: Page = () => <Canvas>
  <Box x={120} y={110} w={1350}><Eyebrow>The human insight</Eyebrow><Title>Hand off the steps.<br />Keep the choice.</Title></Box>
  <Box x={120} y={375} w={1260}><Body>The brand needs to make both the handoff and the returned choice clear. These four beats map to the language, visual pattern, character, and result card used throughout the system.</Body></Box>
  <Box x={1500} y={285} w={280} h={290}><Photo src={A.friendly} alt="Airtap ready to receive a task" fit="contain" /></Box>
  <Box x={120} y={650} w={1680}><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 30 }}>
    <FlowStep number="01" title="A daily goal" text="Plain words for a familiar need." />
    <FlowStep number="02" title="Repeated steps" text="A visible stack of checks." />
    <FlowStep number="03" title="A clear handoff" text="One recognizable hand receives it." />
    <FlowStep number="04" title="Your next choice" text="A concise card returns control." active />
  </div></Box>
</Canvas>;
const FlowStep = ({ number, title, text, active = false }: { number: string; title: string; text: string; active?: boolean }) => <div style={{ borderTop: `2px solid ${active ? '#2E5E4A' : C.line}`, paddingTop: 28 }}><span style={{ color: C.green, fontSize: 24 }}>{number}</span><h2 style={{ fontSize: 38, fontWeight: 500, margin: '24px 0 16px', letterSpacing: -1 }}>{title}</h2><Body size={28}>{text}</Body></div>;

const Concept: Page = () => <Canvas>
  <Box x={960} y={0} w={960} h={1080} style={{ background: C.pale }}><div /></Box>
  <Box x={120} y={110} w={600}><Eyebrow>The brand idea</Eyebrow></Box>
  <Box x={120} y={255} w={740}><Title size={100}>Small tasks<br />stack the taps.</Title><Body style={{ marginTop: 46 }}>A familiar goal becomes a series of things you have to do.</Body></Box>
  <Box x={1080} y={255} w={740}><Title size={100} style={{ color: C.green }}>Airtap<br />taps back.</Title><Body style={{ marginTop: 46 }}>Tap names the repeated action. Back turns it into a promise of handoff. The name carries both the tension and its release.</Body></Box>
  <Box x={780} y={700} w={360} h={320}><Photo src={A.thinking} alt="Airtap considers the next step" fit="contain" /></Box>
</Canvas>;

const Character: Page = () => <Canvas>
  <Box x={965} y={240} w={450} h={470}><Photo src={A.focused} alt="A focused Airtap character" fit="contain" /></Box>
  <Box x={1370} y={150} w={450} h={470}><Photo src={A.wink} alt="A playful winking Airtap character" fit="contain" /></Box>
  <Box x={1200} y={545} w={455} h={425}><Photo src={A.heart} alt="A considerate Airtap character with a pink heart" fit="contain" /></Box>
  <Box x={120} y={135} w={810}><Eyebrow>The character</Eyebrow><Title>The hand that<br />takes it from here.</Title><Body style={{ marginTop: 42 }}>One hand makes the handoff visible. Its silhouette stays fixed while expression and small accessories change with the task, giving the character range without losing recognition.</Body></Box>
  <Box x={120} y={800} w={810}><Rule /><div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, marginTop: 26 }}><div><Pill>Resourceful</Pill><Body size={23} style={{ marginTop: 15 }}>Checks the details.</Body></div><div><Pill>Decisive</Pill><Body size={23} style={{ marginTop: 15 }}>Makes the next step clear.</Body></div><div><Pill>Considerate</Pill><Body size={23} style={{ marginTop: 15 }}>Waits for your choice.</Body></div></div></Box>
</Canvas>;

const Emotion: Page = () => <Canvas>
  <Box x={0} y={0} w={1080} h={984}><Photo src={A.after} alt="Airtap leaning comfortably into a linen cushion, eyes relaxed in a quiet moment of relief" /></Box>
  <Box x={1180} y={170} w={620}><Eyebrow>A useful kind of relief</Eyebrow><Title size={80}>Less to do.<br />More room<br />for your day.</Title><Body style={{ marginTop: 42 }}>Relief is the feeling this direction should leave behind. Warm light, soft materials, and a quiet pause make that feeling visible before any interface explains it.</Body></Box>
</Canvas>;

const Identity: Page = () => <Canvas>
  <Box x={120} y={100} w={1100}><Eyebrow>Character design</Eyebrow><Title>Meet the helping hand.</Title></Box>
  <Box x={120} y={380} w={1020} h={400}><Photo src={A.views} alt="Front, side and back views of the cream Airtap hand" style={{ mixBlendMode: 'multiply' }} /></Box>
  <Box x={170} y={800} w={920}><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', textAlign: 'center', fontSize: 26, color: C.green }}><span>Front</span><span>Side</span><span>Back</span></div></Box>
  <Box x={120} y={880} w={950}><Body size={30}>One fixed silhouette. A flexible wardrobe.</Body></Box>
  <Box x={1210} y={305} w={590}><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '22px 20px' }}><MascotTile src={A.cap} label="Cap" compact /><MascotTile src={A.headphones} label="Headphones" compact /><MascotTile src={A.star} label="Star" compact /><MascotTile src={A.heart} label="Heart" compact /></div></Box>
</Canvas>;

const Actions: Page = () => <Canvas>
  <Box x={120} y={100} w={1680}><Eyebrow>Expression system</Eyebrow><Title>One hand. Plenty of personality.</Title></Box>
  <Box x={120} y={310} w={1680}><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', columnGap: 40, rowGap: 22 }}>
    <MascotTile src={A.friendly} label="Friendly" detail="Ready to listen." />
    <MascotTile src={A.wink} label="Winking" detail="A little reassurance." />
    <MascotTile src={A.happy} label="Happy" detail="A useful result." />
    <MascotTile src={A.focused} label="Focused" detail="Checking the details." />
    <MascotTile src={A.thinking} label="Thoughtful" detail="Weighing the options." />
    <MascotTile src={A.surprised} label="Surprised" detail="Something to flag." />
    <MascotTile src={A.excited} label="Excited" detail="A good find." />
    <MascotTile src={A.reassured} label="Reassured" detail="No rush to choose." />
  </div></Box>
</Canvas>;

const Swatch = ({ color, name, code, detail, light = false }: { color: string; name: string; code: string; detail: string; light?: boolean }) => <div style={{ height: 325, padding: 30, background: color, color: light ? '#fff' : '#161A18', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}><span style={{ fontSize: 23, opacity: .8 }}>{code}</span><div><h2 style={{ fontWeight: 500, fontSize: 32, margin: '0 0 16px' }}>{name}</h2><p style={{ fontSize: 26, lineHeight: 1.4, margin: 0, opacity: .8 }}>{detail}</p></div></div>;
const Accent = ({ color, label, detail }: { color: string; label: string; detail: string }) => <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}><span style={{ width: 38, height: 38, borderRadius: 40, background: color, flexShrink: 0 }} /><div><div style={{ fontSize: 26, fontWeight: 500 }}>{label}</div><Body size={23}>{detail}</Body></div></div>;
const Palette: Page = () => <Canvas>
  <Box x={120} y={100} w={1200}><Eyebrow>Color & material</Eyebrow><Title>Warm by nature.<br />Clear by design.</Title></Box>
  <Box x={1280} y={155} w={520}><Body size={30}>Warm white, natural textures and a soft cream character make the system approachable. Deep green leads the interface. Blue, yellow and pink bring personality to accessories, in small doses.</Body></Box>
  <Box x={120} y={460} w={1680}><div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr 1fr' }}>
    <Swatch color="#FAF9F6" code="#FAF9F6" name="Warm white" detail="The everyday canvas." />
    <Swatch color="#E9DFD1" code="#E9DFD1" name="Natural beige" detail="Light, fabric and wood." />
    <Swatch color="#31594B" code="#31594B" name="Forest green" detail="Brand emphasis." light />
    <Swatch color="#E4F1E8" code="#E4F1E8" name="Soft green" detail="Quiet support." />
    <Swatch color="#161A18" code="#161A18" name="Soft ink" detail="Clarity at every size." light />
  </div></Box>
  <Box x={120} y={865} w={1680}><div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr', gap: 28 }}><Accent color="#2E5E4A" label="Status green" detail="#2E5E4A · Task states" /><Accent color="#6F9FEB" label="Blue" detail="Cap & headphones" /><Accent color="#FFD44E" label="Yellow" detail="Stars & good finds" /><Accent color="#FF9FA7" label="Pink" detail="Hearts & care" /></div></Box>
</Canvas>;

const Language: Page = () => <Canvas>
  <Box x={120} y={100} w={1600}><Eyebrow>Typography & voice</Eyebrow><Title>Short words. A clear point.</Title></Box>
  <Box x={120} y={330} w={600}><div style={{ fontSize: 132, fontWeight: 700, letterSpacing: -6 }}>Aa.</div><Title size={54}>DM Sans</Title><Body size={32} style={{ marginTop: 28 }}>Bold for the idea.<br />Regular for the explanation.</Body><div style={{ marginTop: 38 }}><Rule /></div><Body size={30} style={{ marginTop: 28 }}>We repeat sounds only when the words point to a real task or benefit. Headphones, dinner, and offers give each line a concrete job; instructions and status stay plain.</Body></Box>
  <Box x={830} y={325} w={970}><VoiceSample label="Alliteration" context="Shopping" line="Same specs. Fewer steps." /><VoiceSample label="Consonance" context="Offers" line="Nice perks. Less paperwork." /><VoiceSample label="Near sounds" context="Dinner" line="Craving a wrap? Skip the app-hop." /><VoiceSample label="Repeated phrasing" context="Short transition" line="All those tasks. All those taps." /><VoiceSample label="End rhyme" context="Hero" line="Trap / Airtap" /></Box>
</Canvas>;
const VoiceSample = ({ label, context, line }: { label: string; context: string; line: string }) => <div style={{ borderTop: `1px solid ${C.line}`, padding: '19px 0 22px' }}><div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 23, color: C.muted, marginBottom: 12 }}><span style={{ color: C.green }}>{label}</span><span>{context}</span></div><div style={{ fontSize: 37, fontWeight: 500, lineHeight: 1.15, letterSpacing: -.8 }}>{line}</div></div>;

const SmallSlip = ({ label, value, style }: { label: string; value: string; style?: CSSProperties }) => <Card style={{ padding: 25, ...style }}><div style={{ fontSize: 23, color: C.muted, marginBottom: 12 }}>{label}</div><div style={{ fontSize: 32, fontWeight: 500 }}>{value}</div></Card>;
const VisualSystem: Page = () => <Canvas>
  <Box x={120} y={100} w={1550}><Eyebrow>Visual expression</Eyebrow><Title>From repeated taps<br />to a clear result.</Title></Box>
  <Box x={120} y={420} w={480} h={440}><SmallSlip label="One model" value="Different listings" style={{ width: 420, transform: 'rotate(-5deg)', position: 'absolute', left: 10, top: 0 }} /><SmallSlip label="One purchase" value="Different conditions" style={{ width: 420, transform: 'rotate(3deg)', position: 'absolute', left: 35, top: 155 }} /><SmallSlip label="One decision" value="Too much checking" style={{ width: 420, transform: 'rotate(-2deg)', position: 'absolute', left: 5, top: 310 }} /></Box>
  <Box x={700} y={405} w={490} h={420}><Photo src={A.focused} alt="Airtap focuses on matching the model and sorting the details" fit="contain" style={{ transform: 'rotate(-7deg)' }} /></Box>
  <Box x={970} y={525} w={260}><SmallSlip label="Checking" value="H1 · Blue" style={{ padding: 20, transform: 'rotate(5deg)' }} /></Box>
  <Box x={745} y={785} w={455}><div style={{ height: 4, background: C.green, marginBottom: 16 }} /><Body size={25} style={{ color: C.green }}>Match → Check → Sort</Body></Box>
  <Box x={1320} y={475} w={480}><Card><Eyebrow>Comparison ready</Eyebrow><Title size={42} style={{ letterSpacing: -1 }}>Same model.<br />Clear differences.</Title><Rule /><Body size={28} style={{ marginTop: 25 }}>Price · Delivery · Conditions</Body><div style={{ marginTop: 30 }}><Pill solid>Your choice</Pill></div></Card></Box>
</Canvas>;

const Story: Page = () => <Canvas>
  <Box x={120} y={100} w={1600}><Eyebrow>A story in three beats</Eyebrow><Title>One request. A clearer choice.</Title><Body size={30} style={{ marginTop: 22 }}>A repeatable story pattern: a plain request, the character doing the checking, and a short result that leaves the decision with the person.</Body></Box>
  <Box x={120} y={390} w={510}><Eyebrow>01 · Ask</Eyebrow><Card style={{ background: C.pale, border: 'none', minHeight: 365 }}><Body style={{ color: C.ink, fontSize: 36 }}>“Compare the H1 headphones in blue. Match the specs. Include delivery and any offer conditions.”</Body></Card><Body size={28} style={{ marginTop: 28 }}>The person's own words name a concrete goal.</Body></Box>
  <Box x={705} y={390} w={510}><Eyebrow>02 · Check</Eyebrow><div style={{ height: 365, position: 'relative' }}><Photo src={headphones} alt="The same blue over-ear headphones used in the comparison" fit="contain" style={{ position: 'absolute', width: 285, height: 285, left: 205, top: 15 }} /><Photo src={A.thinking} alt="Airtap checks the matching headphone model" fit="contain" style={{ position: 'absolute', width: 300, height: 315, left: 0, top: 55 }} /></div><Body size={28} style={{ marginTop: 28 }}>The thoughtful hand and one matched product make the work visible.</Body></Box>
  <Box x={1290} y={390} w={510}><Eyebrow>03 · Choose</Eyebrow><Card style={{ minHeight: 365 }}><h2 style={{ fontSize: 35, margin: '0 0 28px', fontWeight: 500 }}>H1 · Blue</h2><ResultRow store="Store A" price="$149 total" detail="Free shipping · Friday" /><ResultRow store="Store B" price="$149 total" detail="$139 + $10 shipping · Saturday" /><div style={{ fontSize: 22, color: C.muted, marginTop: 20 }}>Example data · Conditions apply</div></Card><Body size={28} style={{ marginTop: 28 }}>Two comparable results make the decision clear; the choice stays with the person.</Body></Box>
</Canvas>;
const ResultRow = ({ store, price, detail }: { store: string; price: string; detail: string }) => <div style={{ borderTop: `1px solid ${C.line}`, padding: '16px 0' }}><div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 27 }}><span style={{ color: C.green }}>{store}</span><strong style={{ fontWeight: 500 }}>{price}</strong></div><div style={{ fontSize: 23, color: C.muted, marginTop: 10 }}>{detail}</div></div>;

const ScenePanel = ({ src, name, line, alt }: { src: string; name: string; line: ReactNode; alt: string }) => <div><div style={{ height: 500, borderRadius: 22, overflow: 'hidden' }}><Photo src={src} alt={alt} /></div><div style={{ color: C.green, fontSize: 24, marginTop: 25, marginBottom: 12 }}>{name}</div><h2 style={{ fontWeight: 500, fontSize: 38, lineHeight: 1.15, letterSpacing: -1, margin: 0 }}>{line}</h2></div>;
const Scenes: Page = () => <Canvas>
  <Box x={120} y={100} w={1680}><Eyebrow>Campaign extensions</Eyebrow><Title>Everyday tasks, taken in hand.</Title></Box>
  <Box x={120} y={300} w={1680}><div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 40 }}><ScenePanel src={A.shopping} name="Shopping" line="Same specs. Fewer steps." alt="A curious Airtap character peeking out of a soft green canvas bag" /><ScenePanel src={A.dinner} name="Dinner" line={<>Craving a wrap?<br />Skip the app-hop.</>} alt="Airtap enjoying the aroma beside a warm dinner bowl, with its original front-view silhouette and thumb on the viewer's right" /><ScenePanel src={A.offers} name="Offers" line="Nice perks. Less paperwork." alt="Airtap playfully peeking around a cafe curtain with a knowing wink" /></div></Box>
</Canvas>;

const Web: Page = () => <Canvas>
  <Box x={120} y={130} w={610}><Eyebrow>Brand application</Eyebrow><Title>The brand,<br />on the web.</Title><Body style={{ marginTop: 42 }}>The everyday objects make Airtap feel useful and close at hand. The headline lets trap and Airtap echo, tying the name to the work people want to hand off.</Body></Box>
  <Box x={805} y={135} w={995} h={763}><BrowserWindow><Photo src={webHero} alt="The latest Airtap website Hero from Figma, with the Same old trap / Airtap headline" fit="contain" /></BrowserWindow></Box>
</Canvas>;

const Details: Page = () => <Canvas>
  <Box x={120} y={80} w={1600}><Eyebrow>Brand application</Eyebrow><Title>Useful in the details.</Title></Box>
  <Box x={120} y={300} w={1000} h={674}><BrowserWindow label="Airtap · Everyday handoffs"><Photo src={webDetails} alt="The updated Airtap website's shopping, dinner, offers and control quadrants" fit="contain" /></BrowserWindow></Box>
  <Box x={1210} y={290} w={590}><Body size={32} style={{ color: C.ink }}>A price to check. A meal to pick.<br />A form to fill.</Body><div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 26 }}>
    <Card style={{ padding: '18px 28px', background: C.pale, border: 'none' }}><span style={{ fontSize: 24, color: C.green }}>REQUEST</span><div style={{ fontSize: 29, marginTop: 10 }}>“Which offers apply to this order?”</div></Card>
    <Card style={{ padding: '18px 28px' }}><span style={{ fontSize: 24, color: C.green }}>RESULT</span><div style={{ fontSize: 29, marginTop: 10 }}>Offer conditions, explained.</div></Card>
    <Card style={{ padding: '18px 28px' }}><span style={{ fontSize: 24, color: C.green }}>AWAITING YOUR DECISION</span><div style={{ fontSize: 29, marginTop: 10 }}>Join the membership?</div><div style={{ display: 'flex', gap: 14, marginTop: 20 }}><Pill solid>Review terms</Pill><Pill>Not now</Pill></div></Card>
  </div></Box>
</Canvas>;

const Closing: Page = () => <Canvas>
  <Box x={1030} y={0} w={890} h={984}><Photo src={A.shopping} alt="Airtap peeking curiously from a green canvas bag into a sunlit everyday world" /></Box>
  <Box x={120} y={180} w={790}><Title size={144} style={{ fontWeight: 700, color: C.green }}>Airtap<br />taps back.</Title><Body size={40} style={{ marginTop: 52, color: C.ink }}>Small tasks stack the taps.</Body></Box>
</Canvas>;

// Decision-round placeholders: intentionally blank until the proposed content is approved.
// P13–16, after the original P12: four strategy key visuals.
const StrategySpecialist: Page = () => <Canvas>{null}</Canvas>;
const StrategyAccess: Page = () => <Canvas>{null}</Canvas>;
const StrategyAssistant: Page = () => <Canvas>{null}</Canvas>;
const StrategyBusiness: Page = () => <Canvas>{null}</Canvas>;
// P18–19, after the original P13: regional adaptation sketches.
const IndiaAdaptation: Page = () => <Canvas>{null}</Canvas>;
const JapanAdaptation: Page = () => <Canvas>{null}</Canvas>;
// P22–23, after the original P15: motion proof and decision criteria.
const MotionProof: Page = () => <Canvas>{null}</Canvas>;
const Decision: Page = () => <Canvas>{null}</Canvas>;

export const meta: SlideMeta = { title: 'Airtap — Taps Back / Brand Proposal', createdAt: '2026-09-22T11:50:33.793Z' };
export default [Cover, Friction, Insight, Concept, Character, Emotion, Identity, Actions, Palette, Language, VisualSystem, Story, StrategySpecialist, StrategyAccess, StrategyAssistant, StrategyBusiness, Scenes, IndiaAdaptation, JapanAdaptation, Web, Details, MotionProof, Decision, Closing] satisfies Page[];
