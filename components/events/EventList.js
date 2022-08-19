import React from 'react'
import EventItem from "./EventItem"
import style from "../../styles/EventList.module.css"

const EventList = ({ items }) => {
  return (
    <ul className={style.list}>{items.map(event => (
      <EventItem 
      key={event.id} 
      title={event.title} 
      image={event.image} 
      date={event.date} 
      location={event.location} 
      id={event.id} />
    ))}</ul>
  )
}

export default EventList