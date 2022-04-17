import React from "react";
import LearnScaleForm, {LearnScaleFormSubmitData} from "./LearnScalesForm";



function LearnScalesPage() {
    const onScaleSelectedHandler = (data: LearnScaleFormSubmitData) => {
    }

    const onResetHandler = () => {

    }

    return (
        <main className="container">
            <div className="bg-light p-5 rounded">
                <h1>Select scale to learn</h1>
                <LearnScaleForm onSubmit={onScaleSelectedHandler} onReset={onResetHandler}/>
            </div>
            <div className={"d-flex justify-content-center"}>

            </div>
        </main>
    )
}

export default LearnScalesPage;