# Exercise App Front End

## To run and do tests
Development: npm run dev
Testing: npm run test

## Basic App Descripton
The app is designed to help people with autism to monitor their exercise routines
When users register, they go through series of questionnaire steps to set up their exercise profile. Then they can track and monitor their own exercise routine using a basic calendar.

## App design
### `app/layout.tsx`
`app/layout.tsx` contains the `<Navbar />`, `<main>{children}</main>`, `<Footer />` components that can be used throughout the app.

#### `app/components/Navbar.tsx`
The navbar contains the menus 'home', 'about', 'workout', 'language'. It also contains a dropdown menu for the register/login redirects

### `app/page.tsx`
`app/page.tsx` is the landing page. It promotes the app. It also contains a login and register button at the bottom of the page to redirect to the login or registration pages.