async function fakeTiming() {
  return new Promise(function (resolve, _reject) {
    return setTimeout(resolve, Math.random() * 3000)
  })
}

export { fakeTiming }
