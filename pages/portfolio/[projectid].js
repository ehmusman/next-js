import {useRouter} from "next/router"
export default function PortfolioProjectPage(){
    const router = useRouter()
    console.log(router.query.projectid)
    // we can send a request to backend server
    // to fetch the piece of data with an id of router.query.projectid
    return <div>
        <h1>Portfolio Project id = {router.query.projectid}</h1>
    </div>
}