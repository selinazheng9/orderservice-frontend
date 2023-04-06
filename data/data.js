let host = 'http://localhost:8080';

let findAllCustomers = () => {
 return fetch(host + '/customers')
        .then(x => x.json()); 
};

let data = {
    customers: findAllCustomers
};

export default data;