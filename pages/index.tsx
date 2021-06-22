import React, {useEffect, useState} from "react";

import {Button, Htag, Paragraph, Rating, Tag} from "../components/";
import {Layout} from "../layout/Layout";

export default function Home(): JSX.Element {
    const [rating, setRating] = useState<number>(4);
    const [counter, setCounter] = useState<number>(0);

    useEffect(() => {
        console.log('Counter of the first mounting: ' + counter);
        return function cleanup() {
            console.log('Unmount'); // we can't see, we should unmount Home to see it?
        };
    }, []); // One time

    useEffect(() => {
        console.log('Counter per every render: ' + counter);
        return function cleanup() {
            console.log('Unmount');
        };
    });

    return (
        <Layout>
            <Htag tag='h1'>Hello {counter}</Htag>
            {/*<Rating rating={rating} />*/}
            <Rating rating={rating} isEditable={true} setRating={setRating}/>
            <Tag color='red'>Hey</Tag>
            <Tag color='grey'>Hi</Tag>
            <Tag color='green'>Good Morning!</Tag>
            <Tag color='primary' size='medium'>Good Evening!</Tag>
            <Paragraph appearance='big'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorem doloremque doloribus
                eius excepturi exercitationem hic impedit.</Paragraph>
            <Paragraph>
                Dignissimos possimus sapiente temporibus?</Paragraph>
            <Paragraph appearance='small'>Aliquid dolorem doloremque doloribus
                eius excepturi exercitationem hic?</Paragraph>
            <Button appearance='primary' arrow='right' onClick={() => setCounter(x => x + 1)}>+1</Button>
            <Button appearance='primary'>Button</Button>
            <Button appearance='ghost'>Button</Button>
            <Button appearance='ghost' arrow='right'>Button</Button>
        </Layout>
    );
}
