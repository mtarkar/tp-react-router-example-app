# Setup React Router with React

1. Install React Router

```bash
 npm i react-router-dom
```

2. Import Browser Router and add to main.jsx

```javascript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

3. Create Routes

```javascript
import { Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/home" element={<HomePage />} />
</Routes>;
```
