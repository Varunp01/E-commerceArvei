import './Trending.css'
import CategoryBox from '../categorycomponents/CategoryBox'
export default function Trending(){
    let prop2=["UncleChips","Kurkure","Lays-blue","Lays-green","DairyMilk","Amul Chocolate","MountainDew","MORE"];

    return(
        <>
        <h1>Trending Products</h1>
        <div className="trendingContainer">
        {prop2.map(val => (
            <CategoryBox category={val}></CategoryBox>
        ))}
        </div>
        </>
    )
}