import './CategoryBox.css'

export default function CategoryBox({category,option}){
    return(
        <>
        <div className="cardoutline">
          {option=="1"?<img className="cardimg" src="https://i.ibb.co/rZ0hbr9/foods.png" alt="Card image"></img> : <img className="cardimg" src="https://i.ibb.co/KFdvxf6/food-Category.png" alt="Card image"></img>}
          <br></br>
              <div className="cardbody">
                <p className="cardtext">{category}</p>
            </div>
        </div>

        </>
    )
}
