"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-background" />,
});

export default function InteractiveScene() {
  return <Scene />;
}
