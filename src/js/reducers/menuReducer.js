export default function reducer(state={
    collapsed: true
  }, action) {

  switch (action.type) {
    case "TOGGLE_MENU": {
      return {collapsed: !state.collapsed}
    }
  }

  return state
}
