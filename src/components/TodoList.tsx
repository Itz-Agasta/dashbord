"use client";
import { format } from "date-fns";
import { Calendar1Icon } from "lucide-react";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const TodoList = () => {
	const [date, setDate] = useState<Date>(new Date());
	const [open, setOpen] = useState(false);
	return (
		<div className="">
			<h1 className="text-lg mb-6 font-medium">Todo List</h1>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button className="w-full">
						<Calendar1Icon />
						{date ? format(date, "PPP") : <span>Pick a date</span>}
					</Button>
				</PopoverTrigger>
				<PopoverContent>
					{" "}
					<Calendar
						mode="single"
						selected={date}
						onSelect={(date) => {
							setDate(date);
							setOpen(false);
						}}
						className="rounded-md border"
					/>
				</PopoverContent>
			</Popover>
			{/*List*/}
			<ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
				{/*List Item*/}
				<Card className="p-4">
					<div className="flex items-center gap-4">
						<Checkbox id="item1" />
						<label htmlFor="item1" className="text-sm text-muted-foreground">
							Idk what to write here
						</label>
					</div>
				</Card>
				{/*List Item*/}
				<Card className="p-4">
					<div className="flex items-center gap-4">
						<Checkbox id="item1" checked />
						<label htmlFor="item1" className="text-sm text-muted-foreground">
							Idk what to write here
						</label>
					</div>
				</Card>
				{/*List Item*/}
				<Card className="p-4">
					<div className="flex items-center gap-4">
						<Checkbox id="item1" />
						<label htmlFor="item1" className="text-sm text-muted-foreground">
							Idk what to write here
						</label>
					</div>
				</Card>
				{/*List Item*/}
				<Card className="p-4">
					<div className="flex items-center gap-4">
						<Checkbox id="item1" checked />
						<label htmlFor="item1" className="text-sm text-muted-foreground">
							Idk what to write here
						</label>
					</div>
				</Card>
				{/*List Item*/}
				<Card className="p-4">
					<div className="flex items-center gap-4">
						<Checkbox id="item1" checked />
						<label htmlFor="item1" className="text-sm text-muted-foreground">
							Idk what to write here
						</label>
					</div>
				</Card>
				{/*List Item*/}
				<Card className="p-4">
					<div className="flex items-center gap-4">
						<Checkbox id="item1" checked />
						<label htmlFor="item1" className="text-sm text-muted-foreground">
							Idk what to write here
						</label>
					</div>
				</Card>
				{/*List Item*/}
				<Card className="p-4">
					<div className="flex items-center gap-4">
						<Checkbox id="item1" />
						<label htmlFor="item1" className="text-sm text-muted-foreground">
							Idk what to write here
						</label>
					</div>
				</Card>
				{/*List Item*/}
				<Card className="p-4">
					<div className="flex items-center gap-4">
						<Checkbox id="item1" />
						<label htmlFor="item1" className="text-sm text-muted-foreground">
							Idk what to write here
						</label>
					</div>
				</Card>
				{/*List Item*/}
				<Card className="p-4">
					<div className="flex items-center gap-4">
						<Checkbox id="item1" />
						<label htmlFor="item1" className="text-sm text-muted-foreground">
							Idk what to write here
						</label>
					</div>
				</Card>
			</ScrollArea>
		</div>
	);
};

export default TodoList;
