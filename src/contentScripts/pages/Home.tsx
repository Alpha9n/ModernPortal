import { Box, Card, Heading, List, ListItem, Stack, UnorderedList, useColorModeValue } from '@chakra-ui/react';
import { Header } from '../components/Header'
import { getLinkList } from '../utils/scraper';
import { FaKey } from 'react-icons/fa';
import { Links } from '../components/Links';
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
            <Box
                minW={'500px'}
                w={'70%'}
                minH={'50vh'}
                m={'0 auto'}
                p={'2rem'}
                boxShadow={'lg'}>
                <Card
                    p={'1rem'}
                    maxH={'100%'}>
                    <Links display={'flex'} hSize={'lg'}/>
                </Card>
            </Box>
        </Box>
    );
};