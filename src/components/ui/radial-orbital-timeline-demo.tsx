
"use client";

import { Calendar, Code, FileText, User, Clock } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "TMS",
    date: "Jan 2024",
    content: "Team Management System: A comprehensive tool for managing teams, tasks, and project workflows efficiently.",
    category: "Planning",
    icon: Calendar,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "RMS",
    date: "Feb 2024",
    content: "Resource Management System: Optimize resource allocation, track utilization, and forecast needs with our powerful RMS.",
    category: "Design",
    icon: FileText,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "CST",
    date: "Mar 2024",
    content: "Customer Support Tool: Enhance customer satisfaction with a streamlined and intelligent support ticketing system.",
    category: "Development",
    icon: Code,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 4,
    title: "WFx",
    date: "May 2024",
    content: "Wolfronix: An innovative platform for next-generation workflow automation and integration.",
    category: "Release",
    icon: Clock,
    relatedIds: [1, 3],
    status: "pending" as const,
    energy: 30,
  }
];

export function RadialOrbitalTimelineDemo() {
  return (
    <>
      <RadialOrbitalTimeline timelineData={timelineData} />
    </>
  );
}

export default {
  RadialOrbitalTimelineDemo,
};
