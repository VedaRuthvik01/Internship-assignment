# Internship-assignment
Internship assignment
# Internship Assignment: Task Manager Application

## Project Overview
This project is a React-based Task Manager application developed as part of an internship assignment. It includes a header, a form to add tasks, and a dynamic task list, with a focus on responsiveness and interactivity.

## Project Structure
Great! Since you’ve confirmed with "Yes," I assume you’re ready to proceed with the files and instructions provided. I’ll ensure everything is clear and provide a final checklist to help you download, organize, and upload the files to GitHub for submission. Below, I’ll re-iterate the files and add a detailed checklist with step-by-step actions to make the process smooth.

internship-assignment/
├── src/
│   ├── components/
│   │   ├── Header.js        # Reusable header component
│   │   ├── Form.js          # Form component for adding tasks
│   │   └── List.js          # Component to display the task list
│   ├── App.js               # Main application component
│   ├── App.css              # Global styles with media queries
│   ├── index.js             # Entry point
│   └── ...
├── package.json             # Project dependencies
└── README.md                # This document
```

## Component Hierarchy
- `App`
  - `Header` (Displays the application title)
  - `Form` (Handles task input and submission)
  - `List` (Displays and updates the task list)

## Functionality
- Users can enter tasks in the form and submit them.
- Submitted tasks are added to the list dynamically.
- The application is responsive, adjusting layout for screens below 600px.
- Basic error handling prevents empty task submissions.

## Challenges Faced
1. **Responsiveness**: Ensuring the form and list adjust properly for mobile screens required careful use of CSS flexbox and media queries.
2. **State Management**: Initial synchronization between `Form` and `List` components was challenging but resolved using props and `useState`.
3. **Styling Accuracy**: Matching Figma-like precision without the design file was approximated using inline styles and basic CSS.

## Installation
1. Clone the repository: `git clone https://github.com/VedaRuthvik01/internship-assignment.git`
2. Navigate to the directory: `cd internship-assignment`
3. Install dependencies: `npm install`
4. Start the application: `npm start`

## Future Improvements 
- Integrate a real API for task persistence.
- Add task deletion and editing functionality.
- Enhance styling with a CSS framework (e.g., Tailwind CSS).

## Submission
- GitHub Repository: [https://github.com/your-username/internship-assignment](https://github.com/VedaRuthvik01/internship-assignment)
- Submitted by: Veda Ruthvik
