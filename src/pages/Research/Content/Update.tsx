import { format } from 'date-fns'
import React from 'react'
import Linkify from 'react-linkify'
import { Box } from 'rebass'
import Flex from 'src/components/Flex'
import Heading from 'src/components/Heading'
import ImageGallery from 'src/components/ImageGallery'
import Text from 'src/components/Text'
import { IResearch } from 'src/models/research.models'
import { IUploadedFileMeta } from 'src/stores/storage'
import styled from 'styled-components'

interface IProps {
  update: IResearch.UpdateDB
  updateIndex: number
}

const FlexStepNumber = styled(Flex)`
  height: fit-content;
`

const Update: React.FC<IProps> = ({ update, updateIndex }) => {
  return (
    <>
      <Flex
        data-cy={`update_${updateIndex}`}
        mx={[0, 0, -2]}
        mt={9}
        flexDirection={['column', 'column', 'row']}
      >
        <Flex flex={1} mx={[0, 0, 2]} width={1} mb={[3, 3, 0]}>
          <FlexStepNumber
            card
            mediumRadius
            justifyContent={'center'}
            py={3}
            px={4}
            bg={'white'}
            width={1}
          >
            <Heading medium mb={0}>
              {updateIndex + 1}
            </Heading>
          </FlexStepNumber>
        </Flex>
        <Flex
          card
          mediumRadius
          mx={[0, 0, 2]}
          bg={'white'}
          flex={9}
          width={1}
          flexDirection={'column'}
          overflow={'hidden'}
        >
          <Flex width={1} py={4} px={4} flexDirection={'column'}>
            <Flex width={1} flexDirection={['column', 'row', 'row']}>
              <Heading width={[1, 3 / 4, 3 / 4]} medium mb={[2, 0, 0]}>
                {update.title}
              </Heading>
              <Text
                auxiliary
                textAlign={['left', 'right', 'right']}
                width={[1, 1 / 4, 1 / 4]}
              >
                {format(new Date(update._created), 'DD-MM-YYYY')}
              </Text>
            </Flex>
            <Box>
              <Text preLine paragraph mt={3} color={'grey'}>
                <Linkify>{update.description}</Linkify>
              </Text>
            </Box>
          </Flex>
          <Box width={1}>
            <ImageGallery images={update.files as IUploadedFileMeta[]} />
          </Box>
        </Flex>
      </Flex>
    </>
  )
}

export default Update
