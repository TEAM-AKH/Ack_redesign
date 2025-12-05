
"use client";

import { Calendar, Code, FileText, User, Clock } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { products } from "@/lib/products";

export function RadialOrbitalTimelineDemo({ timelineData }: { timelineData: any[] }) {
  return (
    <>
      <RadialOrbitalTimeline timelineData={timelineData} />
    </>
  );
}

export default {
  RadialOrbitalTimelineDemo,
};
