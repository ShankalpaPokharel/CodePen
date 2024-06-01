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

backend
npm install express bcrypt cors dotenv passport passport-google-oauth20 passport-facebook passport-github mongoose cookie-parser express-session jsonwebtoken







Frontend

npm install react-syntax-highlighter prismjs

we can't implement z-index in static change it in realtive

apply overflow in parent div

import { Transition } from '@headlessui/react';

npm i react-resizable-panels

npm install @uiw/react-codemirror
npm install @uiw/codemirror-theme-github
npm install @uiw/codemirror-extensions-langs

npm install react-router-dom
npm i axios

npm install react-redux
npm install @reduxjs/toolkit

npm install js-cookie

npm i react-toastify

npm install react-hook-form

npm i @hookform/resolvers

npm i joi


can use in future: 
[Warn Users When Leaving a Page in React with beforeunload](https://youtu.be/K8YShjU5PBQ)








what kind of waring this : 
chunk-4JVUYMCH.js?v=01321cfb:521 Warning: Received `true` for a non-boolean attribute `text-base`.

If you want to write it to the DOM, pass a string instead: text-base="true" or text-base={value.toString()}.
    at span
    at div
    at div
    at li
    at ul
    at div
    at div
    at ImageSlider (http://localhost:5173/src/components/ImageSlider.jsx:23:43)


when you forget to use curly braces or quotes properly around class names.

```jsx
// problem code
<span className={`mr-2 ${selectedList === item.id ? '-rotate-90':''} `} text-base ><TiArrowSortedDown /></span>
// corrected version
<span className={`mr-2 ${selectedList === item.id ? '-rotate-90' : ''} text-base`}><TiArrowSortedDown /></span>


```jsx


one problem took my morning 
in app.jsx i save the user in redux , but immidetily send the router provide and try to access the set user value from protected route(there was login in there is no user redirect in to the landing page, tried to debug and when do console show the user when colsole but when add in useeffet didn't show cause, backend response take time but i immediately render the component )

 ```{isLoading ? <div>Loading......</div> :  <RouterProvider router={router} />}```

