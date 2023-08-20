"use client";
import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Bold, Strikethrough, Italic, List, ListOrdered } from "lucide-react";
import { Toggle } from "src/components/ui/toggle";
import { Separator } from "src/components/ui/separator";

export default function RichTextEditor() {
	const editor = useEditor({
		editorProps: {
			attributes: {
				class: "min-h-[80px] max-h-[180px] w-full rounded-md rounded-br-none rounded-bl-none border border-input bg-transparent px-3 py-2 border-b-0 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 overflow-auto",
			},
		},
		extensions: [
			StarterKit.configure({
				orderedList: {
					HTMLAttributes: {
						class: "list-decimal pl-4",
					},
				},
				bulletList: {
					HTMLAttributes: {
						class: "list-disc pl-4",
					},
				},
			}),
		],
		content: "",
	});

	return (
		<>
			<EditorContent editor={editor} />
			{editor ? <RichTextEditorToolbar editor={editor} /> : null}
		</>
	);
};

const RichTextEditorToolbar = ({ editor }: { editor: Editor }) => {
	return (
		<div className="border border-input bg-transparent rounded-br-md rounded-bl-md p-1 flex flex-row items-center gap-1">
			<Toggle
				size="sm"
				pressed={editor.isActive("bold")}
				onPressedChange={() =>
					editor.chain().focus().toggleBold().run()
				}
			>
				<Bold className="h-4 w-4" />
			</Toggle>
			<Toggle
				size="sm"
				pressed={editor.isActive("italic")}
				onPressedChange={() =>
					editor.chain().focus().toggleItalic().run()
				}
			>
				<Italic className="h-4 w-4" />
			</Toggle>
			<Toggle
				size="sm"
				pressed={editor.isActive("strike")}
				onPressedChange={() =>
					editor.chain().focus().toggleStrike().run()
				}
			>
				<Strikethrough className="h-4 w-4" />
			</Toggle>
			<Separator orientation="vertical" className="w-[1px] h-8" />
			<Toggle
				size="sm"
				pressed={editor.isActive("bulletList")}
				onPressedChange={() =>
					editor.chain().focus().toggleBulletList().run()
				}
			>
				<List className="h-4 w-4" />
			</Toggle>
			<Toggle
				size="sm"
				pressed={editor.isActive("orderedList")}
				onPressedChange={() =>
					editor.chain().focus().toggleOrderedList().run()
				}
			>
				<ListOrdered className="h-4 w-4" />
			</Toggle>
		</div>
	);
};

