// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs"
import path from "path"
export function extractFilePath(){
  return path.join(process.cwd() , 'data' , 'feedback.json')
}
export function readFileSync(filePath){
  return fs.readFileSync(filePath)
}
export default function handler(req, res) {
  if(req.method === "POST"){
    const {email, feedback} = req.body
    if(!email || !feedback) return res.status(400).send({message: "Email and feedback are required"})
    const newFeedback = {
      id: Math.floor(Date.now() * Math.random()*10000000),
      email, feedback
    }

    // save data in db
    const filePath = extractFilePath()
    const readFile = readFileSync(filePath)

    const data= JSON.parse(readFile)
    // check if same email is already entered or not
    const existingEmail = data.find(fb => fb.email === email)
    if(existingEmail){
      return res.status(400).send({message: "Same email has already added a feedback"})
    }
    data.push(newFeedback)

    fs.writeFileSync(filePath, JSON.stringify(data))

    res.status(201).send({message: "feedback is added" , data: newFeedback})
  }
  if(req.method === "GET"){
    const filePath = extractFilePath()
    const readFile = readFileSync(filePath)

    const data= JSON.parse(readFile)
    res.status(200).send(data)
  }
}
