import { FC } from "react";

interface Props {
    params: any
}

const Api: FC<Props> = ({ params }) => {
    return (
        <div>Api {params.name}</div>
    )
}

export default Api