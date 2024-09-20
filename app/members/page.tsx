import Image from "next/image";
import styles from "./page.module.css";

const data = {
  contents: [
    {
      id: "1",
      image: {
        url: "/img-member1.jpg",
        width: 240,
        height: 240,
      },
      name: "デイビット・チャン",
      position: "CEO",
      profile: "ここに個人の経歴や自己紹介がテキストで入ります。",
    },
    {
      id: "2",
      image: {
        url: "/img-member2.jpg",
        width: 240,
        height: 240,
      },
      name: "エミリー・スカーレット",
      position: "COO",
      profile: "ここに個人の経歴や自己紹介がテキストで入ります。",
    },
    {
      id: "3",
      image: {
        url: "/img-member3.jpg",
        width: 240,
        height: 240,
      },
      name: "アダム・ジョン・ウィリアム",
      position: "CSO",
      profile: "ここに個人の経歴や自己紹介がテキストで入ります。",
    },
  ],
};

export default function Page() {
  return (
    <div className="styles.container">
      {data.contents.length === 0 ? (
        <p className="styles.empty">メンバーが登録されていません。</p>
      ) : (
        <ul>
          {data.contents.map((member) => (
            <li key={member.id} className={styles.list}>
              <Image
                src={member.image.url}
                alt=""
                width={member.image.width}
                height={member.image.height}
                className={styles.image}
              />
              <dl>
                <dt className={styles.name}>{member.name}</dt>
                <dt className={styles.position}>{member.position}</dt>
                <dt className={styles.profile}>{member.profile}</dt>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
