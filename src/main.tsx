import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App"

// [yasoo:imports]


ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    {/* [yasoo:provider-start] */}
<>
  {/* [yasoo:provider-start] */}

    {/* [yasoo:children] */}
    <App />
    
{/* [yasoo:provider-end] */}
</>
{/* [yasoo:provider-end] */}
  </React.StrictMode>
)