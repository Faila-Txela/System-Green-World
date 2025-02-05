import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ErrorPage.module.css';
import image from '../assets/notfound.webp';

const ErrorPage: React.FC = () => {
    const navigate = useNavigate();
    
    const handleInicio = (): void => {
        navigate('/');
    };

    return (
        <div className={styles.containerError}>
            <div className={styles.image}>
                <img className={styles.img} src={image} alt="Página não encontrada" />
            </div>
            <div className={styles.content}>
                <h3>Lamentamos, mas esta página não foi encontrada.</h3>
                <p>A página que está tentando acessar não existe.</p>
                <div className={styles.btn}>
                    <button onClick={handleInicio}>Voltar à página inicial</button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;