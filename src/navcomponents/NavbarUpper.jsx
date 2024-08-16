import './NavbarUpper.css'
export default function NavbarUpper(){
    return(
        <>
        <div className="upperNavbarConntainer">
        <div><button className='buttonNavbarupper'><i class="fa-solid fa-envelope"></i>E-Commerce@arevei.com </button></div>
        |
        <div><button className='buttonNavbarupper'> <i class="fa-solid fa-phone"></i> +91-********** </button></div>
        |
        <div><button className='buttonNavbarupper'> <i class="fa-brands fa-facebook-f"></i></button><button className='buttonNavbarupper'> <i class="fa-brands fa-twitter"></i></button><button className='buttonNavbarupper'> <i class="fa-brands fa-linkedin-in"></i></button><button className='buttonNavbarupper'> <i class="fa-brands fa-pinterest-p"></i> </button></div>
        |
        <div> <i class="fa-solid fa-globe"></i>        
            <select name="Languages" id="Languages" className='buttonNavbarupper'>
              <option value="Languages" selected> Languages</option>
              <option value="something">something</option>
              <option value="good">good</option>
              <option value="better">better</option>
              <option value="best">best</option>
            </select>
        </div>
        |
        <div><button className='buttonNavbarupper'> <i class="fa-solid fa-right-to-bracket"></i>Login</button></div>
        </div>
        </>
    )
}