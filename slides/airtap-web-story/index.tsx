import type { CSSProperties, ReactNode } from 'react';
import { ImagePlaceholder, useSlidePageNumber } from '@open-slide/core';
import type { DesignSystem, Page, SlideMeta } from '@open-slide/core';
import wordmark from './assets/wordmark.svg';
import satoshi from './assets/satoshi-variable.ttf';

const STYLE_ID = 'osd-airtap-web-story';
if (typeof document !== 'undefined') {
  const style = document.getElementById(STYLE_ID) || document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    @font-face { font-family: 'Airtap Story Satoshi'; src: url('${satoshi}') format('truetype'); font-weight: 300 900; font-style: normal; font-display: swap; }
    .airtap-web-story ::selection { background: #0056F6; color: #FFFFFF; }
    .airtap-web-story [data-slide-placeholder] > svg,
    .airtap-web-story [data-slide-placeholder] > div > span:first-child,
    .airtap-web-story [data-slide-placeholder] > div > span:nth-child(3) { display: none; }
    .airtap-web-story [data-slide-placeholder] > div > span:nth-child(2) { font-family: 'Airtap Story Satoshi', sans-serif !important; font-size: 24px !important; font-weight: 400 !important; color: #666963 !important; }
  `;
  if (!style.parentNode) document.head.appendChild(style);
}

export const design: DesignSystem = {
  palette: { bg: '#FAF9F5', text: '#030405', accent: '#0056F6' },
  fonts: {
    display: '"Airtap Story Satoshi", "PingFang SC", sans-serif',
    body: '"Airtap Story Satoshi", "PingFang SC", sans-serif',
  },
  typeScale: { hero: 128, body: 32 },
  radius: 16,
};

const muted = '#535B64';
const heading: CSSProperties = {
  margin: 0, fontFamily: 'var(--osd-font-display)', fontWeight: 750,
  fontSize: 96, lineHeight: 1.08, letterSpacing: '-0.035em',
};
const body: CSSProperties = {
  margin: 0, fontSize: 'var(--osd-size-body)', lineHeight: 1.5,
  letterSpacing: '-0.01em', color: muted,
};
const imageStyle: CSSProperties = {
  background: '#EEEFEA', border: '1px solid #E0E2DB',
  borderRadius: 'var(--osd-radius)', padding: 32, overflow: 'visible',
};
// Fixed 1920 × 1080 slide canvas; shared alignment keeps every feature easy to scan.
const featureGrid: CSSProperties = {
  position: 'absolute', left: 120, right: 120, top: 224,
  display: 'grid', gridTemplateColumns: '760px 840px', gap: 80, alignItems: 'center',
};

const Footer = ({ section }: { section: string }) => {
  const { current, total } = useSlidePageNumber();
  return (
    <footer style={{ position: 'absolute', left: 120, right: 120, bottom: 64, display: 'flex', justifyContent: 'space-between', fontSize: 22, color: muted }}>
      <span>{section}</span>
      <span>{String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
    </footer>
  );
};

const Canvas = ({ children, section }: { children: ReactNode; section: string }) => (
  <section className="airtap-web-story" style={{ width: '100%', height: '100%', position: 'relative', boxSizing: 'border-box', background: 'var(--osd-bg)', color: 'var(--osd-text)', fontFamily: 'var(--osd-font-body)', fontFeatureSettings: '"ss01" 1' }}>
    <img src={wordmark} alt="Airtap" style={{ position: 'absolute', left: 120, top: 72, width: 156, height: 60, objectFit: 'contain' }} />
    {children}
    <Footer section={section} />
  </section>
);

// Static page-copy treatment; the launch destination is not connected in this deck.
const CTA = ({ children }: { children: ReactNode }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minHeight: 72, padding: '0 36px', borderRadius: 40, fontSize: 28, fontWeight: 600, background: 'var(--osd-accent)', color: '#FFFFFF' }}>{children}</span>
);

const Hero: Page = () => (
  <Canvas section="Introduction">
    <div style={featureGrid}>
      <div>
        <p style={{ margin: '0 0 24px', fontSize: 40, lineHeight: 1.3, letterSpacing: '-0.02em' }}>Your apps make you tap.</p>
        <h1 style={{ ...heading, fontSize: 'var(--osd-size-hero)' }}>Airtap<br /><span style={{ color: 'var(--osd-accent)' }}>taps back.</span></h1>
        <p style={{ ...body, marginTop: 32, maxWidth: 660 }}>Your personal agent for searching, comparing, and form-filling across supported apps and websites.</p>
        <div style={{ marginTop: 40 }}><CTA>Get early access</CTA></div>
      </div>
      {/* Existing hand IP receiving a headphone comparison task and returning comparable options. */}
      <ImagePlaceholder hint="Airtap in action" width={840} height={680} style={imageStyle} />
    </div>
  </Canvas>
);

const Shopping: Page = () => (
  <Canvas section="Shopping">
    <div style={featureGrid}>
      <div>
        <h2 style={heading}>Same specs.<br />Fewer steps.</h2>
        <p style={{ ...body, marginTop: 40, maxWidth: 660 }}>Compare the same model across stores, with total prices, delivery, and offer conditions in one place.</p>
      </div>
      {/* Matching headphone model and specs, with aligned total price and delivery details. */}
      <ImagePlaceholder hint="Shopping comparison" width={840} height={680} style={imageStyle} />
    </div>
  </Canvas>
);

const Dinner: Page = () => (
  <Canvas section="Dinner">
    <div style={featureGrid}>
      <div>
        <h2 style={heading}>Less tapping.<br />More appetite.</h2>
        <p style={{ ...body, marginTop: 40, maxWidth: 660 }}>Dinner options that fit your taste and budget, with the details checked and reasons to choose.</p>
      </div>
      {/* Existing hand IP selecting two dinner options that fit the user's budget and tastes. */}
      <ImagePlaceholder hint="Dinner shortlist" width={840} height={680} style={imageStyle} />
    </div>
  </Canvas>
);

const Offers: Page = () => (
  <Canvas section="Offers">
    <div style={featureGrid}>
      <div>
        <h2 style={heading}>More perks.<br />Less paperwork.</h2>
        <p style={{ ...body, marginTop: 40, maxWidth: 660 }}>Check offer conditions. If you decide to join, Airtap helps with the supported sign-up and coupon steps.</p>
      </div>
      {/* Offer conditions, form steps, and a clear state awaiting the user's decision. */}
      <ImagePlaceholder hint="Offers & sign-up" width={840} height={680} style={imageStyle} />
    </div>
  </Canvas>
);

const HowItWorks: Page = () => (
  <Canvas section="How it works">
    <h2 style={{ ...heading, position: 'absolute', left: 120, top: 224 }}>You ask. Airtap acts.</h2>
    <div style={{ position: 'absolute', left: 120, right: 120, top: 432, display: 'grid', gridTemplateColumns: '520px 520px 520px', gap: 60 }}>
      <div>
        <ImagePlaceholder hint="Your request" width={520} height={340} style={imageStyle} />
        <h3 style={{ ...heading, fontSize: 40, marginTop: 32 }}>Say what you need.</h3>
      </div>
      <div>
        <ImagePlaceholder hint="Airtap at work" width={520} height={340} style={imageStyle} />
        <h3 style={{ ...heading, fontSize: 40, marginTop: 32 }}>Let Airtap work.</h3>
      </div>
      <div>
        <ImagePlaceholder hint="Your result" width={520} height={340} style={imageStyle} />
        <h3 style={{ ...heading, fontSize: 40, marginTop: 32 }}>Choose what’s next.</h3>
      </div>
    </div>
  </Canvas>
);

const Control: Page = () => (
  <Canvas section="Your choices">
    <div style={featureGrid}>
      <div>
        <h2 style={heading}>It taps.<br />You decide.</h2>
        <p style={{ ...body, marginTop: 40, maxWidth: 660 }}>See what’s been checked, what’s ready, and what needs your decision.</p>
      </div>
      {/* Actual product UI for access scope, progress, and confirmation; verify capabilities before launch. */}
      <ImagePlaceholder hint="Progress & approval" width={840} height={680} style={imageStyle} />
    </div>
  </Canvas>
);

const Time: Page = () => (
  <Canvas section="Time for you">
    <div style={featureGrid}>
      <div>
        <h2 style={heading}>Less tap, tap.<br /><span style={{ color: 'var(--osd-accent)' }}>More nap, nap.</span></h2>
        <p style={{ ...body, marginTop: 40, maxWidth: 660 }}>A snack. A chat.<br />A little time for absolutely nothing.</p>
      </div>
      {/* One relaxed lifestyle photograph after the task is handed back; no unattended-execution claim. */}
      <ImagePlaceholder hint="Back to your day" width={840} height={680} style={imageStyle} />
    </div>
  </Canvas>
);

const Question = ({ children }: { children: ReactNode }) => (
  <p style={{ margin: 0, padding: '22px 0', borderBottom: '1px solid #DADDDC', fontSize: 28, lineHeight: 1.4 }}>{children}</p>
);

const Closing: Page = () => (
  <Canvas section="Get started · Concept draft">
    <div style={{ ...featureGrid, top: 296, alignItems: 'start' }}>
      <div>
        <h2 style={heading}>What will you<br />hand off first?</h2>
        <p style={{ ...body, marginTop: 40 }}>Start with one everyday task.</p>
        <div style={{ marginTop: 40 }}><CTA>Get early access</CTA></div>
      </div>
      <div style={{ paddingLeft: 80 }}>
        <h3 style={{ ...heading, fontSize: 40, marginBottom: 24 }}>A few things to know.</h3>
        {/* Answers depend on verified product scope and launch information. */}
        <Question>What can Airtap do, and where?</Question>
        <Question>How do I connect my accounts?</Question>
        <Question>When do I need to confirm?</Question>
        <Question>What if a task gets stuck?</Question>
        <Question>Is it available to me, and what does it cost?</Question>
        <p style={{ ...body, fontSize: 22, marginTop: 24 }}>Answers to follow with launch details.</p>
      </div>
    </div>
  </Canvas>
);

export const meta: SlideMeta = {
  title: 'Airtap · Web Story / 网站逐屏稿',
  createdAt: '2026-09-22T10:41:29.971Z',
};

export default [Hero, Shopping, Dinner, Offers, HowItWorks, Control, Time, Closing] satisfies Page[];
