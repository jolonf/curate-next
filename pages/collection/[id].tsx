import React from "react";
import { useQuery, useQuerySingleResult } from "thin-backend-react";
import { createRecord, deleteRecord, getCurrentUserId, query } from "thin-backend";

import { Col, Row, Text, Container, Button, Grid, Input } from "@nextui-org/react";
import Head from "next/head";
import { useRouter } from 'next/router'

import { CollectionView } from '../../components/collection-view'

import { Collection } from 'thin-backend'

export default function EditCollection() {
    const router = useRouter();
    const { id } = router.query;

    console.log(id);

    let idStr = id && typeof id === "string" ? id : "";
    console.log(idStr);
    const collection = useQuerySingleResult(query('collections').where('id', idStr));

    if (!collection) {
        console.log("<EditCollection> collection is null");
    }

    const deleteCollection = () => {
        if (collection) {
            deleteRecord('collections', collection.id).then(() => {
                console.log('record deleted');
                router.push('/my-collections');
            }, (reason: any) => {
                console.log('could not delete record');
            })
        } else {
            console.log("cannot delete, collection is null");
        }
    }

    return <Col>

        <Head>
            <title>{collection?.title}</title>
        </Head>

        <Container>
            <Row>
                <Input underlined size="lg" initialValue={collection?.title}/>
            </Row>
            <Row>
                <Text size={12} transform="uppercase" weight="bold">
                    Collection contents
                </Text>
            </Row>
            <Row>
                <Button color="error" size="xs" onPress={deleteCollection}>
                    Delete
                </Button>
            </Row>
        </Container>
    </Col>
}