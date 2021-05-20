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


/**
 * 根据 createElement 的返回值创建 HTML
 * @param {{ type: string; props: { children:Array,[key:string]:any } }} element
 * @param {HTMLElement | Text} container
 */
function render(element,container){

  const dom =  element.type === "TEXT_ELEMENT" ?  document.createTextNode("") : document.createElement(element.type)

  
  Object.keys(element.props)
  .filter(key=>key!=="children")
  .forEach(key=>{
    dom[key] = element.props[key]
  })

  element.props.children.forEach(child=>{
    render(child,dom)
  })

  container.appendChild(dom)
}

/**@jsx createElement */
const element = (
  <div>
    <h1 title="haha" >你好</h1>
    <h2>我是自定义的 React</h2>
  </div>
);


const container = document.getElementById("app")

render(element,container)