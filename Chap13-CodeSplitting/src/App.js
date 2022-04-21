import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Lazy = lazy(() => import('./components/LazyLoading'))
const DynamicImport = lazy(() => import('./components/DynamicImport'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Lazy />} />
          <Route path="/dynamic-import" element={<DynamicImport />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
