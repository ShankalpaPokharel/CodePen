backend
npm init

frontend

npm create vite@latest .
npm install
tailwind configuration

font configuration

```jsx
/* open sans */
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

/* lato  */
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components{
  .container{
    @apply sm:px-2 max-w-[1200px]
  }
}

```

```jsx
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                lato: ["Lato", ...defaultTheme.fontFamily.sans],
                opensans: ["Open Sans", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
```

## How to use cookies basic
```jsx
const response = await axios.get('http://localhost:3000/protected',{
  withCredentials: true // Ensure cookies are sent with the request
});

//backend
const corsOptions = {
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true // Allow cookies to be sent
};
app.use(cors(corsOptions));

const token = req.cookies.jwt;
console.log("backend got token" , token)

res.cookie('jwt', token)
res.redirect(`http://localhost:5173/protected`)

```


npm install react-syntax-highlighter prismjs

we can't implement z-index in static change it in realtive

apply overflow in parent div

import { Transition } from '@headlessui/react';

npm i react-resizable-panels

npm install @uiw/react-codemirror
npm install @uiw/codemirror-theme-github
npm install @uiw/codemirror-extensions-langs

Things to do:
color setup
install react router dom
make componet normal component and common componet
