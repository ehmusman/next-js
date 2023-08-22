import {extractFilePath, readFileSync} from "../api/feedback"
import FeedbackForm from "../../components/form/FeedbackForm";
import Feedbacks from "../../components/feedback/Feedbacks";

export default function Feedback({feedbacks}){
    return (<div className="container">
    <FeedbackForm/>
    <Feedbacks feedbacks={feedbacks}/>
    </div>)
}

export async function getServerSideProps(){
    const filePath = extractFilePath()
    const data = readFileSync(filePath)
    const feedbacks = JSON.parse(data)
    return {
        props: {
            feedbacks
        }
    }
}