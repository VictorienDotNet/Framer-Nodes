import { ControlType, addPropertyControls } from "framer"
import { NodeTemplate } from "https://framer.com/m/UseNode-U5fM.js"

const transform = (values) => {
    return values.reduce(function (sum, value) {
        return sum + value
    }, 0)
}

export default function Sum(props) {
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
