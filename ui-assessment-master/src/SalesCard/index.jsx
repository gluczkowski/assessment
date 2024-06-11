import Card from "../Card";
import styles from "./SalesCard.module.css";
import './styles.css'
import { fromTimestampToDate } from './../Utils/Utils'

import { faInfoCircle, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SalesCard({ children, data }) {

  return (
    <Card>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.headingWrapper}>
            <FontAwesomeIcon icon={faUpload} color="#3eb1eb" />
            <h2 className={styles.heading}>Sales</h2>
          </div>
          <div className='tooltip'>
            <FontAwesomeIcon icon={faInfoCircle} color="#bfbbbb" />
            <span className="tooltiptext">The last upload was {fromTimestampToDate(data.lastUploadDate)} you sent the total of {data.uploads} uploads and {data.linesAttempted} lines attempted.
            </span>
          </div>
        </div>

        <p className={styles.description}>
          You had <span data-testid="boldText"><b>{data.successfulUploads} uploads</b></span> and <b>{data.linesSaved}</b> lines added.
        </p>
      </div>
      <div className={styles.content}>{children}</div>
    </Card>
  );
}
