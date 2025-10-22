import { cn } from "@/lib/utils";

interface Tab {
  label: string;
  value: string;
}

interface TabsCustomProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (value: string) => void;
  className?: string;
}

export function TabsCustom({ tabs, activeTab, onChange, className }: TabsCustomProps) {
  return (
    <div className={cn("flex gap-3 flex-wrap", className)}>
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={cn(
            "px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
            activeTab === tab.value
              ? "bg-muted text-foreground"
              : "bg-transparent text-muted-foreground hover:bg-muted/50"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
