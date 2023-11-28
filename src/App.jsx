import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchParams from "./SearchParams";
import Details from "./Details";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

// App and components are always capitalized.
const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div>
          <h1>Adopt Me!</h1>
          <Routes>
            <Route path="/details/:id" element={<Details />}></Route>
            <Route path="/" element={<SearchParams />}></Route>
          </Routes>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
// New way of rendering instead of ReactDOM.render.
// It's also a way to opt into new features.
const root = createRoot(container);
root.render(React.createElement(App));
