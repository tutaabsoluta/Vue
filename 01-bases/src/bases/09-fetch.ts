

// const apiKey = process.env.GIPHY_SECRET_KEY;
const apiKey = process.env.GIPHY_SECRET_KEY;
const url = `https://api.giphy.com/v1/randomid?api_key=${apiKey}`;

fetch(url)
    .then((res) => res.json())
    .then(({ data }) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })

