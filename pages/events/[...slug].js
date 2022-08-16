import { useRouter } from "next/router"
import { getFilteredEvents } from "../../dummy-data"
import EventList from "../../components/events/EventList"
import ResultTitle from "../../components/results-title/ResultsTitle"
import Button from "../../components/ui/Button"
import ErrorAlert from "../../components/error-alert/ErrorAlert"
export default function DynamicEvent() {
    const { query: { slug } } = useRouter()

    const filteredYear = slug[0]
    const filteredMonth = slug[1]

    const numYear = +filteredYear
    const numMonth = +filteredMonth
    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth > 12 || numMonth < 1) {
        return (
            <>
            <ErrorAlert>
            <p>Invalid Filter, please Adjust your values</p>
            </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show All Events</Button>
                </div>
            </>
        )
    }
    const filteredEvents = getFilteredEvents({ year: filteredYear, month: filteredMonth })

    if (!filteredEvents || filteredEvents.length === 0) {
        return <>
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
    const date = new Date(numYear, numMonth - 1)
    return (
        <>
            <ResultTitle date={date} />
            <EventList items={filteredEvents} />
        </>
    )
}