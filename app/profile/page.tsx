"use client"

import { useAppDispatch, useAppSelector } from "../../logic/hooks/useRedux"
import { resetUser } from "../../logic/redux/slices/authSlice"

const Profile = () => {
    const { variant } = useAppSelector((state) => state.theme)
    const user = useAppSelector((state) => state.auth.user)

    const dispatch = useAppDispatch()
    const logOut = () => {
        if (typeof window !== "undefined") {
            window.localStorage.removeItem('token')
            window.localStorage.removeItem('user')
        }
        dispatch(resetUser())
    }

    return (
        <div
            // className={style.profile}
            style={{
                backgroundColor: variant.background,
                color: variant.color,
            }}
        >
            email: {user?.email}
            <br />
            balance: {user?.balance}
            <br />
            <button onClick={logOut}>Log Out</button>
        </div>
    )
}

export default Profile