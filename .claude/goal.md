# Application Brief — Global Objective

Atlas is a modern, minimalist workspace designed to unify **content creation** and **project organization** in a single interface.  
Users create rich **Pages** (notes, documents, specs) composed of modular blocks, and these Pages can also appear as **cards in a Kanban board** based on their status.

The goal is to provide a **simple, clean, and intuitive experience** for writing, organizing, and tracking progress within one project.  
The application focuses on:

- effortless editing,
- seamless navigation,
- and a fluid connection between documents and workflow.

---

# Product Features Specification — Pages, Independent View, Kanban

## 1. Pages Composed of Blocks

Pages are structured documents built from an ordered list of editable blocks.

### Block Types (MVP)
- **Text block**: headings, paragraphs, basic formatting.
- **Checklist block**: items that can be checked/unchecked.
- **Image block**: display an image via upload or URL.
- **Code block**: syntax-highlighted code snippet.
- **Embed block**: URL preview (e.g., video, tweet).
- **Divider block**: horizontal separator.

### Block Interactions
- Add a new block anywhere.
- Edit blocks inline.
- Reorder blocks using drag & drop.
- Delete or duplicate blocks.

### Page Metadata
- `title`
- `status` (todo, in_progress, review, done)
- `tags`
- `assignee`
- `due_date`
- `summary` (auto-generated from first text block)

---

## 2. Independent Page View

Each Page can be opened as a standalone document with a clean, content-first layout.

### Independent Page View Includes
- Large editable title at the top.
- Metadata panel (status, tags, assignee, due date).
- Full list of blocks stacked vertically.
- Inline editing of every block.
- Control to add blocks (inline "+" or floating button).
- Auto-saving of edits.
- Navigation back to Project Home or Kanban Board.

### Access Points
- From the sidebar (list of all pages).
- From clicking a card in the Kanban board.

---

## 3. Kanban Visualization of Pages

Pages with a defined status appear as cards in a Kanban board, enabling visual workflow management.

### Columns (MVP)
- To Do
- In Progress
- Review
- Done

### Kanban Card Content
- Title
- Summary
- Tags
- Assignee
- Due date

### Kanban Interactions
- Drag & drop cards between columns (updates page status automatically).
- Click a card to open the associated Page.
- Add a new card → auto-generates a new Page with default metadata.
- Real-time updates when Page content or metadata changes.

---

# Summary

The system provides a unified workflow combining:

1. **Rich modular Pages**,
2. **Independent document editing**,
3. **Kanban-based visualization and organization**.

This allows users to effortlessly write content, manage tasks, and track progress within a single, simple project environment.
