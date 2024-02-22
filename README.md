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

Projects are based on modular architecture with drill down to separation of concern design principle.

The root off all projects have a ```nuxt.config.ts`` file. This is strictly reserved for TYPESCRIPT. The file can also be used to host environment viriables such as API Keys,

The default root component of the application is the ```app.vue``` file  

The nuxt folder is used by nuxt.js during development to generate the nuxt application adn you don't need to go exploring it or changing anything within that folder.

# Software Design Priciples

The projects keeps one core fundamental of software design principle of DRY. This is achieved via the layouts folder at the root of every directory. The inheritive aspect of code around projects emanates from this source.

#### Pages Directory

It hosts all respective prjoects components creating routes in parallelity.

# Running Project

You can run the projects locally by running the following command on the terminal:

    ```npm run dev```

