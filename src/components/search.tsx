import { Flex, InputGroup, Input, InputRightAddon, Icon } from "@chakra-ui/react";
import router, { useRouter } from 'next/router'
import { Formik, Form } from 'formik'
import { AiOutlineSearch } from "react-icons/ai";

export function Search() {
    function handleSubmit(values: { searchText: string }) {
        router.push('/search/' + values.searchText + '/1')
    }

    return (
        <Flex align="center" justify="center" padding="4">
            <Formik initialValues={{ searchText: '' }} onSubmit={handleSubmit}>
                {(formikProps) => (
                    <Form>
                        <InputGroup size="lg" width="lg" borderColor="red.700">

                            <Input type="text" name="searchText" id="searchText" onChange={formikProps.handleChange} color="red.500" placeholder="Type your favorite picture" isRequired />

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