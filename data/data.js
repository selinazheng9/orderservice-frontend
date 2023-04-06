let host = process.env.NEXT_PUBLIC_BACKEND_HOST;

let findAllCustomers = () => {
 return fetch(host + '/customers')
        .then(x => x.json()); 
};

let data = {
    customers: findAllCustomers
};

export default data;