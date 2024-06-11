import ContactCard from "../ContactCard";
import SupportCard from "../SupportCard";
import styles from "./CardHeadSupport.module.css";

export default function CardHeadSupport({ data }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <ContactCard />
                <SupportCard data={data} />
            </div>
        </div>
    )
};