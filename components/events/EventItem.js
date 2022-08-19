import Link from 'next/link'
import React from 'react'
import style from "../../styles/EventItem.module.css"
import Button from '../ui/Button'
import DateIcon from "../icons/DateIcon"
import ArrowRightIcon from "../icons/ArrowRightIcon"
import AddressIcon from "../icons/AddressIcon"
import Image from 'next/image'
const EventItem = (props) => {
  const {title, image, date, location, id} = props
  const humanReadableDateString = new Date(date).toLocaleDateString('en-US', {
    day: "numeric",
    month: "long",
    year: 'numeric'
  })

  const formatAddress = location.replace(", ", '\n')
  const exploreLink = `/events/${id}`
  return (
    <li className={style.item}>
        <Image src={`/${image}`} alt={"imageAlt"} height={300} width={300}/>

      <div className={style.content}>
        <div className={style.summary}>
          <h2>{title}</h2>
          <div className={style.date}>
            <DateIcon />
            <time> {humanReadableDateString}</time>
          </div>
          <div className={style.address}>
            <AddressIcon/>
            <address>{formatAddress}</address>
          </div>
        </div>
        <div className={style.actions}>
          <Button link={exploreLink} >
            <span>Explore Events</span>
            <span className={style.icon}>
            <ArrowRightIcon/>
            </span>
          </Button>
        </div>
      </div>
    </li>
  )
}

export default EventItem