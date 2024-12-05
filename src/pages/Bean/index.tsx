import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Bean } from "../../types/bean";



const BeanPage = () => {

    const params = useParams();
    
    const [beanData, setBeanData] = useState<Bean | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const req = await fetch(
                    `https://jellybellywikiapi.onrender.com/api/beans/${params.beanId}`
                );
                const data = await req.json();
                setBeanData(data);
            } catch(error) {
                console.log('Error->', error);
            }    
        };
        getData();
    }, [])
    

    return (
        <div>
            {beanData && (<div className="">
                    <img src={beanData.imageUrl} alt="bean" />
                    <h1>{beanData.flavorName}</h1>
                    <p>{beanData.description}</p>
                </div>
            )}
        </div>
    );
};

export default BeanPage;