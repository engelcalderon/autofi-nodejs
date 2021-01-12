## Installation

`yarn install`

## Usage
  * **Run development server:**  

      `yarn run dev`

  * **Run test:**
  
    `yarn run test`

**REST API: Provider Upload**
----

* **URL**

  /api/v1/providers/upload

* **Method:**
  
  `POST`

* **Data Params**

   **Required:**
    
   `file=[csv]`

   **Required:**

   `provider=[string]`

   Options:
     * Provider 1
     * Provider 2  

* **Success Response:**
  
  * **Code:** 201  
  * **Content:** `{ data: [ {_id:...}, {_id:...} ] }`
 
* **Error Response:**

  * **Code:** 400, 404, 500 
  * **Content:** `{ error: { id, status, code, title, detail } }`