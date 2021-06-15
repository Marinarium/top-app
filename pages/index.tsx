import React from "react";
import {Button, Htag} from "../components/";

export default function Home(): JSX.Element {
    return (
        <div>
            <Htag tag='h1'>Hello</Htag>
            <Button appearance='primary'>Button</Button>
            <Button appearance='ghost'>Button</Button>
        </div>
    );
}
