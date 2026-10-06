# 📚 VITLib — Library Management & Circulation System

> **Every book, borrower & due date — on one shelf.**

VITLib is a modern, interactive **Library Management and Circulation System** designed to simplify the management of books, members, borrowing records, returns, availability, and library activity.

The project provides separate experiences for **Library Members** and **Librarians**, along with an interactive **Book Advisor & Review Assistant** that helps users discover books, check availability, and get recommendations.

---

##  Features

###  1. Smart Book Catalog

Users can browse the complete library collection and search for books using:

* Book title
* Author
* ISBN
* Call number
* Description / topic
* Genre

Available genre filters include:

* Fiction
*  Science
*  Biography
*  Reference

The catalog dynamically updates based on search and filter selections.

---

###  2. Member Authentication

Members can:

* Create a new library account
* Sign in using their credentials
* View their member/card information
* Browse available books
* Borrow available books
* View active loans
* Return borrowed books
* View their previous borrowing history
* Sign out of their account

The interface changes automatically depending on the currently authenticated role.

---

###  3. Librarian / Staff Portal

Librarians have additional administrative privileges.

They can:

* Sign in through the Staff Portal
* Add new books to the catalog
* Remove books from the catalog
* Change book availability
* Mark books as available, on loan, or reserved
* Monitor circulation activity
* Manage catalog records

The librarian interface exposes additional catalog controls that are hidden from regular members.

---

###  4. Book Borrowing System

A member can select an available book and initiate the borrowing process.

When a book is borrowed:

1. The book's status changes to **ON LOAN**.
2. A loan record is created.
3. The member's information is associated with the loan.
4. A due date is automatically calculated.
5. The circulation desk activity is updated.
6. The statistics are refreshed.
7. The book appears in the member's personal borrowing shelf.

The current implementation uses a **14-day loan period**.

---

###  5. Book Return System

Members can return books from their **My Borrowed Books & History** section.

When a book is returned:

* The loan status changes to `RETURNED`
* The return date is recorded
* The corresponding book becomes available again
* The circulation activity is updated
* The catalog is refreshed
* The loan history is updated
* Library statistics are recalculated

---

###  6. Loan History Ledger

VITLib maintains a global loan ledger containing information such as:

* Book title
* Borrower
* Checkout date
* Due date
* Return date
* Loan status

This provides an archival view of circulation activity.

---

###  7. Live Circulation Desk

The homepage contains a **Circulation Desk — Live Dispatch** section.

It displays recent library activity such as:

* CHECKED OUT
* RETURNED
* RESERVED
* CATALOGUED
* Other catalog/status changes

The activity feed is updated whenever important library operations occur.

---

###  8. Dynamic Library Statistics

The application displays dynamically calculated statistics including:

* Total titles in the catalog
* Books currently available
* Active loans and reservations
* Registered members

These values update when books or loans are changed.

---

###  9. Book Advisor & Review Assistant

VITLib includes an interactive **Book Advisor named Libby**.

Users can ask questions about the library collection, including:

* Book reviews
* Book opinions
* Genre recommendations
* Book availability
* Borrowing rules
* Specific titles

Example questions:

```text
What are the reviews for The Midnight Library?

Recommend me a good science book

Which books are available to borrow right now?

Opinions on The Great Gatsby

How do I borrow books and return them?
```

The Book Advisor can provide catalog information, ratings, reviews, availability, and genre-based recommendations.

> **Note:** The current Book Advisor is implemented in JavaScript using predefined catalog data and keyword-based response logic. It does not call an external AI API.

---

###  10. Persistent Browser Storage

VITLib uses the browser's **Local Storage** to preserve application state.

The application stores information such as:

```text
vitlib_books
vitlib_members
vitlib_librarians
vitlib_loans
vitlib_desk_activity
vitlib_current_user
```

This means changes made during a session can persist after refreshing the webpage in the same browser.

---

###  11. Responsive & Modern UI

The interface uses a custom library-inspired visual design featuring:

* Dark green library theme
* Brass/gold accent colors
* Serif display typography
* Responsive layouts
* Cards and status badges
* Modal dialogs
* Toast notifications
* Interactive navigation
* Mobile navigation support
* Accessible focus states

The stylesheet defines the project's design tokens, typography, colors, spacing, shadows, buttons, badges, navigation, hero section, catalog components, and responsive interface.

---

#  Technologies Used

| Technology            | Purpose                                              |
| --------------------- | ---------------------------------------------------- |
| **HTML5**             | Structure and content of the application             |
| **CSS3**              | Styling, responsive layout and visual design         |
| **JavaScript (ES6+)** | Application logic and interactivity                  |
| **LocalStorage API**  | Persistent browser-side data storage                 |
| **Google Fonts**      | Fraunces, Source Sans 3 and Special Elite typography |
| **SVG**               | Icons and interface graphics                         |

The HTML imports the three Google font families and connects the application to `Style.css` and `lib.js`.

---

#  Project Structure

```text
VITLib/
│
├── index.html       # Main application interface
├── Style.css        # Complete application styling
├── lib.js           # Application logic and data management
└── README.md        # Project documentation
```

### `index.html`

Contains the main structure of the application, including:

* Navigation
* Circulation desk
* Search interface
* Catalog
* Member section
* Loan history
* Authentication modals
* Librarian interface
* Book Advisor interface
* Footer

The catalog, loan ledger and other dynamic sections are populated by JavaScript.

### `Style.css`

Contains the complete visual system for VITLib, including:

* Color variables
* Typography
* Buttons
* Navigation
* Cards
* Catalog styling
* Modals
* Chat interface
* Responsive layouts
* Animations

The project uses custom design tokens such as `--ink`, `--paper`, `--brass`, `--maroon`, and `--forest`.

### `lib.js`

Contains the application's main functionality, including:

* Book data
* Member data
* Librarian data
* Loan records
* Authentication
* Catalog rendering
* Search/filtering
* Borrowing
* Returning
* Librarian management
* Statistics
* Circulation activity
* LocalStorage persistence
* Book Advisor

The initial catalog contains **12 books** across fiction, science, biography and reference categories.

---

#  How to Run the Project

VITLib is a client-side web application, so no package installation or backend server is required for the current version.

## Option 1 — Open Directly

1. Download or clone the repository.

2. Make sure these files are in the same folder:

```text
index.html
Style.css
lib.js
```

3. Open:

```text
index.html
```

in a modern web browser.

4. The application should load automatically.

---

## Option 2 — Run Using VS Code

If you are using Visual Studio Code:

1. Open the VITLib project folder.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select:

```text
Open with Live Server
```

5. The application will open in your browser.

---

# Demo Accounts

The current project contains pre-seeded demo accounts for testing.

### Member

```text
Name:     Alex Sharma
Email:    alex.sharma@vitlib.edu
Password: user123
Card ID:   VIT-STD-8842
```

### Librarian

```text
Name:     Dr. Eleanor Vance
Email:    librarian@vitlib.edu
Password: admin123
Staff ID:  VIT-STAFF-01
```

These accounts are defined directly in the application's initial JavaScript data.

 **Security Note:** These credentials are intended only for project demonstration. They should not be used in a real production system.

# Suggested Demo Flow

For a project presentation or viva, the following sequence demonstrates most of the application's functionality.

### Step 1 — Explore as Guest

Open the website and demonstrate:

* Homepage
* Circulation desk
* Library statistics
* Catalog
* Genre filters
* Search functionality
* Loan ledger
* Book Advisor

---

### Step 2 — Login as Member

Use:

```text
alex.sharma@vitlib.edu
user123
```

Then demonstrate:

1. Member authentication
2. Member badge
3. My Borrowed Books section
4. Selecting an available book
5. Borrowing the book
6. Automatically generated due date
7. Updated catalog status
8. Updated circulation activity
   

### Step 3 — Return a Book

From **My Borrowed Books**:

1. Select an active loan.
2. Click return.
3. Show that the book becomes available.
4. Show the updated return date.
5. Show the updated loan history.


### Step 4 — Login as Librarian

Sign out and use:

```text
librarian@vitlib.edu
admin123
```

Demonstrate:

* Librarian mode
* Catalog management
* Availability controls
* Adding a new title
* Removing a title
* Updated statistics
* Updated circulation activity


### Step 5 — Demonstrate Book Advisor

Open **Book Advisor** and try:

```text
Recommend me a good science book
```

Then:

```text
What are the reviews for The Midnight Library?
```

And:

```text
Which books are available to borrow right now?
```

This demonstrates the project's recommendation and catalog-query functionality.


# Initial Library Collection

The project starts with a sample catalog containing books such as:

| Book                                             | Author                      | Category  |
| ------------------------------------------------ | --------------------------- | --------- |
| The Midnight Library                             | Matt Haig                   | Fiction   |
| The Great Gatsby                                 | F. Scott Fitzgerald         | Fiction   |
| Pride and Prejudice                              | Jane Austen                 | Fiction   |
| Data Structures & Algorithms in Java             | Michael T. Goodrich         | Science   |
| A Brief History of Time                          | Stephen Hawking             | Science   |
| The Selfish Gene                                 | Richard Dawkins             | Science   |
| Ada Lovelace: The Making of a Computer Scientist | Christopher Hollings        | Biography |
| Steve Jobs                                       | Walter Isaacson             | Biography |
| The Story of My Experiments with Truth           | Mahatma Gandhi              | Biography |
| The World Atlas                                  | National Geographic         | Reference |
| Oxford English Dictionary                        | Oxford University Press     | Reference |
| The Chicago Manual of Style                      | University of Chicago Press | Reference |

The catalog data also includes ISBNs, call numbers, availability status, ratings, descriptions and review information.


# Application Workflow

```text
                    ┌──────────────────┐
                    │     VITLib       │
                    │ Library System    │
                    └────────┬─────────┘
                             │
              ┌──────────────┴──────────────┐
              │                             │
        ┌─────▼─────┐                 ┌─────▼─────┐
        │   Member  │                 │ Librarian │
        └─────┬─────┘                 └─────┬─────┘
              │                             │
       ┌──────▼──────┐              ┌───────▼───────┐
       │Browse/Search│              │ Manage Catalog │
       └──────┬──────┘              └───────┬───────┘
              │                             │
       ┌──────▼──────┐              ┌───────▼───────┐
       │Borrow Book  │              │ Add / Remove  │
       └──────┬──────┘              │ / Update Book │
              │                     └───────────────┘
       ┌──────▼──────┐
       │ Active Loan │
       └──────┬──────┘
              │
       ┌──────▼──────┐
       │Return Book  │
       └──────┬──────┘
              │
       ┌──────▼──────────┐
       │ Loan History    │
       └─────────────────┘
```


# Application Architecture

The current project follows a simple client-side architecture:

```text
HTML
 │
 │ Structure
 ▼
index.html
 │
 ├───────────────┐
 │               │
 ▼               ▼
CSS             JavaScript
 │               │
 │               ├── Application State
 │               ├── Authentication
 │               ├── Catalog
 │               ├── Borrowing
 │               ├── Returns
 │               ├── Librarian Controls
 │               ├── Loan History
 │               └── Book Advisor
 │
 ▼               ▼
User Interface ← LocalStorage
```

Application state is initialized from predefined data and subsequently retrieved from browser Local Storage when available.


#  Current Limitations

The current version is designed primarily as a **frontend academic/project demonstration**.

It does not currently include:

* A real SQL database
* A backend server
* Server-side authentication
* Password hashing
* Multi-user synchronization
* Cloud database storage
* Real external AI API integration
* Real email notifications
* Production-level authorization/security

Instead, application data is stored locally in the user's browser using Local Storage.

This makes the project easy to demonstrate and run without server configuration, while leaving room for a future backend/database implementation.


#  Future Improvements

Possible future versions could include:

*  MySQL / PostgreSQL / Oracle database integration
*  Secure backend authentication
*  Password hashing and session management
*  Advanced librarian dashboard
*  Automatic due-date email notifications
*  Overdue-book tracking and fine calculation
*  Progressive Web App support
*  Cloud database synchronization
*  Integration with a real AI API
*  Advanced analytics and reports
*  Book reservation/waitlist system
*  Student-specific borrowing limits
*  Advanced multi-field catalog search


#  Project Roles

The system is designed around two primary roles:

### Member

Members are responsible for:

* Searching the catalog
* Viewing books
* Borrowing books
* Returning books
* Viewing their borrowing history
* Using the Book Advisor

### Librarian

Librarians are responsible for:

* Managing the catalog
* Adding books
* Removing books
* Updating availability
* Monitoring circulation activity
* Maintaining library records

The application dynamically changes the interface according to the logged-in user's role.


#  Project Status

**Status:** Functional Academic Project

**Current Version:** `1.0`

**Platform:** Web Browser

**Architecture:** Client-Side Web Application

**Storage:** Browser LocalStorage


# License

This project was developed for **academic/educational purposes** as a Library Management System project.

You may modify and extend the project for learning and educational use.


##  Acknowledgement

Built as an academic project to demonstrate the practical application of:

* HTML
* CSS
* JavaScript
* Client-side state management
* Authentication and role-based interfaces
* CRUD-style catalog operations
* Library circulation workflows
* Interactive user interfaces


**VITLib — Making every volume, reader, and circulation record easier to manage.**
