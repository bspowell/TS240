function logUnknown(param: unknown):void {
  if (typeof param === 'string') {
    console.log('its a string')
  }
}