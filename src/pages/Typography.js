import React from 'react';
import TypographyComponent from '../components/TypographyComponent';
import "./Typography.css";
const Label = ({ text }) => {
    return <label className="component-label">{text}</label>;
}
function Typography() {
    return (
        <div className="typography">
            <header className="header">Typography</header>
            <Label text={`<Typography variant="h1" />`} />
            <TypographyComponent variant="h1">h1. heading</TypographyComponent>

            <Label text={`<Typography variant="h2" />`} />
            <TypographyComponent variant="h2">h2. heading</TypographyComponent>

            <Label text={`<Typography variant="h3" />`} />
            <TypographyComponent variant="h3">h3. heading</TypographyComponent>

            <Label text={`<Typography variant="h4" />`} />
            <TypographyComponent variant="h4">h4. heading</TypographyComponent>

            <Label text={`<Typography variant="h5" />`} />
            <TypographyComponent variant="h5">h5. heading</TypographyComponent>

            <Label text={`<Typography variant="h6" />`} />
            <TypographyComponent variant="h6">h6. heading</TypographyComponent>

            <Label text={`<Typography variant="subheading1" />`} />
            <TypographyComponent variant="subheading1">Subheading 1</TypographyComponent>

            <Label text={`<Typography variant="subheading2" />`} />
            <TypographyComponent variant="subheading2">Subheading 2</TypographyComponent>

            <Label text={`<Typography variant="body1" />`} />
            <TypographyComponent variant="body1">BodyText 1</TypographyComponent>

            <Label text={`<Typography variant="body2" />`} />
            <TypographyComponent variant="body2">BodyText 2</TypographyComponent>

            <Label text={`<Typography variant="body1" color="primary />`} />
            <TypographyComponent variant="body1" color="primary">BodyText 1</TypographyComponent>

            <Label text={`<Typography variant="body2" color="error" />`} />
            <TypographyComponent variant="body2" color="error">Body Text 2 </TypographyComponent>

        </div>
    )
}

export default Typography
