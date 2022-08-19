import { useRouter } from "next/router"
import {getAllEvents} from "../../helpers/apiUtils"
import EventList from "../../components/events/EventList"
import EventSearch from "../../components/events/EventSearch"
import Head from "../../components/content/Head"
export default function EventsPage(props){
    const router = useRouter()
    const {allEvents} = props
    const findEventHandler = (year, month) => {
        const fullPath = `/events/search/${year}/${month}`

        router.push(fullPath)
    }
    return (
        <>
        <Head title="All Nextjs Events"/>
            <EventSearch onSearch={findEventHandler}/>
            <EventList items={allEvents} />
        </>
    )
}

export async function getStaticProps() {
    const allEvents = await getAllEvents()
    return {
        props: {
            allEvents 
        }
    }
}