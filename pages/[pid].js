import fs from "fs/promises"
import path from "path"
export default function ProductDetailedPage(props) {
    const {loadedProduct} = props
    if(!loadedProduct){
        return <h1>Loading..............</h1>
    }
    return <>
    <h1>{loadedProduct.title}</h1>
    <p>{loadedProduct.description}</p>
    </>
}

async function getData(){
    const filePath = path.join(process.cwd() , 'data' , 'dummy-backend.json')
    const jsonData = await fs.readFile(filePath)
    const {products} = JSON.parse(jsonData)
    return products
}
export async function getStaticProps(context){
    const {params} = context
    const productId = params.pid
    const products = await getData()
    const product = products.find(product => product.id === productId)
    
    if(!product){
        return {notFound: true}
    }
    return {
        props: {
            loadedProduct: product
        }
    }
}
export async function getStaticPaths(){
    const products = await getData()
    const ids = products.map(product => ({
        params: {pid: product.id}
    }))

    return {
        paths: ids,
        fallback: true // false shows that all the listed pages should be pre generated.
        // true, will show that only listed pages should be pregenerated, and all other pages may b generated when there will be a request for that page. 
        // this is helpfull when our blog has a log of pages like 100 or thousands.
        // than the most visited pages will be listed here and fallback turned to true. if there will be a request for other page, than next js under the hood will fetch data for that. 
    }
}