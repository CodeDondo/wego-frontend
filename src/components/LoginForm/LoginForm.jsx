import { useAuth } from "../../providers/AuthProvider"
import { useForm } from 'react-hook-form'

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { loginData, setLoginData } = useAuth()

    const onSubmit = async formData => {
        const URL = 'http://localhost:4000/api/auth/login'

        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    username: formData.username,
                    password: formData.password
                })
            })
            if (response.ok) {
                const token = await response.json()
                sessionStorage.setItem("access_token", JSON.stringify(token))
                setLoginData(token)
            }
            else {
                throw new Error("Login fejlede")
            }

        } catch (error) {
            console.error(error)
        }
    }

    const logOut = () => {
        sessionStorage.removeItem("access_token")
        setLoginData(null)
    }

    return (
        <>
            {!loginData ? (
                <form method="POST" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="">brugernavn:</label>
                        <input type="text" {...register("username", {required: true})} />
                        {errors.username && <span>Du skal udfylde dit brugernavn</span>}
                    </div>
                    <div>
                        <label htmlFor="">adgangskode:</label>
                        <input type="text" {...register("password", {required: true})} />
                        {errors.password && <span>Du skal udfylde din adgangskode</span>}
                    </div>
                    <button>Send</button>
                </form>
            ) : (
                <div>
                    <p>Du er logget som {loginData.user.name}</p>
                    <button onClick={() => logOut()}>Log ud</button>
                </div>
            )}
        </>
    )
}
