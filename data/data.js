//let host = process.env.NEXT_PUBLIC_BACKEND_HOST;

let host = "https://containers-us-west-175.railway.app";

let findAllOrders = () => {
    return fetch(host + "/orders").then(x => x.json())
}

let saveOrder = (order) => {
    return fetch(host + "/orders", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            customerId: order.customerId,
            total: order.total,
            shippingAddress: order.shippingAddress,
            items: order.items,
            payment: order.payment
        })
    }).then(response =>
    {
        if (response.status == 200 || response.status == 201) return response.json();
        return null;
    })
        .then(id => id)
        .catch(error => {
            console.log(error);
            return null;
        });
}

let data = {
    orders: findAllOrders,
    saveOrder: saveOrder
};

export default data;