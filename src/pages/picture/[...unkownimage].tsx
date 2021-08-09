import { Flex, Text, SimpleGrid, Box, HStack, Img } from '@chakra-ui/react'
import { Search } from '../../components/search'
import { ShareButton } from '../../components/shareButton'

export default function UnkownImage() {
    return (
        <>
            <Search />

            <Flex mt="4">
                <Text color="red.500">
                    Picture title
                </Text>
            </Flex>

            <Flex align="baseline" justify="center">
                <Box padding="1">
                    <Img borderRadius="sm" src="https://comparaplano.com.br/wp-content/uploads/2019/09/dog-tv.png" />
                </Box>
            </Flex>

            <Flex justify="flex-end" padding="2">
                <ShareButton colorScheme="red" />
            </Flex>

            <SimpleGrid columns={2} columnGap="sm">

                <HStack>
                    <Text>
                    Description
                    </Text>
                </HStack>

                <HStack borderLeft="1px">
                    <Box ml="4">
                        <Text>Author</Text>
                    </Box>
                </HStack>
            </SimpleGrid>
        </>
    )
}
