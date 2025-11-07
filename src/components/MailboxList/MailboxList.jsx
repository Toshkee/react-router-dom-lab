import { Link } from "react-router-dom";
import "./MailboxList.css";

function MailboxList({ mailboxes }) {
  return (
    <main>
      <h2>Mailboxes</h2>
      <div className="mailbox-list">
        {mailboxes.map((mailbox) => (
          <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`}>
            <div className="mail-box">
              <p>Box #{mailbox._id}</p>
            </div>
          </Link>
        ))}

        {mailboxes.length === 0 && <p>No mailboxes yet. Add one!</p>}
      </div>
    </main>
  );
}

export default MailboxList;