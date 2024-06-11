import ContactCard from "../ContactCard";
import SupportCard from "../SupportCard";
import styles from "./CardHeadSupport.module.css";

export default function CardHeadSupport({ data }) {
    return (
        <div className={styles.wrapper} role="region" aria-label="Support Section">
            <div className={styles.content}>
                <ContactCard aria-labelledby="contact-card-heading"/>
                <SupportCard data={data} aria-labelledby="support-card-heading"/>
            </div>
        </div>
    )
};