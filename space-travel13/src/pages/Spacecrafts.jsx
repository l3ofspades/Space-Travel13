import { useState, useEffect, useContext } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import SpacecraftCard from "../components/SpacecraftCard";
import { SpacecraftContext } from "../context/SpacecraftContext";
import './Spacecrafts.css';

export default function Spacecrafts() {
  const { spacecrafts, addSpacecraft, decommission } = useContext(SpacecraftContext);
  const [loading, setLoading] = useState(true);

  const [newSpacecraft, setNewSpacecraft] = useState({
    name: "",
    capacity: "",
    status: "Operational",
    planet: "Earth",
    log: ["[INFO] Spacecraft initialized..."]
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSpacecraft(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = spacecrafts.length ? Math.max(...spacecrafts.map(sc => sc.id)) + 1 : 1;
    const spacecraftToAdd = {
      ...newSpacecraft,
      id,
      capacity: parseInt(newSpacecraft.capacity),
      log: [...newSpacecraft.log, `[INFO] ${newSpacecraft.name} created at ${newSpacecraft.planet}`]
    };
    addSpacecraft(spacecraftToAdd);
    setNewSpacecraft({
      name: "",
      capacity: "",
      status: "Operational",
      planet: "Earth",
      log: ["[INFO] Spacecraft initialized..."]
    });
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="spacecrafts-container">
      <div className="spacecrafts-box">
        <h1 className="page-title">🚀 Spacecrafts</h1>

        <form onSubmit={handleSubmit} className="add-spacecraft-form">
          <input type="text" name="name" placeholder="Name" value={newSpacecraft.name} onChange={handleChange} required />
          <input type="number" name="capacity" placeholder="Capacity" value={newSpacecraft.capacity} onChange={handleChange} required />
          <select name="status" value={newSpacecraft.status} onChange={handleChange}>
            <option value="Operational">Operational</option>
            <option value="In Transit">In Transit</option>
            <option value="Maintenance">Maintenance</option>
          </select>
          <select name="planet" value={newSpacecraft.planet} onChange={handleChange}>
            <option value="Earth">Earth</option>
            <option value="Mars">Mars</option>
            <option value="Jupiter">Jupiter</option>
          </select>
          <button type="submit">Add Spacecraft</button>
        </form>

        {spacecrafts.map(sc => (
          <SpacecraftCard
            key={sc.id}
            id={sc.id}
            name={sc.name}
            capacity={sc.capacity}
            status={sc.status}
            location={sc.planet}
            onDecommission={decommission}
          />
        ))}
      </div>
    </div>
  );
}
