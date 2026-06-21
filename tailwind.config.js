export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#090712',
        violetDeep: '#24113f',
        royal: '#6d3df5',
        electric: '#b455ff',
        gold: '#d8ad55',
        champagne: '#f2dfac',
        graphite: '#14121d',
      },
      boxShadow: {
        luxury: '0 24px 80px rgba(12, 8, 25, 0.45)',
        glow: '0 0 36px rgba(180, 85, 255, 0.35)',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at 20% 20%, rgba(180,85,255,.28), transparent 32%), radial-gradient(circle at 80% 10%, rgba(216,173,85,.22), transparent 28%), radial-gradient(circle at 50% 80%, rgba(109,61,245,.28), transparent 34%)',
      },
    },
  },
  plugins: [],
};
