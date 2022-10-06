import React from "react";
import { useQuery } from "thin-backend-react";
import { createRecord, getCurrentUserId, query } from "thin-backend";

import { Col, Row, Text, Container, Button, Grid, Spacer } from "@nextui-org/react";
import Head from "next/head";
import { useRouter } from 'next/router'

import { CollectionView } from '../components/collection-view'

import { Collection } from 'thin-backend'

export default function MyCollections() {

    const collections = useQuery(query('collections').orderByDesc('createdAt'));

    const router = useRouter();

    const createCollection = () => {
        createRecord('collections', {
            title: "My Collection",
            userId: getCurrentUserId()
        }).then((collection: Collection) => {
            router.push(`/collection/${collection.id}`)
        }, (reason: any) => {
            console.log("Couldn't create collection");
        });
    }

    return <Col>

        <Head>
            <title>My Collections</title>
        </Head>

        <Container>
            <Row>
                <Text size={12} transform="uppercase" weight="bold">
                    My Collections
                </Text>
                <Spacer/>
                <Button flat auto size="xs" onPress={createCollection}>
                    Add
                </Button>
            </Row>
        </Container>
        <Grid.Container gap={2}>
            {collections?.map(collection => 
                <Grid key={collection.id}>
                    <CollectionView collection={collection}/>
                </Grid>
            )}
        </Grid.Container>
    </Col>
}