import { List, ListItem } from "@material-ui/core";
import { PublicationItem } from '../models/publicationItem';

interface IPublicationItemsProps {
    items: PublicationItem[]
}

export const PublicationItems = (props: IPublicationItemsProps) => 
    <List>
    {
        props.items.map((item: PublicationItem, index) => 
            <ListItem key={index}>
                {item.productionOriginalTitle}
            </ListItem>
        )
    }
    </List>;