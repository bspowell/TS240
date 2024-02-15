// type Key = {}
// type Value = {}


interface KeyValuePair<Key, Value> {
  key: Key;
  value: Value;
}

let example: KeyValuePair<string, number>= {
  key: 'string',
  value: 9
}