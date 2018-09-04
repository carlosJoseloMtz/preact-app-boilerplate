# preact-boiler-plate

# About

So this is a boiler plate based on my preferences so you may not like it..

## Content

* Sass - For pre processing CSS
* Gulp - For the processing of _Sass_, the reason of that is because I don't plan having the CSS within the components
* Preact - Yes! Not react :stuck_out_tongue_winking_eye:
* Webpack for building the JS code
* A couple of components and one single page just for testing

## Build it

```
npm install
npm run build:dev
```

## Tasks

* `build:dev` - Builds a non-crompressed version of the code
* `build:prod` - Builds a compressed version of the code

## TODO

* Service worker for pre-caching critical CSS
* Defining a non-critical wrapper for CSS so that we can lazy load it
* Page lazy loading
* Webpack dev server
