import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import './SpacecraftCard.css';

export default function SpacecraftCard({ id, name, capacity, status, location, onDecommission }) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p><strong>Capacity:</strong> {capacity}</p>
            <p><strong>Status:</strong> {status}</p>
            <p><strong>Location:</strong> {location}</p>

            {/* Link to detail page */}
       <Link to={`/spacecrafts/${id}`} style={{ marginRight: '1rem'}}>
       View Details
       </Link>
<button onClick={() => onDecommission(id)}
    style={{
        backgroundColor: "red",
        color: "white",
        border: "none",
        padding: "0.5rem 1rem",
        borderRadius: "4px",
        cursor: "pointer"
    }}
    >
    Decommission
    </button>

                    </div>
    );
        }

        SpacecraftCard.propTypes = {
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            capacity: PropTypes.number.isRequired,
            status: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            onDecommission: PropTypes.func.isRequired,
        };
