import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';


export default function Task(props){
    return(
        <ListGroup.Item className='d-flex align-items-center'>
            <p className="h3">{props.task}</p>
            <Form.Check className='px-2' type='checkbox'/>
        </ListGroup.Item>
    )
}