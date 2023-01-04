import Nav from "./Nav"
import Endpoints from "./endpoints/Endpoints"
import { useState } from "react"
import Price from "./Price"

const NavComponents = () => {
    const [activeNav, setActiveNav] = useState<string>('Endpoints')

    return (
        <>
            <Nav setActiveNav={setActiveNav} activeNav={activeNav} />
            {
                activeNav === 'Endpoints' ?
                    <Endpoints />
                    :
                    null
            }
            {
                activeNav === 'Price' ?
                    <Price />
                    :
                    null
            }

        </>
    )
}

export default NavComponents