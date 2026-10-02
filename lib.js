/* =========================================================
   VITLib — Library Management System
   Comprehensive Application Script & AI Book Advisor
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------------------------------------------------------
     1. STATE & DATA INITIALIZATION
     --------------------------------------------------------- */

  // Initial Book Catalog with enriched reviews, ratings & descriptions
  const initialBooks = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      isbn: "9780525559474",
      genre: "fiction",
      callNumber: "FIC HAI",
      status: "available",
      rating: 4.8,
      description: "Between life and death there is a library where shelves go on forever. Every book provides a chance to try another life you could have lived.",
      reviews: [
        { reviewer: "Sunday Times", quote: "A poignant, uplifting exploration of regret, hope, and what truly makes life fulfilling.", score: 5 },
        { reviewer: "Goodreads Top Reader", quote: "Deeply comforting read with a charming magical realism premise.", score: 4.5 }
      ]
    },
    {
      id: 2,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      isbn: "9780743273565",
      genre: "fiction",
      callNumber: "FIC FIT",
      status: "onloan",
      rating: 4.6,
      description: "The exemplary novel of the Jazz Age, telling the story of mysterious millionaire Jay Gatsby and his obsession with Daisy Buchanan.",
      reviews: [
        { reviewer: "Literary Review", quote: "A lyrical, devastating masterpiece about illusion, decadence, and the American Dream.", score: 5 },
        { reviewer: "Classic Reader", quote: "Every sentence is polished like fine jewelry. Fitzgerald at his absolute pinnacle.", score: 4.5 }
      ]
    },
    {
      id: 3,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      isbn: "9780141439518",
      genre: "fiction",
      callNumber: "FIC AUS",
      status: "available",
      rating: 4.9,
      description: "A sparkling romantic comedy about the turbulent relationship between Elizabeth Bennet and the enigmatic Fitzwilliam Darcy.",
      reviews: [
        { reviewer: "The Guardian", quote: "Timeless wit, flawless irony, and characters that remain alive across centuries.", score: 5 },
        { reviewer: "Bookish Insight", quote: "The ultimate enemies-to-lovers story written with unparalleled elegance.", score: 5 }
      ]
    },
    {
      id: 4,
      title: "Data Structures & Algorithms in Java",
      author: "Michael T. Goodrich",
      isbn: "9781118771334",
      genre: "science",
      callNumber: "SCI GOO",
      status: "available",
      rating: 4.7,
      description: "Authoritative handbook on foundational data structures, algorithmic design patterns, and asymptotic complexity analysis.",
      reviews: [
        { reviewer: "CS Faculty Review", quote: "Essential desk reference for computer science undergraduates and competitive programmers.", score: 5 },
        { reviewer: "Tech Reviewer", quote: "Clear diagrams and rigorous mathematical proofs alongside clean implementations.", score: 4.5 }
      ]
    },
    {
      id: 5,
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      isbn: "9780553380163",
      genre: "science",
      callNumber: "SCI HAW",
      status: "onloan",
      rating: 4.8,
      description: "A landmark volume exploring black holes, space-time singularities, quantum gravity, and the ultimate origins of our universe.",
      reviews: [
        { reviewer: "Scientific American", quote: "Hawking writes with brilliant clarity and good humor about the greatest mysteries of cosmos.", score: 5 }
      ]
    },
    {
      id: 6,
      title: "The Selfish Gene",
      author: "Richard Dawkins",
      isbn: "9780198788607",
      genre: "science",
      callNumber: "SCI DAW",
      status: "available",
      rating: 4.6,
      description: "A revolutionary gene-centric view of evolution that altered biological philosophy and coined the fundamental concept of memes.",
      reviews: [
        { reviewer: "Nature Journal", quote: "Exhilarating intellectual adventure that transformed modern evolutionary biology.", score: 4.5 }
      ]
    },
    {
      id: 7,
      title: "Ada Lovelace: The Making of a Computer Scientist",
      author: "Christopher Hollings",
      isbn: "9780198788874",
      genre: "biography",
      callNumber: "BIO LOV",
      status: "available",
      rating: 4.8,
      description: "Examines Ada Lovelace's mathematical education, her collaboration with Charles Babbage, and the first published computer algorithm.",
      reviews: [
        { reviewer: "History of Science", quote: "Fascinating archival look at the visionary woman who foresaw digital computation.", score: 5 }
      ]
    },
    {
      id: 8,
      title: "Steve Jobs",
      author: "Walter Isaacson",
      isbn: "9781451648539",
      genre: "biography",
      callNumber: "BIO ISA",
      status: "reserved",
      rating: 4.7,
      description: "The definitive biography of Apple's iconic founder, based on forty in-depth interviews across two intense years.",
      reviews: [
        { reviewer: "New York Times", quote: "An unflinching, riveting portrait of visionary genius, perfectionism, and ferocious drive.", score: 5 }
      ]
    },
    {
      id: 9,
      title: "The Story of My Experiments with Truth",
      author: "Mahatma Gandhi",
      isbn: "9780143420148",
      genre: "biography",
      callNumber: "BIO GAN",
      status: "available",
      rating: 4.9,
      description: "The humble, candid autobiography tracing Gandhi's formative years in Gujarat, London, South Africa, and the non-violent struggle.",
      reviews: [
        { reviewer: "Global Classics", quote: "Deeply soul-searching and timeless moral compass on truth, discipline, and peaceful change.", score: 5 }
      ]
    },
    {
      id: 10,
      title: "The World Atlas",
      author: "National Geographic",
      isbn: "9781426216902",
      genre: "reference",
      callNumber: "REF ATL",
      status: "available",
      rating: 4.9,
      description: "Masterwork of planetary cartography, geopolitical data, terrain visualizations, and environmental thematic maps.",
      reviews: [
        { reviewer: "Cartography Guild", quote: "Gold standard of physical and political geography. Stunning detail.", score: 5 }
      ]
    },
    {
      id: 11,
      title: "Oxford English Dictionary",
      author: "Oxford University Press",
      isbn: "9780198611868",
      genre: "reference",
      callNumber: "REF OED",
      status: "available",
      rating: 5.0,
      description: "The definitive historical lexicon of the English language, documenting semantic shifts, etymology, and citations.",
      reviews: [
        { reviewer: "Lexicon Review", quote: "Incomparable scholastic monument to linguistic scholarship.", score: 5 }
      ]
    },
    {
      id: 12,
      title: "The Chicago Manual of Style",
      author: "University of Chicago Press",
      isbn: "9780226287058",
      genre: "reference",
      callNumber: "REF CHI",
      status: "available",
      rating: 4.8,
      description: "The indispensable bible for editors, copywriters, publishers, and researchers worldwide.",
      reviews: [
        { reviewer: "Publishers Weekly", quote: "The ultimate authority on editorial style, grammar, and scholarly citations.", score: 5 }
      ]
    }
  ];

  // Pre-seeded Member Accounts
  const initialMembers = [
    {
      name: "Alex Sharma",
      email: "alex.sharma@vitlib.edu",
      password: "user123",
      cardId: "VIT-STD-8842",
      role: "member"
    },
    {
      name: "Priyanshu Roy",
      email: "priyanshu@vitlib.edu",
      password: "user123",
      cardId: "VIT-STD-9921",
      role: "member"
    }
  ];

  // Pre-seeded Librarian / Staff Accounts
  const initialLibrarians = [
    {
      name: "Dr. Eleanor Vance",
      email: "librarian@vitlib.edu",
      password: "admin123",
      staffId: "VIT-STAFF-01",
      role: "librarian"
    }
  ];

  // Initial Loan Ledger
  const initialLoans = [
    {
      id: 101,
      bookId: 2,
      title: "The Great Gatsby",
      memberName: "S. Patel",
      memberEmail: "spatel@vitlib.edu",
      cardId: "VIT-STD-4401",
      checkedOut: "24 Sep 2026",
      dueDate: "08 Oct 2026",
      returnedDate: null,
      status: "ON LOAN"
    },
    {
      id: 102,
      bookId: 5,
      title: "A Brief History of Time",
      memberName: "N. Khan",
      memberEmail: "nkhan@vitlib.edu",
      cardId: "VIT-STD-5520",
      checkedOut: "20 Sep 2026",
      dueDate: "04 Oct 2026",
      returnedDate: null,
      status: "ON LOAN"
    },
    {
      id: 103,
      bookId: 1,
      title: "The Midnight Library",
      memberName: "Alex Sharma",
      memberEmail: "alex.sharma@vitlib.edu",
      cardId: "VIT-STD-8842",
      checkedOut: "12 Aug 2026",
      dueDate: "26 Aug 2026",
      returnedDate: "25 Aug 2026",
      status: "RETURNED"
    },
    {
      id: 104,
      bookId: 4,
      title: "Data Structures & Algorithms in Java",
      memberName: "R. Mehta",
      memberEmail: "rmehta@vitlib.edu",
      cardId: "VIT-STD-3391",
      checkedOut: "15 Aug 2026",
      dueDate: "29 Aug 2026",
      returnedDate: "27 Aug 2026",
      status: "RETURNED"
    }
  ];

  // Initial Desk Activity
  const initialDeskActivity = [
    { title: "The Great Gatsby", member: "S. Patel", action: "CHECKED OUT", className: "action-checkedout" },
    { title: "Pride and Prejudice", member: "M. Joshi", action: "RETURNED", className: "action-returned" },
    { title: "A Brief History of Time", member: "N. Khan", action: "CHECKED OUT", className: "action-checkedout" },
    { title: "Steve Jobs", member: "P. Verma", action: "RESERVED", className: "action-reserved" },
    { title: "The Midnight Library", member: "Alex Sharma", action: "RETURNED", className: "action-returned" }
  ];

  // Retrieve state or use defaults
  let books = JSON.parse(localStorage.getItem("vitlib_books")) || initialBooks;
  let members = JSON.parse(localStorage.getItem("vitlib_members")) || initialMembers;
  let librarians = JSON.parse(localStorage.getItem("vitlib_librarians")) || initialLibrarians;
  let loans = JSON.parse(localStorage.getItem("vitlib_loans")) || initialLoans;
  let deskActivity = JSON.parse(localStorage.getItem("vitlib_desk_activity")) || initialDeskActivity;
  let currentUser = JSON.parse(localStorage.getItem("vitlib_current_user")) || null;

  // Track active pending borrow book
  let pendingBorrowBook = null;

  function saveBooks() {
    localStorage.setItem("vitlib_books", JSON.stringify(books));
  }
  function saveMembers() {
    localStorage.setItem("vitlib_members", JSON.stringify(members));
  }
  function saveLibrarians() {
    localStorage.setItem("vitlib_librarians", JSON.stringify(librarians));
  }
  function saveLoans() {
    localStorage.setItem("vitlib_loans", JSON.stringify(loans));
  }
  function saveDeskActivity() {
    localStorage.setItem("vitlib_desk_activity", JSON.stringify(deskActivity));
  }
  function saveCurrentUser() {
    if (currentUser) {
      localStorage.setItem("vitlib_current_user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("vitlib_current_user");
    }
  }

  /* ---------------------------------------------------------
     2. DOM ELEMENTS
     --------------------------------------------------------- */

  // Header & Navigation
  const memberSignInBtn = document.getElementById("memberSignInBtn");
  const librarianSignInBtn = document.getElementById("librarianSignInBtn");
  const signOutBtn = document.getElementById("signOutBtn");
  const addBtn = document.getElementById("addBtn");
  const addBtnCatalog = document.getElementById("addBtnCatalog");
  const addBtn2 = document.getElementById("addBtn2");
  const librarianBadge = document.getElementById("librarianBadge");
  const memberBadge = document.getElementById("memberBadge");
  const memberNameDisplay = document.getElementById("memberNameDisplay");
  const loggedOutControls = document.getElementById("loggedOutControls");
  const myBooksNavLink = document.getElementById("myBooksNavLink");
  const librarianToolbar = document.getElementById("librarianToolbar");
  const ctaAuthNotice = document.getElementById("ctaAuthNotice");
  const roleHintText = document.getElementById("roleHintText");
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");

  // Hero & Search
  const finderForm = document.getElementById("finderForm");
  const findInput = document.getElementById("findInput");
  const findCategory = document.getElementById("findCategory");
  const filterRow = document.getElementById("filterRow");
  const deskRows = document.getElementById("deskRows");
  const liveClock = document.getElementById("liveClock");

  // Catalog & Shelf
  const catalogGrid = document.getElementById("catalogGrid");
  const catalogEmpty = document.getElementById("catalogEmpty");
  const userShelfContainer = document.getElementById("userShelfContainer");
  const userShelfNote = document.getElementById("userShelfNote");
  const historyGrid = document.getElementById("historyGrid");

  // Stats Counters
  const statTitles = document.getElementById("statTitles");
  const statAvailable = document.getElementById("statAvailable");
  const statLoans = document.getElementById("statLoans");
  const statMembers = document.getElementById("statMembers");

  // Member Auth Modal
  const memberAuthModalBackdrop = document.getElementById("memberAuthModalBackdrop");
  const memberAuthModalClose = document.getElementById("memberAuthModalClose");
  const memberTabLogin = document.getElementById("memberTabLogin");
  const memberTabRegister = document.getElementById("memberTabRegister");
  const memberLoginForm = document.getElementById("memberLoginForm");
  const memberRegisterForm = document.getElementById("memberRegisterForm");
  const demoMemberLoginBtn = document.getElementById("demoMemberLoginBtn");

  // Librarian Auth Modal
  const librarianAuthModalBackdrop = document.getElementById("librarianAuthModalBackdrop");
  const librarianAuthModalClose = document.getElementById("librarianAuthModalClose");
  const librarianTabLogin = document.getElementById("librarianTabLogin");
  const librarianTabRegister = document.getElementById("librarianTabRegister");
  const librarianLoginForm = document.getElementById("librarianLoginForm");
  const librarianRegisterForm = document.getElementById("librarianRegisterForm");
  const demoLibrarianLoginBtn = document.getElementById("demoLibrarianLoginBtn");

  // Borrow Modal
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalClose = document.getElementById("modalClose");
  const modalForm = document.getElementById("modalForm");
  const modalTitle = document.getElementById("modalTitle");
  const modalMeta = document.getElementById("modalMeta");
  const borrowerNameDisplay = document.getElementById("borrowerNameDisplay");
  const borrowerCardDisplay = document.getElementById("borrowerCardDisplay");
  const borrowerCalculatedDueDate = document.getElementById("borrowerCalculatedDueDate");
  const borrowerEmailInput = document.getElementById("borrowerEmailInput");
  const modalSuccess = document.getElementById("modalSuccess");
  const modalDueDate = document.getElementById("modalDueDate");
  const modalDoneBtn = document.getElementById("modalDoneBtn");

  // Add Book Modal
  const addBookModalBackdrop = document.getElementById("addBookModalBackdrop");
  const addBookModalClose = document.getElementById("addBookModalClose");
  const addBookForm = document.getElementById("addBookForm");

  // Chatbot Elements
  const chatLauncher = document.getElementById("chatLauncher");
  const chatWidget = document.getElementById("chatWidget");
  const chatMinimizeBtn = document.getElementById("chatMinimizeBtn");
  const chatResetBtn = document.getElementById("chatResetBtn");
  const chatMessages = document.getElementById("chatMessages");
  const chatForm = document.getElementById("chatForm");
  const chatInput = document.getElementById("chatInput");
  const chatQuickPrompts = document.getElementById("chatQuickPrompts");
  const openChatCtaBtn = document.getElementById("openChatCtaBtn");

  // Footer Links
  const footerMemberLogin = document.getElementById("footerMemberLogin");
  const footerStaffLogin = document.getElementById("footerStaffLogin");
  const footerMyLoans = document.getElementById("footerMyLoans");
  const footerOpenChat = document.getElementById("footerOpenChat");
  const footerAddBook = document.getElementById("footerAddBook");

  // Toast Container
  const toastContainer = document.getElementById("toastContainer");

  /* ---------------------------------------------------------
     3. UTILITIES & HELPERS
     --------------------------------------------------------- */

  function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function getStatusText(status) {
    if (status === "available") return "AVAILABLE";
    if (status === "onloan") return "ON LOAN";
    if (status === "reserved") return "RESERVED";
    return status.toUpperCase();
  }

  function formatDate(d) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = String(d.getDate()).padStart(2, "0");
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    return `${day} ${month} ${year}`;
  }

  function formatShortDate(d) {
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const day = String(d.getDate()).padStart(2, "0");
    const month = months[d.getMonth()];
    return `${day} ${month}`;
  }

  function showToast(message, type = "info") {
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    const icon = type === "success" ? "✓" : type === "error" ? "✕" : "ℹ";
    toast.innerHTML = `<span style="font-weight: bold; color: var(--brass);">${icon}</span> <span>${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(-10px)";
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  function updateClock() {
    const now = new Date();
    liveClock.textContent = now.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    });
  }
  setInterval(updateClock, 1000);
  updateClock();

  function updateStats() {
    const totalTitles = books.length;
    const availableCount = books.filter(b => b.status === "available").length;
    const loanCount = books.filter(b => b.status === "onloan" || b.status === "reserved").length;
    const memberCount = 6350 + members.length - 2;

    statTitles.textContent = totalTitles;
    statAvailable.textContent = availableCount;
    statLoans.textContent = loanCount;
    statMembers.textContent = new Intl.NumberFormat("en-IN").format(memberCount);
  }

  /* ---------------------------------------------------------
     4. AUTHENTICATION & ROLE MANAGEMENT
     --------------------------------------------------------- */

  function updateAuthUI() {
    if (currentUser && currentUser.role === "librarian") {
      // Librarian Active State
      loggedOutControls.style.display = "none";
      signOutBtn.style.display = "inline-flex";
      librarianBadge.style.display = "inline-flex";
      memberBadge.style.display = "none";
      myBooksNavLink.style.display = "none";

      addBtn.style.display = "inline-flex";
      addBtnCatalog.style.display = "inline-flex";
      addBtn2.style.display = "inline-flex";
      librarianToolbar.style.display = "flex";
      ctaAuthNotice.style.display = "none";

      roleHintText.innerHTML = `Signed in as <strong>Librarian ${currentUser.name}</strong>. You have full privileges to add titles, change availability statuses, and manage records.`;
    } else if (currentUser && currentUser.role === "member") {
      // Member Active State
      loggedOutControls.style.display = "none";
      signOutBtn.style.display = "inline-flex";
      librarianBadge.style.display = "none";
      memberBadge.style.display = "inline-flex";
      memberNameDisplay.textContent = currentUser.name.split(" ")[0] || "Member";
      myBooksNavLink.style.display = "inline-block";

      addBtn.style.display = "none";
      addBtnCatalog.style.display = "none";
      addBtn2.style.display = "none";
      librarianToolbar.style.display = "none";
      ctaAuthNotice.style.display = "block";

      roleHintText.innerHTML = `Welcome, <strong>${currentUser.name}</strong> (Pass: ${currentUser.cardId}). Select any available title below to borrow.`;
    } else {
      // Guest / Logged Out State
      loggedOutControls.style.display = "flex";
      signOutBtn.style.display = "none";
      librarianBadge.style.display = "none";
      memberBadge.style.display = "none";
      myBooksNavLink.style.display = "none";

      addBtn.style.display = "none";
      addBtnCatalog.style.display = "none";
      addBtn2.style.display = "none";
      librarianToolbar.style.display = "none";
      ctaAuthNotice.style.display = "block";

      roleHintText.innerHTML = `Looking to borrow? <strong>Sign in as a Member</strong>. Library staff? Access the <strong>Staff Portal</strong> to manage book stock &amp; availability.`;
    }

    renderCatalog();
    renderUserShelf();
    renderDeskActivity();
    renderHistory();
    updateStats();
  }

  // Sign out handler
  signOutBtn.addEventListener("click", () => {
    const formerRole = currentUser ? currentUser.role : "";
    currentUser = null;
    saveCurrentUser();
    updateAuthUI();
    showToast(`Signed out of ${formerRole === "librarian" ? "Staff" : "Member"} account.`, "info");
  });

  // Mobile Navigation Toggle
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });

  // Quick Find Chips in Hero
  document.querySelectorAll(".chip[data-quickfind]").forEach(chip => {
    chip.addEventListener("click", () => {
      const query = chip.dataset.quickfind;
      findInput.value = query;
      findCategory.value = "all";
      performSearch();
      document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
    });
  });

  /* --- Member Auth Modal Handlers --- */
  function openMemberAuthModal() {
    memberAuthModalBackdrop.classList.add("is-open");
  }
  function closeMemberAuthModal() {
    memberAuthModalBackdrop.classList.remove("is-open");
  }

  memberSignInBtn.addEventListener("click", openMemberAuthModal);
  footerMemberLogin.addEventListener("click", openMemberAuthModal);
  memberAuthModalClose.addEventListener("click", closeMemberAuthModal);

  memberTabLogin.addEventListener("click", () => {
    memberTabLogin.classList.add("active");
    memberTabRegister.classList.remove("active");
    memberLoginForm.style.display = "block";
    memberRegisterForm.style.display = "none";
  });

  memberTabRegister.addEventListener("click", () => {
    memberTabRegister.classList.add("active");
    memberTabLogin.classList.remove("active");
    memberLoginForm.style.display = "none";
    memberRegisterForm.style.display = "block";
  });

  // Quick Demo Member Login
  demoMemberLoginBtn.addEventListener("click", () => {
    currentUser = members[0]; // Alex Sharma
    saveCurrentUser();
    closeMemberAuthModal();
    updateAuthUI();
    showToast(`Logged in as Student Member: ${currentUser.name}`, "success");
    if (pendingBorrowBook) {
      openBorrowModal(pendingBorrowBook);
    }
  });

  // Member Login Submit
  memberLoginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("memberLoginEmail").value.trim().toLowerCase();
    const password = document.getElementById("memberLoginPassword").value;

    const matched = members.find(m => m.email.toLowerCase() === email && m.password === password);
    if (matched) {
      currentUser = matched;
      saveCurrentUser();
      closeMemberAuthModal();
      memberLoginForm.reset();
      updateAuthUI();
      showToast(`Welcome back, ${matched.name}!`, "success");
      if (pendingBorrowBook) {
        openBorrowModal(pendingBorrowBook);
      }
    } else {
      showToast("Invalid member email or password. You can also click the quick demo button.", "error");
    }
  });

  // Member Register Submit
  memberRegisterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("memberRegName").value.trim();
    const email = document.getElementById("memberRegEmail").value.trim();
    const cardId = document.getElementById("memberRegCard").value.trim();
    const password = document.getElementById("memberRegPassword").value;

    if (members.find(m => m.email.toLowerCase() === email.toLowerCase())) {
      showToast("An account with this email already exists.", "error");
      return;
    }

    const newMember = { name, email, cardId, password, role: "member" };
    members.push(newMember);
    saveMembers();

    currentUser = newMember;
    saveCurrentUser();
    closeMemberAuthModal();
    memberRegisterForm.reset();
    updateAuthUI();
    showToast(`Member pass issued! Welcome to VITLib, ${name}.`, "success");
    if (pendingBorrowBook) {
      openBorrowModal(pendingBorrowBook);
    }
  });

  /* --- Librarian Auth Modal Handlers --- */
  function openLibrarianAuthModal() {
    librarianAuthModalBackdrop.classList.add("is-open");
  }
  function closeLibrarianAuthModal() {
    librarianAuthModalBackdrop.classList.remove("is-open");
  }

  librarianSignInBtn.addEventListener("click", openLibrarianAuthModal);
  footerStaffLogin.addEventListener("click", openLibrarianAuthModal);
  librarianAuthModalClose.addEventListener("click", closeLibrarianAuthModal);

  librarianTabLogin.addEventListener("click", () => {
    librarianTabLogin.classList.add("active");
    librarianTabRegister.classList.remove("active");
    librarianLoginForm.style.display = "block";
    librarianRegisterForm.style.display = "none";
  });

  librarianTabRegister.addEventListener("click", () => {
    librarianTabRegister.classList.add("active");
    librarianTabLogin.classList.remove("active");
    librarianLoginForm.style.display = "none";
    librarianRegisterForm.style.display = "block";
  });

  // Quick Demo Librarian Login
  demoLibrarianLoginBtn.addEventListener("click", () => {
    currentUser = librarians[0]; // Dr. Eleanor Vance
    saveCurrentUser();
    closeLibrarianAuthModal();
    updateAuthUI();
    showToast(`Staff access verified: ${currentUser.name}`, "success");
  });

  // Librarian Login Submit
  librarianLoginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("librarianLoginEmail").value.trim().toLowerCase();
    const password = document.getElementById("librarianLoginPassword").value;

    const matched = librarians.find(l => l.email.toLowerCase() === email && l.password === password);
    if (matched) {
      currentUser = matched;
      saveCurrentUser();
      closeLibrarianAuthModal();
      librarianLoginForm.reset();
      updateAuthUI();
      showToast(`Circulation desk unlocked for ${matched.name}.`, "success");
    } else {
      showToast("Invalid staff credentials. Try the quick demo staff login.", "error");
    }
  });

  // Librarian Register Submit
  librarianRegisterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("librarianRegName").value.trim();
    const email = document.getElementById("librarianRegEmail").value.trim();
    const key = document.getElementById("librarianRegKey").value.trim();
    const password = document.getElementById("librarianRegPassword").value;

    if (key !== "VIT-STAFF-2026") {
      showToast("Invalid Staff Authorization Key. Contact head librarian.", "error");
      return;
    }

    if (librarians.find(l => l.email.toLowerCase() === email.toLowerCase())) {
      showToast("Staff account already registered with this email.", "error");
      return;
    }

    const newLibrarian = {
      name,
      email,
      staffId: `VIT-STAFF-${String(librarians.length + 1).padStart(2, "0")}`,
      password,
      role: "librarian"
    };

    librarians.push(newLibrarian);
    saveLibrarians();

    currentUser = newLibrarian;
    saveCurrentUser();
    closeLibrarianAuthModal();
    librarianRegisterForm.reset();
    updateAuthUI();
    showToast(`Staff credentials created! Welcome, Librarian ${name}.`, "success");
  });

  /* ---------------------------------------------------------
     5. CATALOG RENDERING & LIBRARIAN CONTROLS
     --------------------------------------------------------- */

  function renderCatalog(list = books) {
    catalogGrid.innerHTML = "";

    if (list.length === 0) {
      catalogEmpty.hidden = false;
      return;
    }
    catalogEmpty.hidden = true;

    const isLibrarian = currentUser && currentUser.role === "librarian";

    list.forEach((book, index) => {
      const card = document.createElement("article");
      card.className = "book-card";
      card.style.animationDelay = `${index * 0.04}s`;

      const buttonDisabled = book.status !== "available";
      const buttonText = book.status === "available"
        ? "Borrow"
        : book.status === "onloan"
          ? "On Loan"
          : "Reserved";

      // Render Librarian management tools if logged in as staff
      let librarianControlsHTML = "";
      if (isLibrarian) {
        librarianControlsHTML = `
          <div class="librarian-card-controls">
            <label for="statusSelect-${book.id}">Availability Control:</label>
            <select class="status-changer-select" id="statusSelect-${book.id}" data-change-id="${book.id}">
              <option value="available" ${book.status === "available" ? "selected" : ""}>🟢 Available</option>
              <option value="onloan" ${book.status === "onloan" ? "selected" : ""}>🔴 On Loan</option>
              <option value="reserved" ${book.status === "reserved" ? "selected" : ""}>🟡 Reserved</option>
            </select>
            <div class="librarian-card-actions">
              <span style="font-size: 0.72rem; color: var(--text-soft);">ID: #${book.id}</span>
              <button type="button" class="delete-btn" data-delete-id="${book.id}">Remove Book</button>
            </div>
          </div>
        `;
      }

      // Review snippet
      const firstReview = (book.reviews && book.reviews.length > 0) ? book.reviews[0] : null;
      const reviewSnippet = firstReview
        ? `<p class="book-synopsis">"${firstReview.quote}"</p>`
        : (book.description ? `<p class="book-synopsis">${book.description}</p>` : "");

      card.innerHTML = `
        <div class="book-spine spine-${book.genre}">
          <span class="spine-label">${book.callNumber}</span>
        </div>
        <div class="book-body">
          <div class="book-tags-row">
            <span class="book-tag tag-${book.genre}">${capitalize(book.genre)}</span>
            <span class="book-rating">★ ${book.rating ? book.rating.toFixed(1) : "4.5"}</span>
          </div>
          <h3>${book.title}</h3>
          <p class="book-meta">
            <span>By ${book.author}</span>
            <span>ISBN: ${book.isbn} · ${book.callNumber}</span>
          </p>
          ${reviewSnippet}
          ${librarianControlsHTML}
          <div class="book-footer">
            <span class="status-stamp status-${book.status}">${getStatusText(book.status)}</span>
            <button class="reserve-btn" data-book-id="${book.id}" ${buttonDisabled ? "disabled" : ""}>
              ${buttonText}
            </button>
          </div>
        </div>
      `;

      catalogGrid.appendChild(card);
    });
  }

  // Handle Catalog Card Actions (Borrow, Status change, Delete)
  catalogGrid.addEventListener("click", (e) => {
    // 1. Borrow Button clicked
    const borrowBtn = e.target.closest(".reserve-btn");
    if (borrowBtn && !borrowBtn.disabled) {
      const bookId = Number(borrowBtn.dataset.bookId);
      const book = books.find(b => b.id === bookId);
      if (!book) return;

      if (!currentUser) {
        pendingBorrowBook = book;
        openMemberAuthModal();
        showToast("Please sign in or register as a Member to borrow this book.", "info");
        return;
      }

      if (currentUser.role === "librarian") {
        showToast("Librarians oversee the collection. Use the Availability Control dropdown above to change statuses, or switch to a Member account to borrow.", "info");
        return;
      }

      // Member is logged in -> open checkout modal
      openBorrowModal(book);
      return;
    }

    // 2. Delete Button clicked (Librarian)
    const deleteBtn = e.target.closest(".delete-btn");
    if (deleteBtn) {
      const id = Number(deleteBtn.dataset.deleteId);
      const book = books.find(b => b.id === id);
      if (!book) return;

      if (confirm(`Are you sure you want to remove "${book.title}" from the library catalog?`)) {
        books = books.filter(b => b.id !== id);
        saveBooks();

        // Log to desk activity
        deskActivity.unshift({
          title: book.title,
          member: currentUser.name,
          action: "REMOVED",
          className: "action-checkedout"
        });
        saveDeskActivity();

        renderCatalog();
        renderDeskActivity();
        updateStats();
        showToast(`"${book.title}" removed from catalog.`, "info");
      }
      return;
    }
  });

  // Handle Librarian Availability Status Change Dropdown
  catalogGrid.addEventListener("change", (e) => {
    if (e.target.classList.contains("status-changer-select")) {
      const bookId = Number(e.target.dataset.changeId);
      const newStatus = e.target.value;
      const book = books.find(b => b.id === bookId);

      if (book) {
        book.status = newStatus;
        saveBooks();

        // Record desk activity
        const actionLabel = newStatus === "available" ? "RESTOCKED" : newStatus === "onloan" ? "SET ON LOAN" : "SET RESERVED";
        const actionClass = newStatus === "available" ? "action-returned" : newStatus === "onloan" ? "action-checkedout" : "action-reserved";

        deskActivity.unshift({
          title: book.title,
          member: currentUser ? currentUser.name : "Staff",
          action: actionLabel,
          className: actionClass
        });
        saveDeskActivity();

        renderCatalog();
        renderDeskActivity();
        renderHistory();
        updateStats();
        showToast(`Availability for "${book.title}" changed to ${getStatusText(newStatus)}.`, "success");
      }
    }
  });

  /* ---------------------------------------------------------
     6. LIBRARIAN ADD BOOK FLOW
     --------------------------------------------------------- */

  function openAddBookModal() {
    if (!currentUser || currentUser.role !== "librarian") {
      openLibrarianAuthModal();
      showToast("Please authenticate with staff credentials to catalog books.", "info");
      return;
    }
    addBookModalBackdrop.classList.add("is-open");
  }

  addBtn.addEventListener("click", openAddBookModal);
  addBtnCatalog.addEventListener("click", openAddBookModal);
  addBtn2.addEventListener("click", openAddBookModal);
  footerAddBook.addEventListener("click", openAddBookModal);
  addBookModalClose.addEventListener("click", () => addBookModalBackdrop.classList.remove("is-open"));

  addBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("newTitle").value.trim();
    const author = document.getElementById("newAuthor").value.trim();
    const isbn = document.getElementById("newIsbn").value.trim();
    const callNumber = document.getElementById("newCallNumber").value.trim().toUpperCase();
    const genre = document.getElementById("newGenre").value;
    const status = document.getElementById("newStatus").value;
    const description = document.getElementById("newDescription").value.trim();

    const newBook = {
      id: Date.now(),
      title,
      author,
      isbn,
      callNumber,
      genre,
      status,
      rating: 4.8,
      description: description || "Fresh acquisition added by the library cataloguing team.",
      reviews: description ? [{ reviewer: "VITLib Acquisitions", quote: description, score: 5 }] : []
    };

    books.unshift(newBook);
    saveBooks();

    // Log to desk
    deskActivity.unshift({
      title: newBook.title,
      member: currentUser.name,
      action: "CATALOGUED",
      className: "action-added"
    });
    saveDeskActivity();

    renderCatalog();
    renderDeskActivity();
    updateStats();

    addBookModalBackdrop.classList.remove("is-open");
    addBookForm.reset();
    showToast(`"${title}" has been successfully indexed into the live catalog!`, "success");
  });

  /* ---------------------------------------------------------
     7. MEMBER BORROW CHECKOUT FLOW
     --------------------------------------------------------- */

  function openBorrowModal(book) {
    pendingBorrowBook = book;
    modalTitle.textContent = book.title;
    modalMeta.textContent = `${book.author} · Call No: ${book.callNumber} · ISBN: ${book.isbn}`;

    // Fill member info
    borrowerNameDisplay.textContent = currentUser.name;
    borrowerCardDisplay.textContent = currentUser.cardId || "VIT-STD-PASS";
    borrowerEmailInput.value = currentUser.email;

    // Calculate due date (14 days from now)
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 14);
    borrowerCalculatedDueDate.textContent = formatDate(dueDate);

    modalForm.hidden = false;
    modalSuccess.hidden = true;
    modalBackdrop.classList.add("is-open");
  }

  function closeBorrowModal() {
    modalBackdrop.classList.remove("is-open");
    pendingBorrowBook = null;
  }

  modalClose.addEventListener("click", closeBorrowModal);
  modalDoneBtn.addEventListener("click", () => {
    closeBorrowModal();
    document.getElementById("myBooksSection").scrollIntoView({ behavior: "smooth" });
  });

  modalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!pendingBorrowBook || !currentUser) return;

    const book = books.find(b => b.id === pendingBorrowBook.id);
    if (!book || book.status !== "available") {
      showToast("This title is no longer available.", "error");
      closeBorrowModal();
      return;
    }

    const today = new Date();
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 14);

    const formattedToday = formatDate(today);
    const formattedDue = formatDate(dueDate);
    const shortDue = formatShortDate(dueDate);

    // 1. Update book status
    book.status = "onloan";
    saveBooks();

    // 2. Add loan record
    const newLoan = {
      id: Date.now(),
      bookId: book.id,
      title: book.title,
      author: book.author,
      callNumber: book.callNumber,
      genre: book.genre,
      memberName: currentUser.name,
      memberEmail: currentUser.email,
      cardId: currentUser.cardId || "VIT-STD-PASS",
      checkedOut: formattedToday,
      dueDate: formattedDue,
      returnedDate: null,
      status: "ON LOAN"
    };
    loans.unshift(newLoan);
    saveLoans();

    // 3. Add to live desk activity
    deskActivity.unshift({
      title: book.title,
      member: currentUser.name,
      action: "CHECKED OUT",
      className: "action-checkedout"
    });
    saveDeskActivity();

    // 4. Update UI
    modalDueDate.textContent = shortDue;
    modalForm.hidden = true;
    modalSuccess.hidden = false;

    renderCatalog();
    renderUserShelf();
    renderDeskActivity();
    renderHistory();
    updateStats();
    showToast(`"${book.title}" stamped out to ${currentUser.name}! Due: ${formattedDue}`, "success");
  });

  /* ---------------------------------------------------------
     8. MEMBER PERSONAL READING SHELF & LOANS
     --------------------------------------------------------- */

  function renderUserShelf() {
    userShelfContainer.innerHTML = "";

    // If not a member, display appropriate state
    if (!currentUser) {
      userShelfNote.textContent = "Sign in with your library card to view and manage your borrowed titles.";
      userShelfContainer.innerHTML = `
        <div class="user-shelf-guest">
          <p class="eyebrow" style="color: var(--brass-ink);">Member Access Required</p>
          <h3 style="margin-bottom: 6px;">Looking for your checked-out books?</h3>
          <p>Sign in with your student or reader pass to see your active loans, due dates, and return books back to the shelves.</p>
          <button type="button" class="btn btn-solid" id="shelfSignInBtn">Sign In with Member Pass</button>
        </div>
      `;
      document.getElementById("shelfSignInBtn").addEventListener("click", openMemberAuthModal);
      return;
    }

    if (currentUser.role === "librarian") {
      userShelfNote.textContent = "You are currently signed in with Staff / Librarian privileges.";
      userShelfContainer.innerHTML = `
        <div class="user-shelf-guest" style="background: #EAF3EE; border-color: rgba(47, 107, 79, 0.3);">
          <p class="eyebrow" style="color: var(--forest);">Circulation Management</p>
          <h3>Staff Mode Active (${currentUser.name})</h3>
          <p>Librarians manage the whole library inventory. To borrow titles as a student reader, sign out and sign in with a Member pass.</p>
          <button type="button" class="btn btn-solid" id="shelfAddBookBtn">+ Catalog a New Arrival</button>
        </div>
      `;
      document.getElementById("shelfAddBookBtn").addEventListener("click", openAddBookModal);
      return;
    }

    // Member is logged in! Filter their active and past loans
    userShelfNote.textContent = `Library card: ${currentUser.cardId || "VIT-STD-PASS"} · Active loans for ${currentUser.name}`;

    const memberLoans = loans.filter(l =>
      (l.memberEmail && l.memberEmail.toLowerCase() === currentUser.email.toLowerCase()) ||
      (l.memberName && l.memberName.toLowerCase() === currentUser.name.toLowerCase())
    );

    const activeBorrows = memberLoans.filter(l => l.status === "ON LOAN");
    const pastBorrows = memberLoans.filter(l => l.status === "RETURNED");

    if (activeBorrows.length === 0 && pastBorrows.length === 0) {
      userShelfContainer.innerHTML = `
        <div class="user-shelf-empty">
          <h4>Your reading card is currently clear!</h4>
          <p>You haven't borrowed any titles yet. Explore the catalog below and borrow up to 3 books with a 14-day loan period.</p>
          <a href="#catalog" class="btn btn-solid btn-sm" style="display: inline-flex; margin-top: 8px;">Explore Stacks</a>
        </div>
      `;
      return;
    }

    let shelfHTML = `
      <div style="margin-bottom: 20px;">
        <h3 style="font-size: 1.15rem; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
          <span>Active Checkouts (${activeBorrows.length})</span>
        </h3>
    `;

    if (activeBorrows.length === 0) {
      shelfHTML += `
        <p style="font-size: 0.9rem; font-style: italic; color: var(--text-soft); margin-bottom: 20px;">No books currently out on loan.</p>
      `;
    } else {
      shelfHTML += `<div class="user-shelf-grid">`;
      activeBorrows.forEach(loan => {
        shelfHTML += `
          <article class="user-shelf-card">
            <span class="due-badge due-active">DUE: ${loan.dueDate}</span>
            <h3>${loan.title}</h3>
            <div class="user-shelf-meta">
              <span>Card: ${loan.cardId}</span> · <span>Checked Out: ${loan.checkedOut}</span>
            </div>
            <div class="user-shelf-dates">
              <div><strong>Status:</strong> Stamped to your account</div>
              <div><strong>Return By:</strong> ${loan.dueDate} (14 days)</div>
            </div>
            <div class="user-shelf-footer">
              <span style="font-size: 0.78rem; color: var(--forest); font-weight: 600;">✓ In good standing</span>
              <button class="btn-return" data-return-loan-id="${loan.id}" data-book-id="${loan.bookId || ''}">Return Book</button>
            </div>
          </article>
        `;
      });
      shelfHTML += `</div>`;
    }

    shelfHTML += `</div>`;

    // Past returned history for this member
    if (pastBorrows.length > 0) {
      shelfHTML += `
        <div style="margin-top: 30px;">
          <h3 style="font-size: 1.05rem; margin-bottom: 12px; color: var(--text-soft);">Returned Volumes (${pastBorrows.length})</h3>
          <div style="display: flex; flex-direction: column; gap: 8px;">
      `;
      pastBorrows.forEach(loan => {
        shelfHTML += `
          <div style="background: var(--card); border: 1px solid var(--line); padding: 10px 14px; border-radius: var(--radius-s); display: flex; justify-content: space-between; align-items: center; font-size: 0.86rem;">
            <div>
              <strong>${loan.title}</strong>
              <div style="font-size: 0.76rem; color: var(--text-soft); font-family: var(--font-stamp);">Checked: ${loan.checkedOut} · Returned: ${loan.returnedDate || "Recorded"}</div>
            </div>
            <span class="slip-stamp slip-stamp-returned" style="position: static; transform: none;">RETURNED</span>
          </div>
        `;
      });
      shelfHTML += `</div></div>`;
    }

    userShelfContainer.innerHTML = shelfHTML;
  }

  // Handle Returning a book from user shelf
  userShelfContainer.addEventListener("click", (e) => {
    const returnBtn = e.target.closest(".btn-return");
    if (!returnBtn) return;

    const loanId = Number(returnBtn.dataset.returnLoanId);
    const loan = loans.find(l => l.id === loanId);
    if (!loan) return;

    const todayFormatted = formatDate(new Date());

    // Update loan
    loan.status = "RETURNED";
    loan.returnedDate = todayFormatted;
    saveLoans();

    // Update corresponding book in catalog
    const book = books.find(b => b.id === loan.bookId || b.title.toLowerCase() === loan.title.toLowerCase());
    if (book) {
      book.status = "available";
      saveBooks();
    }

    // Add to desk activity
    deskActivity.unshift({
      title: loan.title,
      member: loan.memberName,
      action: "RETURNED",
      className: "action-returned"
    });
    saveDeskActivity();

    renderCatalog();
    renderUserShelf();
    renderDeskActivity();
    renderHistory();
    updateStats();
    showToast(`"${loan.title}" has been returned to the shelves. Reading stamp verified!`, "success");
  });

  // Footer My Loans Link
  footerMyLoans.addEventListener("click", () => {
    if (!currentUser) {
      openMemberAuthModal();
    } else {
      document.getElementById("myBooksSection").scrollIntoView({ behavior: "smooth" });
    }
  });

  /* ---------------------------------------------------------
     9. SEARCH & CATEGORY FILTERS
     --------------------------------------------------------- */

  function performSearch() {
    const query = findInput.value.trim().toLowerCase();
    const category = findCategory.value;

    const results = books.filter(book => {
      const matchesQuery = !query ||
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.isbn.toLowerCase().includes(query) ||
        book.callNumber.toLowerCase().includes(query) ||
        (book.description && book.description.toLowerCase().includes(query));

      const matchesCategory = category === "all" || book.genre === category;
      return matchesQuery && matchesCategory;
    });

    // Sync button filter active state
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.toggle("is-active", btn.dataset.filter === category);
    });

    renderCatalog(results);
  }

  finderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    performSearch();
    document.getElementById("catalog").scrollIntoView({ behavior: "smooth" });
  });

  findInput.addEventListener("input", performSearch);
  findCategory.addEventListener("change", performSearch);

  filterRow.addEventListener("click", (e) => {
    const button = e.target.closest(".filter-btn");
    if (!button) return;

    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("is-active"));
    button.classList.add("is-active");

    const filter = button.dataset.filter;
    findCategory.value = filter;
    performSearch();
  });

  /* ---------------------------------------------------------
     10. DESK ACTIVITY & GLOBAL LOAN LEDGER
     --------------------------------------------------------- */

  function renderDeskActivity() {
    deskRows.innerHTML = "";
    deskActivity.slice(0, 5).forEach((item, index) => {
      const row = document.createElement("div");
      row.className = "desk-row flip";
      row.style.animationDelay = `${index * 0.05}s`;
      row.innerHTML = `
        <span class="desk-title">${item.title}</span>
        <span class="desk-member">${item.member}</span>
        <span class="desk-action ${item.className}">${item.action}</span>
      `;
      deskRows.appendChild(row);
    });
  }

  function renderHistory() {
    historyGrid.innerHTML = "";
    loans.forEach(item => {
      const slip = document.createElement("article");
      slip.className = "slip";
      const stampClass = item.status === "RETURNED" ? "slip-stamp-returned" : item.status === "ON LOAN" ? "slip-stamp-onloan" : "slip-stamp-reserved";

      slip.innerHTML = `
        <span class="slip-stamp ${stampClass}">${item.status}</span>
        <h3>${item.title}</h3>
        <div class="slip-row"><span>Borrower</span><strong>${item.memberName}</strong></div>
        <div class="slip-row"><span>Library Card</span><strong>${item.cardId || "VIT-PASS"}</strong></div>
        <div class="slip-row"><span>Checked Out</span><strong>${item.checkedOut}</strong></div>
        <div class="slip-row"><span>Due Date</span><strong>${item.dueDate}</strong></div>
        <div class="slip-row"><span>Returned On</span><strong>${item.returnedDate ? item.returnedDate : "— In Circulation"}</strong></div>
      `;
      historyGrid.appendChild(slip);
    });
  }

  /* ---------------------------------------------------------
     11. INTERACTIVE CHATBOT (AI BOOK ADVISOR & REVIEWS)
     --------------------------------------------------------- */

  function toggleChatWidget(open = null) {
    const willOpen = open !== null ? open : !chatWidget.classList.contains("is-open");
    if (willOpen) {
      chatWidget.classList.add("is-open");
      if (chatMessages.children.length === 0) {
        initChatMessages();
      }
      setTimeout(() => chatInput.focus(), 200);
    } else {
      chatWidget.classList.remove("is-open");
    }
  }

  chatLauncher.addEventListener("click", () => toggleChatWidget());
  chatMinimizeBtn.addEventListener("click", () => toggleChatWidget(false));
  openChatCtaBtn.addEventListener("click", () => toggleChatWidget(true));
  footerOpenChat.addEventListener("click", () => toggleChatWidget(true));

  chatResetBtn.addEventListener("click", () => {
    chatMessages.innerHTML = "";
    initChatMessages();
    showToast("Chat conversation reset.", "info");
  });

  function appendChatMessage(sender, text, bookCardData = null) {
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble chat-bubble-${sender}`;
    bubble.innerHTML = text;

    if (bookCardData) {
      const card = document.createElement("div");
      card.className = "chat-book-card";
      card.innerHTML = `
        <div class="chat-book-title">${bookCardData.title}</div>
        <div class="chat-book-meta">By ${bookCardData.author} · ${bookCardData.callNumber}</div>
        <div class="chat-book-rating">★ Rating: ${bookCardData.rating ? bookCardData.rating.toFixed(1) : "4.8"}/5</div>
        ${bookCardData.quote ? `<div class="chat-book-review-quote">"${bookCardData.quote}" — ${bookCardData.reviewer || "Critic Review"}</div>` : ""}
        <div>
          Status: <span class="chat-book-status-tag status-${bookCardData.status}">${getStatusText(bookCardData.status)}</span>
        </div>
        ${bookCardData.status === "available"
          ? `<a href="javascript:void(0)" class="chat-book-borrow-link" data-borrow-id="${bookCardData.id}">➔ Borrow this title now</a>`
          : `<span style="font-size: 0.74rem; color: var(--maroon);">Title is currently checked out</span>`
        }
      `;
      bubble.appendChild(card);
    }

    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Handle direct borrow link inside chatbot
  chatMessages.addEventListener("click", (e) => {
    const link = e.target.closest(".chat-book-borrow-link");
    if (!link) return;
    const bookId = Number(link.dataset.borrowId);
    const book = books.find(b => b.id === bookId);
    if (!book) return;

    if (!currentUser) {
      pendingBorrowBook = book;
      openMemberAuthModal();
      showToast("Please sign in as a Member to borrow.", "info");
      return;
    }
    if (currentUser.role === "librarian") {
      showToast("Librarian mode: manage status via catalog.", "info");
      return;
    }
    openBorrowModal(book);
  });

  function initChatMessages() {
    appendChatMessage(
      "bot",
      `<strong>Hello! I'm Libby, your VITLib Book Advisor &amp; Review Assistant.</strong><br>
      Ask me for opinions and critic reviews on any book in our collection, get personalized recommendations by genre, or check real-time availability!`
    );
  }

  // Quick prompt chips click
  chatQuickPrompts.addEventListener("click", (e) => {
    const chip = e.target.closest(".quick-prompt-chip");
    if (!chip) return;
    const promptText = chip.dataset.prompt;
    handleUserMessage(promptText);
  });

  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userText = chatInput.value.trim();
    if (!userText) return;
    chatInput.value = "";
    handleUserMessage(userText);
  });

  function handleUserMessage(query) {
    appendChatMessage("user", query);

    // Show temporary typing indicator
    const typingBubble = document.createElement("div");
    typingBubble.className = "chat-bubble chat-bubble-bot";
    typingBubble.innerHTML = `<div class="typing-dots"><span></span><span></span><span></span></div>`;
    chatMessages.appendChild(typingBubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    setTimeout(() => {
      typingBubble.remove();
      processBotResponse(query);
    }, 450);
  }

  function processBotResponse(rawQuery) {
    const query = rawQuery.toLowerCase();

    // 1. Check for specific book titles
    for (const book of books) {
      const titleLower = book.title.toLowerCase();
      // Match title keyword
      if (query.includes(titleLower) || (titleLower.split(" ").length > 1 && titleLower.split(" ").every(w => w.length > 3 && query.includes(w)))) {
        const review = (book.reviews && book.reviews.length > 0) ? book.reviews[0] : null;
        let response = `<strong>Here is what readers and critics say about "${book.title}":</strong><br>`;
        response += `${book.description}<br><br>`;

        if (review) {
          response += `<strong>Critical Opinion:</strong> "${review.quote}" (Rating: ${review.score}/5 ⭐)<br>`;
        }
        response += `Current Catalog Status: <strong>${getStatusText(book.status)}</strong>.`;

        appendChatMessage("bot", response, {
          id: book.id,
          title: book.title,
          author: book.author,
          callNumber: book.callNumber,
          rating: book.rating,
          quote: review ? review.quote : book.description,
          reviewer: review ? review.reviewer : "VITLib Review Team",
          status: book.status
        });
        return;
      }
    }

    // 2. Keyword: Midnight Library
    if (query.includes("midnight")) {
      const book = books.find(b => b.title.includes("Midnight Library"));
      if (book) {
        appendChatMessage("bot", `<strong>The Midnight Library by Matt Haig</strong> is one of our most requested titles!<br><br>
        <strong>Consensus:</strong> Readers love its heartfelt exploration of mental health and alternative choices. It holds a <strong>4.8/5</strong> rating in our library.`, {
          id: book.id,
          title: book.title,
          author: book.author,
          callNumber: book.callNumber,
          rating: book.rating,
          quote: "A poignant, uplifting exploration of regret, hope, and what truly makes life fulfilling.",
          reviewer: "Sunday Times",
          status: book.status
        });
        return;
      }
    }

    // 3. Keyword: Gatsby
    if (query.includes("gatsby")) {
      const book = books.find(b => b.title.includes("Gatsby"));
      if (book) {
        appendChatMessage("bot", `<strong>The Great Gatsby by F. Scott Fitzgerald</strong> is a timeless masterpiece of the Roaring Twenties.<br><br>
        <strong>Review Consensus:</strong> Celebrated for its exquisite prose and critique of materialism and longing. Rated <strong>4.6/5</strong>.`, {
          id: book.id,
          title: book.title,
          author: book.author,
          callNumber: book.callNumber,
          rating: book.rating,
          quote: "A lyrical, devastating masterpiece about illusion, decadence, and the American Dream.",
          reviewer: "Literary Review",
          status: book.status
        });
        return;
      }
    }

    // 4. Keyword: Available books
    if (query.includes("available") || query.includes("what's available") || query.includes("can i borrow") || query.includes("on shelf")) {
      const availableBooks = books.filter(b => b.status === "available");
      let listHTML = `<strong>We currently have ${availableBooks.length} titles available to borrow right now:</strong><ul>`;
      availableBooks.slice(0, 5).forEach(b => {
        listHTML += `<li><strong>${b.title}</strong> by ${b.author} [${b.callNumber}]</li>`;
      });
      listHTML += `</ul>You can tap "Borrow" directly in the catalog below or ask me for reviews on any of them!`;
      appendChatMessage("bot", listHTML);
      return;
    }

    // 5. Keyword: Science books
    if (query.includes("science") || query.includes("physics") || query.includes("algorithm") || query.includes("tech") || query.includes("computer")) {
      const sciBooks = books.filter(b => b.genre === "science");
      let response = `<strong>Science &amp; Technology Recommendations:</strong><br>Here are our top picks in Science:<ul>`;
      sciBooks.forEach(b => {
        response += `<li><strong>${b.title}</strong> (${b.author}) — ${b.status === "available" ? "🟢 Available" : "🔴 On Loan"}</li>`;
      });
      response += `</ul>If you're studying algorithms, <em>Data Structures &amp; Algorithms in Java</em> is in stock and highly recommended!`;
      appendChatMessage("bot", response);
      return;
    }

    // 6. Keyword: Fiction recommendations
    if (query.includes("fiction") || query.includes("novel") || query.includes("story")) {
      const ficBooks = books.filter(b => b.genre === "fiction");
      let response = `<strong>Fiction Recommendations:</strong><br>Our shelves feature classic and contemporary fiction:<ul>`;
      ficBooks.forEach(b => {
        response += `<li><strong>${b.title}</strong> by ${b.author} — Rated ${b.rating}★ (${getStatusText(b.status)})</li>`;
      });
      response += `</ul>For witty romance, check out <em>Pride and Prejudice</em>. For reflective magical realism, pick <em>The Midnight Library</em>!`;
      appendChatMessage("bot", response);
      return;
    }

    // 7. Keyword: Biography recommendations
    if (query.includes("biography") || query.includes("memoir") || query.includes("life")) {
      const bioBooks = books.filter(b => b.genre === "biography");
      let response = `<strong>Inspirational Biographies:</strong><ul>`;
      bioBooks.forEach(b => {
        response += `<li><strong>${b.title}</strong> by ${b.author} (${getStatusText(b.status)})</li>`;
      });
      response += `</ul><em>Ada Lovelace</em> is fantastic for computing history, and Gandhi's <em>Experiments with Truth</em> is essential philosophical reading.`;
      appendChatMessage("bot", response);
      return;
    }

    // 8. Borrowing rules & how it works
    if (query.includes("rule") || query.includes("how to borrow") || query.includes("policy") || query.includes("due date") || query.includes("how do i")) {
      appendChatMessage(
        "bot",
        `<strong>VITLib Circulation Policies:</strong><br>
        1. <strong>Loan Duration:</strong> All titles can be checked out for <strong>14 calendar days</strong>.<br>
        2. <strong>Member Pass:</strong> Free for students and faculty. Sign in or register in seconds.<br>
        3. <strong>Returns:</strong> Simply visit the "My Borrows" tab anytime to return your book back to the shelf.<br>
        4. <strong>Librarian Role:</strong> Staff have administrative tools to add new acquisitions and update book statuses.`
      );
      return;
    }

    // 9. Greeting / General fallback
    if (query.includes("hi") || query.includes("hello") || query.includes("hey") || query.includes("who are you")) {
      appendChatMessage(
        "bot",
        `Hello there! I'm Libby, your personal book advisor. Try asking me:<br>
        • <em>"What are the reviews for The Midnight Library?"</em><br>
        • <em>"Recommend a good science book"</em><br>
        • <em>"Which books are available to borrow right now?"</em><br>
        • <em>"Opinions on Steve Jobs biography"</em>`
      );
      return;
    }

    // Default Fallback
    appendChatMessage(
      "bot",
      `I can help you explore reviews and opinions for any title in the VITLib catalog! Try asking:
      <br>• <strong>"Reviews on [Title]"</strong> (e.g. <em>The Great Gatsby, Ada Lovelace</em>)
      <br>• <strong>"Recommend me a [Genre] book"</strong> (Fiction, Science, Biography, Reference)
      <br>• <strong>"What books are available right now?"</strong>`
    );
  }

  /* ---------------------------------------------------------
     12. INITIALIZATION
     --------------------------------------------------------- */

  updateAuthUI();
  initChatMessages();

});
