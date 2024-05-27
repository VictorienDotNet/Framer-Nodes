# Framer-Nodes
A node-based programming for Framer


- NodeTemplate
- useNodeInput
- useNodeOutput


## Framer Nodes Hook

## useNodeInput
You can read the Node's input by using the `useNodeInput` hook. It accept as parameter the Children from the current component. If the Children are Nodes, it retrieve the value from it and send it back as an array with all input values. 

```js
import { useNodeInput } from "https://framer.com/m/UseNode-U5fM.js"
export default function YourNode({input}) {
      const [inputValues] = useNodeInput(input);
}
```
## useNodeOutput
The `useNodeOutput` allow you to set the Node Output. 

```js
import { useNodeutput } from "https://framer.com/m/UseNode-U5fM.js"
const [output, setOutput, deleteOutput] = useNodeInput(initialOutputValue);
```

## Scenario


### Regular Case
In most case, you can use the Node template to create simple Node that doesn't require component lifecycle. 

```js
import { NodeTemplate, NodeControls } from "https://framer.com/m/UseNode-U5fM.js"

export default function YourNode(props) {
      const transform = (inputValues)=>{
            /* Your Code */
      }
      return <NodeTemplate {...props} label="YourNode" transform={transform} />
}

addPropertyControls(YourNode, NodeControls)
```

### Advanced Case

```js
import { Node, useNodeInput, useNodeOuput } from "https://framer.com/m/UseNode-U5fM.js"

const transform = (inputs)=>{
      /* Your Code */
}

export default function YourNode(props) {
      const [inputValues] = useNodeInput(input);
      const [outputValue, setOutputValue, deleteOutputValue] = useNodeOutput(
   

      useEffect(()=>{
            return () => { deleteOutput() }
      })
      return <Node {...props} label="YourNode" transform={transform} />
}

addPropertyControls(YourNode, NodeControls)
```
