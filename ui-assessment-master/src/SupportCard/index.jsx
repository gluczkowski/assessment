import styles from "./SupportCard.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


export default function SupportCard({ data }) {
    
    return (
        <div aria-labelledby="support-contact" className={styles.wrapper}>
            <p className={styles.heading}><b>YOUR FEEFO SUPPORT CONTACT</b></p>
            <div className={styles.contentinfo}>
                <div className={styles.contactinitial}>{data.supportContact.name.charAt(0)}</div>
                <div className={styles.contactsupport}>
                    <span ><strong>{data.supportContact.name}</strong></span>
                    <span className={styles.email}><FontAwesomeIcon icon={faEnvelope} color='#606060' style={{ marginRight: '0.5em' }} />
                        {data.supportContact.email} {data.supportContact.phone ? data.supportContact.phone : null}
                    </span>
                </div>
            </div>
        </div>

    );
};