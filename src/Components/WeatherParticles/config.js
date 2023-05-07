const particleConfig = {
  number: {
    density: {
      enable: true,
      area: 1500,
    },
    value: 100,
  },
  opacity: {
    value: 0.8,
  },
};

export const heatConfig = {
  background: {
    image: 'radial-gradient(#4A0000, #000)',
  },
  particles: {
    ...particleConfig,
    color: {
      value: '#fcad03',
    },
    size: {
      value: { min: 1, max: 5 },
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'right',
      straight: false,
    },
  },
};

export const snowConfig = {
  background: {
    image: 'radial-gradient(#00004A, #000)',
  },
  particles: {
    ...particleConfig,
    color: {
      value: '#ffffff',
    },
    size: {
      value: { min: 1, max: 5 },
    },
    move: {
      enable: true,
      speed: 2,
      direction: 'bottom',
      straight: false,
    },
  },
};

export const rainConfig = {
  background: {
    image: 'radial-gradient(#00004A, #000)',
  },
  particles: {
    ...particleConfig,
    color: {
      value: '#33b2f2',
    },
    size: {
      value: { min: 1, max: 3 },
    },
    move: {
      enable: true,
      speed: 6,
      direction: 'bottom',
      straight: true,
    },
  },
};

export const baseConfig = {
  fpsLimit: 60,
}
