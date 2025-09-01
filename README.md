# Space-Travel Application

## Overview
Space-Travel is a React application for managing spacecrafts and planets. Users can view spacecraft details, add new spacecrafts, decommission existing ones, and dispatch spacecrafts between planets. The app demonstrates React fundamentals, state management, routing, forms, and testing with React Testing Library.

## Folder Structure
/src
/Components # Reusable UI components
/Context # React Contexts for state management
/Pages # Pages (Home, Spacecrafts, Planets, Spacecraft Detail)
/Routes # React Router configuration
/Services # API or helper services
/Tests # Unit tests using Vitest & React Testing Library


## Pages and Features

### Home Page
- Overview of the application’s functionality
- Visually appealing layout

### Spacecrafts Page
- Displays all spacecrafts
- Features:
  - Viewing specific spacecraft details
  - Adding a new spacecraft
  - Decommissioning a spacecraft

### Spacecraft Detail Page
- Shows detailed information about a particular spacecraft

### Planets Page
- List of all planets
- Displays spacecrafts stationed on each planet
- Dispatch spacecrafts to different planets ensuring no same-location dispatch

### Loading Component
- Provides visual feedback during data fetching or background processes

### Routing
- Undefined routes redirect to the Home Page for a seamless experience

## State Management
- Uses React Context API for global state
- State is lifted to a common ancestor when necessary

## Props & Event Handling
- Data passed through props with validation
- Forms and buttons handle user interactions properly

## Forms
- Inputs manage state and validate user data
- Feedback provided for errors

## Testing
- Uses React Testing Library and Vitest
- Tests cover:
  - Page rendering
  - Adding and decommissioning spacecrafts
  - Displaying spacecrafts on planets
  - Dispatch functionality

## Running the Application

1. Install dependencies:
```bash
npm install

