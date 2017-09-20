# What is Redux?

### JavaScript library used to manage an application's front end state.

## Why does Redux exist?

### Because state dismanagement leads to bugs, redux is a better way to manage state, to make the state more predictable.

1. Shared State: we can tell Redux exactly which components need which data instead of...
  - Usually have to hoist that state up to the nearest parent component, but what if the nearest parent component is 3 or 4 components up the component tree?
  - We would need to pass the data down in these props 3 or 4 layers to the components, some of these components may not even need this data.
  - Organizes data and gives the ability to quickly access data from anywhere in the app.
2. Caching:
  - Easier to cache API calls and expensive operations.

### Three Principles

- The Store: A Single Source of Truth: The store contains an application's global state, all held in a single object tree (makes debugging and inspection easier)
- State in a Redux app is READ-ONLY (immutable), React components cannot write directly to Redux state, but rather they express intent to update the state.
- Only pure functions called `reducers` have the ability to change state.

### Redux acccomodates the follow and more:
- Server responses
- Cached data
- local data not yet persisted to a Server

- Active routes
- Current-selected tabs
- Pagination controls

