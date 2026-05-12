import audioWaveformIcon from 'lucide-static/icons/audio-waveform.svg?raw';
import babyIcon from 'lucide-static/icons/baby.svg?raw';
import caravanIcon from 'lucide-static/icons/caravan.svg?raw';
import dogIcon from 'lucide-static/icons/dog.svg?raw';
import kayakIcon from 'lucide-static/icons/kayak.svg?raw';

export const lifeBits = [
  { label: 'Father of two', icon: babyIcon },
  { label: 'Dog owner — Tara, adopted from a shelter', icon: dogIcon },
  { label: 'Campervan traveler when schedules allow', icon: caravanIcon },
  { label: 'Black metal and harsh noise — clears my brain', icon: audioWaveformIcon },
  { label: 'Canoeing when the weather cooperates', icon: kayakIcon },
] as const;
