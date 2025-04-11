import React from 'react';
import './HeroBackground.css';

const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black">
      <div className="relative w-full h-full" style={{ perspective: '2000px', transformStyle: 'preserve-3d' }}>
        {/* Sun with enhanced 3D glow */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div
            className="w-screen h-screen rounded-full relative"
            style={{
              background: 'radial-gradient(circle, rgba(30,58,138,1) 0%, rgba(59,130,246,0.9) 30%, rgba(96,165,250,0.5) 60%, transparent 80%)',
              animation: 'sunRise 6s cubic-bezier(0.25, 0.8, 0.25, 1) forwards',
              transformOrigin: 'center center',
              boxShadow: '0 0 120px rgba(59,130,246,0.8), 0 0 300px rgba(96,165,250,0.5), inset 0 0 50px rgba(30,58,138,0.6)',
              transform: 'translateZ(-600px)',
              opacity: 0,
            }}
          >
            {/* Inner glow ring with more depth */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)',
                animation: 'pulseGlow 3.5s infinite alternate',
                transform: 'translateZ(150px)',
                boxShadow: '0 0 80px rgba(59,130,246,0.6)',
              }}
            />
          </div>
        </div>

        {/* Sky gradient with deeper 3D effect */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(15,23,42,0.95) 0%, rgba(30,58,138,0.5) 25%, rgba(0,0,0,0) 50%, rgba(30,58,138,0.5) 75%, rgba(15,23,42,0.95) 100%)',
            mixBlendMode: 'overlay',
            transform: 'translateZ(-450px)',
            boxShadow: 'inset 0 0 250px rgba(0,0,0,0.9)',
          }}
        />

        {/* Atmospheric haze with more realism */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.15) 0%, transparent 75%)',
            transform: 'translateZ(200px)',
            animation: 'hazeShift 25s infinite alternate',
            boxShadow: '0 0 150px rgba(59,130,246,0.2)',
          }}
        />

        {/* Cosmic dust with refined depth */}
        <div
          className="absolute inset-0"
          style={{
            background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            opacity: 0.04,
            mixBlendMode: 'screen',
            transform: 'translateZ(250px)',
            animation: 'dustFloat 35s infinite alternate',
          }}
        />
      </div>


    </div>
  );
};

export default HeroBackground;