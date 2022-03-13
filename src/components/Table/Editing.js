import React from "react";
import {
  Td, EditButton, DeleteButton, SaveButton, CancelButton
} from '../../styles/styles';
/**
 * Edit user details when neededs
 */
export const EditData = ({
  userData,
  handleEditFormChange,
  handleCancelEditing,
}) => {
  return (
    <tr>
      <Td>
        <input
          type="text"
          required="required"
          placeholder="Enter first name..."
          name="firstName"
          value={userData.firstName}
          onChange={handleEditFormChange}
        />
      </Td>
      <Td>
        <input
          type="text"
          required="required"
          placeholder="Enter last name..."
          name="lastName"
          value={userData.lastName}
          onChange={handleEditFormChange}
        />
      </Td>
      <Td>
        {userData.userId}
      </Td>
      <Td>
        <SaveButton type="submit">Save</SaveButton>
        <CancelButton type="button" onClick={handleCancelEditing}>
          Cancel
        </CancelButton>
      </Td>
    </tr>
  );
};


/**
 * Read user details
 */
export const ReadData = ({ user, handleEditClick, handleDeleteClick }) => {

  return (
    <tr>
      <Td>{user.firstName}</Td>
      <Td>{user.lastName}</Td>
      <Td>{user.userId}</Td>
      <Td>
        <EditButton
          type="button"
          name="edit"
          onClick={(event) => handleEditClick(event, user)}
        >
          Edit
        </EditButton>
        <DeleteButton type="button" onClick={() => handleDeleteClick(user.id)}>
          Delete
        </DeleteButton>
      </Td>
    </tr>
  );
};