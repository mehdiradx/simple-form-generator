# simple-form-generator

Build a form generator module using React and the specified libraries and tools. The form generator should allow users to create dynamic forms based on a predefined schema.

## 🔱 Features

- Allow users to create pages with a name and a list of elements.
- Support different input types defined in the ElementType enum (text, checkbox, select,
  radio).
- For select and radio input types, provide a list of choices.
- Implement conditional logic for form elements based on the requiredIf, visibleIf, and
  editableIf properties of elements. For example, if a certain input field is required based
  on the value of another input field, it should be displayed accordingly.
- The generated forms should be rendered and interactable.
- Implement persistence by using local storage or an API to save and load the generated
  forms.

## 📦 Install

```bash
pnpm install
```

## ⬛️ Commands

start development. Open your browser and visit http://localhost:5173/

```bash
pnpm run dev
```

running all tests. watch result here http://localhost:51204/\_\_vitest\_\_/:

```bash
pnpm run test:ui
```
