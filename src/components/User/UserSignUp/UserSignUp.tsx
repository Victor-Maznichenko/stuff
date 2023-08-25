import Button from "../../Button/Button";
import CLOSE from "../../../assets/images/close.svg";
import styles from "./UserSignUp.module.scss";
import {useState} from "react";
import {createUser, loginUser, toggleShowForm} from "../../../redux/user";
import {useStoreDispatch} from "../../../redux/store";
import {useCookies} from "react-cookie";

const UserSignUp = () => {
    const dispatch = useStoreDispatch();
    const [, setCookie] = useCookies(['user']);
    const [typeSign, setTypeSign] = useState('register');
    const handleClose = () => dispatch(toggleShowForm());
    const isRegister = typeSign === 'register';

    const [values, setValues] = useState({
        name: "Nicolas",
        email: "nico@gmail.com",
        password: "1234",
        avatar: "https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg"
    });

    const handleChange = ({target: {value, name}}) => {
        setValues({...values, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        isRegister ? dispatch(createUser(values)) : dispatch(loginUser({email: values.email, password: values.password}));
        for (const key in values) {
            setCookie([key], values[key], {path: '/'});
        }
        dispatch(toggleShowForm());
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles['form-wrapper']}>
                <form action="#" onSubmit={handleSubmit}>
                    <button className={styles.close} onClick={handleClose}>
                        <img src={CLOSE} alt=""/>
                    </button>
                    <h4 className={styles.title}>{typeSign}</h4>

                    <label className={styles["input-wrapper"]}>
                        <input
                            placeholder="Email"
                            name="email"
                            type={"email"}
                            className={styles.input}
                            onChange={handleChange}
                            value={values.email}
                            required
                        />
                    </label>
                    <label className={styles["input-wrapper"]}>
                        <input
                            placeholder="Password"
                            name="password"
                            type={"password"}
                            className={styles.input}
                            onChange={handleChange}
                            value={values.password}
                            required
                        />
                    </label>
                    {
                        isRegister ?
                            <label className={styles["input-wrapper"]}>
                                <input
                                    placeholder="Username"
                                    name="name"
                                    type={"text"}
                                    className={styles.input}
                                    onChange={handleChange}
                                    value={values.name}
                                    required
                                />
                            </label> : ''
                    }
                    <Button className={styles.button}>{isRegister ? 'Create' : 'Login'} an account</Button>
                </form>
                <button onClick={() => setTypeSign('login')}>already have an account?</button>
            </div>
        </div>
    );
};

export default UserSignUp;
