import React from "react";
import Home, { TitleCard } from "./app";
import TestRenderer from "react-test-renderer";

describe("Home page tests", () => {
    let component;
    let actual;

    describe("Title Card Component", () => {
        beforeEach(() => {
            component = TestRenderer.create(<TitleCard title="Catering" description="Some description" />).root;
        });

        test("it renders the title", () => {
            actual = component.find(() => <h2>Catering</h2>)
            expect(actual).toBeDefined();
        });

        test("it renders the description", () => {
            actual = component.find(() => <p>Some description</p>)
            expect(actual).toBeDefined();
        });
    });
});