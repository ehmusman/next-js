import EventList from "../components/events/EventList"
import {getFeaturedEvents} from "../helpers/apiUtils"
import Head from "../components/content/Head"

export default function Home(props) {
  const {events} = props
  return (
    <>
    <Head title="Nextjs Events" name="Description" content="Events Content" />
    <EventList items={events}/>
    </>
  )
}

export async function getStaticProps(){
  const data = await getFeaturedEvents()

  return {
    props: {
      events: data
    }
  }
}