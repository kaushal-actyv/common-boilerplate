import { persist, createStore } from "easy-peasy";
import sampleFormModel from "./containers/SampleForm/model";

const store = createStore(
  persist(
    sampleFormModel, // to keep the code clean, the model has been defined in model.js file
    {
      // list of middleware that will be applied to data prior to persist.
      // they get run left to right
      // this emulates the behaviour of "transforms" by redux-persis
      persistMiddleware: [(key, data) => data],
      // list of middleware that will be applied to data prior to rehydration.
      // they get run left to right
      // this emulates the behaviour of "transforms" by redux-persis
      rehydrateMiddleware: [(key, data) => data],
      // isolate the data keys to persist via...
      whitelist: ["counter"],
      // set data keys to be ignore skipped...
      blacklist: ["todos"],
      // specify a custom storage engine
      // we will have built in ones for sessionStorage and localStorage
      // default is localStorage
      storage: localStorage,
      // specify a strategy to be used for rehydration
      rehydrateStrategy: "overwrite", // or 'merge' or 'mergeDeep'
      allow: ["todos"],
    }
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
