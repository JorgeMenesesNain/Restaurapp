import React from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";
import "./TableUsers.scss";

export function TableUsers(props) {
  const { users } = props;
  return (
    <Table className="table-users-admin">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Username</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Nombre</Table.HeaderCell>
          <Table.HeaderCell>Apellidos</Table.HeaderCell>
          <Table.HeaderCell>Activo</Table.HeaderCell>
          <Table.HeaderCell>Staff</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {map(users, (user, index) => (
          <Table.Row key={index}>
            <Table.Cell>{user.username}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell>{user.first_name}</Table.Cell>
            <Table.Cell>{user.last_name}</Table.Cell>
            <Table.Cell className="status">
              {user.is_active ? <Icon name="check" /> : <Icon name="close" />}
            </Table.Cell>
            <Table.Cell className="status">
              {user.is_staff ? <Icon name="check" /> : <Icon name="close" />}
            </Table.Cell>

            <Actions user={user} />
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

/* funcion para el aprtado para modificar o eliminar usuario */
function Actions(props) {
  const { user } = props;
  return (
    <Table.Cell textAlign="right">
      {/* boton para modificacion de usuario */}
      <Button icon onClick={() => console.log(`editar usuario ${user.email}`)}>
        {/*  icono de lapiz  */}
        <Icon name="pencil" />
      </Button>
      {/* boton para eliminacion de usuario */}
      <Button
        icon
        negative
        onClick={() => console.log(`Eliminar usuario ${user.email}`)}
      >
        {/* icono de basurero */}
        <Icon name="trash" />
      </Button>
    </Table.Cell>
  );
}
