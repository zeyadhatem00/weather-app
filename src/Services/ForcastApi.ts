export async function getForcast(city = "cairo") {
  let req = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=ec203ec3c2844bf9b4e173919262810&q=${city}&days=7`,
  );

  let res = await req.json();
  if (!req.ok) {
    return null;
  }
  return res;
}
