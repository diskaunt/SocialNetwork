import React, { ComponentType, Suspense } from "react";
import Preloader from "../components/common/preloader/preloader/Preloader";

export const withSuspense = (Component: ComponentType) =>
  (
    <Suspense fallback={<Preloader />}>
      <Component/>
    </Suspense>
  );