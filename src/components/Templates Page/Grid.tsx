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

interface GridDataObjArray {
	GridData: GridDataType[];
}

export default function TemplateGrid({GridData}:GridDataObjArray){

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-content-center w-full p-4">

            {GridData.map((item, index) => (
                <TemplateGridCard key={index} image={item.image!} heading={item.heading} labels={item.labels} />
            ))}
        </div>
    )
}