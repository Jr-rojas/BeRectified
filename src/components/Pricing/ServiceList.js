import { ListGroup, ListGroupItem } from "reactstrap";

function ServiceList() {
    return(
        <ListGroup flush>
            <ListGroupItem className="px-0 d-flex justify-content-between align-items-center text-light " style={{backgroundColor:"#2F2519"}}>
                <strong>Haircut of Choice</strong>
                <span>$35</span>
            </ListGroupItem>
            <ListGroupItem className="px-0 d-flex justify-content-between align-items-center text-light" style={{backgroundColor:"#2F2519"}}>
                <strong>Haircut & Beard</strong>
                <span>$42</span>
            </ListGroupItem>
            <ListGroupItem className="px-0 d-flex justify-content-between align-items-center text-light"
                style={{borderBottomWidth: "2px", backgroundColor:"#2F2519"}}>
                <strong>Haircut & Eyebrows</strong>
                <span>$38</span>
            </ListGroupItem>
        </ListGroup>
    )
}

export default ServiceList;