import { ControlType, addPropertyControls } from "framer"
import { useEffect, useState, useContext } from "react"
import {
    NodeDesignTemplate,
    useNodeOutput,
} from "https://framer.com/m/UseNode-U5fM.js"

export default function Dataset({ label, values }) {
    const [output, setOutput, deleteOutput] = useNodeOutput(
        values && values.split(",")
    )

    useEffect(() => {
        return () => {
            deleteOutput()
        }
    }, [])

    //return value
    return (
        <NodeDesignTemplate variant="Value" icon="Collection" label={label} />
    )
}

addPropertyControls(Dataset, {
    label: {
        type: ControlType.String,
        defaultValue: "Dataset",
    },
    values: {
        title: "Values",
        type: ControlType.String,
        displayTextArea: true,
        description: "Values separated by a ,",
    },
})
