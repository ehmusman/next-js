export const getAllEvents = async () => {
    const response = await fetch("https://nextjs-project-cd489-default-rtdb.firebaseio.com/events.json")
    const data = await response.json()
    // console.log(data)
    const events = []
    for(const key in data){
        events.push({
            id: key,
            ...data[key]
        })
    }
    return events
}

export const getFeaturedEvents = async () => {
    const allEvents = await getAllEvents()
    return allEvents.filter(event => event.isFeatured)
}
export const getEventById = async (id) => {
    const allEvents = await getAllEvents()
    return allEvents.find(event => event.id===id)
}

export async function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
    const allEvents = await getAllEvents()
    let filteredEvents = allEvents.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() == year && eventDate.getMonth() == month - 1;
    });
  
    return filteredEvents;
  }