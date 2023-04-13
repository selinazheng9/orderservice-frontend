import styles from "../../styles/customers.add.module.css";

const Customer = () => {

    return(
        <>
            <div className={styles.container}>
                <h1 className={styles.form_title}>Add a new customer</h1>
                <form action="#">
                    <div className={styles.main_user_info}>
                        <div className={styles.user_input_box}>
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text"
                                   id="fullName"
                                   name="fullName"
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
                        <input type="submit" value="save"></input>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Customer;