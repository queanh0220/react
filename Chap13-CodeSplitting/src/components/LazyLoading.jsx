import React, { Suspense } from "react";
import { ErrorBoundary } from "./ErrorBoundary";
const Component = React.lazy(() => import("./MyComponent"));

export default function Header(props) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Component />
      </Suspense>
    </ErrorBoundary>
  );
}
