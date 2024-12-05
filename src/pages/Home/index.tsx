import image from '../../images/main.gif';
import style from './style.module.css'

const Home = () => {
    return (
        <>
            <div className={style.home_container}>
                <img src={image} alt="#" />
                <div className={style.info}>
                    <h1>Welcome to the World of Jelly Belly:</h1>
                    <p>A Rainbow of Flavors Awaits!</p>
                </div>
            </div>
        </>
    );
};

export default Home;