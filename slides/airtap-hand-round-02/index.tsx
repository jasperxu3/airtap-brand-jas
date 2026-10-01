import { useId, type CSSProperties, type ReactNode } from 'react';
import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import fontRegular from './assets/dm-sans-400.ttf';
import fontMedium from './assets/dm-sans-500.ttf';
import fontBold from './assets/dm-sans-700.ttf';
import standard from './assets/review/standard-transparent.png';
import thanksStandard from './assets/review/thanks-standard-source-20261001.png';
import capInteraction from './assets/review/interaction-variants-20260930/cap.png';
import moodFriendly from './assets/review/proportion-calibrated-20260930/friendly.png';
import moodWinking from './assets/review/proportion-calibrated-20260930/winking.png';
import moodHappy from './assets/review/proportion-calibrated-20260930/happy.png';
import moodFocused from './assets/review/proportion-calibrated-20260930/focused.png';
import moodThoughtful from './assets/review/face-refinement-20260930/thoughtful.png';
import moodSurprised from './assets/review/face-refinement-20260930/surprised.png';
import excitedFace from './assets/review/face-refinement-20260930/excited.png';
import excitedStarSource from './assets/review/proportion-calibrated-20260930/excited.png';
import moodReassured from './assets/review/proportion-calibrated-20260930/reassured.png';
import suppliedLogo from './assets/review/airtap-logo-group-83.svg';
import expertRoom from './assets/review/imgImage1093X41.png';
import assistantPoster from './assets/review/assistant-poster-aligned-20261001.svg';
import expertFlight from './assets/review/specialist-flight-user-20260930.png';
import businessPoster from './assets/review/imgImage1173X41.png';
import accessPoster from './assets/review/access-copy-corrected.png';
import indiaLoops from './assets/review/india-loops-front-transparent.png';
import whiteCap from './assets/review/white-cap-front-transparent.png';
import indiaLoopsBack from './assets/review/india-loops-back-transparent.png';
import whiteCapBack from './assets/review/white-cap-back-transparent.png';
import japanWaves from './assets/review/japan-waves-front-matched.png';
import japanFlower from './assets/review/japan-flower-transparent.png';
import japanWavesBack from './assets/review/japan-waves-back-localized.png';
import japanFlowerBack from './assets/review/japan-flower-back-transparent.png';
import universalHero from './assets/review/regional-heroes/latest-2026-09-30/universal-copy-corrected.png';
import indiaHero from './assets/review/regional-heroes/latest-2026-09-30/india.png';
import japanHero from './assets/review/regional-heroes/latest-2026-09-30/japan-clean.png';
import heroLogo from './assets/review/regional-heroes/latest-2026-09-30/logo.svg';
import indiaLogo from './assets/review/regional-heroes/latest-2026-09-30/logo-india.svg';
import heroFont from './assets/review/regional-heroes/latest-2026-09-30/dm-sans-variable.woff2';

const fontId = 'osd-webfont-airtap-hand-round-02';
if (typeof document !== 'undefined' && !document.getElementById(fontId)) {
  const style = document.createElement('style');
  style.id = fontId;
  style.textContent = `@font-face{font-family:AirtapHandR2;src:url('${fontRegular}') format('truetype');font-weight:400;font-display:swap}@font-face{font-family:AirtapHandR2;src:url('${fontMedium}') format('truetype');font-weight:500;font-display:swap}@font-face{font-family:AirtapHandR2;src:url('${fontBold}') format('truetype');font-weight:700;font-display:swap}@font-face{font-family:AirtapHero;src:url('${heroFont}') format('woff2');font-weight:400 700;font-display:swap}`;
  document.head.appendChild(style);
}

export const design: DesignSystem = {
  palette: { bg: '#FAF9F6', text: '#161A18', accent: '#31594B' },
  fonts: { display: 'AirtapHandR2, sans-serif', body: 'AirtapHandR2, sans-serif' },
  typeScale: { hero: 156, body: 36 },
  radius: 22,
};

const C = { bg: 'var(--osd-bg)', ink: 'var(--osd-text)', green: 'var(--osd-accent)', muted: '#6B6C69', paper: '#F0EEE8', beige: '#E9DFD1', pale: '#E4F1E8', white: '#FFFFFF', line: '#DEDCD5' };
const Canvas = ({ children }: { children: ReactNode }) => <section data-airtap-round-two style={{ width: '100%', height: '100%', position: 'relative', background: C.bg, color: C.ink, fontFamily: 'var(--osd-font-body)', boxSizing: 'border-box' }}>{children}</section>;
const Box = ({ x, y, w, h, children, style }: { x: number; y: number; w: number; h?: number; children: ReactNode; style?: CSSProperties }) => <div style={{ position: 'absolute', left: x, top: y, width: w, height: h, ...style }}>{children}</div>;
const Eyebrow = ({ children }: { children: ReactNode }) => <div style={{ color: C.green, fontSize: 24, fontWeight: 500, letterSpacing: 3.5, textTransform: 'uppercase', marginBottom: 24 }}>{children}</div>;
const Title = ({ children, size = 88, style }: { children: ReactNode; size?: number; style?: CSSProperties }) => <h1 style={{ margin: 0, fontSize: size, lineHeight: 1.07, fontWeight: 500, letterSpacing: -3.5, fontFamily: 'var(--osd-font-display)', ...style }}>{children}</h1>;
const Body = ({ children, size = 36, style }: { children: ReactNode; size?: number; style?: CSSProperties }) => <p style={{ margin: 0, fontSize: size, lineHeight: 1.45, color: C.muted, ...style }}>{children}</p>;
const Pill = ({ children, solid = false }: { children: ReactNode; solid?: boolean }) => <span style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 24px', borderRadius: 100, background: solid ? C.green : C.pale, color: solid ? C.white : C.green, fontSize: 26, whiteSpace: 'nowrap' }}>{children}</span>;


// The source board is a research board, not a slide layout. Its actual artwork is
// reused below; history and rationale are documented in assets/review/research.md.
type Crop = [number, number, number, number, number, number];
const Picture = ({ src, alt, crop, fit = 'contain' }: { src: string; alt: string; crop?: Crop; fit?: 'contain' | 'cover' }) => <div data-artwork style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', containerType: 'size' }}>
  {crop ? <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: `min(100cqw, ${100 * crop[2] / crop[3]}cqh)`, height: `min(100cqh, ${100 * crop[3] / crop[2]}cqw)`, overflow: 'hidden' }}><img src={src} alt={alt} style={{ position: 'absolute', maxWidth: 'none', left: -crop[0] / crop[2] * 100 + '%', top: -crop[1] / crop[3] * 100 + '%', width: crop[4] / crop[2] * 100 + '%', height: crop[5] / crop[3] * 100 + '%' }} /></div> : <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: fit }} />}
</div>;
const masterCrops: Record<'front' | 'side' | 'back', Crop> = {
  front: [20, 130, 660, 645, 1671, 941],
  side: [705, 130, 250, 645, 1671, 941],
  back: [985, 130, 680, 645, 1671, 941],
};
const MasterCharacter = ({ view = 'front' }: { view?: 'front' | 'side' | 'back' }) => <Picture src={standard} alt={`Approved Airtap character — ${view} view`} crop={masterCrops[view]} />;
const Header = ({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) => <Box x={120} y={100} w={1680}><Eyebrow>{eyebrow}</Eyebrow><Title>{title}</Title>{intro && <Body style={{ marginTop: 24, maxWidth: 1530 }}>{intro}</Body>}</Box>;
const Caption = ({ children }: { children: ReactNode }) => <Body size={26}>{children}</Body>;
const Poster = ({ src, alt, x = 1180, y = 135, w = 620 }: { src: string; alt: string; x?: number; y?: number; w?: number }) => <Box x={x} y={y} w={w + 20} h={w * 4 / 3 + 20}>
  <div style={{ width: '100%', height: '100%', boxSizing: 'border-box', padding: 9, background: '#FFFFFF', border: `1px solid ${C.line}`, boxShadow: '0 22px 50px rgba(22,26,24,.16)' }}><Picture src={src} alt={alt} /></div>
</Box>;
// Shared 1440 × 1024 Hero from Figma 467:729; background assets and copy remain separate.
const RegionalHero = ({ src, name, width }: { src: string; name: string; width: number }) => <div data-regional-hero={name} style={{ width, height: width * 1024 / 1440, overflow: 'hidden' }}>
  <div data-hero-viewport style={{ width: 1440, height: 1024, position: 'relative', transform: `scale(${width / 1440})`, transformOrigin: 'top left', overflow: 'hidden', background: '#E9DFD1', color: '#07080B', lineHeight: 'normal', letterSpacing: 0, fontFamily: 'AirtapHero, sans-serif', fontVariationSettings: '"opsz" 14' }}>
    <img src={src} alt={name + ' — current Figma Hero background'} style={{ position: 'absolute', left: name === 'India' ? '-7%' : name === 'Japan' ? '-5%' : 0, top: name === 'India' ? '-14%' : name === 'Japan' ? '-5.5%' : 0, width: name === 'India' ? '114%' : name === 'Japan' ? '110%' : '100%', height: name === 'India' ? '114%' : name === 'Japan' ? '110%' : '100%', maxWidth: 'none', objectFit: name === 'Universal' ? 'cover' : 'fill' }} />
    <div style={{ position: 'absolute', left: 120, top: 24, width: 1200, height: 46, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <img src={name === 'India' ? indiaLogo : heroLogo} alt="Airtap" />
      <div style={{ position: 'absolute', left: 600.24, top: 4.18, transform: 'translateX(-50%)', display: 'flex', gap: 48.24, padding: '10px 0', fontSize: 13.622, fontWeight: 450 }}><span>Product</span><span>Solutions</span><span>Pricing</span></div>
      <span style={{ fontSize: 17.251, fontWeight: 550, color: '#0D1620' }}>Get early access</span>
    </div>
    <div style={{ position: 'absolute', left: 230.5, top: 123, width: 979, textAlign: 'center' }}>
      <div style={{ height: 22, fontSize: 14.544, lineHeight: '21.816px', letterSpacing: 2, fontWeight: 500, color: '#39414A' }}>YOUR PERSONAL AGENT</div>
      <div style={{ position: 'relative', height: 141.368 }}><div style={{ position: 'absolute', top: 11.81, left: 8.64, width: 979, fontSize: 70.819, lineHeight: '65.508px', fontWeight: 700, whiteSpace: 'nowrap', transform: 'scaleX(.92)' }}>Your apps make you tap.<br />Airtap taps back.</div></div>
      <div style={{ height: 64.52, boxSizing: 'border-box', paddingTop: 11.52, fontSize: 19.521, lineHeight: '26.353px', color: '#6F7173', fontWeight: 450 }}>Airtap compares prices, finds dinner options, and helps with forms.<br />You make the choices. Then get back to your day.</div>
      <div style={{ height: 78.064, boxSizing: 'border-box', paddingTop: 26.064, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ height: 50, width: 186, padding: '0 24px', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 100, background: '#31594B', color: 'white', fontSize: 17.251, fontWeight: 550, whiteSpace: 'nowrap' }}>Get early access</div></div>
    </div>
  </div>
</div>;
const WebPreview = ({ src, name, width }: { src: string; name: string; width: number }) => <div style={{ width: width + 20, padding: 9, boxSizing: 'border-box', background: '#FFFFFF', border: `1px solid ${C.line}`, borderRadius: 12, boxShadow: '0 22px 50px rgba(22,26,24,.14)' }}>
  <div style={{ height: 34, display: 'flex', alignItems: 'center', gap: 7, paddingLeft: 6 }}><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#D6D9D4' }} /><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#D6D9D4' }} /><span style={{ width: 8, height: 8, borderRadius: '50%', background: '#D6D9D4' }} /><span style={{ marginLeft: 16, fontSize: 12, color: C.muted, letterSpacing: .2 }}>airtap.ai</span></div>
  <div style={{ overflow: 'hidden', border: `1px solid ${C.line}`, borderRadius: 3 }}><RegionalHero src={src} name={name} width={width} /></div>
</div>;

const Cover: Page = () => <Canvas>
  <Box x={0} y={0} w={1920} h={1080}><img src={universalHero} alt="Airtap website Hero: the helping hand among everyday essentials" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }} /></Box>
  <Box x={120} y={56} w={247} h={62}><img src={suppliedLogo} alt="Airtap" style={{ width: 247, height: 62, display: 'block' }} /></Box>
  <Box x={220} y={136} w={1480} style={{ textAlign: 'center' }}>
    <div style={{ fontSize: 24, letterSpacing: 4, fontWeight: 500, marginBottom: 22 }}>YOUR PERSONAL AGENT</div>
    <Title size={100} style={{ fontWeight: 700, lineHeight: 1.01, letterSpacing: -5 }}>Your apps make you tap.<br />Airtap taps back.</Title>
    <Body size={30} style={{ maxWidth: 1060, margin: '24px auto 0', lineHeight: 1.35 }}>Airtap takes on the repetitive steps behind everyday plans.</Body>
  </Box>
</Canvas>;

const Trait = ({ x, label, detail }: { x: number; label: string; detail: string }) => <Box x={x} y={780} w={500}>
  <Pill>{label}</Pill><Body size={26} style={{ marginTop: 16 }}>{detail}</Body>
</Box>;
const Positioning: Page = () => <Canvas>
  <Box x={120} y={125} w={900}><Eyebrow>Positioning & personality</Eyebrow><Title size={108}>The hand that<br />takes it from here.</Title><Body style={{ marginTop: 38, maxWidth: 820 }}>A personal agent that takes on the repetitive steps, so you can focus on the choices that matter.</Body></Box>
  <Box x={1080} y={95} w={730} h={660}><Picture src={capInteraction} alt="Airtap winks with a playfully tilted blue cap" /></Box>
  <Trait x={120} label="Resourceful" detail="Finds a practical way forward." />
  <Trait x={710} label="Capable" detail="Carries the task forward." />
  <Trait x={1300} label="Considerate" detail="Knows when to hand control back." />
</Canvas>;

const SignatureFace: Page = () => <Canvas>
  <Header eyebrow="Signature details" title="A small nose. A stronger signature." />
  <Box x={140} y={325} w={650} h={625}><MasterCharacter /></Box>
  <Box x={940} y={340} w={860} style={{ paddingTop: 26 }}><h2 style={{ margin: '0 0 18px', fontSize: 40, fontWeight: 500 }}>Rose-pink, every time.</h2><Body size={32}>Keep the round nose’s color, size and placement consistent.</Body></Box>
  <Box x={940} y={555} w={860} style={{ paddingTop: 26 }}><h2 style={{ margin: '0 0 18px', fontSize: 40, fontWeight: 500 }}>A simple face.</h2><Body size={32}>Two charcoal eyes. One pink nose. No mouth.</Body></Box>
  <Box x={940} y={770} w={860} style={{ paddingTop: 26 }}><h2 style={{ margin: '0 0 18px', fontSize: 40, fontWeight: 500 }}>The same soft form.</h2><Body size={32}>Preserve the approved fingers, palm and warm cream material.</Body></Box>
</Canvas>;

const ExpressionArtwork = ({ src, alt, body, rotate = 0 }: { src: string; alt: string; body: Crop; rotate?: number }) => {
  // Match the hand's size independently of hats, headphones and side props.
  const scale = 240 / body[2];
  return <img src={src} alt={alt} style={{ position: 'absolute', maxWidth: 'none', width: body[4] * scale, height: body[5] * scale, left: 180 - (body[0] + body[2] / 2) * scale, top: 270 - (body[1] + body[3]) * scale, transform: `rotate(${rotate}deg)`, transformOrigin: `${(body[0] + body[2] / 2) * scale}px ${(body[1] + body[3]) * scale}px` }} />;
};
const ExpressionCharacter = ({ face, frame, alt, star = false, heart = false, faceRotate = 0, rotate = -6, style }: { face: string; frame: [number, number, number, number?]; alt: string; star?: boolean; heart?: boolean; faceRotate?: number; rotate?: number; style?: CSSProperties }) => {
  const id = `expression-${useId().replace(/:/g, '')}`;
  return <svg data-expression-master-composite role="img" aria-label={alt} width="100%" height="100%" viewBox="0 0 660 645" style={{ overflow: 'visible', transform: `rotate(${rotate}deg)`, transformOrigin: '51.153846% 96.062992%', ...style }}>
  <defs>
    <filter id={`${id}-face-feather`}><feGaussianBlur stdDeviation="4" /></filter>
    <mask id={`${id}-face-mask`} maskUnits="userSpaceOnUse" x={0} y={0} width={660} height={645}>
      <rect x={200} y={310} width={170} height={136} rx={18} fill="white" filter={`url(#${id}-face-feather)`} />
      <circle cx={281} cy={397} r={20} fill="black" />
    </mask>
    <clipPath id={`${id}-original-star`}>
      <path d="M1014 485 C1042 481 1050 520 1058 546 C1066 578 1074 596 1110 613 C1130 625 1156 642 1156 663 C1156 686 1136 697 1109 705 C1074 716 1059 727 1042 756 C1023 785 1015 811 981 811 C953 814 939 794 933 766 C927 740 922 715 900 698 C885 686 853 675 844 657 C829 633 846 613 870 602 C897 589 931 578 945 562 C960 546 973 520 983 503 C992 491 1001 487 1014 485 Z" />
    </clipPath>
    {heart && <clipPath id={`${id}-original-heart`}><path d="M1010 658 C958 615 914 612 877 627 C828 646 806 683 811 729 C813 787 874 848 944 897 C965 912 989 927 1008 922 C1051 908 1102 866 1143 824 C1189 777 1211 738 1204 695 C1197 651 1163 622 1121 617 C1078 611 1042 635 1010 658 Z" /></clipPath>}
  </defs>
  <svg width={660} height={645} viewBox="0 0 660 645" overflow="hidden"><image href={standard} x={-20} y={-130} width={1671} height={941} /></svg>
  <g mask={`url(#${id}-face-mask)`}><image href={face} x={frame[0]} y={frame[1]} width={frame[2]} height={frame[3] ?? frame[2]} transform={`rotate(${faceRotate} 281 397)`} /></g>
  {star && <g transform="translate(94 -201) scale(.57)"><image href={excitedStarSource} width={1254} height={1254} clipPath={`url(#${id}-original-star)`} /></g>}
  {heart && <g transform="translate(-44 17) scale(.684)"><image href={moodReassured} width={1672} height={941} clipPath={`url(#${id}-original-heart)`} /></g>}
</svg>;
};
const ExcitedCharacter = ({ style }: { style?: CSSProperties }) => <ExpressionCharacter face={excitedFace} frame={[17.8, 17.1, 596.9]} alt="Excited Airtap squeezing its eyes with delight, with the original floating golden star" star style={style} />;
const ExpressionTile = ({ x, y, label, children }: { x: number; y: number; label: string; children: ReactNode }) => <Box x={x} y={y} w={360} style={{ textAlign: 'center' }}><div style={{ height: 280, position: 'relative' }}>{children}</div><h2 style={{ fontSize: 32, fontWeight: 500, margin: '16px 0 0' }}>{label}</h2></Box>;
const Expressions: Page = () => <Canvas>
  <Header eyebrow="Expressions & character" title="Eight moods. One identity." />
  <ExpressionTile x={140} y={290} label="Friendly"><ExpressionArtwork src={moodFriendly} alt="Friendly Airtap with the small standard face" body={[124, 143, 1074, 1018, 1254, 1254]} /></ExpressionTile>
  <ExpressionTile x={565} y={290} label="Winking"><ExpressionArtwork src={moodWinking} alt="Winking Airtap with a playfully angled blue cap" body={[190, 273, 933, 880, 1254, 1254]} /></ExpressionTile>
  <ExpressionTile x={990} y={290} label="Happy"><ExpressionArtwork src={moodHappy} alt="Happy Airtap leaning into the music with blue headphones" body={[235, 186, 968, 930, 1254, 1254]} /></ExpressionTile>
  <ExpressionTile x={1415} y={290} label="Focused"><ExpressionArtwork src={moodFocused} alt="Focused Airtap with small eyes and two short brows" body={[123, 143, 1077, 1018, 1254, 1254]} /></ExpressionTile>
  <ExpressionTile x={140} y={650} label="Thoughtful"><ExpressionCharacter face={moodThoughtful} frame={[-34.8, -59.3, 716.6]} alt="Thoughtful Airtap with an inquisitive half-lidded eye and one raised eyebrow" style={{ position: 'absolute', left: 47, top: 26, width: 260, height: 254 }} /></ExpressionTile>
  <ExpressionTile x={565} y={650} label="Surprised"><ExpressionCharacter face={moodSurprised} frame={[-34, -58.6, 715.3]} alt="Surprised Airtap with round wide-open eyes and two lifted eyebrows" rotate={4} style={{ position: 'absolute', left: 47, top: 26, width: 260, height: 254 }} /></ExpressionTile>
  <ExpressionTile x={990} y={650} label="Excited">
    <ExcitedCharacter style={{ position: 'absolute', left: 47, top: 26, width: 260, height: 254 }} />
  </ExpressionTile>
  <ExpressionTile x={1415} y={650} label="Reassured"><ExpressionCharacter face={moodReassured} frame={[-161.8, -47.2, 1233.6, 694.3]} faceRotate={8.15} rotate={-7} heart alt="Reassured Airtap with the approved hand proportions, relaxed eyes and original pink heart" style={{ position: 'absolute', left: 47, top: 26, width: 260, height: 254 }} /></ExpressionTile>
</Canvas>;

const CharacterView = ({ x, view, title, detail }: { x: number; view: 'front' | 'side' | 'back'; title: string; detail: string }) => <Box x={x} y={385} w={500}>
  <div style={{ height: 470 }}><MasterCharacter view={view} /></div>
  <div style={{ marginTop: 40, paddingTop: 20, display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}><h2 style={{ fontSize: 34, fontWeight: 500, margin: 0, letterSpacing: -.7 }}>{title}</h2><Caption>{detail}</Caption></div>
</Box>;
const Standard: Page = () => <Canvas>
  <Header eyebrow="Character design" title="One character, from every angle." intro="The final character. The reference for every expression and action." />
  <CharacterView x={120} view="front" title="Front" detail="Rose-pink nose" />
  <CharacterView x={710} view="side" title="Side" detail="Soft volume" />
  <CharacterView x={1300} view="back" title="Back" detail="Subtle star relief" />
</Canvas>;

const ColorRole = ({ x, color, name, code, light = false }: { x: number; color: string; name: string; code: string; light?: boolean }) => <Box x={x} y={310} w={320} h={350}>
  <div style={{ height: '100%', padding: 28, boxSizing: 'border-box', background: color, border: `1px solid ${C.line}`, color: light ? C.white : C.ink, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <span style={{ fontSize: 24 }}>{code}</span>
    <h2 style={{ margin: 0, fontSize: 32, lineHeight: 1.15, fontWeight: 500 }}>{name}</h2>
  </div>
</Box>;
const TypeRole = ({ x, weight, label, children }: { x: number; weight: number; label: string; children: ReactNode }) => <Box x={x} y={755} w={800} style={{ paddingTop: 28 }}>
  <h2 style={{ fontSize: 58, fontWeight: weight, letterSpacing: -1.5, margin: '0 0 18px' }}>DM Sans</h2>
  <div style={{ color: C.green, fontSize: 26, marginBottom: 14 }}>{label}</div>
  <Body size={28}>{children}</Body>
</Box>;
const Palette: Page = () => <Canvas>
  <Header eyebrow="Color & typography" title="Warm by nature. Clear by design." />
  <ColorRole x={120} color={C.bg} name="Warm white" code="#FAF9F6" />
  <ColorRole x={460} color={C.beige} name="Natural beige" code="#E9DFD1" />
  <ColorRole x={800} color={C.green} name="Forest green" code="#31594B" light />
  <ColorRole x={1140} color={C.pale} name="Soft green" code="#E4F1E8" />
  <ColorRole x={1480} color={C.ink} name="Soft ink" code="#161A18" light />
  <TypeRole x={120} weight={500} label="Medium · 500 · Headlines">Regular · 400 · Body copy</TypeRole>
  <Box x={1000} y={755} w={800} style={{ paddingTop: 34 }}><Body size={38} style={{ color: C.ink }}>A personal agent that takes on the repetitive steps, so you can focus on the choices that matter.</Body></Box>
</Canvas>;

const VoiceSample = ({ y, label, context, children }: { y: number; label: string; context: string; children: ReactNode }) => <Box x={800} y={y} w={1000}>
  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24, color: C.muted, marginBottom: 14 }}><span style={{ color: C.green }}>{label}</span><span>{context}</span></div>
  <div style={{ fontSize: 43, lineHeight: 1.2, letterSpacing: -1, fontWeight: 500 }}>{children}</div>
</Box>;
const VoiceTone: Page = () => <Canvas>
  <Header eyebrow="Verbal identity" title="Short words. A clear point." />
  <Box x={120} y={350} w={540}>
    <Title size={64} style={{ lineHeight: 1.12, letterSpacing: -2 }}>Meaning first.<br />Rhythm second.</Title>
    <Body size={34} style={{ marginTop: 40 }}>Repeat sounds around a real task or benefit. Keep instructions and status plain.</Body>
  </Box>
  <VoiceSample y={325} label="Alliteration" context="Shopping">Same specs. Fewer steps.</VoiceSample>
  <VoiceSample y={452} label="Consonance" context="Offers">Nice perks. Less paperwork.</VoiceSample>
  <VoiceSample y={579} label="Near sounds" context="Dinner">Craving a wrap? Skip the app-hop.</VoiceSample>
  <VoiceSample y={706} label="Repeated phrasing" context="Short transition">All those tasks. All those taps.</VoiceSample>
  <VoiceSample y={833} label="End rhyme" context="Campaign">Trap / Airtap</VoiceSample>
</Canvas>;

const SpecialistStudy = ({ x, src, alt, category, title }: { x: number; src: string; alt: string; category: string; title: string }) => <Box x={x} y={135} w={520}>
  <div style={{ width: 520, height: 520 * 4 / 3 }}><Picture src={src} alt={alt} /></div>
  <Body size={24} style={{ marginTop: 28, color: C.green, lineHeight: 1.3 }}>{category}</Body>
  <h2 style={{ margin: '8px 0 0', fontSize: 32, fontWeight: 500, letterSpacing: -0.5 }}>{title}</h2>
</Box>;
const Specialist: Page = () => <Canvas>
  <Box x={120} y={135} w={520}><Eyebrow>Campaign extension</Eyebrow><Title>Expertise,<br />made visible.</Title></Box>
  <Box x={120} y={135} w={520} h={520 * 4 / 3} style={{ display: 'flex', alignItems: 'flex-end' }}><Body size={34} style={{ textWrap: 'balance' }}>Focused expertise for specialist fields and complex everyday tasks.</Body></Box>
  <SpecialistStudy x={700} src={expertRoom} alt="Airtap applying specialist expertise to mathematics" category="Specialist fields" title="Mathematics" />
  <SpecialistStudy x={1280} src={expertFlight} alt="Airtap helping rebook a cancelled flight at an airport" category="Everyday tasks" title="Flight booking" />
</Canvas>;

const Access: Page = () => <Canvas>
  <Box x={120} y={135} w={930}><Eyebrow>Recommended lead · Everyday steps</Eyebrow><Title size={96}>Same task.<br />Same old trap.<br />Hand it to Airtap.</Title></Box>
  <Box x={120} y={135} w={930} h={620 * 4 / 3 + 20} style={{ display: 'flex', alignItems: 'flex-end' }}><Body size={34}>Make repeated effort visible: searching, filling forms and checking across pages.</Body></Box>
  <Poster src={accessPoster} alt="Existing campaign study: Airtap hand revealing a route behind a web surface" />
</Canvas>;

const Assistant: Page = () => <Canvas>
  <Box x={120} y={135} w={1000}><Eyebrow>Extension · Assistant collaboration</Eyebrow><Title style={{ textWrap: 'balance' }}>Even your assistant needs a hand.</Title></Box>
  <Box x={120} y={135} w={1000} h={620 * 4 / 3 + 20} style={{ display: 'flex', alignItems: 'flex-end' }}><Body>Explore a handoff from a general assistant to focused help with the next steps.</Body></Box>
  <Poster src={assistantPoster} alt="Airtap takes an action in front of a general assistant character" />
</Canvas>;

const Business: Page = () => <Canvas>
  <Box x={120} y={135} w={1000}><Eyebrow>Extension · Small business</Eyebrow><Title style={{ textWrap: 'balance' }}>Keep doing what you do best.</Title></Box>
  <Box x={120} y={135} w={1000} h={620 * 4 / 3 + 20} style={{ display: 'flex', alignItems: 'flex-end' }}><Body>Show a business owner staying with their craft while routine customer requests get attention.</Body></Box>
  <Poster src={businessPoster} alt="Baker working behind the Airtap hand and customer conversation" />
</Canvas>;

const RegionalStudy = ({ y, src, back, title }: { y: number; src: string; back: string; title: string }) => <Box x={1220} y={y} w={580}>
  <h2 style={{ fontSize: 28, fontWeight: 500, margin: 0, color: C.ink }}>{title}</h2>
  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 14 }}>
    <div style={{ width: 260, height: 210, mixBlendMode: 'multiply' }}><Picture src={src} alt={title + ' — front view'} /></div>
    <div style={{ width: 260, height: 210, mixBlendMode: 'multiply' }}><Picture src={back} alt={title + ' — back view'} /></div>
  </div>
</Box>;

const UniversalWeb: Page = () => <Canvas>
  <Box x={120} y={135} w={650}><Eyebrow>Brand application</Eyebrow><Title style={{ textWrap: 'balance' }}>An everyday companion.</Title><Body size={32} style={{ marginTop: 42 }}>An everyday setting for a global audience.</Body></Box>
  <Box x={805} y={135} w={1015}><WebPreview src={universalHero} name="Universal" width={995} /></Box>
</Canvas>;

const IndiaWeb: Page = () => <Canvas>
  <Header eyebrow="India · Regional adaptation" title="Mumbai plans. A familiar helping hand." />
  <Box x={120} y={280} w={1010}><WebPreview src={indiaHero} name="India" width={990} /></Box>
  <RegionalStudy y={280} src={whiteCap} back={whiteCapBack} title="White cap" />
  <RegionalStudy y={590} src={indiaLoops} back={indiaLoopsBack} title="Kolam pattern" />
  <Box x={1220} y={870} w={580}>
    <Body size={26} style={{ lineHeight: 1.35 }}>Kolam’s dots and looping paths come from Tamil threshold drawings. Here, dots suggest task checkpoints and loops suggest follow-through—an Airtap interpretation.</Body>
    <a href="https://www.sahapedia.org/significance-of-kolam-tamil-culture" target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: 12, fontSize: 20, lineHeight: 1.4, color: C.muted, textUnderlineOffset: 4 }}>Source: Sahapedia, Kolam in Tamil Culture</a>
  </Box>
</Canvas>;

const JapanWeb: Page = () => <Canvas>
  <Header eyebrow="Japan · Regional adaptation" title="A quiet café. The same helping hand." />
  <Box x={120} y={280} w={1010}><WebPreview src={japanHero} name="Japan" width={990} /></Box>
  <RegionalStudy y={280} src={japanFlower} back={japanFlowerBack} title="Sakura accent" />
  <RegionalStudy y={590} src={japanWaves} back={japanWavesBack} title="Seigaiha pattern" />
  <Box x={1220} y={870} w={580}>
    <Body size={26} style={{ lineHeight: 1.35 }}>Seigaiha’s overlapping arcs appear in Japanese textiles and decorative arts. Their wave rhythm becomes a blue detail across the hand’s lower front and back.</Body>
    <a href="https://www.aisf.or.jp/~jaanus/deta/s/seigaiha.htm" target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: 12, fontSize: 20, lineHeight: 1.4, color: C.muted, textUnderlineOffset: 4 }}>Source: JAANUS, Seigaiha</a>
  </Box>
</Canvas>;

const Thanks: Page = () => {
  const clipId = `thanks-front-${useId().replace(/:/g, '')}`;
  return <Canvas>
    <Box x={140} y={290} w={880}><Title size={192} style={{ fontWeight: 500, letterSpacing: -9 }}>Thanks.</Title></Box>
    <Box x={148} y={560} w={860}><Body size={56} style={{ color: C.green, lineHeight: 1.22, letterSpacing: -1.8 }}>Your apps make you tap.<br />Airtap taps back.</Body></Box>
    <Box x={148} y={870} w={247} h={62}><img src={suppliedLogo} alt="Airtap" style={{ width: '100%', height: '100%', display: 'block' }} /></Box>
    <Box x={1070} y={230} w={690} h={690} style={{ transform: 'rotate(9deg)', transformOrigin: '50% 50%' }}>
      <svg role="img" aria-label="Airtap in a gently tilted static pose" width="100%" height="100%" viewBox="30 130 655 655">
        <defs><mask id={clipId} maskUnits="userSpaceOnUse" x={0} y={0} width={1672} height={941}><path fill="white" stroke="black" strokeWidth={4} d="M322 153 C361 152 391 167 401 200 C414 234 409 289 403 312 C421 269 450 251 479 254 C527 259 550 284 554 323 C562 368 541 425 519 476 C541 445 568 429 593 430 C631 431 654 455 659 487 C665 521 649 548 629 572 L563 657 C526 704 493 727 447 737 C401 748 338 749 289 749 C239 747 212 742 192 732 C158 718 132 696 112 663 C83 618 70 557 62 496 C56 449 53 405 57 365 C61 319 79 280 108 259 C132 240 158 241 179 248 C198 255 211 268 220 290 C220 250 232 213 255 187 C274 166 296 154 322 153 Z" /></mask></defs>
        <image href={thanksStandard} width={1672} height={941} mask={`url(#${clipId})`} />
      </svg>
    </Box>
  </Canvas>;
};

const ProgressItem = ({ y, number, title, detail }: { y: number; number: string; title: string; detail: string }) => <Box x={950} y={y} w={850} style={{ paddingTop: 22 }}>
  <div style={{ position: 'absolute', left: 0, top: 28, color: C.green, fontSize: 24 }}>{number}</div>
  <div style={{ marginLeft: 80 }}><h2 style={{ fontSize: 38, fontWeight: 500, margin: '0 0 14px', letterSpacing: -1 }}>{title}</h2><Body size={32}>{detail}</Body></div>
</Box>;
const RoundProgress: Page = () => <Canvas>
  <Header eyebrow="Round 02 · Design update" title="Three design updates." />
  <Box x={100} y={300} w={740} h={670}><ExcitedCharacter /></Box>
  <ProgressItem y={325} number="01" title="Character identity" detail="Refined face, rose-pink nose and back star." />
  <ProgressItem y={550} number="02" title="Expression & interaction" detail="Eight expressions, brought to life through props and posture." />
  <ProgressItem y={775} number="03" title="Campaign & Web" detail="Four campaign directions, with global and regional applications." />
</Canvas>;

const ChapterDivider = ({ number, title, intro }: { number: string; title: ReactNode; intro: string }) => {
  const background = '#F8F4EB';
  const ink = C.green;
  return <Canvas>
    <div data-chapter={number} style={{ position: 'absolute', inset: 0, overflow: 'hidden', background, color: ink }}>
      <svg aria-hidden="true" width={1920} height={1080} viewBox="0 0 1920 1080" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <svg x={1460} y={700} width={560} height={560} viewBox="30 130 655 655">
          <path fill="none" stroke={ink} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" opacity={0.16} d="M322 153 C361 152 391 167 401 200 C414 234 409 289 403 312 C421 269 450 251 479 254 C527 259 550 284 554 323 C562 368 541 425 519 476 C541 445 568 429 593 430 C631 431 654 455 659 487 C665 521 649 548 629 572 L563 657 C526 704 493 727 447 737 C401 748 338 749 289 749 C239 747 212 742 192 732 C158 718 132 696 112 663 C83 618 70 557 62 496 C56 449 53 405 57 365 C61 319 79 280 108 259 C132 240 158 241 179 248 C198 255 211 268 220 290 C220 250 232 213 255 187 C274 166 296 154 322 153 Z" />
        </svg>
      </svg>
      <Box x={180} y={0} w={1560} h={1080} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <div style={{ fontSize: 48, lineHeight: 1, fontWeight: 400, letterSpacing: -1.5, opacity: 0.72, marginBottom: 40 }}>{number}</div>
        <Title size={160} style={{ lineHeight: 1.04, letterSpacing: -6 }}>{title}</Title>
        <Body size={32} style={{ maxWidth: 1140, marginTop: 44, color: ink, opacity: 0.8, lineHeight: 1.45, textWrap: 'balance' }}>{intro}</Body>
      </Box>
    </div>
  </Canvas>;
};
const CharacterChapter: Page = () => <ChapterDivider number="02" title={<>One character.<br />Many responses.</>} intro="Signature details, a shared form and eight moods." />;
const VisualChapter: Page = () => <ChapterDivider number="03" title={<>A system for<br />recognition.</>} intro="Color, typography and a clear, memorable voice." />;
const CampaignChapter: Page = () => <ChapterDivider number="04" title={<>One promise.<br />Four directions.</>} intro="A recommended lead, with three routes for further exploration." />;
const WebChapter: Page = () => <ChapterDivider number="05" title={<>One identity.<br />Local contexts.</>} intro="A shared Web language, adapted for India and Japan." />;

export const meta: SlideMeta = { title: 'Airtap — Hand / Round 02 · Evolution & Direction', createdAt: '2026-09-29T13:04:35.050Z' };
export default [Cover, RoundProgress, Positioning, CharacterChapter, SignatureFace, Standard, Expressions, VisualChapter, Palette, VoiceTone, CampaignChapter, Specialist, Access, Assistant, Business, WebChapter, UniversalWeb, IndiaWeb, JapanWeb, Thanks] satisfies Page[];
