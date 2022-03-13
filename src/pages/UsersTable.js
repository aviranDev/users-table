import React, { useState, useEffect, Fragment } from "react";
import { EditData, ReadData } from '../components/Table/Editing';
import { nanoid } from "nanoid";

//styles
import { Container, Heading, Form, Table, Th, Span, AddButton, FormInput, Div } from '../styles/styles';

//Validate User inputs by form validation
import { validateForm, validateInput } from '../lib/validation';






const UsersTable = () => {

  //Users state
  const [users, setUsers] = useState(() => {
    const localData = localStorage.getItem('users')
    return localData ? JSON.parse(localData) : [];
  });


  //User Id for storing users data in localStorage 
  const [userId, setUserId] = useState(null);


  //Add User state
  const [addUser, setAddUser] = useState({
    firstName: '',
    lastName: '',
    userId: '',
  });


  //User Data
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    userId: '',
  });


  /**
   * Errors states
   */
  const [error, setError] = useState('');
  const [duplicated, setDuplicated] = useState(false)


  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);


  /**
   * Handlers
   */

  //Add user handler submit
  const handleAddFormSubmit = (e) => {
    e.preventDefault();

    try {
      const errors = validateForm(addUser)
      if (errors) {
        setError(errors)
        return
      }

      const newUser = {
        id: nanoid(),
        firstName: addUser.firstName,
        lastName: addUser.lastName,
        userId: addUser.userId,
      };

      const newUsers = [...users, newUser];

      let result = newUsers;

      for (const key of users) {

        if (key.userId === userData.userId) {
          result = users
          setDuplicated(true)
        }
      }

      setUsers(result);
    } catch (error) {
      console.log('Some error occurred');
    }
  };


  //User inputs handler
  const handleAddFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...addUser };
    newFormData[fieldName] = fieldValue;

    setAddUser(newFormData);

    setUserData({
      ...newFormData,
      [e.target.name]: e.target.value
    });
    setDuplicated(false)
    setError({
      ...error,
      [e.target.name]: validateInput(e.target.value)
    })
  };


  //Form handle edit submit
  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const editedUserData = {
      id: userId,
      firstName: userData.firstName,
      lastName: userData.lastName,
      userId: userData.userId,
    };

    const newUsers = [...users];

    const index = users.findIndex((user) => user.id === userId);

    newUsers[index] = editedUserData;

    setUsers(newUsers);
    setUserId(null);
  };


  //Updated form data handler
  const handleEditFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newUserData = { ...userData };
    newUserData[fieldName] = fieldValue;

    setUserData({ ...newUserData })
  };


  //Click edit handler
  const handleEditClick = (e, user) => {
    e.preventDefault();
    setUserId(user.id);
    const formValues = {
      firstName: user.firstName,
      lastName: user.lastName,
      userId: user.userId,
    };

    setUserData(formValues);
  };


  //Cancel Editing Handler
  const handleCancelEditing = () => {
    setUserId(null);
  };

  //Remove User Data handler
  const handleDeleteClick = (contactId) => {
    const newUsers = [...users];

    const index = users.findIndex((user) => user.id === contactId);

    newUsers.splice(index, 1);

    setUsers(newUsers);
  };


  return (
    <Container>
      <Heading>Add User details</Heading>
      <Form onSubmit={handleAddFormSubmit}>
        <FormInput
          type="text"
          name="firstName"
          placeholder="First Name..."
          onChange={handleAddFormChange}
        />
        <FormInput
          type="text"
          name="lastName"
          placeholder="Last Name..."
          onChange={handleAddFormChange}
        />
        <FormInput
          type="text"
          name="userId"
          placeholder="ID number..."
          onChange={handleAddFormChange}
        />
        <AddButton type="submit">Add</AddButton>
      </Form>
      <Div>
        {error && <Span>{error.firstName}</Span>}
        {error && <Span>{error.lastName}</Span>}
        {error && <Span>{error.userId}</Span>}
        {duplicated && <Span>User already added</Span>}
      </Div>

      <Form onSubmit={handleEditFormSubmit}>
        <Table>
          <thead>
            <tr>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>User ID</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {users && users.map((user, index) => (
              <Fragment key={index}>
                {userId === user.id ? (
                  <EditData
                    userData={userData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelEditing={handleCancelEditing}
                  />
                ) : (
                  <ReadData
                    user={user}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </Table>
      </Form>
    </Container>

  )
}

export default UsersTable;