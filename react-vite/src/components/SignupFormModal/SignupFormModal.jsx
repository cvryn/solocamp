import { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { thunkSignup } from "../../redux/session";
import "./SignupForm.css";


function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [profile_image, setProfileImage] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setErrors({
        confirmPassword:
          "Passwords don't match",
      });
    }

    const serverResponse = await dispatch(
      thunkSignup({
        email,
        username,
        first_name,
        last_name,
        profile_image,
        password,
      })
    );

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      closeModal();
    }
  };
// console.log('error while signing up', errors)
  return (
    <div id="container-signup-form-modal">
      <h1>Sign Up</h1>
      {errors.server && <p>{errors.server}</p>}

      <form id="container-signup-form"
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
        <div style={{color:'red', width:'50px'}}>
        {errors.email && <p className='container-error-signup'>{errors.email}</p>}
        </div>

        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <div style={{color:'red'}}>
        {errors.username && <p>{errors.username}</p>}
        </div>

        <label>
          First name
          <input
            type="text"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <div style={{color:'red'}}>
        {errors.first_name && <p>{errors.first_name}</p>}
        </div>

        <label>
          Last name
          <input
            type="text"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <div style={{color:'red'}}>
        {errors.last_name && <p>{errors.last_name}</p>}
        </div>

        <label>
          Profile image
          <input
            type="text"
            value={profile_image}
            onChange={(e) => setProfileImage(e.target.value)}
          />
        </label>
        <div style={{color:'red'}}>
        {errors.profile_image && <p>{errors.profile_image}</p>}
        </div>

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <div style={{color:'red'}}>
        {errors.password && <p>{errors.password}</p>}
        </div>

        <label>
          Confirm password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <div style={{color:'red'}}>
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>

        <button type="submit">Sign up</button>

      </form>
    </div>
  );
}


export default SignupFormModal;
