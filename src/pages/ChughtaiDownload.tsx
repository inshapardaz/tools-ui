
import { useForm } from '@mantine/form';
import { Alert, Button, Divider, List, LoadingOverlay, Stack, Text, TextInput, Title } from "@mantine/core";
import { ToolsService } from '@/services/tools.service';
import { useState } from 'react';

export default function ChughtaiDownload() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloadingError, setDownloadingError] = useState(false);
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { bookUrl: '', sessionId: '' },

    validate: {
      bookUrl: (value) => (!value ? 'Book Url is required' : null),
      sessionId: (value) => (!value ? 'Session Id is required' : null),
    },
  });

  const onSubmit = (values : any) => {
    setDownloadingError(false)
    setIsDownloading(true);
    ToolsService.downloadChughtaiBook(values.bookUrl, values.sessionId, true)
      .catch(() => {
        setDownloadingError(true)
      })
      .finally(() => setIsDownloading(false));
  }

  return (
    <Stack>
      <Title order={1}>Chughtai Library Download</Title>
      
      <Text size="md">You can use this tool to download certain Chughtai Library books. Please provide the following information:</Text>
      
      <LoadingOverlay
        visible={isDownloading}
        zIndex={1000}
        overlayProps={{ radius: 'sm', blur: 2 }}
        loaderProps={{ type: 'bars' }}>
      </LoadingOverlay>

      <form onSubmit={form.onSubmit(onSubmit)}>
        <TextInput
          label="Book Url"
          placeholder="Book Url"
          key={'bookUrl'}
          {...form.getInputProps('bookUrl')}
          />
        <TextInput
          mt="sm"
          label="Session Id"
          placeholder="Session Id"
          key={'sessionId'}
          {...form.getInputProps('sessionId')}
          />
        <Button type="submit" mt="sm">
          Download
        </Button>
      </form>

      {
        isDownloadingError &&  <Alert variant="light" color="red" title="Error Downloading Book" withCloseButton onClose={ () => setDownloadingError(false)}>
          There was some error downloading book. Please verify that on your provided book url, you can actually read the book. Also try to login into chughtai library site again and use new session id.
        </Alert>
      }

      <Divider my="md" />

      <Title order={2}>Instructions</Title>
      
      <Stack>
        <Title order={4}>Book Url</Title>

        <Text size="md">This is the URL to the book you want to download. This page should show the book details. Once logged in, you should see the flip book on this page displaying the book. If you cannot see it, this book might not be supported for download using this tool.</Text>
        
        <Title order={4}>Session Id</Title>

        <Text size="md">This is similar to you login Id. Since Chughtai Libarary doesn't allow you to read book without logging in, please make sure you have an account with the website before proceeding. Visit <a href="https://www.chughtailibrary.com/" target="_blank">https://www.chughtailibrary.com/</a> for details.</Text>

        <Text size="md">Follow these steps to get the session id:</Text>

        <List>
          <List.Item>Navigate to library website <a href="https://www.chughtailibrary.com/" target="_blank">https://www.chughtailibrary.com/</a>.</List.Item>
          <List.Item>Open the book page that you want to download. If you can see the "Please click here to sign-in" button, as shown in the image below, please click it. </List.Item>
          <List.Item>Provide your login information and sign-in.</List.Item>
          <List.Item>You should be navigated back to book page and this time you should be able to see the book pages in the Book tab.</List.Item>
          <List.Item>If you cannot see the pages of the book after signing in, this book is not available to be downloaded using this toList.Item.</List.Item>
          <List.Item>Find the cookies for the library website. <a href="https://www.cookieyes.com/blog/how-to-check-cookies-on-your-website-manually/" target="_blank">See this link for guide for your browser</a>.</List.Item>
          <List.Item>You need value for the cookie with name PHPSESSID for the domain www.chughtailibrary.com</List.Item>
          <List.Item>Use the value as Session Id field  to download.</List.Item>
        </List>

        <Text size="md">Once download is started, please wait patiently while book is being download. Depending on number of pages in the book it can take a while to download.</Text>
      </Stack>
    </Stack>
  )
}
