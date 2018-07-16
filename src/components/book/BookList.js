import React, { Component } from "react";
import { Table, Icon, Tooltip, Popconfirm } from "antd";
import AddEditBookModal from "./AddEditBookModal";
import { connect } from "react-redux";
import { deleteBookAction } from "../../actions/BookActions";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: {},
      selectedBookId: null,
      showModal: false,
      isEditMode: false
    };
  }

  render() {
    const columns = [
      {
        title: "Book Name",
        dataIndex: "bookName",
        key: "bookName",
        className: "center",
        width: 150
      },
      {
        title: "Genre",
        dataIndex: "genre",
        key: "genre",
        className: "center",
        width: 150
      },
      {
        title: "Action",
        dataIndex: "",
        key: "",
        className: "center",
        render: rowData => onAction(rowData),
        width: 150
      }
    ];

    const confirmBookDelete = () => {
      this.props.deleteBookAction(this.state.selectedBook);
    };
    const booksDataSource = this.props.bookList;
    const onAction = rowData => {
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Icon
            type="edit"
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => {
              this.setState({
                showModal: true,
                isEditMode: true,
                bookData: rowData
              });
            }}
          />
          <Popconfirm
            placement="bottom"
            title="Are you sure you want to delete ?"
            onConfirm={confirmBookDelete}
            okText="Yes"
            cancelText="No"
          >
            <Icon
              type="delete"
              style={{ color: "red", marginLeft: "20px", cursor: "pointer" }}
              onClick={() => {}}
            />
          </Popconfirm>
        </div>
      );
    };
    return (
      <div>
        <center>
          <Tooltip title="Add Book">
            <Icon
              style={{ color: "green", cursor: "pointer" }}
              type="plus-circle-o"
              onClick={() => {
                this.setState({ showModal: true, isEditMode: false });
              }}
            />
          </Tooltip>
        </center>
        <div style={{ display: "flex" }}>
          <Table
            onRow={rData => {
              return {
                onClick: () => {
                  this.setState({ selectedBook: rData });
                }
              };
            }}
            style={{ width: "50%", marginTop: "5px" }}
            rowKey={(y, i) => i}
            columns={columns}
            pagination={false}
            dataSource={booksDataSource}
          />
          <AddEditBookModal
            bookData={this.state.bookData}
            isEditMode={this.state.isEditMode}
            showModal={this.state.showModal}
            closeModal={this.closeModal}
          />
        </div>
      </div>
    );
  }

  closeModal = () => {
    this.setState({
      showModal: false
    });
  };
}

const mapStateToProps = ({ books }) => {
  return { bookList: books };
};

const mapDispatchToProps = dispatch => {
  return { deleteBookAction: data => dispatch(deleteBookAction(data)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
