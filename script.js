document.getElementById("getRate").addEventListener("click", function () {
    const crypto = document.getElementById("crypto").value;
    const currency = document.getElementById("currency").value;

    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=${currency}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            const rate = data[crypto][currency];
            const cryptoName = crypto.charAt(0).toUpperCase() + crypto.slice(1);
            const result = `1 ${cryptoName} = ${rate} ${currency.toUpperCase()}`;
            document.getElementById("exchangeRate").innerText = result;
        })
        .catch(error => {
            document.getElementById("exchangeRate").innerText = "Error fetching the exchange rate.";
            console.error("There was a problem with the fetch operation:", error);
        });
});
g