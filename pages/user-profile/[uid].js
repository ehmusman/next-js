function UserPage(props){
    return <h1>{props.id}</h1>
}
export default UserPage

export async function getServerSideProps(context){
    const {params} = context

    const userId = params.uid

    return {
        props: {
            id: "userId-"+userId
        }
    }
}