import { ControlType, addPropertyControls } from "framer"
import { NodeTemplate } from "https://framer.com/m/UseNode-U5fM.js"

export default function Sum(props) {
    const transform = (values) => {
        const sum = values.reduce(function (sum, value) {
            return sum + value
        }, 0)
        return sum
    }
    return <NodeTemplate {...props} label="Sum" transform={transform} />
}

addPropertyControls(Sum, {
    input: {
        type: ControlType.Array,
        control: {
            type: ControlType.ComponentInstance,
        },
    },
})
