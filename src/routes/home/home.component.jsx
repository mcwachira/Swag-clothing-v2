import {Outlet} from 'react-router-dom'
import Directory from "../../components/Directory/Directory.component";
const Home =() =>{
    const categories = [
        {
            "id": 1,
            "title": "hats",
            "imageUrl": "/images/hats.png"
        },
        {
            "id": 2,
            "title": "jackets",
            "imageUrl": "/images/jackets.png"
        },
        {
            "id": 3,
            "title": "sneakers",
            "imageUrl": "/images/sneakers.png"
        },
        {
            "id": 4,
            "title": "womens",
            "imageUrl": "/images/womens.png"
        },
        {
            "id": 5,
            "title": "mens",
            "imageUrl": "/images/mens.png"
        }
    ]
    return(

        <>
            <Directory categories={categories}/>

            <Outlet/>
        </>

    )
}

export default Home;
