import React from 'react';
import {Button} from 'react-bootstrap';

export default class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.edit = this.edit.bind(this);
        this.remove = this.remove.bind(this);
        this.save = this.save.bind(this);
        this.state = {
            edit: false
        };
    }

    edit() {
        this.setState({editing: true})
    }

    remove() {
        this.props.doYou(this.props.index);
    }

    save() {
        this.props.doMe(this.refs.newText.value, this.props.index);
        this.setState({editing: false});
    }

    renderNormal() {
        return (
            <div>
                <div className="commentText">{this.props.children}</div>
                <Button className="editMe" bsStyle="warning" bsSize="large" onClick={this.edit}>Edit here</Button>
                <Button className="removeMe" bsStyle="danger" bsSize="large" onClick={this.remove}>remove here</Button>
            </div>

        );
    }

    renderEdit() {
        return (
            <div>
                <textarea ref="newText" defaultValue={this.props.children}></textarea>
                <Button className="success" bsStyle="success" bsSize="large" onClick={this.save}>save here</Button>
            </div>
        );
    }

    render() {

        if (this.state.editing) {
            return this.renderEdit();
        } else {
            return this.renderNormal();
        }

        return (
            <div>

                <div className="commentText">{this.props.children}
                    <Button className="editMe" bsStyle="warning" bsSize="large" onClick={this.edit}>Edit here</Button>
                    <Button className="removeMe" bsStyle="danger" bsSize="large" onClick={this.remove}>remove here</Button>
                </div>

            </div>
        );
    }
}
