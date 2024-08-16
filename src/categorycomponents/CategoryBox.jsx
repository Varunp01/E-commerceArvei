import './CategoryBox.css'

export default function CategoryBox({category,option}){
    return(
        <>
        <div className="cardoutline">
          {option=="1"?<img className="cardimg" src="src\categorycomponents\foods.PNG" alt="Card image"></img> : <img className="cardimg" src="src\trendingcomponents\foodCategory.PNG" alt="Card image"></img>}
          <br></br>
              <div className="cardbody">
                <p className="cardtext">{category}</p>
            </div>
        </div>

        </>
    )
}