function short(param) {
    param !== '' && param !== undefined && console.log('Input is defined and not empty');
}
// short('stringy')
short('');
short(undefined);
