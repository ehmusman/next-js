import { useEffect, useRef , useState} from "react"
import Feedbacks from "../feedback/Feedbacks"

const FeedbackForm = () => {
    const emailInput = useRef()
    const feedbackInput = useRef()
    const handleFormSubmit = async (e) => {
      try {
        e.preventDefault()
  
        const email = emailInput.current.value
        const feedback = feedbackInput.current.value
        const reqBody = { email, feedback }
  
        const response = await fetch('/api/feedback', {
          method: "post",
          body: JSON.stringify(reqBody),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await response.json()
        if (response.status !== 400) {
          console.log("data", data)
        } else {
          console.log("error", data.message)
        }
      } catch (error) {
        console.log("error", error)
      }
    }

    // const loadFeedbacks = async () => {
    //     const response = await fetch('/api/feedback')
    //     const data = await response.json()
    //     console.log("data", data)
    //     setFeedbacks(data)
    //   }
  return (
    <>
    <form className="container" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" className="form-control" ref={emailInput} />
        </div>
        <div className="form-group">
          <label htmlFor="feedback">Your Feedback</label>
          <textarea ref={feedbackInput} row="5" type="feedback" id="feedback" className="form-control" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default FeedbackForm