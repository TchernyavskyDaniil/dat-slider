// DOMAIN FOR DEBUG

// import { createDomain as domain } from 'effector';
// import { attachLogger } from 'effector-logger/attach';
//
// export * from 'effector';
// const rootDomain = domain('root');
//
// const states = {};
// rootDomain.onCreateStore(store => {
//   if (!store.sid) return;
//   if (store.sid in states) {
//     // @ts-ignore
//     const { defaultState, actual } = states[store.sid];
//
//     if (store.defaultState === defaultState) {
//       store.setState(actual);
//     } else {
//       // @ts-ignore
//       states[store.sid] = {
//         defaultState: store.defaultState,
//         actual: store.getState(),
//       };
//     }
//   } else {
//     // @ts-ignore
//     states[store.sid] = {
//       defaultState: store.defaultState,
//       actual: store.getState(),
//     };
//   }
//   store.updates.watch(value => {
//     // @ts-ignore
//     states[store.sid].actual = value;
//   });
// });
//
// const createDomain = rootDomain.domain;
// const createEffect = rootDomain.effect;
// const createEvent = rootDomain.event;
// const createStore = rootDomain.store;
//
// attachLogger(rootDomain);
//
// export { createDomain, createEffect, createEvent, createStore, rootDomain as root };
