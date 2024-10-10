import data from "./data"
import "./Accordian.css"
import { useState } from "react"


export function Accordian() {
    const [selected, setSelected] = useState(null)
    const [enableMultiSelection, setenableMultiSelection] = useState(false)
    const [multiple, setMultiple] = useState([]);
    function handleSingleSelection(getCurrentId) {
        // console.log(getCurrentId);
        setSelected(getCurrentId === selected ? null : getCurrentId)

    }
    function handleMultiselection(getCurrentId) {
        console.log("hi");

        let cpyMutiple = [...multiple]
        console.log(cpyMutiple);

        const findIdxOfCurrentId = cpyMutiple.indexOf(getCurrentId);
        if (findIdxOfCurrentId === -1) {
            cpyMutiple.push(getCurrentId)
        }
        else {
            cpyMutiple.splice(findIdxOfCurrentId, 1)
        }
        setMultiple(cpyMutiple)

    }

    return (
        <div className="wrapper">
            <button onClick={() => setenableMultiSelection(!enableMultiSelection)}>Enable multi selection</button>
            <div className="accordian">

                {data && data.length > 0 ? data.map(dataItem => (
                    <div className="item">
                        <div onClick={
                            enableMultiSelection
                                ? () => handleMultiselection(dataItem.id)
                                : () => handleSingleSelection(dataItem.id)} className="title">

                            <h3>{dataItem.question}</h3>
                            <span>+</span>

                        </div>
                        {
                            enableMultiSelection
                                ? multiple.indexOf(dataItem.id) !== -1 && (
                                    <div className="content">
                                        {dataItem.answer}
                                    </div>)

                                : selected === dataItem.id && (
                                    <div className="content">
                                        {dataItem.answer}
                                    </div>)}



                    </div>
                )) : <div>No data found</div>}


            </div>
        </div >



    )

}