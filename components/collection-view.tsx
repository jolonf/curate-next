import React from 'react';

import { Collection, deleteRecord } from 'thin-backend'

import { Button, Card, Text } from '@nextui-org/react'
import { useRouter } from 'next/router';

interface CollectionProps {
    collection: Collection;
}

export function CollectionView({ collection } : CollectionProps) {
    const router = useRouter();

    const cardPressed = () => {
        router.push(`/collection/${collection.id}`)
    }

    const deleteCollection = () => {
        deleteRecord('collections', collection.id);
    }

    return <Card isPressable onPress={cardPressed}>
        <Card.Header>
            <Text>
                {collection.title}
            </Text>
        </Card.Header>
        <Card.Body>
            <Text>
                Thumbnail / Play
            </Text>
        </Card.Body>
        <Card.Footer>
            <Button size="sm" color="error" onPress={deleteCollection}>Delete</Button>
        </Card.Footer>
    </Card>
}
