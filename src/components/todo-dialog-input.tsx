import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Notebook, PlusCircle } from "lucide-react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export function TodoDialogInput() {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center justify-center p-6 text-sm font-medium border-2 border-dashed rounded-md">
        <PlusCircle className="w-4 h-4 mr-2" />
        New Todo
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Notebook className="w-5 h-5 mr-2" />
            Add New Todo
          </DialogTitle>
          <DialogDescription>
            Create a todo to plan your task. Tasks can be broken down into
            simpler forms using todos.
          </DialogDescription>
        </DialogHeader>

        <form action="" className="space-y-8">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              type="text"
              variant={"muted"}
              iSize={"lg"}
              placeholder="Enter todo title..."
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter todo description" />
          </div>
          <div className="space-x-4">
            <DialogClose asChild>
              <Button variant={"ghost"}>Cancel</Button>
            </DialogClose>
            <Button type="submit">Create</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
