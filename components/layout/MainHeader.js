import Link from 'next/link'
import React from 'react'
import style from "./MainHeader.module.css"
const MainHeader = () => {
  return (
    <header className={style.header}>
        <div className={style.logo}>
            <Link href="/">Next Events</Link>
        </div>
        <nav className={style.navigation}>
            <ul>
                <li>
                    <Link href="/events">All Events</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainHeader