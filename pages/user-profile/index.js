export default function UserProfile(props) {

    return (
        <h1>{props.username}</h1>
    )
}

export async function getServerSideProps(context){
    // this function is used to actually get the requests of server like getting cookies or headers. this is not pre generated. because in advance we dont know which user will be signed up or signed in. 
    //  here we can get the authentican related data of user and can do some type of valication
    const {params, req,res} = context;

    console.log("server side code")
    // if the data is highly volatile which will be changed so often, than we can go with this function. the only thing will  matter is the timing response of this function. we can simple get the volatile data from server and will pass it to the component by using props.
    //  with this function we dont need any type of pregenerated paths or props
    return {
        props: {
            username: "usman"
        }
    }
}