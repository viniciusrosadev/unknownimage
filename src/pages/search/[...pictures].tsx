import { GetStaticProps, GetStaticPaths } from 'next'
import { Flex, Text, Box, Grid } from '@chakra-ui/react'
import { Search } from '../../components/search'
import { PictureBox } from '../../components/pictureBox'
import { apiUnsplash } from '../../services/api'

type SearchProps = {
  pictures: {
    id: string,
    createdAt: string,
    altDescription: string,
    imgUrl: string;
  }[]
  searchText: string,
  page: number;
}

interface ISearchPictures {
  search: SearchProps
}


export default function SearchPictures({ search }: ISearchPictures) {

  return (
    <>
      <Search />
      <Box>
        <Flex mt="4">
          <Text color="red.500">
            Results: (keyword: {search.searchText}) - Page: {search.page}
          </Text>
        </Flex>
        <Grid mt="8" templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)"]}>
          {search.pictures.flatMap((picture) => {
            return <PictureBox prefetch={false} key={picture.id} image={{ id: picture.id, provider: 'Unsplash', altDescription: picture.altDescription, createdAt: picture.createdAt, imgUrl: picture.imgUrl }} />
          })}
        </Grid>
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

interface INewSearch {
  results: {
    id: string;
    created_at: string;
    description: string;
    urls: {
      thumb: string;
    }
  }[]
}

export const getStaticProps: GetStaticProps = async (context) => {

  function exitToMainPage() {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  try {
    const params: any = context.params
    const searchText = params.pictures[0]
    const page = params.pictures[1]

    const newSearch: INewSearch = await apiUnsplash.get(`/search/photos?page=${page}&query=${searchText}&per_page=16&orientation=landscape`).then(response => response.data)

    const pictures = newSearch.results.flatMap((value) => {
      return {
        id: value.id,
        createdAt: value.created_at,
        altDescription: value.description ?? 'Not found',
        imgUrl: value.urls.thumb
      }
    })

    return {
      props: {
        search: {
          pictures,
          searchText,
          page
        }
      },
      revalidate: 43200
    }
  } catch (error) {
    console.log(error)
    return exitToMainPage()
  }
}
