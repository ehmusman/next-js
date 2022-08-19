import { useRouter } from "next/router"
import EventContent from "../../components/event-detail/EventContent"
import EventLogistics from "../../components/event-detail/EventLogistics"
import EventSummary from "../../components/event-detail/EventSummary"
import {getEventById, getAllEvents} from "../../helpers/apiUtils"
import Head from "../../components/content/Head"
export default function SpecificEvent({event}) {
    if(!event){
        return <h1>No Events Found</h1>
    }
    return (
        <>
        <Head title={event.title} content={event.description} />
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
export async function getStaticProps(context) {
    const eventId = context.params.eventid
    const event = await getEventById(eventId)
    if(!event){
        return {
            notFound: true
        }
    }
    return {
        props: {
            event
        }
    }
}
export async function getStaticPaths(){
    const events = await getAllEvents()
    const paths = events.map(event => ({params: {eventid: event.id}}))
    return {
        paths: paths,
        fallback: false
    }
}