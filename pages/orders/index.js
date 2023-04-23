import styles from "../../styles/orders.module.css";
import data from '../../data/data'
import { useState, useEffect } from "react";
import Spinner from "../../components/Spinner";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        data.orders()
            .then((data) => {
                setOrders(data);
                setLoading(false);
                console.log(data);
            })
            .catch((e) => console.log(e));
    }, []);

    if (loading) {
        return <Spinner />;
    } else
        return (
            <>
                <div className={styles.tableContainer}>
                    <table className={styles.table}>
                        <thead>
                        <tr>
                            <th>Customer Id</th>
                            <th>Total</th>
                            <th>Shipping State</th>
                            <th>Shipping City</th>
                            <th>Shipping Postal Code</th>
                            <th>Payment Method</th>
                            <th>Payment Number</th>
                            <th>Payment State</th>
                            <th>Payment City</th>
                            <th>Payment Postal Code</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orders.map((c, i) => (
                            <tr key={i}>
                                <td data-label="Customer Id">{c.customerId}</td>
                                <td data-label="Total">{c.total}</td>
                                <td data-label="Shipping State">{c.shippingAddress.state}</td>
                                <td data-label="Shipping City">{c.shippingAddress.city}</td>
                                <td data-label="Shipping Postal Code">{c.shippingAddress.postalCode}</td>
                                <td data-label="Payment Method">{c.payment.method}</td>
                                <td data-label="Payment Number">{c.payment.number}</td>
                                <td data-label="Payment State">{c.payment.billingAddress.state}</td>
                                <td data-label="Payment City">{c.payment.billingAddress.city}</td>
                                <td data-label="Payment Postal Code">{c.payment.billingAddress.postalCode}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </>
        );
};

export default Orders;
