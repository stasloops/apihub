import Nav from "./Nav"
import Endpoints from "./endpoints"
import { useState } from "react"

const NavComponents = () => {
    const [activeNav, setActiveNav] = useState<string>('Endpoints')

    return (
        <>
            <Nav setActiveNav={setActiveNav} activeNav={activeNav}/>
            {
                activeNav === 'Endpoints' ?
                    <Endpoints />
                    :
                    null
            }
        </>
    )
}

export default NavComponents