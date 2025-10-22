import { useState } from "react";
import { CourseCard } from "@/components/courses/CourseCard";
import { TabsCustom } from "@/components/ui/tabs-custom";

const courses = [
  {
    id: 1,
    title: "UX Design Foundations",
    description: "To achieve a solid foundation in design, master the fundamentals of ux design....",
    progress: 25,
    timeLeft: "1 hours left",
  },
  {
    id: 2,
    title: "UX Design Foundations",
    description: "To achieve a solid foundation in design, master the fundamentals of ux design....",
    progress: 25,
    timeLeft: "1 hours left",
  },
  {
    id: 3,
    title: "UX Design Foundations",
    description: "To achieve a solid foundation in design, master the fundamentals of ux design....",
    progress: 25,
    timeLeft: "1 hours left",
  },
  {
    id: 4,
    title: "UX Design Foundations",
    description: "To achieve a solid foundation in design, master the fundamentals of ux design....",
    progress: 25,
    timeLeft: "1 hours left",
  },
];

const tabs = [
  { label: "All", value: "all" },
  { label: "For you", value: "for-you" },
  { label: "Beginner", value: "beginner" },
  { label: "Intermediate", value: "intermediate" },
  { label: "Advanced", value: "advanced" },
];

export default function Courses() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="p-8 bg-muted/30 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="bg-background rounded-3xl p-8 shadow-sm">
          <h1 className="text-4xl font-bold mb-2 text-foreground">Courses</h1>
          <p className="text-muted-foreground mb-8">
            You can improve your design abilities through interactive, hands-on courses
          </p>

          <TabsCustom tabs={tabs} activeTab={activeTab} onChange={setActiveTab} className="mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
