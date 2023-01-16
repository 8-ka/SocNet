import React, { Component } from "react";
import './styles.css'

class ProfileStatus extends Component {
  state = {
    editMode: false,
    userStatus: this.props.userStatus,
  }

  componentDidUpdate(prevProps) {
    if(prevProps.userStatus !== this.props.userStatus) {
      this.setState({
        userStatus: this.props.userStatus,
      })
    }
  }

  handleSetStatus = () => {
    this.setState({
      editMode: true,
    })
  }

  onUpdateInput = () => {
    this.setState({
      editMode: false,
    })

    this.props.userUpdateStatus(this.state.userStatus);
  }

  onStatusChange = (e) => {
    this.setState({
      userStatus: e.currentTarget.value,
    })
  }

  render() {
    return (
      <>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.handleSetStatus}>{this.props.userStatus || '-'}</span>
          </div>}
        {this.state.editMode &&
          <div>
            <input value={this.state.userStatus}
              onBlur={this.onUpdateInput}
              autoFocus={true}
              onChange={this.onStatusChange}
            />
          </div>}
      </>
    );
  }
}

export default ProfileStatus;
