import { useRouter } from "next/router";

export default function ProjectsOfSpecificClient (){
    const router = useRouter()
console.log("router", router)
    return <div>
        <h1> client id is = {router.query.id}</h1>
        <h1> project id is = {router.query.clientprojectid}</h1>
    </div>
}