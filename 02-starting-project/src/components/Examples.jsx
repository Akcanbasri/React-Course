import { useState } from "react";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js";

export default function Examples() {
  const [selectedTopic, setSlectedTopic] = useState();

  // * we can't use let or const here because we can't reassign the value of a variable declared with const
  // * let tabContent = "Please select a tab";

  function handleClick(selectedTab) {
    // selectedTab => "Components" | "JSX" | "Props" | "State
    setSlectedTopic(selectedTab);
    // * console.log(selectedTab);
  }

  let tabContent = "Please select a tab";

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onClick={() => handleClick("components")}
        >
          Components{" "}
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          sle
          onClick={() => handleClick("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => handleClick("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => handleClick("state")}
        >
          State
        </TabButton>
      </menu>
      {/* {!selectedTopic ? <p>Please Select A Topic</p> : null}

        {selectedTopic ? (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        ) : null} */}
      {tabContent} {/* * we can use this instead of the above code */}
    </section>
  );
}
