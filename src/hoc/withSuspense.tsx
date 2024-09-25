import React, { ComponentType, Suspense } from "react";
import Preloader from "../components/common/Preloader/Preloader";

export const withSuspense = (Component: ComponentType) =>
  (
    <Suspense fallback={<Preloader />}>
      <Component/>
    </Suspense>
  );