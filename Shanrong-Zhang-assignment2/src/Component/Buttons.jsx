import NextButton from "./NextButton";
import ResetButton from "./ResetButton";
import { Stack } from "@mui/material";
export default function Buttons() {
    return (
        <Stack spacing={2} direction="row" className="button-stack">
            <NextButton />
            <ResetButton />
        </Stack>
    )
}