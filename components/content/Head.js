import Head from 'next/head'

const HeadTag = ({title="Nextjs Events", name="A very special event" , content= "A lot of events that will help you to evolve"}) => {
  return (
    <Head>
    <title>{title}</title>
    <meta name={name} content={content} />
  </Head>
  )
}

export default HeadTag