import React from 'react';

import { Artefact } from 'thin-backend'

import { Card, Text } from '@nextui-org/react'

interface ArtefactProps {
    artefact: Artefact;
}

export function Artefact({ artefact } : ArtefactProps) {
    return <Card isPressable>
        <Card.Header>
            <Text>
                {artefact.title}
            </Text>
        </Card.Header>
        <Card.Body>
            <Text>
                Thumbnail / Play
            </Text>
        </Card.Body>
        <Card.Footer>
            <Text>
                {artefact.author}
            </Text>
        </Card.Footer>
    </Card>
}
