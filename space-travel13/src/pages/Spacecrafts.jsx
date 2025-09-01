// src/pages/Spacecrafts.jsx
import { useState, useEffect, useContext } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import SpacecraftCard from "../components/SpacecraftCard";
import { SpacecraftContext } from "../context/SpacecraftContext";
import './Spacecrafts.css';

export default function Spacecrafts() {
  const { spacecrafts, setSpacecrafts } = useContext(SpacecraftContext);
  const [loading, setLoading] = useState(true);

  const [newSpacecraft, setNewSpacecraft] = useState({
    name: "",
    capacity: "",
    status: "Operational",
    location: "Earth",
    log: ["[INFO] Spacecraft initialized..."]
  });

  // Simulate fetching delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSpacecraft(prev => ({ ...prev, [name]: value }));
  };

  // Add a new spacecraft
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = spacecrafts.length ? Math.max(...spacecrafts.map(sc => sc.id)) + 1 : 1;
    const newSc = {
      ...newSpacecraft,
      id,
      capacity: parseInt(newSpacecraft.capacity),
      log: [...newSpacecraft.log, `[INFO] ${newSpacecraft.name} created at ${newSpacecraft.location}`]
    };

    setSpacecrafts([...spacecrafts, newSc]);
    setNewSpacecraft({
      name: "",
      capacity: "",
      status: "Operational",
      location: "Earth",
      log: ["[INFO] Spacecraft initialized..."]
    });
  };

  // Decommission a spacecraft
  const handleDecommission = (id) => {
    setSpacecrafts(spacecrafts.filter(sc => sc.id !== id));
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="page-container">
      <h1 className="page-title">🚀 Spacecrafts</h1>

     
      <form onSubmit={handleSubmit} className="add-spacecraft-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newSpacecraft.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="capacity"
          placeholder="Capacity"
          value={newSpacecraft.capacity}
          onChange={handleChange}
          required
        />
        <select name="status" value={newSpacecraft.status} onChange={handleChange}>
          <option value="Operational">Operational</option>
          <option value="In Transit">In Transit</option>
          <option value="Maintenance">Maintenance</option>
        </select>
        <select name="location" value={newSpacecraft.location} onChange={handleChange}>
          <option value="Earth">Earth</option>
          <option value="Mars">Mars</option>
          <option value="Jupiter">Jupiter</option>
        </select>
        <button type="submit">Add Spacecraft</button>
      </form>

      {/* Spacecraft Cards */}
      {spacecrafts.map(sc => (
        <SpacecraftCard
          key={sc.id}
          id={sc.id}
          name={sc.name}
          capacity={sc.capacity}
          status={sc.status}
          location={sc.location}
          onDecommission={handleDecommission}
        />
      ))}
    </div>
  );
}
