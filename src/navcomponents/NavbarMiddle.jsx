import './NavbarMiddle.css'
export default function NavbarMiddle(){
    return(
        <>
        <div className="middleNavbarConntainer">
        <div><h2>Arevei </h2><i class="fa-regular fa-copyright"></i></div>
        <div className='searchContainerMiddle '>
        <select name="categories" id="categories" className='buttonNavbar mobilenone'>
          <option value="category" selected>category</option>
          <option value="something">something</option>
          <option value="good">good</option>
          <option value="better">better</option>
          <option value="best">best</option>
        </select>
        <input type="text" name="search" id="search" placeholder='search' className='mobilenone'/>
        <button className='buttonNavbar '><i class="fa-solid fa-magnifying-glass"></i> SEARCH</button>
        </div>
        <div>
          <button className='buttonNavbar'><i class="fa-solid fa-cart-shopping"></i> CART</button>
        </div>
        </div>
        </>
    )
}