fetch('https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'bfhl-auth': 'YOUR_ROLL_NUMBER_HERE'
    },
    body: JSON.stringify({
        "company": "",
        "currentPrice": "",
        "accountNumber": "",
        "githubRepoLink": ""
    })
});