import {Outlet} from "react-router-dom";

const Profile = () => {
    return (
        <div>
            <div>
                <span>Mi Información</span>
                <span>Eventos Favoritos</span>
            </div>
            <Outlet/>
        </div>
    )
}

export default Profile