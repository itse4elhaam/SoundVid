import ExploreMoreButton from "../Home Page/ExploreMoreButton";
import TemplateGridCard from "./GridCard";


// make image compulsory later on
interface LabelsType{
    name: string;
    black: boolean
}

interface GridDataType {
	image?: string;
	heading: string;
	labels: LabelsType[];
}

export interface GridDataObjArray {
	GridData: GridDataType[];
    heading: string
    punchline: string
    btnText: string
}

export default function TemplateGrid({GridData, heading, punchline, btnText}:GridDataObjArray){

    return (
<section className="w-11/12 mx-auto my-8">
	<div className="flex flex-col items-center">
		<div className="heading-wrapper flex justify-between items-center w-full">
			<h2 className="text-center text-2xl font-bold">
				{heading}
			</h2>
			<ExploreMoreButton
				href="/templates/after-effects"
				text="Explore all After Effects templates"
			/>
		</div>
		<div className="info-wrapper text-center mb-6">
			<h6>
				{punchline}
			</h6>
		</div>
		<div className="w-85% mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-content-center w-full p-4">

            {GridData.map((item, index) => (
                <TemplateGridCard key={index} image={item.image!} heading={item.heading} labels={item.labels} />
            ))}
        </div>		</div>
	</div>

	<button className="px-4 py-2 mt-4 transition-colors duration-150 ease-in-out text-white bg-blue-600 hover:bg-blue-700 rounded-lg block mx-auto">
		{btnText}
	</button>
</section>
    )
}

