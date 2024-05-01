import { Loader2Icon } from "lucide-react";

export default function Loading() {
  return (
    <main className="flex flex-row items-center justify-center mt-24">
      <Loader2Icon className="w-10 h-10 mr-2 animate-spin" /> Fetching...
    </main>
  );
}
