import { ReactNode } from 'react';
import { getLinkList } from '../utils/scraper';
import { Box, Heading, ListItem, ResponsiveValue, UnorderedList } from '@chakra-ui/react';

interface LinksProps {
    display?: 'flex' | 'block';
    hSize?: '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
}

export const Links = ({ display = 'block', hSize = 'xl' }: LinksProps) => {
    const linkList: ReactNode = getLinkList().map((linkItem) => {
        return (
            <Box>
                <Heading size={hSize}>
                    {linkItem.linksTitle}
                </Heading>
                <UnorderedList>
                    {linkItem.links}
                </UnorderedList>
            </Box>
        );
    });

    return (
        <Box display={display} justifyContent={'space-around'}>
            {linkList}
        </Box>
    )
}