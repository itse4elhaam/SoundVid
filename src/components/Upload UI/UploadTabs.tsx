import { Button } from "src/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "src/components/ui/card";
import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "src/components/ui/tabs";
import UploadAssets from './UploadAssets';

export default function UploadTabs() {
	return (
		<Tabs defaultValue="video" className=" min-w-[400px]">
			<TabsList className="grid w-full grid-cols-2">
				<TabsTrigger value="video">Upload Video</TabsTrigger>
				<TabsTrigger value="audio">Upload Audio</TabsTrigger>
			</TabsList>
			<TabsContent value="video">
				<Card>
					<CardHeader>
						<CardTitle>Video Upload</CardTitle>
						<CardDescription>Upload Videos Here.</CardDescription>
					</CardHeader>
					<CardContent className="space-y-2">
						<UploadAssets location="videos" />
					</CardContent>
				</Card>
			</TabsContent>
			<TabsContent value="audio">
				<Card>
					<CardHeader>
						<CardTitle>Audio Upload</CardTitle>
						<CardDescription>Upload Audio Here.</CardDescription>
					</CardHeader>
					<CardContent className="space-y-2">
						<UploadAssets location="audio"/>
					</CardContent>
				</Card>
			</TabsContent>
		</Tabs>
	);
}
