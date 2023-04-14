import { Button } from '../../UI/atoms/Button';
import {Text} from "../../UI/atoms/Text";

export const Dev = () => {
    return (
        <div>
            <h1>Dev page</h1>
            <div>
                <Text.H1>Header 1</Text.H1>
                <Text.H2>Header 2</Text.H2>
                <Text.H3>Header 3</Text.H3>
                <Text.H4>Header 4</Text.H4>
                <Text.Title>Title</Text.Title>
                <Text.Label>Label</Text.Label><br/>
                <Text.Subtitle>Subtitle</Text.Subtitle>
                <Text.P>Paragraph</Text.P>
                <Text.Div>Div</Text.Div>
                <Text.Span>Span</Text.Span><br/>
                <Text.Link>Link</Text.Link><br/>
                <Text.Small>Small</Text.Small><br/>
                <Text.Button>Button</Text.Button><br/>
            </div>
            <div>
                <Button size={"extraLarge"} textProps={{size:'$5'}} />
                <Button size={"large"} textProps={{size:'$6'}} />
                <Button size={"medium"} textProps={{size:'$7'}} />
                <Button size={"small"} textProps={{size:'$9'}} />
            </div>
        </div>
    )
};