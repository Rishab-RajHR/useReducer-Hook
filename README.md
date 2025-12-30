useReducer is a React Hook used for complex state management.

It is an alternative to useState when state logic becomes hard to manage.

State updates are handled using a reducer function.

A reducer takes (state, action) and returns a new state.

Commonly used when state depends on previous values.

Helps keep logic predictable and centralized.

Actions are plain objects with a type and optional payload.

Ideal for forms, counters, and state with multiple transitions.

Improves code readability and debugging.

Works well with React Context for global state.
