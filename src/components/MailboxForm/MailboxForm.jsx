import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MailboxForm({ addBox }) {
  const [boxOwner, setBoxOwner] = useState("");
  const [boxSize, setBoxSize] = useState("Small");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBox = { boxOwner, boxSize };
    addBox(newBox);
    navigate("/mailboxes");
  };

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Box Owner:
          <input
            type="text"
            value={boxOwner}
            onChange={(e) => setBoxOwner(e.target.value)}
            required
          />
        </label>

        <label>
          Box Size:
          <select
            value={boxSize}
            onChange={(e) => setBoxSize(e.target.value)}
          >
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </label>

        <button type="submit">Add Mailbox</button>
      </form>
    </main>
  );
}

export default MailboxForm;