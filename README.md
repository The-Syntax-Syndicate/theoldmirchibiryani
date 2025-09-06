# The Old Mirchi Biryani – Concept Website 🍽️

This is a demo project where our team reimagined how **The Old Mirchi Biryani** could look with a modern, responsive website.  
It’s part of our initiative to showcase local businesses online and inspire possibilities.

---

## Features

- Clean and modern UI 🍴
- Mobile-first responsive design 📱
- Menu showcase with food highlights 🌶️
- Contact & order section 📩

---

## Tech Stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## Getting Started

1. **Clone the repository:**

   ```sh
   git clone https://github.com/The-Syntax-Syndicate/theoldmirchibiryani
   cd theoldmirchibiryani
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view in your browser.

---

## Contributing

1. **Create a new branch:**

   - For features:  
     `git checkout -b feat/<feature-name>`
   - For bug fixes:  
     `git checkout -b fix/<bug-description>`

2. **Keep your branch up to date:**

   ```sh
   git stash
   git checkout main
   git pull
   git checkout <your-branch>
   git rebase main
   git stash pop
   ```

3. **Commit and push:**
   ```sh
   git add <file1> <file2>
   git commit -m "feat: Add user login" # or "fix: Resolve homepage layout"
   git push -u origin <your-branch>
   ```

---

## Recent Updates & Project Structure

- **Global Layout:**  
  Standardized navigation bar added in `layout.js`.

- **Global CSS:**  
  Common color variables defined in `globals.css` for consistent design.

- **File Structure:**  
  Reorganized to follow standard Next.js conventions.

- **Global Components:**  
  Added reusable UI components.

---

## Common Colors

Use these CSS variables for consistent styling:

```css
--color-text: #e0ab0ecc;
--color-button-text: #bd003a;
--color-button-bg: #ffbe00;
--color-secondary: #ff0000d6;
--color-bg: #514144;
```

**Usage Examples:**

- **Text Color**

  ```html
  <p class="text-primary-text">Hello, world!</p>
  ```

- **Background Color**

  ```html
  <div class="bg-bg-color">
    This is a section with the main background color.
  </div>
  ```

- **Button Styling**

  ```html
  <button class="bg-btn-bg text-btn-text font-bold py-2 px-4 rounded">
    Click Me
  </button>
  ```

- **Border Color**
  ```html
  <div class="border-2 border-secondary-color p-4">
    This div has a secondary color border.
  </div>
  ```
