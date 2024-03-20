fetch('https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        name: '',
        email: '',
        rollNumber:'',
        phone: '',
    })
});
