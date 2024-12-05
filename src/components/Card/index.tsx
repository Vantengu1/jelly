import { FC } from "react";
import style from "./style.module.css"
import { Bean } from "../../types/bean";
import { Link } from "react-router-dom";

type Props = {
    data : Bean
}
// interface Props {
//     title: string;
// }

const Card : FC<Props>= ({data}) => {
    return(
        <Link to={`/bean/${data.beanId}`} className={style.card}>
            <img src={data.imageUrl} alt="#" />
            <h2>{data.flavorName}</h2>
            <p>{data.description}</p>
            {data.sugarFree === true ? <p>No sugar</p> : <p>With sugar</p>}
        </Link>
    );
};

export default Card