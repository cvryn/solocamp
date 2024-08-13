import { useState } from "react";
import { thunkLogin } from "../../redux/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = async (e, isDemoUser = false) => {
    e.preventDefault();

    // const serverResponse = await dispatch(
    //   thunkLogin({
    //     email,
    //     password,
    //   })
    // );

    const credentials = isDemoUser
      ? { email: "demo@solocamp.io", password: "password" }
      : { email, password };

    const serverResponse = await dispatch(thunkLogin(credentials));

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      closeModal();
    }
  };

  return (
    <div id="container-login-form-modal">
      <h1>Log In</h1>

      <form id="container-login-form"
        onSubmit={handleSubmit}
      >

        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        {errors.email && <p>{errors.email}</p>}

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {errors.password && <p>{errors.password}</p>}

        <button type="submit">Log in</button>

        <button type="submit"
          onClick={e => handleSubmit(e, true)}
        >
          Log in as Demo User
        </button>

      </form>
    </div>
  );
}

export default LoginFormModal;
