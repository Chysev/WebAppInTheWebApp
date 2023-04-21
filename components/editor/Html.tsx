import { Textarea } from "@mantine/core"

function Html(props: any) {

    const placeholderHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>
<body>
  
</body>
</html>`;

    return (
        <Textarea
            value={props.value || placeholderHtml}
            onChange={props.onChange}
            my="md"
            minRows={15}
            className="font"
            label="HTML"
        />


    )
}

export default Html
