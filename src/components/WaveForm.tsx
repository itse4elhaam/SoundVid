"use client";
import { useEffect, useRef } from "react";

interface Props {
	file?: string;
	name?: string;
	length?: string;
}

export default function WaveForm({ file, name, length }: Props) {
	const waveformRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		let WaveSurfer;

		// Dynamically import Wavesurfer module
		import("wavesurfer.js").then((module) => {
			WaveSurfer = module.default;

			// Create Wave surfer instance once the module is loaded
			const ws = WaveSurfer.create({
				container: waveformRef.current!,
				waveColor: "#4F4A85",
				progressColor: "#383351",
				url: "../../public/sample_audio.mp3",
			});

			ws.on("interaction", () => {
				ws.play();
			});
		});
	}, []);

	return (
		<section className="wave-wrapper">
			<div ref={waveformRef} id="waveform">
                
            </div>
            <div className="">IS THIS WORKING?</div>
		</section>
	);
}
