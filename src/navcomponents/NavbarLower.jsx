import './NavbarLower.css'
export default function NavbarLower(){
    return(
        <>
        <div className="lowerNavbarConntainer">
            <div className="lowerbuttons">
            &nbsp;&nbsp;&nbsp;
                <i class="fa-solid fa-list"></i>        
                    <select name="departments" id="departments" className='buttonNavbarlower'>
                      <option value="departments" selected> All Departments</option>
                      <option value="something">something</option>
                      <option value="good">good</option>
                      <option value="better">better</option>
                      <option value="best">best</option>
                     </select>
                |
                |
                <a href='' className='buttonNavbar'>&nbsp;&nbsp;Home&nbsp;&nbsp;</a>
                |
                |
                <a href='' className='buttonNavbar'>&nbsp;&nbsp;Shop&nbsp;&nbsp;</a>
                |
                |
                <a href='' className='buttonNavbar'>&nbsp;&nbsp;Collection&nbsp;&nbsp;</a>
                |
                |
                <a href='' className='buttonNavbar'>&nbsp;&nbsp;Blog&nbsp;&nbsp;</a>
                |
                |
                <a href='' className='buttonNavbar'>&nbsp;&nbsp;Pages&nbsp;&nbsp;</a>
                &nbsp;&nbsp;
            </div>
        </div>
        <div className="lowernavbarformobile">
        <i class="fa-solid fa-grip"></i>
        <select name="Categories" id="Categories">
                 <option value="Categories" selected>Categories</option>
            <optgroup label="All Departments">
                 <option value="something">something</option>
                 <option value="good">good</option>
                 <option value="better">better</option>
                 <option value="best">best</option>
             </optgroup>
            <optgroup label="Navigation">
                 <option value="Home">Home</option>
                 <option value="Shop">Shop</option>
                 <option value="Collection">Collection</option>
                 <option value="Blog">Blog</option>
                 <option value="Pages">Pages</option>
             </optgroup>
                
        </select>
        </div>
        </>
    )
}
