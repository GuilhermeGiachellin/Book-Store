import React from 'react';

export default class Books extends React.Component {
  render() {
    return (
        <li key={this.props.id} className="list_cnt">
            <div>
                <div className="info_ctn">
                <span className="genre">{this.props.genre}</span>
                <span className="title">{this.props.name}</span>
                <span className="author">{this.props.author}</span>
                </div>
                <div className="btn_ctn">
                <button>Comments</button>
                <button>Remove</button>
                <button>Edit</button>
                </div>
            </div>
        </li>
    );
  }
}
