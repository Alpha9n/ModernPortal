import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { Header } from "../components/Header";
interface NotFoundProps {
    title: string
    topPageURL: string
}

export const NotFound = ({ title, topPageURL }: NotFoundProps): JSX.Element => {

    return (
        <Box
            minH={'100vh'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Header title={title} topPageURL={topPageURL} isLogin={true} />
            <Box
                w={'60%'}
                m={'5rem auto'}
                textAlign={'center'}>
                <Heading
                    fontSize={'5rem'}
                    fontWeight={'black'}>
                    404 NotFound
                </Heading>
                <Text
                    fontSize={'2xl'}
                    fontWeight={'black'}>
                    この拡張機能が対応していないページです
                </Text>
            </Box>
        </Box>
    );
}