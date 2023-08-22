import {extractFilePath, readFileSync} from "./feedback"
function handler(req,res){
    if(req.method === "GET"){
        const feedbackId = req.query.id
        console.log("feedbackId", req.method)
        const filePath = extractFilePath()
        const data = readFileSync(filePath)
        const feedbacks = JSON.parse(data)

        const selectedFeedback = feedbacks.find(fb => fb.id==feedbackId)
        if(!selectedFeedback){
            return res.status(400).send({message: "This feedback is not found"})
        }
        return res.status(200).send({feedback: selectedFeedback})
    }
}

export default handler;