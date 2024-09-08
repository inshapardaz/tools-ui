
import { useForm } from '@mantine/form';
import { Alert, Button, Divider, List, LoadingOverlay, Stack, Text, TextInput, Title } from "@mantine/core";
import { ToolsService } from '@/services/tools.service';
import { useState } from 'react';

export default function RekhtaDownload() {
   const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloadingError, setDownloadingError] = useState(false);
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { bookUrl: '', sessionId: '' },

    validate: {
      bookUrl: (value) => (!value ? 'Book Url is required' : null)
    },
  });

  const onSubmit = (values : any) => {
    setDownloadingError(false)
    setIsDownloading(true);
    ToolsService.downloadRekhtaBook(values.bookUrl, true)
      .catch(() => {
        setDownloadingError(true)
      })
      .finally(() => setIsDownloading(false));
  }

  return (
    <Stack>
      <Title order={1}>Rekhta Download</Title>
      
      <Text size="md">You can use this tool to download Rekhta Library books. Please provide the following information:</Text>
      
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
        <Button type="submit" mt="sm">
          Download
        </Button>
      </form>

      {
        isDownloadingError &&  <Alert variant="light" color="red" title="Error Downloading Book" withCloseButton onClose={ () => setDownloadingError(false)}>
          There was some error downloading book. Please verify that on your provided book url, you can actually read the book. We do not accept boook information url where you can only see the book info and not actual book pages.
        </Alert>
      }

      <Divider my="md" />

      <Title order={2}>Instructions</Title>
      
      <Stack>
        <Title order={4}>Book Url</Title>

        <Text size="md">This is the URL to the book you want to download. This page should show the book pages for you to read.</Text>
        
        <Text size="md">Once download is started, please wait patiently while book is being download. Depending on number of pages in the book it can take a while to download.</Text>
      </Stack>
    </Stack>
  )
}
