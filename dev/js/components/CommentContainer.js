import React from 'react';
import {
    Navbar,
    Brand,
    Grid,
    Col,
    Row,
    Button
} from 'react-bootstrap';
import CommentBox from './CommentBox';
require('../../scss/style.scss');

export default class CommentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
        this.add = this.add.bind(this);
        this.removeComment = this.removeComment.bind(this)
        this.updateComment = this.updateComment.bind(this)
        this.eachComment = this.eachComment.bind(this)
    }

    add(text) {
        var arr = this.state.comments
        arr.push(text);
        this.setState({comments: arr})
    }

    removeComment(i) {
        var arr = this.state.comments
        arr.splice(i, 1);
        this.setState({comments: arr})
    }

    updateComment(newText, i) {
        var arr = this.state.comments
        arr[i] = newText;
        this.setState({comments: arr})
    }

    eachComment(text, i) {
        return (
            <CommentBox key={i} index={i} doMe={this.updateComment} doYou={this.removeComment}>
                {text}
            </CommentBox>
        );
    }

    render() {

        return (
            <div>

                <Navbar>
                    {/* Basic Nav with Brand */}
                    <Navbar.Brand>
                        {/* Toptal Logo usinng CSS background-image */}
                        <div className="logo"></div>

                    </Navbar.Brand>
                </Navbar>
                <Grid className="show-grid">

                    <Row className="show-grid">
                        {/* Button to ADD new comment */}
                        <Button onClick={this.add.bind(null, 'Add your thoughts here')}>
                            Add New
                        </Button>

                        <div className="commentContainer">
                            {/* Displays CommentBoxes */}
                            {this.state.comments.map(this.eachComment)}
                        </div>

                    </Row>

                </Grid>

            </div>
        );
    }
}
