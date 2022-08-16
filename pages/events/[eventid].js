import { useRouter } from "next/router"
import EventContent from "../../components/event-detail/EventContent"
import EventLogistics from "../../components/event-detail/EventLogistics"
import EventSummary from "../../components/event-detail/EventSummary"
import {getEventById} from "../../dummy-data"

export default function SpecificEvent() {
    const {query} = useRouter()
    const event = getEventById(query.eventid)
    console.log(event)

    if(!event){
        return <h1>No Events Found</h1>
    }
    return (
        <>
        <EventSummary title={event.title}/>
        <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
        />
        <EventContent>
            <p>{event.description}</p>
        </EventContent>
        </>
    )
}