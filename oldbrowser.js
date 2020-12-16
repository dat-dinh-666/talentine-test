function IEdetection() {
  const ua = window.navigator.userAgent
  const msie = ua.indexOf('MSIE ')
  if (msie > 0) {
    // IE 10 or older, return version number
    return 'IE ' + parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10)
  }
  const trident = ua.indexOf('Trident/')
  if (trident > 0) {
    // IE 11, return version number
    const rv = ua.indexOf('rv:')
    return 'IE ' + parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10)
  }

  // User uses other browser
  return 'Not IE'
}
const result = IEdetection()
if (result !== 'Not IE') {
  window.location.href('/ie.html')
}
