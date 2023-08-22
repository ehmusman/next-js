import { useRouter } from "next/router"

export default function SpecificFeedback(){
    const {query: {id}} = useRouter()
    return (
        <div>
            specific feedback {id}
        </div>
    )
}