# 📌 Portfolio Context Instruction (Claude Sonnet 4.5 – Copilot)

## Role & Scope
You are assisting in the development of a **personal portfolio website** for **Kent Cyrem Patasin**, a **Front-End Developer and UI/UX Designer** based in the **Philippines**.

The portfolio’s purpose is to support:
- Internship applications  
- UI/UX Designer roles  
- Freelance / client work  
- Personal branding  

This document is the **single source of truth** for all design, content, and code decisions.

---

## Core Focus
This portfolio emphasizes:
- Web Development  
- Prototyping  
- Wireframing  
- UI/UX Design  

The goal is to create interfaces that are:
- Clear  
- Functional  
- Easy to use  
- Professional and credible  

Avoid experimental or playful designs.

---

## Tech Stack Constraints (Strict)

### Frontend
- React (with Vite)
- CSS only (no Tailwind, no Bootstrap)

### Design Tools
- Figma (primary design reference)

### Explicitly NOT Allowed
- Angular  
- Vue  
- Bootstrap  
- jQuery  
- Any CSS framework  
- Any UI library unless explicitly requested  

Do not suggest or generate code using disallowed tools.

---

## Design Philosophy
The design language must always be:
- Minimal  
- Clean and modern  
- Corporate and professional  

Visual characteristics:
- Grid-based layout system  
- Visible lines and borders  
- Intentional spacing and alignment  
- Space Mono typography  
- Strong structure and hierarchy  

Avoid decorative elements that do not serve clarity.

---

## Tone & Writing Style (Strict)
All written content must follow these rules:
- Professional tone  
- Straightforward, no fluff  
- Technical when appropriate  
- Storytelling only in case studies  
- Short sentences  
- Short paragraphs  
- First-person voice (“I designed…”, “I built…”)  

Avoid marketing hype and exaggerated claims.

---

## Required Sections (Must Never Be Removed)
The portfolio must always include:
- Hero  
- About Me  
- Skills / Stack  
- Projects  
- Case Studies  
- Resume / CV  
- Awards  
- Certificates  
- Leadership Background  
- Contact  

Do not merge or remove these sections without explicit instruction.

---

## Case Study Structure (Mandatory)
All project case studies must follow this exact structure:
1. Objective  
2. Role  
3. Tools  
4. Process  
5. Outcome  
6. Learnings  

Do not reorder or rename these headings.

---

## Visual & Interaction Rules
You must enforce the following:
- No stock photos  
- SVG icons only  
- Grid-based layouts  
- Mobile-first design approach  
- Avoid heavy or excessive animations  
- Framer Motion is allowed, but must be subtle and purposeful  

Animations must never distract from content.

---

## Accessibility & UX Standards
Always enforce:
- Semantic HTML  
- ARIA labels where applicable  
- Logical structure for screen readers  

Keyboard navigation and WCAG color contrast are optional but encouraged when feasible.

---

## Architecture & File Structure
Assume:
- A strict folder structure  
- Component-based React architecture  
- Clear separation of concerns (components, sections, styles, assets)  

Avoid monolithic components.

---

## Identity Assumptions
You may assume the following unless told otherwise:
- Name: Kent Cyrem Patasin  
- Location: Philippines  
- Role title: Front-End Developer / UI-UX Designer  

Do not invent credentials, companies, or experiences.

---

## Post-Prompt Execution Rule (Mandatory)
After responding to any prompt that generates, modifies, or refactors code, you must:

1. Read and reason about the **entire existing codebase**, not just the edited file.  
2. Check for errors, including but not limited to:
   - Syntax errors  
   - Import or export issues  
   - Broken component references  
   - Inconsistent naming  
   - Violations of this context document  
3. Verify architectural consistency with:
   - Component-based structure  
   - Separation of concerns  
   - Design and styling rules  
4. Provide a clear summary that includes:
   - What was added, changed, or removed  
   - Why those changes were made  
   - Any potential issues, risks, or follow-up recommendations  

Do not skip this step.  
Do not assume correctness without verification.

---

## Final Instruction
When generating:
- **Code** → prioritize clarity, maintainability, and correctness  
- **UI decisions** → follow grid, spacing, and minimalism rules  
- **Content** → follow tone and structure rules exactly  

If a request conflicts with this document, **default to this document**.
