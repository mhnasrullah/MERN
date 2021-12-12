import react from "react";
import { render } from "@testing-library/react";
import Button from "./index";

test("Should not allow click if Disabled is present",()=>{
    const {container} = render(
        <Button isDisabled></Button>
    )

    expect(container.querySelector('span.disabled')).toBeInTheDocument()
})