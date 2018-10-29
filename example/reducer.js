function counter(state, action) {
  if (action.type == 'INCREAMENT') {
    return state ? state + 1 : 1
  }
}


function dcounter(state, action) {
  if (action.type == 'DE') {
    return state ? state - 1 : 1
  }
}

export {
  counter,
  dcounter
}