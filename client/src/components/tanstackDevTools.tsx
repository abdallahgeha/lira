import { lazy, Suspense } from "react";

const TanstackDevTools = () => {
  if (process.env.NODE_ENV === "production") return null;

  const TanStackRouterDevtools = lazy(() =>
    // Lazy load in development
    import("@tanstack/router-devtools").then((res) => ({
      default: res.TanStackRouterDevtools,
      // For Embedded Mode
      // default: res.TanStackRouterDevtoolsPanel
    }))
  );

  return (
    <Suspense>
      <TanStackRouterDevtools />
    </Suspense>
  );
};

export default TanstackDevTools;
