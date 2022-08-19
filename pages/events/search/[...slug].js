import { useRouter } from "next/router"
import { getFilteredEvents } from "../../../helpers/apiUtils"
import EventList from "../../../components/events/EventList"
import ResultTitle from "../../../components/results-title/ResultsTitle"
import Button from "../../../components/ui/Button"
import ErrorAlert from "../../../components/error-alert/ErrorAlert"
import Head from "../../../components/content/Head"
export default function DynamicEvent(props) {

    if (props.hasError) {
        return (
            <>
            <Head title={`Search result for ${props.date.numMonth + "/" + props.date.numYear}`} />
            <ErrorAlert>
            <p>Invalid Filter, please Adjust your values</p>
            </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </>
        )
    }
    const {filteredEvents} = props

    if (!filteredEvents || filteredEvents.length === 0) {
        return <>
            <Head title={`Search result for ${props.date.numMonth + "/" + props.date.numYear}`} />
        <ErrorAlert>
            <p>
                No Events found for the choosen filter
            </p>
        </ErrorAlert>
            <div className="center">
                <Button link="/events">Show All Events</Button>
            </div>
        </>
    }
    const date = new Date(props.date.numYear, props.date.numMonth - 1)
    return (
        <>
            <Head title={`Search result for ${props.date.numMonth + "/" + props.date.numYear}`} />
            <ResultTitle date={date} />
            <EventList items={filteredEvents} />
        </>
    )
}

export async function getServerSideProps(context){
    const { params: {slug} } = context
    const filteredYear = slug[0]
    const filteredMonth = slug[1]

    const numYear = +filteredYear
    const numMonth = +filteredMonth
    if(isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth > 12 || numMonth < 1){
        return {
            props: {
                hasError: true
            }
        }
    }
    const filteredEvents = await getFilteredEvents({ year: filteredYear, month: filteredMonth })
    return {
        props : {
            filteredEvents,
            date: {numYear, numMonth}
        }
    }
}