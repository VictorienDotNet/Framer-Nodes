# Framer-Nodes
A node-based programming for Framer. Check the [website](https://nodes.framer.website/) for futher details. 


- NodeTemplate
- useNodeInput
- useNodeOutput


## Hooks
The Nodes are rely on two major hooks : `useNodeInput` and `useNodeOutput`. These hooks allow you to control the input and output of your node.

## useNodeInput
You can read the Node's input by using the `useNodeInput` hook. It accept as parameter the Children from the current component. If the Children are Nodes, it retrieve the value from it and send it back as an array with all input values. 

```js
import { useNodeInput } from "https://framer.com/m/UseNode-U5fM.js"

export default function YourNode({input}) {
      const [inputValues] = useNodeInput(input);
}
```
## useNodeOutput
The `useNodeOutput` allow you to update the Node Output. 

```js
import { useNodeutput } from "https://framer.com/m/UseNode-U5fM.js"
const [output, setOutput, deleteOutput] = useNodeInput(initialOutputValue);
```

## Scenario


### Regular Case
In most cof the case, you can use the Node template to create simple Node that doesn't require complexe component lifecycle. Most of Transofrmation Nodes are using the template.

```js
import { NodeTemplate, NodeControls } from "https://framer.com/m/UseNode-U5fM.js"

const transform = (inputValues)=>{
      /* Your Code */
}

export default function YourNode(props) {
      return <NodeTemplate {...props} label="YourNode" transform={transform} />
}

addPropertyControls(YourNode, NodeControls)
```
(See Example)[/examples/Sum.tsx]

### Advanced Case

```js
import { Node, useNodeInput, useNodeOuput } from "https://framer.com/m/UseNode-U5fM.js"

const transform = (inputs)=>{
      /* Your Code */
}

export default function YourNode(props) {
      const [inputValues] = useNodeInput(input);
      const [outputValue, setOutputValue, deleteOutputValue] = useNodeOutput(
            transform(inputValues)
      )
   

      useEffect(()=>{
            //You can place here
            setOutputValue(/* Any Value*/)
            return () => {
                  //When the component is unmounted, the output is removed from the Array.
                  deleteOutput()
            }
      }, [])
      return <Node {...props} label="YourNode" transform={transform} />
}

addPropertyControls(YourNode, NodeControls)
```
