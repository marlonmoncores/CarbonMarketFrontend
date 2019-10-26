const parseQRError = error => {
  if (error.name === 'NotAllowedError') {
    return 'ERROR: you need to grant camera access permisson'
  } else if (error.name === 'NotFoundError') {
    return 'ERROR: no camera on this device'
  } else if (error.name === 'NotSupportedError') {
    return 'ERROR: secure context required (HTTPS, localhost)'
  } else if (error.name === 'NotReadableError') {
    return 'ERROR: is the camera already in use?'
  } else if (error.name === 'OverconstrainedError') {
    return 'ERROR: installed cameras are not suitable'
  } else if (error.name === 'StreamApiNotSupportedError') {
    return 'ERROR: Stream API is not supported in this browser'
  } else {
    return error.message
  }
}

const wait = (time = 500) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), time)
  })
}

export { parseQRError, wait }
