# Framer-Nodes
A node-based programming for Framer


### Import
```js
import { NodeTemplate, NodeControls, useNodeInput, useNodeOutput } from "https://framer.com/m/UseNode-U5fM.js"
```


All Framer Nodes hook and function are available from `https://framer.com/m/UseNode-U5fM.js`. You can import the 

- useNodeInput
- useNodeOutput
- NodeTemplate
- 



### Node

```js
import { NodeTemplate, NodeControls } from "https://framer.com/m/UseNode-U5fM.js"


const transform = (inputs)=>{
      /* Here the code you would like apply */
}

export default function YourNode(props) {
    return <NodeTemplate {...props} label="YourNode" transform={transform} />
}

addPropertyControls(YourNode, NodeControls)
```

- NodeTemplate
- useNodeInput
- useNodeOutput
