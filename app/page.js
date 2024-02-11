import Image from "next/image";
import styles from "./page.module.css";
import prisma from "@/lib/prisma";
import Post from "./components/Post";
import Link from "next/link";

async function getPosts() {
  const post = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return post;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className={styles.main}>
      <Link href={"/add-post"}>add post</Link>
      <h1>Feed</h1>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={posts.id}
            title={post.title}
            content={post.content}
            author={post.author.name}
          />
        );
      })}
    </main>
  );
}
