import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './post.css'
class Post extends Component {
  constructor(props) {
    super(props);
  }

    render() {
      return (
 
      <div>
        <Card className='x'>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.id}</CardTitle>
            <CardSubtitle>{this.props.title}</CardSubtitle>
            <CardText>{this.props.body}</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Post;