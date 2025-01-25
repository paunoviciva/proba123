import Cart from './Cart'
import Home from './Home'
import Shop from './Shop'

const Body = ({stranica}) => {

    const izaberiStranicu = () =>
        {switch(stranica){
        case "HOME": return <Home />
        case "SHOP": return <Shop />
        case "CART": return <Cart />
        default: return <div>Error 404</div>
    }}


    return(
        <div className='body-wrapper'>
        {izaberiStranicu()}
        </div>
    )
}

export default Body