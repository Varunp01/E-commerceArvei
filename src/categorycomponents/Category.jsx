import './Category.css'
import { useRef } from "react";
import CategoryBox from "./CategoryBox"
export default function Category(){
    let prop1=["STAPLE","FROZEN","CAKES","SNACKS","CHOCOLATES","DAIRY","BEVERAGES","MORE"];
    const ref = useRef();
    const disblock = () => {
        ref.current.style.display = "block";
    }        
    const dishide = () => {
        ref.current.style.display = "none";
    }        
    return(
        <>
        {/* <CategoryBox category={"STAPLE"}></CategoryBox>
        <CategoryBox category={"FROZEN"}></CategoryBox>
        <CategoryBox category={"CAKES"}></CategoryBox>
        <CategoryBox category={"SNACKS"}></CategoryBox>
        <CategoryBox category={"CHOCOLATES"}></CategoryBox>
        <CategoryBox category={"DAIRY"}></CategoryBox>
        <CategoryBox category={"BEVERAGES"}></CategoryBox>
        <CategoryBox category={"MORE"}></CategoryBox> */}
        <div className="categoryboxcontainer" onMouseEnter={disblock} onMouseLeave={dishide}>
        {prop1.map(val => (
            <CategoryBox category={val} option={"1"}></CategoryBox>
        ))}
        </div>
        <div className="carddescription" ref={ref}>
            <ul>
                <li>category 1</li>
                <li>category 2</li>
                <li>category 3</li>
                <li>category 4</li>
                <li>category 5</li>
            </ul>
        </div>
        </>
    )
}