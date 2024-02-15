type Device = {
  manufacturer: string;
  model: string;
  year: number;
}

let computer: Device = { 
  manufacturer: 'Apple',
  model: 'Vision Pro',
  year: 2024
}

function deviceCheck (device: Device): void {
  console.log('that is a device')
}

deviceCheck(computer)
