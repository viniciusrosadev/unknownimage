import { Flex, InputGroup, Input, InputRightAddon, Icon } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

export function Search() {
    return (
        <Flex as="form" >
            <InputGroup size="lg" width="lg" borderColor="red.700">

                <Input type="text" color="red.500" placeholder="Type your favorite picture" isRequired />

                <InputRightAddon as="button" bgColor="red.500">
                    <Icon as={AiOutlineSearch} />
                </InputRightAddon>
            </InputGroup>
        </Flex>
    )
}