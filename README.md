# Framer-Nodes
A node-based programming for Framer


### Import

```js
import { Node, NodeTemplate, useNodeInput, useNodeOutput } from "https://framer.com/m/UseNode-U5fM.js"
```


```js
import { NodeTemplate, NodeControls } from "https://framer.com/m/UseNode-U5fM.js"


export default function YourNode(props) {
    const transform = (inputs)=>{
      /* Here the code you would like apply */
    }
    return <NodeComponent {...props} label="Average" transform={transform} />
}

addPropertyControls(YourNode, NodeControls)
```

- NodeTemplate
- useNodeInput
- useNodeOutput
