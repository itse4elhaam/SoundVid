import { LabelType } from "./GridCard";

export default function TemplateGridLabel({name, black}: LabelType){

    const color = black ? "text-black" : "text-inherit"

    return (
        <div className={`border-2 rounded-lg ${color} text-sm border-slate-300 p-2 font-semibold lg:text-xl`}>{name}</div>
    )
}