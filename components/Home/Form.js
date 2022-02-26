import styles from "../../styles/Home/Form.module.scss";

const Form = () => {
    return (
        <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
            <label htmlFor="getstarted">
                Ready to watch? Enter your email to create or restart your
                membership.
            </label>
            <div>
                <input
                    type="email"
                    placeholder="Email Address"
                    name="getstarted"
                />
                <input type="submit" value="Get Started  >" />
            </div>
        </form>
    );
};

export default Form;
