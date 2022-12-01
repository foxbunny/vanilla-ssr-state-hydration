# Vanilla SSR state hydration examples

This repository contains examples of "state hydration" vanilla SSR with NodeJS.

Each example is accompanied with its own README.md file that explains the 
details.

# Running the examples

The examples should run with most versions of NodeJS, but they are specifically
tested with the version 18 LTS.

To run the examples, simply run the `server.js` in the individual folders.

After accessing the page, open the console to see the hydrated state.

# What is state hydration?

This is a term used by VDOM frameworks that support server-side rendering, 
such as React and VueJS. Because most VDOM frameworks drive DOM changes 
indirectly using state-change as a signal, they need to 'hydrate' the 
client-side state storage once the server-rendered content is delivered to 
the browser.

Vanilla implementations technically do not need this feature as they do not 
rely on state to drive the UI changes.

So what's the point of this repository then? Even though state hydration is not
strictly needed, there are times when it is useful to create a client-side copy
of the data to speed up some operations or the other.

