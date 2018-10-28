function exampleone() {
  var count = function (state, action) {
    if (action.type === 'INCREMENT') {
      return state ? state + 1 : 1
    }
  }

  var reducers = combineReducers({
    count: count
  })

  var store = createStore(reducers)

  document.querySelector('.button-1')
    .addEventListener('click', function () {
      store.dispatch({ type: 'INCREMENT' })
    })

  store.subscribe(function () {
    var state = store.getState()
    document.querySelector('.example-1').innerHTML = state.count
  })
}

exampleone()


var t1 = `function test(){
  return 100
}

console.log(test())`


eval(t1)