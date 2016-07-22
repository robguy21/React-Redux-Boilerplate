# Boilerplate For Projects With Gulp, React, React-Redux, Pug, Webpack, BrowserSync, and HMR

### This is simply an expansion of the good people over at fixate's boilerplate, if you don't need redux and you aren't writing a medium-large scale application rather use their boilerplate

Gulp Tasks are managed in `gulp/tasks`.

Gulp builds assets to `dist/` which BrowserSync serves.

## Getting Started

```shell
$ npm install
$ gulp
```

## Principles

This boilerplate was created with the sole purpose of creating a completely pure large-scale application with react and redux.

## Structure

```
| globals.js   // any global variables you may want to use throughout your application
| index.jsx    // mount point + Provider/Router injection
| -- app/                   // Folder containing your app-level components                   
|   |-- App.jsx   // Inject your components here, this is your top-level container
|   |-- Routes.js
| -- components/
    |-- Header.js
    |-- Footer.js
    |-- Navigation.js
| -- routes/
    |-- Counter/
       |-- actions/
       |-- reducers/
       |-- Counter.js
       |-- CounterRoute.js
    |-- Lost/                 // Our 404 component
       |-- Lost.js
       |-- LostRoute.js
    |-- RouteName/
       |-- actions/
       |-- reducers/
       |-- components/
       |-- routes/
       |-- Route.js
       |-- RouteNameRoute.js
| -- store/
    |-- store.js

```

## Testing

```
// testem sometimes crashes in normal mode so...

testem ci
```

#### Test Structure

##### REDUCERS
```
test('REDUCER_NAME reducer ACTION_NAME', reducerTest(
  reducer,
  stateBefore,
  action,
  stateAfter[,
  'description']
))
```

##### ACTIONS
```
test('GROUP_NAME action ACTION_NAME', actionTest(
  actionCreator,
  action[,
  'description']
))

// for actions which accept arguments
test('GROUP_NAME action ACTION_NAME', actionTest(
  actionCreator.bind(null, argument),
  action[,
  'description']
))
```


### TODO

* Add unit tests to react components
* Rewrite tests using ONLY tape, tape-redux seems to be unmaintained currently.
* Update README folder structure to show spec files
* Remove todo/counter and add them to either examples/ or another repo

### License

None