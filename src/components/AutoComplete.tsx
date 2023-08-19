"use client";

import { useState } from "react";
import { LucideIcon } from "lucide-react";

import { Button } from "src/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "src/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "src/components/ui/popover";

export interface optionsType {
	value: string;
	label?: string;
	icon?: LucideIcon;
}

export interface AutoCompleteProps {
	name: string;
	options: optionsType[];
    handleSelection: (value: string) => void;
    selectedItemsProp: string[]
}

export function AutoComplete({ name, options, handleSelection,selectedItemsProp }: AutoCompleteProps) {
	const [open, setOpen] = useState(false);

	const [selectedItems, setSelectedItems] = useState<string[]>(selectedItemsProp);

	function addSelectedItems(value: string) {
		if (selectedItemsProp.includes(value)) {
			return;
		}
        handleSelection(value)
	}

	return (
		<div className="flex items-center space-x-4">
			<p className="text-sm text-muted-foreground">{name}</p>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						size="sm"
						className="w-[150px] justify-start"
					>
						<>+ Add {name}</>
					</Button>
				</PopoverTrigger>
				<PopoverContent className="p-0" side="right" align="start">
					<Command>
						<CommandInput placeholder="Change status..." />
						<CommandList>
							<CommandEmpty>No results found.</CommandEmpty>
							<CommandGroup>
								{options &&
									options.map((option : optionsType) => (
										<CommandItem
											key={option.value}
											onSelect={(value: string) => {
												addSelectedItems(value);
											}}
										>
											<span className={selectedItemsProp.includes(option.value) ? "opacity-25" : "opacity-100" }>
												{option.value}
											</span>
										</CommandItem>
									))}
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		</div>
	);
}
