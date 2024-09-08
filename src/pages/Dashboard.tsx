import React from "react";
import {useNavigate} from "react-router-dom";

import { Card, Image, Text, Badge, Button, Group, Grid } from '@mantine/core';

export default function Dashboard() {
  const navigate = useNavigate();

   return (
    <Grid>
       <Grid.Col span={4}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="/img/rekhta.png"
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>Rekhta Downloader</Text>
            </Group>

            <Text size="sm" c="dimmed">
              With rekhta download tool, you can download rekhta books as pdf.
            </Text>

            <Button color="blue" fullWidth mt="md" radius="md" onClick={() => navigate('/rekhta-download')}>
              Download books from Rekhta
            </Button>
          </Card>
      </Grid.Col>
       <Grid.Col span={4}>
         <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src="/img/chughtai.jpg"
              height={160}
              alt="Norway"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Chughtai Library Downloader</Text>
          </Group>

          <Text size="sm" c="dimmed">
            You can use this tool to download certain books from Chughtai as pdf.
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md" onClick={() => navigate('/chughtai-download')}>
            Download books from Chughtai Library
          </Button>
        </Card>
       </Grid.Col>
    </Grid>
  );
}
