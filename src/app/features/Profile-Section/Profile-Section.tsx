import { User } from "lucide-react";

export const ProfileSection = (props: { name: string; email: string }) => {
  return (
    <div className="h-screen w-64 border-r bg-card p-6">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <User className="h-10 w-10" />
        </div>
        <div className="text-center">
          <h3 className="text-lg font-medium">John Doe</h3>
          <p className="text-sm text-muted-foreground">@johndoe</p>
        </div>
      </div>

      <div className="mt-8 space-y-2">
        <div className="flex justify-between border-b border-border py-2">
          <span className="text-muted-foreground">Status</span>
          <span className="font-medium text-green-400">Online</span>
        </div>
        <div className="flex justify-between border-b border-border py-2">
          <span className="text-muted-foreground">Last login</span>
          <span className="font-medium">Today</span>
        </div>
      </div>
    </div>
  );
};
