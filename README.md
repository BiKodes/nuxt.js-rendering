# Nuxt

Nuxt's goal is to make web development intuitive and performant.

This is a framework built on Vue.js  


# Why Nuxt?.

    - Universal rendering
    - Better for Search Engine Optimization
    - Faster browser loadning times
    - Still get all the benefits of an SPA
    - Auto-creation of routes for respective components
    - Auto import feature without manually importing anything

# Project Architecture

Projects are based on modular architecture with drill down to separation of concern 
design principle.

The root off all projects have a ```nuxt.config.ts`` file. This is strictly reserved for 
TYPESCRIPT. The file can also be used to host environment viriables such as API Keys,

The default root component of the application is the ```app.vue``` file  

The nuxt folder is used by nuxt.js during development to generate the nuxt application adn 
you don't need to go exploring it or changing anything within that folder.

# Software Design Priciples

The projects keeps one core fundamental of software design principle of DRY. This is achieved 
via the layouts folder at the root of every directory. The inheritive aspect of code around 
projects emanates from this source.

#### Pages Directory

It hosts all respective prjoects components creating routes in parallelity.

# Project Data

The projects data is majorly sourced from ```fakestoreapi.com``` as it can be used with any 
type of shopping project that needs products, carts, and users in JSON format.

# Running Project

You can run the projects locally by running the following command on the terminal:

    ```npm run dev```

# Server Routes

Nuxt's server is Nitro. It was originally created for but can also be used on its own. 
It gives Nuxt superpowers:

    - Full control of the server-side
    - Universal deployment
    - Hybrid rendering

This allows Nuxt to make server side routes or API endpoints for the application.
If you need to use sensitive data such as private key that you don't want to expose to the 
user on the front-end, thus we can have a server route for that or have an authentication 
system in place and you will need endpoints for that. 

Basically, any code you don't want to expose on the frontend would use a server route form
