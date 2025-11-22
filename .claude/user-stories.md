# User Stories — Atlas MVP (With Acceptance Criteria)

This document defines value-driven user stories for the Atlas application MVP.  
Each story includes user-centric acceptance criteria.

---

# 1. Project & Navigation

## US-001 — Create a project
**As a user, I want to create a new project so I can start organizing my work.**

**Acceptance Criteria**
- I can access a "Create Project" button or entry point.
- I can enter a project name (required) and description (optional).
- After creation, I am taken directly to the new project's home.
- The project appears in my list of projects.

---

## US-002 — Open a project
**As a user, I want to open my project so I can access all its pages and Kanban board.**

**Acceptance Criteria**
- My list of projects is visible.
- Clicking a project opens its home screen.
- I see quick access to pages and the Kanban board.

---

## US-003 — Navigate via sidebar
**As a user, I want to see all my pages in a sidebar so I can quickly open the one I need.**

**Acceptance Criteria**
- The sidebar lists all existing pages with their titles.
- Selecting a page opens it immediately.
- The sidebar remains accessible while working inside the project.

---

## US-004 — Search pages
**As a user, I want to search for a page by title or content so I can find information quickly.**

**Acceptance Criteria**
- A search bar or modal is available.
- Searching returns pages that match the title or text inside blocks.
- Clicking a result opens the corresponding page.

---

# 2. Pages (Documents)

## US-010 — Create a page
**As a user, I want to create a new page so I can write down ideas or specifications.**

**Acceptance Criteria**
- I can click "New Page" from the sidebar or project home.
- A new blank page opens instantly.
- The page appears immediately in the sidebar.

---

## US-011 — Edit page title
**As a user, I want to edit the title of a page so it reflects its content.**

**Acceptance Criteria**
- I can click the title to edit it inline.
- The title saves automatically.
- The sidebar shows the updated title.

---

## US-012 — Add blocks to a page
**As a user, I want to add blocks so I can structure my content.**

**Acceptance Criteria**
- I can insert blocks at any position.
- Available block types are visible in an "Add Block" menu.
- The new block appears exactly where I inserted it.

---

## US-013 — Edit blocks inline
**As a user, I want to edit blocks directly in the page so I can update information quickly.**

**Acceptance Criteria**
- Clicking inside a block puts it into editing mode.
- Changes appear immediately.
- No additional modal or separate editor is required.

---

## US-014 — Reorder blocks
**As a user, I want to reorder blocks inside a page so I can organize content clearly.**

**Acceptance Criteria**
- I can drag a block to another position.
- Other blocks move smoothly to accommodate the change.
- The new block order saves automatically.

---

## US-015 — Delete a block
**As a user, I want to delete a block so I can remove unneeded information.**

**Acceptance Criteria**
- A delete action is available on each block.
- I receive a minimal confirmation (optional for MVP).
- The block disappears immediately after deletion.

---

## US-016 — Auto-save page updates
**As a user, I want my updates to save automatically so I never lose my work.**

**Acceptance Criteria**
- Every edit (title, content, metadata) is saved instantly.
- No "Save" button is required.
- Leaving the page does not lose changes.

---

# 3. Page Metadata

## US-020 — Set page status
**As a user, I want to define the status of a page so I can track its progress on the Kanban board.**

**Acceptance Criteria**
- I can select a status from the available list.
- The Kanban board reflects the updated status.
- Status changes save automatically.

---

## US-021 — Add tags to a page
**As a user, I want to add tags to a page so I can organize related content.**

**Acceptance Criteria**
- I can add, edit, and remove tags.
- Tags appear on the page and on the Kanban card.
- Tags update instantly across the interface.

---

## US-022 — Assign a page
**As a user, I want to assign a page to a person so responsibilities are clear.**

**Acceptance Criteria**
- I can choose a member from a list.
- The assignee appears on the page and the Kanban card.
- Assignment updates automatically.

---

## US-023 — Add a due date
**As a user, I want to set a due date so I can track deadlines.**

**Acceptance Criteria**
- I can pick a date via a calendar input.
- The date displays in both the page and the Kanban card.
- Changing the date updates everywhere instantly.

---

# 4. Independent Page View

## US-030 — Open a page in full view
**As a user, I want to open a page in a clean, focused view so I can read and edit content easily.**

**Acceptance Criteria**
- Clicking a page opens it fullscreen or in a main content area.
- All blocks and metadata are visible.
- Navigation back to the project or board is clearly available.

---

# 5. Kanban Board

## US-040 — View all pages on a Kanban board
**As a user, I want to see my pages as cards organized by status so I understand my workflow.**

**Acceptance Criteria**
- Only pages with a status appear on the board.
- Pages are grouped under the correct columns.
- Each card shows: title, summary, tags, assignee, due date.

---

## US-041 — Move cards between columns
**As a user, I want to drag a card to another column so I can update its status easily.**

**Acceptance Criteria**
- Drag-and-drop works smoothly.
- The page’s status updates instantly.
- Other users see the update immediately (real-time).

---

## US-042 — Create a card from the board
**As a user, I want to create a card directly in the Kanban so I can quickly add new work items.**

**Acceptance Criteria**
- I can click “Add Card” in any column.
- A new page is created with the corresponding status.
- I can open and edit the new page immediately.

---

## US-043 — Open a card’s page
**As a user, I want to click a card to open its full page so I can view or edit its details.**

**Acceptance Criteria**
- Clicking a card navigates to the page view.
- All content and metadata are displayed.
- Returning to the board is intuitive.

---

## US-044 — See card summary
**As a user, I want each card to show a short summary so I understand the content at a glance.**

**Acceptance Criteria**
- The summary is generated from the first text block or a dedicated summary.
- The summary updates when the page changes.
- The card layout remains clean and readable.

---

# 6. Collaboration (MVP-light)

## US-050 — See who is on the same page
**As a user, I want to see who else is viewing the page so I know when collaboration is happening.**

**Acceptance Criteria**
- Avatars or initials appear near the page title.
- Presence updates in real time.
- Users disappear from presence a few seconds after leaving.

---

## US-051 — Live update on page changes
**As a user, I want updates made by others to appear instantly so everyone stays aligned.**

**Acceptance Criteria**
- Block edits update in real time.
- Metadata changes (status, tags, etc.) update instantly.
- No manual refresh is required.

---

## US-052 — Live update on Kanban changes
**As a user, I want card movements by others to appear instantly so the board stays accurate.**

**Acceptance Criteria**
- Cards move in real time when another user drags them.
- Changes to titles, tags, or summary appear immediately.
- Columns reposition smoothly.

---

# 7. Quality of Life

## US-060 — Dark mode
**As a user, I want a dark mode so the interface remains comfortable at any time.**

**Acceptance Criteria**
- I can toggle dark/light mode.
- The entire interface updates instantly.
- My preference is remembered.

---

## US-061 — Smooth animations
**As a user, I want smooth transitions and animations so the experience feels pleasant and modern.**

**Acceptance Criteria**
- Drag-and-drop animations feel fluid.
- Expanding/collapsing elements are smooth.
- Animations do not interfere with performance.

---

# End of User Stories
