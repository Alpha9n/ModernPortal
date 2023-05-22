import { Box, useColorModeValue } from "@chakra-ui/react";
import { Header } from '../components/Header'
interface HomeProps {
    title: string;
    topPageURL: string;
}

export const Home = ({ title, topPageURL }: HomeProps) => {
    document.title = `${title} | Home`
    return (
        <Box
            minH={'100vh'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Header title={title} topPageURL={topPageURL} isLogin={true} />
        </Box>
    )
};