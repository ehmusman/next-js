import { useEffect, useRef , useState} from "react"
import FeedbackForm from "../components/form/FeedbackForm"
export default function Home() {

  return (
    <div className="container mt-5">
      <FeedbackForm home={true}/>
    </div>
  )
}
