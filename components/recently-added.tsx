import React from "react";
import { useQuery } from "thin-backend-react";
import { query } from "thin-backend";

import { Col, Text, Grid, Container, Row } from "@nextui-org/react";

import { Artefact } from './artefact'

export default function RecentlyAdded() {

    const artefacts = useQuery(query('artefacts').orderByDesc('createdAt'));

    return <Col>

        <Container>
            <Row>
                <Text size={12} transform="uppercase" weight="bold">
                    Recently Added
                </Text>
            </Row>
        </Container>
        <Grid.Container gap={2}>
            {artefacts?.map(artefact => 
                <Grid key={artefact.id}>
                    <Artefact artefact={artefact}/>
                </Grid>
            )}
        </Grid.Container>
    </Col>
}
