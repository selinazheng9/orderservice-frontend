let host = process.env.NEXT_PUBLIC_BACKEND_HOST;

let findAllCustomers = () => {
 return fetch(host + '/customers')
        .then(x => x.json()); 
};

let saveCustomer = (name, email) => {
    return fetch(host + "/customers", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    }).then(response => response.json())
        .then(id => id)
        .catch(error => {
            console.log(error);
            return null;
        });
}

let data = {
    customers: findAllCustomers,
    saveCustomer: saveCustomer
};

export default data;