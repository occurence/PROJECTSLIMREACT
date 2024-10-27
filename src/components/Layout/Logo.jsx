import { Link } from 'react-router-dom';
import main from '../App.module.css';

export const Logo = () => {
    return (
        <Link to="/" className={main.logoWrapper}>
            <img src={require("../../images/logo.png")} alt="Slim Mom Logo" style={{paddingBottom:"10px", transform:"scale(1.3)"}}/>
        </Link>
    )
}