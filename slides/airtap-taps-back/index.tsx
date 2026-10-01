import type { CSSProperties, ReactNode } from 'react';
import type { DesignSystem, Page, SlideMeta, SlideTransition } from '@open-slide/core';

const FONT_HREF = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,500;0,600;0,700;0,800;1,700;1,800&display=swap';
const FONT_LINK_ID = 'osd-webfont-airtap-taps-back';
if (typeof document !== 'undefined' && !document.getElementById(FONT_LINK_ID)) {
  const link = document.createElement('link');
  link.id = FONT_LINK_ID;
  link.rel = 'stylesheet';
  link.href = FONT_HREF;
  document.head.appendChild(link);
}

export const design: DesignSystem = {
  palette: { bg: '#F7F4E8', text: '#22252C', accent: '#70B47F' },
  fonts: {
    display: '"Plus Jakarta Sans", "PingFang SC", "Noto Sans SC", sans-serif',
    body: '"Plus Jakarta Sans", "PingFang SC", "Noto Sans SC", sans-serif',
  },
  typeScale: { hero: 190, body: 36 },
  radius: 18,
};

const c = {
  paper: '#F7F4E8', white: '#FFFEF7', ink: '#22252C', muted: '#6D706F',
  green: '#70B47F', greenDark: '#37784B', greenPale: '#DDEBDD', greenLight: '#EEF5E9',
  peach: '#F7D7B8', peachStrong: '#E89462', blue: '#88AEEA', bluePale: '#DDE8F8',
  yellow: '#F5DB62', red: '#E15B4D', line: '#D8D5CB', shadow: 'rgba(37,39,43,.18)',
};

const fill: CSSProperties = {
  width: '100%', height: '100%', boxSizing: 'border-box', position: 'relative',
  color: 'var(--osd-text)', fontFamily: 'var(--osd-font-body)',
};
const paperTexture = 'repeating-linear-gradient(90deg,rgba(34,37,44,.018) 0,rgba(34,37,44,.018) 1px,transparent 1px,transparent 5px),linear-gradient(#F7F4E8,#F7F4E8)';

export const transition: SlideTransition = {
  duration: 220,
  exit: { duration: 150, easing: 'cubic-bezier(.4,0,1,1)', keyframes: [{ opacity: 1, transform: 'translateY(0)' }, { opacity: 0, transform: 'translateY(-4px)' }] },
  enter: { duration: 220, delay: 70, easing: 'cubic-bezier(0,0,.2,1)', keyframes: [{ opacity: 0, transform: 'translateY(7px)' }, { opacity: 1, transform: 'translateY(0)' }] },
};

const Canvas = ({ children, background = paperTexture }: { children: ReactNode; background?: string }) => (
  <section style={{ ...fill, background, padding: '72px 92px 70px' }}>
    {children}
    <div style={{ position: 'absolute', left: 92, bottom: 28, fontSize: 16, fontWeight: 800, letterSpacing: '.14em', color: '#8D8B84' }}>
      AIRTAP · TAPS BACK
    </div>
  </section>
);

const IndexLabel = ({ children }: { children: ReactNode }) => (
  <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-.04em' }}>{children}</div>
);

const Tape = ({ color = c.bluePale, width = 116, rotate = -5, style }: { color?: string; width?: number; rotate?: number; style?: CSSProperties }) => (
  <div style={{ position: 'absolute', width, height: 34, background: color, opacity: .9, transform: `rotate(${rotate}deg)`, boxShadow: 'inset 0 0 0 1px rgba(34,37,44,.06)', ...style }} />
);

const Pin = ({ color = c.red, style }: { color?: string; style?: CSSProperties }) => (
  <div style={{ position: 'absolute', width: 25, height: 25, borderRadius: 99, background: color, boxShadow: '0 7px 10px rgba(34,37,44,.22)', ...style }} />
);

const Spark = ({ color = c.yellow, size = 44, style }: { color?: string; size?: number; style?: CSSProperties }) => (
  <div style={{ position: 'absolute', width: size, height: size, background: color, clipPath: 'polygon(50% 0,61% 35%,100% 50%,61% 65%,50% 100%,39% 65%,0 50%,39% 35%)', ...style }} />
);

const Sticker = ({ children, color = c.green, rotate = -4, style }: { children: ReactNode; color?: string; rotate?: number; style?: CSSProperties }) => (
  <div style={{ position: 'absolute', padding: '14px 22px', borderRadius: 4, background: color, color: c.ink, fontSize: 22, fontWeight: 800, lineHeight: 1, transform: `rotate(${rotate}deg)`, boxShadow: '0 8px 18px rgba(34,37,44,.12)', ...style }}>
    {children}
  </div>
);

const PaperCard = ({ children, rotate = 0, background = c.white, style }: { children: ReactNode; rotate?: number; background?: string; style?: CSSProperties }) => (
  <div style={{ position: 'relative', background, border: `1px solid ${c.line}`, borderRadius: 'var(--osd-radius)', boxShadow: `0 16px 34px ${c.shadow}`, transform: `rotate(${rotate}deg)`, ...style }}>
    {children}
  </div>
);

const TypeLabel = ({ children, color = c.ink }: { children: ReactNode; color?: string }) => (
  <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: '.1em', color }}>{children}</span>
);

const MiniScreen = ({ accent = c.green }: { accent?: string }) => (
  <div style={{ width: 236, height: 204, position: 'relative' }}>
    <div style={{ width: 206, height: 146, borderRadius: 12, background: '#C8B9A4', border: `8px solid ${c.ink}`, padding: 14, boxSizing: 'border-box', position: 'relative' }}>
      <div style={{ height: '100%', background: c.bluePale, padding: 12, boxSizing: 'border-box' }}>
        <div style={{ width: 100, height: 18, background: accent, marginBottom: 12 }} />
        <div style={{ width: 140, height: 10, background: c.ink, marginBottom: 8 }} />
        <div style={{ width: 112, height: 10, background: c.peachStrong }} />
      </div>
    </div>
    <div style={{ position: 'absolute', width: 28, height: 54, background: c.ink, left: 90, top: 144 }} />
    <div style={{ position: 'absolute', width: 112, height: 20, background: accent, borderRadius: '50%', left: 48, bottom: 0 }} />
  </div>
);

const PhoneVisual = ({ rotate = 0, accent = c.green }: { rotate?: number; accent?: string }) => (
  <div style={{ width: 174, height: 314, borderRadius: 32, background: c.ink, padding: 10, boxSizing: 'border-box', transform: `rotate(${rotate}deg)`, boxShadow: '0 16px 30px rgba(34,37,44,.22)' }}>
    <div style={{ width: '100%', height: '100%', borderRadius: 24, background: c.white, padding: '40px 14px 18px', boxSizing: 'border-box' }}>
      <div style={{ width: 108, height: 42, background: c.blue, borderRadius: '20px 20px 5px 20px', marginLeft: 26 }} />
      <div style={{ width: 124, height: 62, background: c.greenPale, borderRadius: '20px 20px 20px 5px', marginTop: 16 }} />
      <div style={{ width: 104, height: 16, borderRadius: 8, background: accent, marginTop: 28 }} />
      <div style={{ width: 132, height: 12, borderRadius: 8, background: c.line, marginTop: 12 }} />
      <div style={{ width: 88, height: 12, borderRadius: 8, background: c.line, marginTop: 9 }} />
    </div>
  </div>
);

const Buddy = ({ size = 180, tone = c.green }: { size?: number; tone?: string }) => (
  <div style={{ width: size, height: size, borderRadius: size * .34, background: tone, position: 'relative', boxShadow: '0 14px 26px rgba(34,37,44,.16)' }}>
    <span style={{ position: 'absolute', width: size * .09, height: size * .14, borderRadius: 99, background: c.ink, left: size * .3, top: size * .36 }} />
    <span style={{ position: 'absolute', width: size * .09, height: size * .14, borderRadius: 99, background: c.ink, right: size * .3, top: size * .36 }} />
    <span style={{ position: 'absolute', width: size * .32, height: size * .055, borderRadius: 99, background: c.peachStrong, left: size * .34, top: size * .68 }} />
  </div>
);

const EvidenceNote = ({ index, source, body, takeaway, background, rotate, style }: { index: string; source: string; body: string; takeaway: string; background: string; rotate: number; style?: CSSProperties }) => (
  <PaperCard rotate={rotate} background={background} style={{ padding: '28px 30px', width: 440, minHeight: 246, ...style }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <TypeLabel color={c.greenDark}>{index}</TypeLabel><span style={{ fontSize: 17, fontWeight: 700, color: c.muted }}>{source}</span>
    </div>
    <p style={{ margin: '24px 0 20px', fontSize: 25, lineHeight: 1.45, fontWeight: 600 }}>{body}</p>
    <div style={{ borderTop: `2px solid ${c.ink}`, paddingTop: 14, fontSize: 23, lineHeight: 1.35, fontWeight: 800 }}>{takeaway}</div>
  </PaperCard>
);

const TraitTag = ({ children, color, rotate, style }: { children: ReactNode; color: string; rotate: number; style?: CSSProperties }) => (
  <div style={{ position: 'absolute', background: color, padding: '16px 22px', fontSize: 24, fontWeight: 800, transform: `rotate(${rotate}deg)`, boxShadow: '0 10px 20px rgba(34,37,44,.15)', ...style }}>{children}</div>
);

const StoryFrame = ({ beat, title, note, rotate, children }: { beat: string; title: string; note: string; rotate: number; children: ReactNode }) => (
  <PaperCard rotate={rotate} style={{ width: 485, height: 500, padding: 22 }}>
    <div style={{ height: 296, background: c.greenLight, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>{children}</div>
    <div style={{ padding: '20px 8px 0' }}>
      <TypeLabel color={c.greenDark}>{beat}</TypeLabel>
      <div style={{ fontSize: 32, fontWeight: 800, marginTop: 10 }}>{title}</div>
      <div style={{ fontSize: 22, lineHeight: 1.45, color: c.muted, marginTop: 7 }}>{note}</div>
    </div>
  </PaperCard>
);

const Cover: Page = () => (
  <Canvas>
    <IndexLabel>NO. 01 / DIRECTION A</IndexLabel>
    <h1 style={{ margin: '8px 0 0 -10px', fontSize: 232, fontStyle: 'italic', fontWeight: 800, lineHeight: .88, letterSpacing: '-.09em', color: c.green }}>taps back!</h1>
    <div style={{ position: 'absolute', left: 230, bottom: 90, width: 430, height: 344 }}>
      <PaperCard rotate={-3} style={{ width: 380, height: 290, padding: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <MiniScreen /><Tape color={c.peach} width={130} rotate={4} style={{ left: 128, top: -18 }} />
      </PaperCard>
    </div>
    <div style={{ position: 'absolute', right: 150, bottom: 120, width: 640, height: 360 }}>
      <PaperCard rotate={3} style={{ width: 560, height: 318, padding: '42px 46px' }}>
        <TypeLabel color={c.greenDark}>THE BIG IDEA</TypeLabel>
        <p style={{ fontSize: 52, lineHeight: 1.1, fontWeight: 800, letterSpacing: '-.045em', margin: '28px 0 24px' }}>Your apps make you tap.<br />Airtap taps back.</p>
        <p style={{ fontSize: 26, lineHeight: 1.45, color: c.muted, margin: 0 }}>你不必每次都亲自点下去。</p>
        <Pin style={{ right: 34, top: 28 }} />
      </PaperCard>
      <Sticker color={c.green} rotate={-5} style={{ right: -12, top: 36 }}>AIRTAP IT</Sticker>
      <Spark style={{ left: -44, top: 74 }} />
    </div>
  </Canvas>
);

const Problem: Page = () => (
  <Canvas background={`repeating-linear-gradient(90deg,rgba(112,180,127,.055) 0,rgba(112,180,127,.055) 2px,transparent 2px,transparent 8px),${c.greenPale}`}>
    <IndexLabel>NO. 02 / THE TENSION</IndexLabel>
    <h2 style={{ margin: '18px 0 0', fontSize: 156, fontStyle: 'italic', fontWeight: 800, lineHeight: .92, letterSpacing: '-.075em' }}>still<br /><span style={{ color: c.greenDark }}>tapping?</span></h2>
    <p style={{ position: 'absolute', left: 102, bottom: 170, width: 620, fontSize: 34, lineHeight: 1.46, fontWeight: 650 }}>任务已经委托，<br />操作负担却又回到用户身上。</p>
    <Sticker color={c.yellow} rotate={-7} style={{ left: 535, top: 310 }}>FUN FACT</Sticker><Spark size={55} style={{ left: 496, top: 282 }} />
    <div style={{ position: 'absolute', right: 94, top: 126, width: 930, height: 790 }}>
      <PaperCard rotate={-4} style={{ position: 'absolute', left: 52, top: 38, width: 650, height: 222, padding: '30px 36px' }}>
        <TypeLabel color={c.greenDark}>01</TypeLabel><div style={{ fontSize: 34, fontWeight: 800, marginTop: 26 }}>先替助手想清楚怎么执行</div><Tape width={120} rotate={6} style={{ right: 55, top: -16 }} />
      </PaperCard>
      <PaperCard rotate={3} background={c.peach} style={{ position: 'absolute', right: 28, top: 270, width: 610, height: 222, padding: '30px 36px' }}>
        <TypeLabel>02</TypeLabel><div style={{ fontSize: 34, fontWeight: 800, marginTop: 26 }}>交出去之后，还得反复催促</div><Pin color={c.greenDark} style={{ left: 28, top: 22 }} />
      </PaperCard>
      <PaperCard rotate={-2} style={{ position: 'absolute', left: 20, bottom: 24, width: 690, height: 222, padding: '30px 36px' }}>
        <TypeLabel color={c.greenDark}>03</TypeLabel><div style={{ fontSize: 34, fontWeight: 800, marginTop: 26 }}>最后一步，仍要自己回来收尾</div><Sticker color={c.green} rotate={6} style={{ right: -100, bottom: 36 }}>又是我？</Sticker>
      </PaperCard>
    </div>
  </Canvas>
);

const Evidence: Page = () => (
  <Canvas>
    <IndexLabel>NO. 03 / PAIN BREAKDOWN</IndexLabel>
    <div style={{ position: 'absolute', left: 88, top: 128, width: 790, height: 810, background: `repeating-linear-gradient(42deg,${c.greenDark} 0,${c.greenDark} 3px,#2F6842 3px,#2F6842 9px)`, clipPath: 'polygon(4% 0,96% 2%,100% 92%,6% 100%,0 10%)' }}>
      <PaperCard rotate={-3} style={{ position: 'absolute', width: 520, height: 610, left: 134, top: 84, padding: '48px 42px' }}>
        <TypeLabel>THE PATTERN</TypeLabel>
        <h2 style={{ fontSize: 76, lineHeight: 1.03, fontWeight: 800, letterSpacing: '-.06em', margin: '42px 0 38px' }}>three ways<br />the handoff<br />comes back.</h2>
        <p style={{ fontSize: 26, lineHeight: 1.48, color: c.muted, margin: 0 }}>个体反馈用于识别痛点，不代表所有用户或竞品当前表现。</p>
        <Pin style={{ top: 24, right: 32 }} />
      </PaperCard>
      <Sticker color={c.blue} rotate={7} style={{ right: 18, top: 94 }}>USER SIGNALS</Sticker>
    </div>
    <div style={{ position: 'absolute', right: 72, top: 118, width: 870, height: 830 }}>
      <EvidenceNote index="01" source="Muse · Reddit" body="用户仍需替 AI 设计核心任务的执行方法。" takeaway="不只提需求，还要设计方法。" background={c.greenLight} rotate={2} style={{ position: 'absolute', left: 42, top: 26 }} />
      <EvidenceNote index="02" source="ChatGPT Agent · Reddit" body="处理中途停止，需要用户多次催促继续。" takeaway="委托之后，自己成了监督者。" background={c.peach} rotate={-3} style={{ position: 'absolute', right: 0, top: 306 }} />
      <EvidenceNote index="03" source="Muse · Business Insider" body="付款阶段超时，最后仍由作者回到电脑完成。" takeaway="做了大部分，不等于收好尾。" background={c.white} rotate={3} style={{ position: 'absolute', left: 18, bottom: 6 }} />
    </div>
  </Canvas>
);

const Deduction: Page = () => (
  <Canvas>
    <IndexLabel>NO. 04 / CONCEPT DEDUCTION</IndexLabel>
    <div style={{ marginTop: 58, width: 1660, fontSize: 114, fontWeight: 800, lineHeight: 1.02, letterSpacing: '-.065em' }}>
      任务可以 <span style={{ color: c.green }}>交出去，</span><br />操作不该 <span style={{ color: c.peachStrong }}>弹回来。</span><br />这次，让 Airtap <span style={{ color: c.green, fontStyle: 'italic' }}>接棒 :)</span>
    </div>
    <Sticker color={c.green} rotate={-4} style={{ left: 830, top: 262 }}>FUN FACT</Sticker><Spark size={54} style={{ left: 782, top: 246 }} />
    <PaperCard rotate={-2} style={{ position: 'absolute', right: 115, bottom: 90, width: 640, height: 216, padding: '34px 40px' }}>
      <TypeLabel color={c.greenDark}>OUR JUDGMENT</TypeLabel>
      <p style={{ fontSize: 30, lineHeight: 1.45, fontWeight: 700, margin: '22px 0 0' }}>不是再给你一个要管理的工具，<br />而是一个愿意接手操作的搭档。</p>
      <Tape color={c.bluePale} rotate={5} style={{ right: 70, top: -16 }} />
    </PaperCard>
  </Canvas>
);

const Naming: Page = () => (
  <Canvas background={`linear-gradient(90deg,${c.paper} 0 50%,${c.greenPale} 50% 100%)`}>
    <IndexLabel>NO. 05 / THE NAME</IndexLabel>
    <div style={{ position: 'absolute', left: 88, top: 150, width: 835, height: 700 }}>
      <div style={{ fontSize: 208, fontStyle: 'italic', fontWeight: 800, letterSpacing: '-.095em', lineHeight: .9 }}>tap.</div>
      <PaperCard rotate={-3} style={{ position: 'absolute', left: 60, bottom: 56, width: 600, height: 248, padding: '34px 38px' }}>
        <TypeLabel>THE FAMILIAR ACTION</TypeLabel><p style={{ fontSize: 33, lineHeight: 1.42, fontWeight: 700, margin: '26px 0 0' }}>点击、确认、继续。<br />原本都由用户完成。</p><Pin color={c.blue} style={{ right: 28, top: 22 }} />
      </PaperCard>
      <Sticker color={c.yellow} rotate={7} style={{ right: 46, top: 224 }}>YOU DO IT</Sticker>
    </div>
    <div style={{ position: 'absolute', right: 88, top: 144, width: 835, height: 714 }}>
      <div style={{ fontSize: 176, fontStyle: 'italic', fontWeight: 800, letterSpacing: '-.09em', lineHeight: .9, color: c.greenDark }}>taps<br />back!</div>
      <PaperCard rotate={3} style={{ position: 'absolute', right: 24, bottom: 32, width: 620, height: 260, padding: '34px 38px' }}>
        <TypeLabel color={c.greenDark}>THE RELATIONSHIP FLIPS</TypeLabel><p style={{ fontSize: 33, lineHeight: 1.42, fontWeight: 700, margin: '26px 0 0' }}>这次，是助手行动。<br />不是用户继续点。</p><Tape color={c.peach} width={140} rotate={-5} style={{ left: 170, top: -17 }} />
      </PaperCard>
      <Sticker color={c.green} rotate={-6} style={{ left: 0, top: 350 }}>AIRTAP DOES IT</Sticker>
    </div>
    <div style={{ position: 'absolute', left: 938, top: 484, fontSize: 70, fontWeight: 800 }}>→</div>
  </Canvas>
);

const Character: Page = () => (
  <Canvas>
    <IndexLabel>NO. 06 / BRAND CHARACTER</IndexLabel>
    <h2 style={{ margin: '14px 0 0', fontSize: 112, fontStyle: 'italic', fontWeight: 800, lineHeight: .95, letterSpacing: '-.075em', color: c.green }}>meet your<br />tap-back buddy.</h2>
    <div style={{ position: 'absolute', left: 86, bottom: 82, width: 960, height: 520 }}>
      <PaperCard rotate={-5} style={{ position: 'absolute', left: 44, top: 42, width: 310, height: 382, padding: 22 }}><div style={{ height: 286, background: c.greenLight, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Buddy size={184} /></div><div style={{ fontSize: 23, fontWeight: 800, textAlign: 'center', marginTop: 18 }}>懂你嫌麻烦</div><Pin style={{ right: 20, top: 18 }} /></PaperCard>
      <PaperCard rotate={4} style={{ position: 'absolute', left: 375, top: 10, width: 300, height: 370, padding: 22 }}><div style={{ height: 275, background: c.peach, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Buddy size={176} tone={c.white} /></div><div style={{ fontSize: 23, fontWeight: 800, textAlign: 'center', marginTop: 18 }}>真的会出手</div></PaperCard>
      <PaperCard rotate={-2} style={{ position: 'absolute', right: 10, top: 88, width: 290, height: 346, padding: 22 }}><div style={{ height: 248, background: c.bluePale, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><MiniScreen accent={c.green} /></div><div style={{ fontSize: 23, fontWeight: 800, textAlign: 'center', marginTop: 18 }}>进入界面接棒</div></PaperCard>
    </div>
    <div style={{ position: 'absolute', right: 70, top: 230, width: 770, height: 630 }}>
      <TraitTag color={c.green} rotate={-4} style={{ left: 60, top: 48 }}>机灵</TraitTag><TraitTag color={c.peach} rotate={5} style={{ right: 70, top: 138 }}>有行动力</TraitTag><TraitTag color={c.yellow} rotate={-3} style={{ left: 154, top: 250 }}>带一点幽默</TraitTag><TraitTag color={c.bluePale} rotate={4} style={{ right: 10, top: 370 }}>不抢生活的戏</TraitTag>
      <PaperCard rotate={-3} style={{ position: 'absolute', left: 96, bottom: 0, width: 560, height: 158, padding: '26px 30px' }}><TypeLabel color={c.greenDark}>EMOTIONAL SHIFT</TypeLabel><div style={{ fontSize: 29, fontWeight: 800, marginTop: 18 }}>“怎么又是我” → “这次有人替我出手”</div><Tape color={c.greenPale} width={120} rotate={6} style={{ right: 44, top: -16 }} /></PaperCard>
      <Spark size={52} style={{ left: 18, top: 350 }} />
    </div>
  </Canvas>
);

const Story: Page = () => (
  <Canvas background={`repeating-linear-gradient(0deg,rgba(136,174,234,.09) 0,rgba(136,174,234,.09) 2px,transparent 2px,transparent 10px),${c.bluePale}`}>
    <IndexLabel>NO. 07 / CORE STORY</IndexLabel>
    <h2 style={{ margin: '12px 0 0', fontSize: 100, fontStyle: 'italic', fontWeight: 800, lineHeight: .96, letterSpacing: '-.07em' }}>one message. <span style={{ color: c.greenDark }}>then life goes on.</span></h2>
    <Sticker color={c.yellow} rotate={4} style={{ right: 126, top: 132 }}>3 BEATS</Sticker>
    <div style={{ display: 'flex', gap: 50, marginTop: 64, justifyContent: 'center' }}>
      <StoryFrame beat="BEAT 01" title="被叫回屏幕" note="未完成的操作，把注意力又拉回来。" rotate={-2}><PhoneVisual rotate={6} accent={c.peachStrong} /><Sticker color={c.peach} rotate={-8} style={{ right: 18, top: 188 }}>again?</Sticker></StoryFrame>
      <StoryFrame beat="BEAT 02" title="有人接棒" note="一条消息交给 Airtap；它进入界面处理。" rotate={2}><PhoneVisual rotate={-5} /><div style={{ position: 'absolute', right: 46, top: 86 }}><Buddy size={128} /></div><Sticker color={c.green} rotate={7} style={{ right: 16, bottom: 24 }}>TAP</Sticker></StoryFrame>
      <StoryFrame beat="BEAT 03" title="回到生活" note="操作退到背景，注意力重新回到人。" rotate={-1}><div style={{ position: 'relative', width: 280, height: 220 }}><div style={{ position: 'absolute', width: 108, height: 108, borderRadius: 99, background: c.peach, left: 86, top: 0 }} /><div style={{ position: 'absolute', width: 218, height: 138, borderRadius: '90px 90px 24px 24px', background: c.green, left: 30, bottom: 0 }} /><div style={{ position: 'absolute', width: 128, height: 24, borderRadius: 20, background: c.ink, right: -20, bottom: 52, transform: 'rotate(-18deg)' }} /></div><Spark size={48} style={{ right: 50, top: 38 }} /></StoryFrame>
    </div>
  </Canvas>
);

const Closing: Page = () => (
  <Canvas>
    <IndexLabel>NO. 08 / VISUAL EXPRESSION</IndexLabel>
    <div style={{ position: 'absolute', right: 88, top: 50, fontSize: 202, fontStyle: 'italic', fontWeight: 800, lineHeight: .9, letterSpacing: '-.09em', color: c.green }}>taps back!</div>
    <div style={{ position: 'absolute', left: 150, top: 220, width: 670, height: 700 }}>
      <PaperCard rotate={-5} style={{ width: 540, height: 610, padding: 28 }}>
        <div style={{ height: 466, background: c.bluePale, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}><PhoneVisual rotate={-4} /><div style={{ position: 'absolute', right: 38, bottom: 54 }}><Buddy size={150} /></div><Sticker color={c.yellow} rotate={7} style={{ left: 28, top: 36 }}>ONE MESSAGE</Sticker></div>
        <div style={{ fontSize: 28, fontWeight: 800, textAlign: 'center', marginTop: 28 }}>Airtap enters the interface.</div><Pin style={{ right: 28, top: 22 }} />
      </PaperCard><Spark size={82} color={c.green} style={{ left: -84, bottom: 104 }} />
    </div>
    <div style={{ position: 'absolute', right: 110, top: 320, width: 830, height: 560 }}>
      <PaperCard rotate={2} style={{ width: 760, height: 430, padding: '46px 52px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '170px 1fr', rowGap: 22, alignItems: 'baseline' }}>
          <TypeLabel>ROLE</TypeLabel><div style={{ fontSize: 31, fontWeight: 800 }}>懂你嫌麻烦、会替你出手的搭档</div>
          <TypeLabel>MOVE</TypeLabel><div style={{ fontSize: 31, fontWeight: 800 }}>伸手 · 接棒 · 点击</div>
          <TypeLabel>FEELING</TypeLabel><div style={{ fontSize: 31, fontWeight: 800 }}>先解气，再轻松</div>
          <TypeLabel>SIGN-OFF</TypeLabel><div style={{ fontSize: 38, fontStyle: 'italic', fontWeight: 800, color: c.greenDark }}>Airtap taps back.</div>
        </div><Tape color={c.peach} width={150} rotate={-6} style={{ left: 280, top: -18 }} />
      </PaperCard>
      <Sticker color={c.green} rotate={-5} style={{ right: -4, bottom: 48 }}>BACK TO LIFE</Sticker>
      <p style={{ width: 700, fontSize: 20, lineHeight: 1.5, color: c.muted, margin: '40px 0 0' }}>创意与 IP 动作为示意；具体任务、授权及确认机制以产品验证为准。</p>
    </div>
  </Canvas>
);

export const meta: SlideMeta = { title: 'Airtap · Taps Back', createdAt: '2026-09-22T03:35:08.920Z' };
export default [Cover, Problem, Evidence, Deduction, Naming, Character, Story, Closing] satisfies Page[];
