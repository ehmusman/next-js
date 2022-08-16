import { useRouter } from "next/router"
import {getAllEvents} from "../../dummy-data"
import EventList from "../../components/events/EventList"
import EventSearch from "../../components/events/EventSearch"
export default function EventsPage(){
    const router = useRouter()
    const featuredEvents = getAllEvents()
    const findEventHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}`

        router.push(fullPath)
    }
    return (
        <>
            <EventSearch onSearch={findEventHandler}/>
            <EventList items={featuredEvents} />
        </>
    )
}