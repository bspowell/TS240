interface UserData {
  name: string
  address: String
}

type newData = Omit<UserData, ''>

function getKey(arg: UserData, arg2: keyof UserData): void {
  console.log(arg[arg2])
}


let newObj: newData = {
  name: 'juim',
  address: '123'
}

getKey(newObj, 'name')

