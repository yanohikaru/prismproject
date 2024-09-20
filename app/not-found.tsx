import styles from "./not-found.module.css";

export default function Notfound () {
    return (
        <div className={styles.container}>
            <dl>
                <dt className={styles.title}>ページが見つかりませんでした</dt>
                <dd className={styles.text}>このページは存在しません。<br />URLを再度ご確認ください。</dd>
            </dl>
        </div>
    );
}