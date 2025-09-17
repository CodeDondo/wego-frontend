import { useAuth } from "../../providers/AuthProvider";
import { useForm } from 'react-hook-form';
import styles from "./LoginForm.module.scss";

export const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { loginData, setLoginData } = useAuth();

  const onSubmit = async (formData) => {
    const URL = "http://localhost:4000/api/auth/login";

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username, 
          password: formData.password,
        }),
      });

      if (response.ok) {
        const token = await response.json();
        sessionStorage.setItem("access_token", JSON.stringify(token));
        setLoginData(token);
      } else {
        throw new Error("Login fejlede");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logOut = () => {
    sessionStorage.removeItem("access_token");
    setLoginData(null);
  };

  return (
    <>
      {!loginData ? (
        <form method="POST" onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div>
            <label htmlFor="username">Email:</label>
            <input
              type="email"
              {...register("username", {
                required: "Du skal udfylde din email",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Indtast en gyldig email-adresse",
                },
              })}
            />
            {errors.username && <span className={styles.error}>{errors.username.message}</span>}
          </div>

          <div>
            <label htmlFor="password">Adgangskode:</label>
            <input
              type="password"
              {...register("password", {
                required: "Du skal udfylde din adgangskode",
              })}
            />
            {errors.password && <span className={styles.error}>{errors.password.message}</span>}
          </div>

          <button type="submit">Login</button>
        </form>
      ) : (
        <div>
          <p>Du er logget ind som {loginData.user.name}</p>
          <button onClick={logOut}>Log ud</button>
        </div>
      )}
    </>
  );
};
