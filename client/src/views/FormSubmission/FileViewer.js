import React, { Component } from 'react';
import FileViewer from 'react-file-viewer';

const file = '/uploads/img.png'
const type = 'png'

class MyComponent extends Component {
  render() {
    return (
      <FileViewer
        fileType={this.props.filename.split('.')[1]}
        filePath={`/uploads/${this.props.filename}`}
        errorComponent={<h1>Error</h1>}
        onError={this.onError}/>
    );
  }
}

export default MyComponent