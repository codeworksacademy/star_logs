# Lecture: Star_Logs 🌌

## Lecture Goals

In this lecture, students will learn to:
* Build a **multi-component React application** that tracks logs for different starships.
* Use **state management** with `useState` to manage ships, logs, and filtering.
* Pass data and functions via **props** to create reusable and modular components.
* Implement **dynamic filtering** to allow users to filter logs by criteria such as ships, species encountered, or mechanical needs.
* Handle **forms and events** to create, update, and delete logs.
* Explore advanced features such as sorting, tag-based filtering, and statistics.

### Project Overview

The **Star Logs Application** allows crew members to:
1. Manage logs for different starships.
2. Record details about missions, mechanical issues, or first-contact species.
3. Filter logs based on various criteria (e.g., ship, species encountered, mechanical needs).
4. Track statistics such as total logs per ship and species encountered.

## Step 1: Setting Up the Project

### Basic Setup

```bash
npm create vite@latest star_logs
cd star_logs
npm start
```

## Step 2: Define the Data Structure

### Logs and Ships

We will use the following data structure:
* **Ship**: Each starship has a name, class, and registry number.
* **Log**: Each log entry includes the associated ship, a mission summary, type (e.g., Species Encountered, Mechanical Issue), and an optional tag.

Example:

```jsx
const ships = [
    { id: 1, name: "USS Enterprise", class: "Constitution", registry: "NCC-1701" },
    { id: 2, name: "USS Voyager", class: "Intrepid", registry: "NCC-74656" },
];

const logs = [
    { 
        id: 1, 
        shipId: 1, 
        summary: "Encountered a Klingon battlecruiser near the Neutral Zone.", 
        type: "Species Encountered", 
        tag: "Klingon" 
    },
    { 
        id: 2, 
        shipId: 2, 
        summary: "Warp core malfunction requiring immediate attention.", 
        type: "Mechanical Issue", 
        tag: "Warp Core" 
    },
];
```

## Step 3: Create the Main Components

### `ShipSelector` Component

Allows the user to select a starship to filter logs.

```jsx
function ShipSelector({ ships, selectedShip, onSelectShip }) {
    return (
        <select value={selectedShip} onChange={(e) => onSelectShip(e.target.value)}>
            <option value="all">All Ships</option>
            {ships.map((ship) => (
                <option key={ship.id} value={ship.id}>
                    {ship.name} ({ship.registry})
                </option>
            ))}
        </select>
    );
}
```

### `Log` Component

Displays a single log entry.

```jsx
function Log({ log, shipName }) {
    return (
        <div className="log-entry">
            <h4>{log.type} - {shipName}</h4>
            <p>{log.summary}</p>
            <span className="log-tag">Tag: {log.tag}</span>
        </div>
    );
}
```

### `LogList` Component

Displays logs filtered by selected criteria.

```jsx
function LogList({ logs, ships, filters }) {
    const filteredLogs = logs.filter((log) => {
        if (filters.shipId !== "all" && log.shipId !== parseInt(filters.shipId)) return false;
        if (filters.type && log.type !== filters.type) return false;
        if (filters.tag && log.tag !== filters.tag) return false;
        return true;
    });

    return (
        <div>
            {filteredLogs.map((log) => {
                const ship = ships.find((ship) => ship.id === log.shipId);
                return <Log key={log.id} log={log} shipName={ship.name} />;
            })}
        </div>
    );
}
```

### `LogFilter` Component

Allows filtering by log type and tag.

```jsx
function LogFilter({ filters, setFilters }) {
    function handleChange(e) {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    }

    return (
        <div>
            <label>
                Type:
                <select name="type" value={filters.type} onChange={handleChange}>
                    <option value="">All Types</option>
                    <option value="Species Encountered">Species Encountered</option>
                    <option value="Mechanical Issue">Mechanical Issue</option>
                </select>
            </label>
            <label>
                Tag:
                <input 
                    name="tag" 
                    type="text" 
                    value={filters.tag} 
                    onChange={handleChange} 
                    placeholder="Search by Tag" 
                />
            </label>
        </div>
    );
}
```

## Step 4: Integrate Components in `App.js`

Bring everything together.

```jsx
import React, { useState } from "react";
import ShipSelector from "./ShipSelector";
import LogList from "./LogList";
import LogFilter from "./LogFilter";

function App() {
    const [selectedShip, setSelectedShip] = useState("all");
    const [filters, setFilters] = useState({ type: "", tag: "" });

    return (
        <div>
            <h1>Star Logs</h1>
            <ShipSelector
                ships={ships}
                selectedShip={selectedShip}
                onSelectShip={setSelectedShip}
            />
            <LogFilter filters={filters} setFilters={setFilters} />
            <LogList logs={logs} ships={ships} filters={{ ...filters, shipId: selectedShip }} />
        </div>
    );
}

export default App;
```

## Step 5: Advanced Features

### Add Statistics

Show statistics for the logs, such as the total number of logs per ship and the total number of unique species encountered.

```jsx
function Statistics({ logs, ships }) {
    const logCounts = ships.map((ship) => ({
        shipName: ship.name,
        count: logs.filter((log) => log.shipId === ship.id).length,
    }));

    const uniqueTags = [...new Set(logs.map((log) => log.tag))];

    return (
        <div>
            <h3>Statistics</h3>
            <ul>
                {logCounts.map(({ shipName, count }) => (
                    <li key={shipName}>{shipName}: {count} logs</li>
                ))}
            </ul>
            <p>Unique Tags Encountered: {uniqueTags.length}</p>
        </div>
    );
}
```

### Add Sorting

Allow users to sort logs by date, type, or tag.

```jsx
function LogSorter({ setSortOption }) {
    return (
        <select onChange={(e) => setSortOption(e.target.value)}>
            <option value="date">Date</option>
            <option value="type">Type</option>
            <option value="tag">Tag</option>
        </select>
    );
}
```