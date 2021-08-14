import { GetStaticProps, GetStaticPaths } from 'next'
import { Flex, Text, Box, Grid } from '@chakra-ui/react'
// import { PictureBox } from '../components/pictureBox'
// import { Search } from '../components/search'
// import { apiUnsplash } from '../services/api'


export default function SearchVariousPictures() {
  // const [searchTerm, setSearchTerm] = useState('')
  // const [pictureList, setPictureList] = useState<UnsplashImage[]>(images)
  // const [page, setPage] = useState(1)

  // async function handleSearch(term: { searchText: string }) {
  //   setSearchTerm(term.searchText)

  //   const newSearch = await apiUnsplash.get(`/search/photos?page=${page}&query=${term.searchText}&per_page=20&orientation=landscape`).then(response => response.data)
  // }

  return (
    <>
      {/* <Search handleSearch={handleSearch} /> */}
      <Box>
        <Flex mt="4">
          <Text color="red.500">
            Results
          </Text>
        </Flex>
        {/* <Grid mt="8" templateColumns={["repeat(2, 1fr)", "repeat(5, 1fr)"]}>
          {pictureList.flatMap((image) => {
            return <PictureBox prefetch={false} key={image.id} image={{ id: image.id, provider: 'Unsplash', altDescription: image.alt_description, createdAt: image.created_at, imgUrl: image.urls.thumb }} />
          })}
        </Grid> */}
      </Box>
    </>
  )
}

// The fallback generate new pages in build time
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const searchText = String(params!.pictures)

  return {
    props: {
      search: searchText
    },
    revalidate: 43200
  }
}
