/**
 * Synthesized audio effects using Web Audio API.
 * No external audio file dependencies — all sounds are generated programmatically.
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    audioCtx = new AudioContext();
  }
  // Resume if suspended (e.g., user interaction required first)
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Short tap click — used when selecting modifiers or segmented options.
 * A crisp, subtle tick at 3000Hz for ~30ms.
 */
export function playTick() {
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = "sine";
    osc.frequency.setValueAtTime(3000, ctx.currentTime);
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.03);
  } catch {
    // Audio not available — fail silently
  }
}

/**
 * Satisfying "pop" chime — used when adding an item to cart.
 * Two-tone harmonic: a lower body note + higher overtone.
 */
export function playPop() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    
    // Body tone
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(880, now);
    osc1.frequency.exponentialRampToValueAtTime(1200, now + 0.06);
    gain1.gain.setValueAtTime(0.12, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.12);
    
    // Overtone sparkle
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = "sine";
    osc2.frequency.setValueAtTime(1760, now);
    gain2.gain.setValueAtTime(0.06, now);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now);
    osc2.stop(now + 0.08);
  } catch {
    // Audio not available — fail silently
  }
}

/**
 * Success chime — used when an order is successfully placed.
 * A warm ascending two-note phrase (C5 → E5).
 */
export function playSuccess() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    
    const notes = [523.25, 659.25]; // C5, E5
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + i * 0.12);
      gain.gain.setValueAtTime(0, now + i * 0.12);
      gain.gain.linearRampToValueAtTime(0.15, now + i * 0.12 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + i * 0.12);
      osc.stop(now + i * 0.12 + 0.25);
    });
  } catch {
    // Audio not available — fail silently
  }
}

/**
 * Kitchen bell — used when a new order arrives on barista/waiter station.
 * A clear metallic bell tone with harmonic overtones.
 */
export function playBell() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    
    const frequencies = [830, 1660, 2490]; // Fundamental + harmonics
    const gains = [0.2, 0.1, 0.05];
    
    frequencies.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(gains[i], now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.8);
    });
  } catch {
    // Audio not available — fail silently
  }
}
