import { ListGroup, ListGroupItem } from "reactstrap";

function ServiceList() {
    return(
        <ListGroup flush>
            <ListGroupItem className="px-0 d-flex justify-content-between align-items-center text-bg-primary">
                <strong>Haircut of Choice</strong>
                <span>$35</span>
            </ListGroupItem>
            <ListGroupItem className="px-0 d-flex justify-content-between align-items-center text-bg-primary">
                <strong>Haircut & Beard</strong>
                <span>$42</span>
            </ListGroupItem>
            <ListGroupItem className="px-0 d-flex justify-content-between align-items-center text-bg-primary"
                style={{borderBottomWidth: "2px"}}>
                <strong>Haircut & Eyebrows</strong>
                <span>$38</span>
            </ListGroupItem>
        </ListGroup>
    )
}

export default ServiceList;