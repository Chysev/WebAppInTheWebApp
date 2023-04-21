import { Textarea } from "@mantine/core"

function Css(props: any) {
    return (
        <Textarea
            value={props.value}
            onChange={props.onChange}
            my="md"
            minRows={15}
            label="CSS"
            className="font"
        />

    )
}

export default Css