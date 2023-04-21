import { useRef, useState, useEffect } from "react";
import { Divider, Grid, MantineProvider, ScrollArea, Text } from "@mantine/core";
import Html from "../components/editor/Html";
import Css from "../components/editor/Css";
import Js from "../components/editor/Js";

function App() {
  const [htmlContent, setHtmlContent] = useState("");
  const [cssContent, setCssContent] = useState("");
  const [jsContent, setJsContent] = useState("");
  const outputRef = useRef(null);

  useEffect(() => {
    const output: any = outputRef.current;

    output.innerHTML = htmlContent;

    const styleTag = document.createElement("style");

    styleTag.innerHTML = cssContent;

    output.appendChild(styleTag);

    try {
      eval(jsContent);
    } catch (error) {
      console.error(error);
    }
  }, [htmlContent, cssContent, jsContent]);

  const handleHtmlChange = (e: any) => {
    setHtmlContent(e.target.value);
  };

  const handleCssChange = (e: any) => {
    setCssContent(e.target.value);
  };

  const handleJsChange = (e: any) => {
    setJsContent(e.target.value);
  };

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ScrollArea h="700px">
        <Text size={36} pl="lg" py="xs" bg="whitesmoke" style={{ fontFamily: "'Sigmar', cursive" }}>
          Spin Editor
        </Text>
        <Grid m="auto" justify="space-between" w="100%" bg="whitesmoke">
          <Grid.Col span={3} m="auto" w="100%">
            <Html value={htmlContent} onChange={handleHtmlChange} />
          </Grid.Col>
          <Grid.Col span={3} m="auto" w="100%">
            <Css value={cssContent} onChange={handleCssChange} />
          </Grid.Col>
          <Grid.Col span={3} m="auto" w="100%">
            <Js value={jsContent} onChange={handleJsChange} />
          </Grid.Col>
        </Grid>

        <Divider size={10} />

        <ScrollArea h="auto" ref={outputRef} />
      </ScrollArea>
    </MantineProvider>
  );
}

export default App;
