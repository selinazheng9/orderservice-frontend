import styles from "../../styles/orders.add.module.css";
import { useForm } from 'react-hook-form';
import data from '../../data/data'

const Order = () => {
    const { register, handleSubmit, errors, reset } = useForm();

    let save = async (values) => {
        console.log(values);
        const response = await data.saveOrder(values);
        console.log(response);
        if(response != null){
            reset();
        }
    }

    return(
        <>
            <div className={styles.container}>
                <h1 className={styles.form_title}>Place a new order</h1>
                <form action="#" onSubmit={handleSubmit(save)}>
                    <div className={styles.main_user_info}>
                        <div className={styles.user_input_box}>
                            <label htmlFor="customerId">Customer Id</label>
                            <input type="number"
                                   id="customerId"
                                   name="customerId"
                                   {...register('customerId',
                                       {required: true,
                                           message: 'Customer Id' })}
                                   placeholder="Customer Id"/>
                        </div>
                            <div className={styles.user_input_box}>
                                <label htmlFor="total">Total</label>
                                <input type="number"
                                       id="total"
                                       name="total"
                                       {...register('total',
                                           {required: true,
                                               message: 'Total' })}
                                       placeholder="Total"/>
                            </div>
                            <div className={styles.user_input_box}>
                                <label htmlFor="state">State</label>
                                <input type="text"
                                       id="shippingAddress.state"
                                       name="state"
                                       {...register('shippingAddress.state',
                                           {required: true,
                                               message: 'State' })}
                                       placeholder="State"/>
                            </div>
                            <div className={styles.user_input_box}>
                                <label htmlFor="city">City</label>
                                <input type="text"
                                       id="shippingAddress.city"
                                       name="city"
                                       {...register('shippingAddress.city',
                                           {required: true,
                                               message: 'City' })}
                                       placeholder="City"/>
                            </div>
                            <div className={styles.user_input_box}>
                                <label htmlFor="postalCode">Postal Code</label>
                                <input type="number"
                                       id="shippingAddress.postalCode"
                                       name="postalCode"
                                       {...register('shippingAddress.postalCode',
                                           {required: true,
                                               message: 'Postal Code' })}
                                       placeholder="Postal Code"/>
                            </div></div>
                    <h1 className={styles.form_title}>Item</h1>
                    <div className={styles.main_user_info}>
                        <div className={styles.user_input_box}>
                            <label htmlFor="items">Name</label>
                            <input type="text"
                                   id="name"
                                   name="items"
                                   {...register('items.0.name',
                                       {required: true,
                                           message: 'Name' })}
                                   placeholder="Name"/>
                        </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor="quantity">Quantity</label>
                            <input type="number"
                                   id="quantity"
                                   name="items"
                                   {...register('items.0.quantity',
                                       {required: true,
                                           message: 'Quantity' })}
                                   placeholder="Quantity"/>
                        </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor="price">Price</label>
                            <input type="number"
                                   id="price"
                                   name="items"
                                   {...register('items.0.price',
                                       {required: true,
                                           message: 'Price' })}
                                   placeholder="Price"/>
                        </div>
                    </div>
                    <h1 className={styles.form_title}>Payment</h1>
                    <div className={styles.main_user_info}>
                    <div className={styles.user_input_box}>
                        <label htmlFor="method">Method</label>
                        <input type="text"
                               id="payment.method"
                               name="method"
                               {...register('payment.method',
                                   {required: true,
                                       message: 'Method' })}
                               placeholder="Method"/>
                    </div>
                    <div className={styles.user_input_box}>
                        <label htmlFor="number">Number</label>
                        <input type="number"
                               id="payment.number"
                               name="method"
                               {...register('payment.number',
                                   {required: true,
                                       message: 'Number' })}
                               placeholder="Number"/>
                    </div>
                    <div className={styles.user_input_box}>
                        <label htmlFor="method">State</label>
                        <input type="text"
                               id="payment.billingAddress"
                               name="state"
                               {...register('payment.billingAddress.state',
                                   {required: true,
                                       message: 'State' })}
                               placeholder="State"/>
                    </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor="city">City</label>
                            <input type="text"
                                   id="payment.billingAddress"
                                   name="state"
                                   {...register('payment.billingAddress.city',
                                       {required: true,
                                           message: 'City' })}
                                   placeholder="City"/>
                        </div>
                        <div className={styles.user_input_box}>
                            <label htmlFor="postalCode">Postal Code</label>
                            <input type="number"
                                   id="payment.billingAddress"
                                   name="postalCode"
                                   {...register('payment.billingAddress.postalCode',
                                       {required: true,
                                           message: 'Postal Code' })}
                                   placeholder="Postal Code"/>
                        </div>
                    </div>
                    <div className={styles.form_submit_btn}>
                        <input type="submit" value="save" ></input>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Order;