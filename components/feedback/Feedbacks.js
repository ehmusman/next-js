import Feedback from "./Feedback"

const Feedbacks = ({ feedbacks }) => {
  return (
    <>
      <div className="container">
        {feedbacks && feedbacks.length ? <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Email</th>
                <th scope="col">Feedback</th>
                <th scope="col">Route</th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((fb, i)=> (
                <Feedback feedback={fb} i={i} key={fb.id} />
              ))}
            </tbody>
          </table>
        </> : <div className="alert alert-danger">No Feedbacks are available</div>}
      </div>
    </>
  )
}

export default Feedbacks