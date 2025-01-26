# PayShipGo Project Showcase

This document provides an overview of my work on the PayShipGo project, along with examples of code snippets that illustrate some of the implementation techniques used. Due to client confidentiality agreements, I cannot share the full project repositories, including commit history or related backend logic.

**Project Overview**

*   **Timeline:** AUGUST 2021 - FEBRUARY 2023
*   **My Role:** Project Manager

**Summary:**

PayShipGo was a challenging yet rewarding project, encompassing the integration of various Philippine payment and shipping APIs. I led the development of robust RESTful APIs and a secure authentication system while ensuring seamless integration with third-party services.

**Key Technologies:**

*   **Backend:** NodeJS, ExpressJS
*   **Database:** PostgreSQL (AWS RDS)
*   **Cloud:** AWS (EC2, ELB, RDS)
*   **Payment Gateways:** PesoPay, Dragonpay, PayPal, GCash
*   **Shipping Services:** LBC, J&T, 2GO, Flash Express
*   **Authentication:** OAuth 2.0

**Key Accomplishments:**

*   Developed 150+ robust RESTful APIs for payments and shipping
*   Integrated multiple Philippine payment gateways (PesoPay, Dragonpay, PayPal, GCash)
*   Integrated shipping services (LBC, J&T, 2GO, Flash Express)
*   Implemented OAuth 2.0 authentication and authorization
*   Created a normalized PostgreSQL database schema (20+ tables)
*   Implemented a scalable microservices architecture
*   Achieved 85%+ code coverage for testing

**Code Snippets Overview**

The following code snippets showcase some of the implementation techniques used within the project, demonstrating how various components worked without sharing the sensitive business information of the whole application. They focus on the UI aspect of the project.

*   **Interactive UI Component:** Shows the implementation of an interactive component for filtering or sorting data.

    ```javascript
   //Example: Interactive UI Component
   import React, { useState } from 'react';

    function FilterableList({ items }) {
    const [filterText, setFilterText] = useState('');
    const filteredItems = items.filter(item =>
     item.name.toLowerCase().includes(filterText.toLowerCase())
     );

    return (
      <div>
       <input
          type="text"
          placeholder="Search by name"
          value={filterText}
         onChange={(e) => setFilterText(e.target.value)}
        />
       <ul>
         {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
      );
   }
    export default FilterableList;
    ```

*   **Dynamic Data Loading:**  Demonstrates the handling of asynchronous data loading and rendering in the user interface.

    ```javascript
    // Example: Dynamic Data Loading
   import React, { useState, useEffect } from 'react';

   function DynamicDataLoader() {
     const [data, setData] = useState(null);
     const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

     useEffect(() => {
       //Simulate API Fetching
        const fetchData = async () => {
        setLoading(true);
      try{
         const result = {
           status:200,
           data : [
             { id: 1, name: 'Item A' },
             { id: 2, name: 'Item B' },
           ]
         }
           if (result.status === 200){
           setData(result.data)
         } else {
          throw new Error('Error getting data')
         }
        } catch (err) {
         setError(err.message)
        } finally {
           setLoading(false)
       }
      }
        fetchData();
     }, []);

       if(loading){
        return <p>Loading ... </p>
        }

      if (error) {
        return <p>Error: {error}</p>
        }

    return (
      <div>
          {data && (
        <ul>
           {data.map(item => (
               <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          )}
        </div>
      );
    }
    export default DynamicDataLoader;
    ```

**Important Considerations:**

*   **Limited Scope:** This document provides code examples that are just a snippet of the UI functionality, it does not demonstrate all aspects of project development such as backend architecture or deployment.
*   **Context Omission:** Certain code snippets may lack their original context (backend or security specific components) due to privacy concerns.
*   **Focus on Implementation:** The code examples focus on implementation and how the UI works without giving sensitive details.
*   **No Full Project Replication:** These examples do not aim to replicate the full functionality of the original project, they are only for showcasing some techniques.

**Contact:**

If you have any questions about this project or my contributions, please feel free to contact me. Thank you for your understanding.
