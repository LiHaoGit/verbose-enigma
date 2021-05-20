function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) => {
        return typeof child === "object" ? child : createTextElement(child);
      }),
    },
  };
}
/**@jsx createElement */
const element = (
  <div>
    <h1 title="haha" >Hello World</h1>
    <h2>from Didact</h2>
  </div>
);
console.log(JSON.stringify(element,null,2))
/**
{
  "type": "div",
  "props": {
    "children": [
      {
        "type": "h1",
        "props": {
          "children": [
            {
              "type": "TEXT_ELEMENT",
              "props": {
                "nodeValue": "Hello World",
                "children": []
              }
            }
          ]
        }
      },
      {
        "type": "h2",
        "props": {
          "children": [
            {
              "type": "TEXT_ELEMENT",
              "props": {
                "nodeValue": "from Didact",
                "children": []
              }
            }
          ]
        }
      }
    ]
  }
}
 */

const container = document.getElementById("app")

const preElement = document.createElement("pre")
preElement.textContent = JSON.stringify(element,null,2)
preElement.style.fontFamily="Consolas"

container.appendChild(preElement)