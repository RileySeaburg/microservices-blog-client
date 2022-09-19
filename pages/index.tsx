import type { NextPage } from 'next'
import Head from 'next/head'
import CreatePost from '../components/createPost'
import Posts from '../components/Posts'


const Home: NextPage = () => {

  return (
    <div className="{styles.container}">
      <Head>
        <title>Blog</title>
        <meta name="description" content="Basic Blog" />

      </Head>

      <main className="">
        <CreatePost />
        {/* If there are posts render them in a 2x2 grid with a comment box*/}
        <Posts />
      </main >

      <footer className="">

      </footer>
    </div >
  )
}

export default Home
