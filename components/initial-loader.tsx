"use client"

import React, { useEffect, useRef, useState } from "react"

export function InitialLoader() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [phase, setPhase] = useState<'loading' | 'logo' | 'hidden'>('loading')
  const [showContainer, setShowContainer] = useState(true)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    // Setup sizing
    let W = 0, H = 0, cx = 0, cy = 0
    function resize() {
      if (!canvas) return
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
      cx = W * 0.5
      cy = H * 0.5
    }
    resize()
    window.addEventListener('resize', resize)

    // Particle logic verbatim
    class Particle {
      side: string; x!: number; y!: number; vx!: number; vy!: number;
      life!: number; decay!: number; size!: number;
      r!: number; g!: number; b!: number;
      stopX!: number; stopped!: boolean;

      constructor(side: string) { this.side = side; this.reset(true); }
      reset(init: boolean) {
        const s = this.side;
        this.x = s === 'fire' ? -60 : W + 60;
        this.y = cy + (Math.random() - .5) * H * .12;
        const spd = 4 + Math.random() * 4;
        const ang = (Math.random() - .5) * .32;
        this.vx = s === 'fire' ?  spd * Math.cos(ang) : -spd * Math.cos(ang);
        this.vy = spd * Math.sin(ang) + (Math.random() - .5) * .8;
        this.life  = 1;
        this.decay = .008 + Math.random() * .012;
        this.size  = 2 + Math.random() * 5;
        if (s === 'fire') {
          const t = Math.random();
          this.r = 255;
          this.g = Math.round(80  + t * 175);
          this.b = Math.round(t * 60);
        } else {
          const t = Math.random();
          this.r = Math.round(t * 180);
          this.g = Math.round(180 + t * 75);
          this.b = 255;
        }
        this.stopX = s === 'fire'
          ? cx - W * .04 - Math.random() * W * .06
          : cx + W * .04 + Math.random() * W * .06;
        this.stopped = false;
        if (init) {
          const frac = Math.random();
          this.x = s === 'fire'
            ? -60 + frac * (this.stopX + 60)
            : W + 60 - frac * (W + 60 - this.stopX);
        }
      }
      update() {
        if (!this.stopped) {
          this.x += this.vx;
          this.y += this.vy;
          this.vy += (Math.random() - .5) * .15;
          const arrived = this.side === 'fire' ? this.x >= this.stopX : this.x <= this.stopX;
          if (arrived) { this.stopped = true; this.vx *= .05; }
        } else {
          this.vx *= .92;
          this.vy += (Math.random() - .5) * .4;
          this.y  += this.vy;
          this.x  += this.vx;
          this.life -= this.decay;
        }
        if (this.life <= 0) this.reset(false);
      }
      draw() {
        const a = this.stopped ? this.life : Math.min(1, this.life * 2);
        ctx.globalCompositeOperation = 'screen';
        const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2.5);
        g.addColorStop(0,   `rgba(${this.r},${this.g},${this.b},${(a * .9).toFixed(2)})`);
        g.addColorStop(.5,  `rgba(${this.r},${this.g},${this.b},${(a * .4).toFixed(2)})`);
        g.addColorStop(1,   `rgba(${this.r},${this.g},${this.b},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class Spark {
      x!: number; y!: number; vx!: number; vy!: number;
      life!: number; decay!: number; size!: number; fire!: boolean;
      constructor() { this.reset(); }
      reset() {
        const ang = Math.random() * Math.PI * 2;
        const spd = 2 + Math.random() * 5;
        this.x  = cx + (Math.random() - .5) * W * .07;
        this.y  = cy + (Math.random() - .5) * H * .07;
        this.vx = Math.cos(ang) * spd;
        this.vy = Math.sin(ang) * spd - 2;
        this.life  = 1;
        this.decay = .02 + Math.random() * .035;
        this.size  = .8 + Math.random() * 2;
        this.fire  = Math.random() > .5;
      }
      update() {
        this.x  += this.vx;
        this.y  += this.vy;
        this.vy += .12;
        this.vx *= .98;
        this.life -= this.decay;
        if (this.life <= 0) this.reset();
      }
      draw() {
        const a = this.life;
        const [r, g, b] = this.fire ? [255, 180, 40] : [80, 220, 255];
        ctx.globalCompositeOperation = 'screen';
        ctx.fillStyle = `rgba(${r},${g},${b},${a.toFixed(2)})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const FIRE_COUNT = 220, ICE_COUNT = 220, SPARK_COUNT = 60;
    const fireParticles = Array.from({ length: FIRE_COUNT }, () => new Particle('fire'));
    const iceParticles  = Array.from({ length: ICE_COUNT  }, () => new Particle('ice'));
    const sparks        = Array.from({ length: SPARK_COUNT }, () => new Spark());

    function drawBeamGlow(side: string, power: number) {
      const x = side === 'fire' ? W * .02 : W * .98;
      const g = ctx.createRadialGradient(x, cy, 0, x, cy, W * .35);
      if (side === 'fire') {
        g.addColorStop(0,   `rgba(255,120,20,${(power*.35).toFixed(2)})`);
        g.addColorStop(.4,  `rgba(220,60,10,${(power*.15).toFixed(2)})`);
        g.addColorStop(1,   'rgba(255,30,0,0)');
      } else {
        g.addColorStop(0,   `rgba(30,180,255,${(power*.35).toFixed(2)})`);
        g.addColorStop(.4,  `rgba(0,120,220,${(power*.15).toFixed(2)})`);
        g.addColorStop(1,   'rgba(0,60,255,0)');
      }
      ctx.globalCompositeOperation = 'screen';
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
    }

    function drawCollision(t: number) {
      const pulse = .75 + .25 * Math.sin(t * .012);
      const aura = ctx.createRadialGradient(cx, cy, 0, cx, cy, W * .22);
      aura.addColorStop(0,   `rgba(255,255,255,${(.55*pulse).toFixed(2)})`);
      aura.addColorStop(.2,  `rgba(255,220,120,${(.3*pulse).toFixed(2)})`);
      aura.addColorStop(.5,  `rgba(80,160,255,${(.2*pulse).toFixed(2)})`);
      aura.addColorStop(1,   'rgba(0,0,0,0)');
      ctx.globalCompositeOperation = 'screen';
      ctx.fillStyle = aura;
      ctx.fillRect(0, 0, W, H);
      const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, W * .06 * pulse);
      core.addColorStop(0,  `rgba(255,255,255,${(.95*pulse).toFixed(2)})`);
      core.addColorStop(.4, `rgba(255,240,200,${(.6*pulse).toFixed(2)})`);
      core.addColorStop(1,  'rgba(255,200,100,0)');
      ctx.fillStyle = core;
      ctx.beginPath();
      ctx.arc(cx, cy, W * .06 * pulse, 0, Math.PI * 2);
      ctx.fill();
    }

    function drawBackground() {
      ctx.globalCompositeOperation = 'source-over';
      const bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(W, H) * .9);
      bg.addColorStop(0,  '#0d1228');
      bg.addColorStop(.5, '#070c1a');
      bg.addColorStop(1,  '#020408');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      ctx.globalCompositeOperation = 'screen';
      for (let i = 0; i < 60; i++) {
        const tx = (Math.sin(i * 127.1) * .5 + .5) * W;
        const ty = (Math.cos(i * 311.7) * .5 + .5) * H;
        const ta = .03 + (Math.sin(i) * .5 + .5) * .04;
        ctx.fillStyle = `rgba(160,180,255,${ta.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(tx, ty, .8 + Math.random() * .4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    let startT: number | null = null;
    let reqId: number;

    function loop(ts: number) {
      if (!startT) startT = ts;
      const t = ts - startT;

      drawBackground();
      drawBeamGlow('fire', 1);
      drawBeamGlow('ice',  1);

      fireParticles.forEach(p => { p.update(); p.draw(); });
      iceParticles.forEach( p => { p.update(); p.draw(); });
      sparks.forEach(       s => { s.update(); s.draw(); });

      drawCollision(t);

      reqId = requestAnimationFrame(loop);
    }
    reqId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(reqId)
    }
  }, [])

  useEffect(() => {
    const t1 = setTimeout(() => {
      setPhase('logo')
    }, 1500)

    const t2 = setTimeout(() => {
      setPhase('hidden')
    }, 3000)

    const t3 = setTimeout(() => {
      setShowContainer(false)
    }, 3800)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  // Hide scrollbar while loading
  useEffect(() => {
    if (showContainer) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    }
  }, [showContainer])

  if (!showContainer) return null;

  return (
    <div className="fixed inset-0 z-[9999]" style={{ pointerEvents: phase === 'hidden' ? 'none' : 'auto' }}>
      <style>{`
        .init-loader { position: absolute; inset: 0; z-index: 9999; transition: opacity 1.6s cubic-bezier(.4,0,.2,1); }
        .init-loader.out { opacity: 0; pointer-events: none; }
        .init-loader canvas { display: block; width: 100%; height: 100%; pointer-events: none; }

        .logo-screen {
          position: absolute; inset: 0; z-index: 9998;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          background: #040612; opacity: 0; transition: opacity 1.2s ease;
          pointer-events: none;
        }
        .logo-screen.show { opacity: 1; pointer-events: auto; }
        .logo-screen.hidden { opacity: 0; transition: opacity 0.8s ease; pointer-events: none; }

        .logo-ring {
          width: 120px; height: 120px; border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.15); display: flex; align-items: center; justify-content: center;
          position: relative; animation: ringPulse 3s ease-in-out infinite;
        }
        .logo-ring::before {
          content: ''; position: absolute; inset: -8px; border-radius: 50%;
          border: 1px solid rgba(120,200,255,0.2); animation: ringPulse 3s ease-in-out infinite reverse;
        }
        @keyframes ringPulse {
          0%,100% { box-shadow: 0 0 20px rgba(100,160,255,.3), 0 0 60px rgba(100,160,255,.1); }
          50%      { box-shadow: 0 0 40px rgba(255,140,60,.4),  0 0 80px rgba(255,140,60,.15); }
        }

        .logo-initials {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 38px; font-weight: 200;
          letter-spacing: 6px; color: #fff; text-shadow: 0 0 30px rgba(255,200,100,.6), 0 0 60px rgba(100,180,255,.4);
        }
        .logo-name {
          margin-top: 22px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 13px; letter-spacing: 8px; color: rgba(255,255,255,0.55); text-transform: uppercase;
        }
        .logo-line {
          width: 60px; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          margin: 16px 0 0; animation: lineGrow 1.5s ease forwards;
        }
        @keyframes lineGrow { from{width:0;opacity:0} to{width:60px;opacity:1} }
      `}</style>
      
      {/* Base Canvas */}
      <div className={`init-loader ${phase !== 'loading' ? 'out' : ''}`}>
        <canvas ref={canvasRef} />
      </div>

      {/* Logo Overlay */}
      <div className={`logo-screen ${phase === 'logo' ? 'show' : phase === 'hidden' ? 'hidden' : ''}`}>
        <div className="logo-ring">
          <div className="logo-initials">JP</div>
        </div>
        <div className="logo-name">Jalak Palan</div>
        <div className="logo-line"></div>
      </div>
    </div>
  )
}
