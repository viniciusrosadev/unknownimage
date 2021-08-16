import { Flex, InputGroup, Input, InputRightAddon, Icon } from "@chakra-ui/react";
import { Formik, Form } from 'formik'
import { AiOutlineSearch } from "react-icons/ai";

export function Search() {

    return (
        <Flex align="center" justify="center" padding="4">
            <Formik initialValues={{ searchText: '' }}>
                {(props) => (
                    <Form>
                        <InputGroup size="lg" width="lg" borderColor="red.700">

                            <Input type="text" name="searchText" id="searchText" onChange={props.handleChange} color="red.500" placeholder="Type your favorite picture" isRequired />

                            <InputRightAddon type="submit" as="button" bgColor="red.500">
                                <Icon as={AiOutlineSearch} />
                            </InputRightAddon>
                        </InputGroup>
                    </Form>
                )}
            </Formik>
        </Flex >
    )
}