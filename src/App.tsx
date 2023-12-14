import { Suspense, lazy } from "react";
import { Layout, Loading } from "@/components";

const HomePage = lazy(() => import("@/pages/home.page"));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <HomePage />
      </Suspense>
    </Layout>
  );
}

