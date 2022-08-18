import fs from "fs/promises"
import Link from "next/link"
import path from "path"
export default function Home(props) {
  const {products} = props
  // console.log(products)
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}><Link href={`/${product.id}`}><a>
          {product.title}
          </a></Link></li>
      ))}
    </ul>
  )
}

export async function getStaticProps(){
  const filePath = path.join(process.cwd() , 'data' , 'dummy-backend.json')
  const jsonData = await fs.readFile(filePath)
  const {products} = JSON.parse(jsonData)
  // console.log("data" , products.length)
  if(!products){
    return {
      redirect: {  // if api did not fetch any data, than we can redirect it to another page
        destination: "/no-data"
      }
    }
  }
  if(products.length === 0){
    return {
      notFound: true 
    }
  }
  return {
    props: {
      products
    },
    // revalidate: 10 // incremental static generation
  }
}