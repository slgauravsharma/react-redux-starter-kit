import React, { Component } from "react";
import { Input, Select, Modal, message } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addBookAction, updateBookAction } from "../../actions/bookActions";

const data = {
  authors: [
    { id: 101, name: "Jhon" },
    { id: 102, name: "Kim" },
    { id: 103, name: "Yashmin" }
  ]
};
class AddEditBookModal extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      bookName: "",
      genre: "",
      authorId: "",
      bookId: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    const bookData = nextProps.bookData;
    this.setState({
      bookName: nextProps.isEditMode ? bookData.bookName : "",
      genre: nextProps.isEditMode ? bookData.genre : "",
      authorId: nextProps.isEditMode ? bookData.authorId : "",
      bookId: nextProps.isEditMode ? bookData.bookId : ""
    });
  }

  render() {
    return (
      <div>
        <Modal
          title={this.props.isEditMode ? "Edit Book" : "Add Book"}
          visible={this.props.showModal}
          onOk={() => {
            this.onSaveBook();
          }}
          onCancel={() => {
            this.props.closeModal();
          }}
        >
          <div>
            <div style={{ marginBottom: "5px" }}>
              <span> Book Name: </span>
              <Input
                value={this.state.bookName}
                onChange={e => {
                  this.setState({ bookName: e.target.value });
                }}
                placeholder="book name"
                style={{ width: "260px" }}
                type="text"
              />
            </div>
            <div style={{ marginBottom: "5px" }}>
              <span style={{ marginRight: "7%" }}>Genre:</span>
              <Input
                value={this.state.genre}
                onChange={e => {
                  this.setState({ genre: e.target.value });
                }}
                placeholder="genre"
                style={{ marginLeft: "5px", width: "260px" }}
                type="text"
              />
            </div>
            <div style={{ marginBottom: "5px" }}>
              <span style={{ marginRight: "6.5%" }}>Author:</span>
              <Select
                onChange={val => {
                  this.setState({ authorId: val });
                }}
                value={this.state.authorId}
                style={{ marginLeft: "5px", width: "260px" }}
              >
                <Select.Option key="" value="">
                  Select author{" "}
                </Select.Option>
                {data.authors &&
                  data.authors.map((author, i) => {
                    return (
                      <Select.Option key={i} value={author.id}>
                        {author.name}
                      </Select.Option>
                    );
                  })}
              </Select>
            </div>
          </div>
        </Modal>
      </div>
    );
  }

  onSaveBook = () => {
    if (!this.state.bookId) {
      const data = {
        ...this.state,
        bookId: Math.random()
          .toString(36)
          .substr(2, 9)
      };
      this.props.addBookAction(data);
      this.props.closeModal();
      message.success("Book added successfully");
    } else {
      this.props.updateBookAction(this.state);
      this.props.closeModal();
      message.success("Book updated successfully");
    }
  };
}

const mapStateToProps = () => {
  return {};
};

// dispatch by bindActionCreators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addBookAction, updateBookAction }, dispatch);
};

//dispath by normal way
// const mapDispatchToProps = dispatch => {
//   return { addBookAction: data => dispatch(addBookAction(data)) };
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEditBookModal);
