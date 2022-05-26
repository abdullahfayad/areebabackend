
# Areeba Backend
This backend contains the following:
* Micro-Service for Validation of Phone Number
* Validation of Phone Number API
* ADD Customer API
* Update Customer API
* Delete Customer API
* Get All Customer API
## Installation

* Clone this repository
* Go to the project file
```bash
  cd folderName
```
* Install dependencies
```bash
  npm install
```
* Start Expo with
```bash
  npm start
```

You should have mongoDB installed on your machine, moreover you should create a database called "areeba" and inside it a collection called "customers"
## API Reference

#### Validation Phone Number

```http
  GET /number/${number}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `number`      | `string` | **Required**. Phone number to be validate |

#### ADD Customer API

```http
  POST /customer/addCustomer
```
JSON Object required to be sent inside the body with the following parameter:
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Name of the customer |
| `address`      | `string` | **Required**. Address of the customer |
| `phoneNumber`      | `number` | **Required**. Phone Number of the customer |

#### Update Customer API

```http
  PUT /customer/updateCustomer
```
JSON Object required to be sent inside the body with the following parameter:
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of the customer |
| `name`      | `string` | **Required**. Name of the customer |
| `address`      | `string` | **Required**. Address of the customer |
| `phoneNumber`      | `number` | **Required**. Phone Number of the customer |

#### Delete Customer API

```http
  DELETE /customer/deleteCustomer/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of the customer |

#### Get all customers

```http
  GET /customer/getAllCustomer
```
No Parameter Required
