List of things need to be installed for this project.

-- Next js
npx create-next-app@latest your-app-name

-- config tailwind (postcss.config.mjs)
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;

-- headless ui, hero icons
npm install @headlessui/react @heroicons/react

-- font awesome
npm i --save @fortawesome/react-fontawesome@latest
npm i --save @fortawesome/fontawesome-svg-core

-- Calender
npm install react-calendar

