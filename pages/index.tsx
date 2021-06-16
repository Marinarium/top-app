import React from "react";
import {Button, Htag, Paragraph} from "../components/";

export default function Home(): JSX.Element {
    return (
        <div>
            <Htag tag='h1'>Hello</Htag>
            <Paragraph appearance='big'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorem doloremque doloribus
                eius excepturi exercitationem hic impedit ipsa laborum magni nemo nulla obcaecati, provident quia totam.
                Dignissimos possimus sapiente temporibus?</Paragraph>
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorem doloremque doloribus
                eius excepturi exercitationem hic impedit ipsa laborum magni nemo nulla obcaecati, provident quia totam.
                Dignissimos possimus sapiente temporibus?</Paragraph>
            <Paragraph appearance='small'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorem doloremque doloribus
                eius excepturi exercitationem hic impedit ipsa laborum magni nemo nulla obcaecati, provident quia totam.
                Dignissimos possimus sapiente temporibus?</Paragraph>
            <Button appearance='primary' arrow='right'>Button</Button>
            <Button appearance='primary'>Button</Button>
            <Button appearance='ghost'>Button</Button>
            <Button appearance='ghost' arrow='right'>Button</Button>
        </div>
    );
}
