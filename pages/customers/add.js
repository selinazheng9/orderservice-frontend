
import styles from "../../styles/customers.add.module.css";
import { useForm } from 'react-hook-form';
import data from '../../data/data'

const Customer = () => {
    const { register, handleSubmit, errors, reset } = useForm();

    let save = (values) => {

        console.log(values);
    }

    return(
        <>
            <div className={styles.container}>
                <h1 className={styles.form_title}>Add a new customer</h1>
                <form action="#" onSubmit={handleSubmit(save)}>
                    <div className={styles.main_user_info}>
                        <div className={styles.user_input_box}>
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text"
                                   id="fullName"
                                   name="fullName"
                                   ref={register({
                                       required: {
                                           value: true,
                                           message: 'You must enter your name',
                                       },
                                   })}
                                   placeholder="Enter Full Name"/>
                        </div>

                        <div className={styles.user_input_box}>
                            <label htmlFor="email">Email</label>
                            <input type="email"
                                   id="email"
                                   name="email"
                                   placeholder="Enter Email"/>
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

export default Customer;