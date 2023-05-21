import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header";
interface NotFoundProps {
    title: string
    topPageURL: string
}

export const NotFound = ({ title, topPageURL }: NotFoundProps): JSX.Element => {
    return (
        <>
            <Header title={title} topPageURL={topPageURL} isLogin={true} />
            <Box>

            </Box>
        </>
    );
}