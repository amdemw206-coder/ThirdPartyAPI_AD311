async function getCats() {
  const url = " https://api.thecatapi.com/v1/images/search";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    catImage = result[0].url
    console.log("Your Random Cat Image, Sir:", catImage);
  }
    catch (error) {
    console.error(error.message);
  }
}

console.log(getCats())