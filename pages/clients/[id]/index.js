import { useRouter } from "next/router"
export default function ProjectsOfSpecificClient () {
    const router = useRouter()

    function loadProjectOfClients(){
        // some backend call to get project of this client
        router.push({
            pathname: "/clients/[id]/[clientprojectid]",
            query: {id: router.query.id, clientprojectid: "projecta"}
        })
    }
    // this is used after submitting the form. 
    // this is called navigating programmarically
    return <div>
        <h1>Projects of client having id = {router.query.id}</h1>
        <button onClick={loadProjectOfClients}>Load Projects of client</button>
    </div>
}