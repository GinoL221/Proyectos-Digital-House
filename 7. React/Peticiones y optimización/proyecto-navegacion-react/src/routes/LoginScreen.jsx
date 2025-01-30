import { useContext } from "react";
import { useForm } from "../hooks/userForm"
import { UserContext } from "../context/UserContext";

export const LoginScreen = () => {

    const { user, setUser } = useContext(UserContext)

    const initialForm = {
        name: '',
        technology: '',
        email: '',
        networks: '',
    }

    const { name, technology, email, networks, onInputChange } = useForm(initialForm);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name.trim() === '' || technology.trim() === '' || email.trim() === '' || networks.trim() === '') return;
        setUser({
            name,
            technology,
            email,
            networks
        })

    }
    return (
        <form className="container mt-5" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="name" name="name" value={name} onChange={onInputChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="technology" className="form-label">Tecnología</label>
                <input type="text" className="form-control" id="technology" name="technology" value={technology} onChange={onInputChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" value={email} onChange={onInputChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="networks" className="form-label">Redes</label>
                <input type="text" className="form-control" id="networks" name="networks" value={networks} onChange={onInputChange} />
            </div>
            <button type="submit" className="btn btn-primary">Ingresar</button>
        </form>
    )
}
