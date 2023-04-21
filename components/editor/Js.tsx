import { Textarea } from "@mantine/core"

function Js(props: any) {
    return (
        <Textarea
            value={props.value}
            onChange={props.onChange}
            my="md"
            minRows={15}
            label="JAVASCRIPT"
            className="font"
        />

    )
}

export default Js

