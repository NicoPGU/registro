
import { propTypes } from "react-bootstrap/esm/Image";
import 'bootstrap/dist/css/bootstrap.min.css'

const SocialButton = ({facebook, github, linkedin}) => {
    return (
        <>
                <button className="bg-success rounded-5 m-3 border border-black">{facebook}</button>
                <button className="bg-success rounded-5 m-3 border border-black">{github}</button>
                <button className="bg-success rounded-5 m-3 border border-black">{linkedin}</button>
        </>
    )
}

export default SocialButton;