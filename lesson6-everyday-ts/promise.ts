async function getData(url: string): Promise<void> {
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (response.ok) {
      console.log(data);
    }
  } catch(e: unknown) {
    if (e instanceof Error) {
      console.error(e)
    } else {
      console.log('I dont know the error')
    }
  }

}