import React, { useEffect, useState } from "react";
import DocConsummer from "./DocConsummer";

// @ts-ignore
const RemoteDummy = React.lazy(() => import("documentation/Dummy"));

const App = () => {
  const [links, setLinks] = useState(null);

  useEffect(() => {
    // @ts-ignore
    import("documentation/links").then(({ default: func }) => {
      setLinks(func());
    });
  }, []);

  return (
    <React.Suspense fallback="loading...">
      Studio App
      <React.Suspense fallback="loading...">
        <RemoteDummy />
        <DocConsummer links={links} />
      </React.Suspense>
    </React.Suspense>
  );
};

export default App;
