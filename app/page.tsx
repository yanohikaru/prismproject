import styles from "./page.module.css";
import Image from "next/image";
import NewsList from "@/app/_components/NewsList";
import ButtonLink from "@/app/_components/ButtonLink/";
import {News} from "@/app/_libs/microcms";

const data: {
  contents: News[];
} = {
  contents: [
    {
      id: "1",
      title: "福岡にオフィスを開設しました。",
      category: {
        name: "更新情報",
      },
      publishedAt: "2024/09/18",
      createdAt: "2024/09/18",
    },
    {
      id: "2",
      title: "当社CEOが業界リーダーに専任されました。",
      category: {
        name: "更新情報",
      },
      publishedAt: "2024/09/19",
      createdAt: "2024/09/19",
    },
    {
      id: "3",
      title: "ここからテスト用の記事になります。",
      category: {
        name: "更新情報",
      },
      publishedAt: "2024/09/20",
      createdAt: "2024/09/20",
    },
  ],
};

export default function Home() {
  const slicedata = data.contents.slice(0, 2);
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={styles.description}>
            私たちは市場をリードしているグローバルテックカンパニーです。
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newstitle}>News</h2>
        <NewsList news={slicedata} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
    </>
  );
}
