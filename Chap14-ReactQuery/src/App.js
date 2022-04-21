import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Todo from "./components/Todo";


function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Todo />
      </div>
    </QueryClientProvider>
  );
}

export default App;
